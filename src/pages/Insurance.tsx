
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Shield, CheckCircle, Filter } from 'lucide-react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { insurancePlans } from '@/data/insurance';
import { cities } from '@/data/doctors';

const Insurance = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  const [selectedCity, setSelectedCity] = useState<string>(queryParams.get('city') || '');
  const [coverageRange, setCoverageRange] = useState<[number, number]>([0, 1500000]);
  const [premiumRange, setPremiumRange] = useState<[number, number]>([0, 30000]);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('recommended');
  
  // Filter insurance plans based on selected criteria
  const filteredPlans = insurancePlans.filter(plan => {
    const matchesCity = selectedCity ? plan.citiesCovered.includes(selectedCity) : true;
    const matchesCoverage = plan.coverage >= coverageRange[0] && plan.coverage <= coverageRange[1];
    const matchesPremium = plan.premium >= premiumRange[0] && plan.premium <= premiumRange[1];
    
    return matchesCity && matchesCoverage && matchesPremium;
  });
  
  // Sort plans based on selected criteria
  const sortedPlans = [...filteredPlans].sort((a, b) => {
    switch (sortBy) {
      case 'premium-low':
        return a.premium - b.premium;
      case 'premium-high':
        return b.premium - a.premium;
      case 'coverage-low':
        return a.coverage - b.coverage;
      case 'coverage-high':
        return b.coverage - a.coverage;
      default:
        return 0;
    }
  });
  
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCity) params.set('city', selectedCity);
    
    const newSearch = params.toString();
    if (newSearch !== location.search.substring(1)) {
      navigate({ search: newSearch ? `?${newSearch}` : '' }, { replace: true });
    }
  }, [selectedCity, navigate, location.search]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-health-600/10 py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                Insurance Plans
              </h1>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                Compare medical insurance plans tailored for international patients seeking treatment in India
              </p>
            </div>
            
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <div className="relative flex-1">
                <select
                  className="input-field"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="">Coverage in All Cities</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
              
              <button
                className="button-secondary flex items-center justify-center space-x-2 sm:w-auto"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </button>
            </div>
            
            {showFilters && (
              <div className="mt-4 grid grid-cols-1 gap-4 rounded-xl bg-white p-4 shadow-sm sm:grid-cols-2 animate-fade-in">
                <div>
                  <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700">
                    Sort By
                  </label>
                  <select
                    id="sort-by"
                    className="input-field mt-1"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="recommended">Recommended</option>
                    <option value="premium-low">Premium: Low to High</option>
                    <option value="premium-high">Premium: High to Low</option>
                    <option value="coverage-low">Coverage: Low to High</option>
                    <option value="coverage-high">Coverage: High to Low</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Coverage Range: ₹{coverageRange[0].toLocaleString()} - ₹{coverageRange[1].toLocaleString()}
                  </label>
                  <div className="mt-2 flex space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="1500000"
                      step="100000"
                      className="w-full"
                      value={coverageRange[0]}
                      onChange={(e) => setCoverageRange([parseInt(e.target.value), coverageRange[1]])}
                    />
                    <input
                      type="range"
                      min="0"
                      max="1500000"
                      step="100000"
                      className="w-full"
                      value={coverageRange[1]}
                      onChange={(e) => setCoverageRange([coverageRange[0], parseInt(e.target.value)])}
                    />
                  </div>
                </div>
                
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Premium Range: ₹{premiumRange[0].toLocaleString()} - ₹{premiumRange[1].toLocaleString()}/year
                  </label>
                  <div className="mt-2 flex space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="30000"
                      step="1000"
                      className="w-full"
                      value={premiumRange[0]}
                      onChange={(e) => setPremiumRange([parseInt(e.target.value), premiumRange[1]])}
                    />
                    <input
                      type="range"
                      min="0"
                      max="30000"
                      step="1000"
                      className="w-full"
                      value={premiumRange[1]}
                      onChange={(e) => setPremiumRange([premiumRange[0], parseInt(e.target.value)])}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6">
            {sortedPlans.length > 0 ? (
              <div className="space-y-6">
                {sortedPlans.map((plan) => (
                  <div key={plan.id} className="card-hover rounded-xl bg-white p-6 shadow-md">
                    <div className="flex flex-col md:flex-row md:items-start">
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-center">
                          <Shield className="h-8 w-8 text-health-600" />
                          <div className="ml-3">
                            <h3 className="text-xl font-semibold text-gray-900">{plan.provider}</h3>
                            <p className="text-health-600">{plan.planName}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                          <div>
                            <p className="text-sm text-gray-600">Coverage Amount</p>
                            <p className="text-lg font-semibold text-gray-900">₹{plan.coverage.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Annual Premium</p>
                            <p className="text-lg font-semibold text-gray-900">₹{plan.premium.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Cities Covered</p>
                            <p className="text-gray-900">{plan.citiesCovered.join(', ')}</p>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <p className="text-sm font-medium text-gray-700">Key Benefits</p>
                          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {plan.benefits.slice(0, 4).map((benefit, index) => (
                              <div key={index} className="flex items-start">
                                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                                <p className="text-sm text-gray-600">{benefit}</p>
                              </div>
                            ))}
                          </div>
                          {plan.benefits.length > 4 && (
                            <p className="mt-2 text-sm text-health-600">+ {plan.benefits.length - 4} more benefits</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-6 flex flex-col space-y-3 md:mt-0 md:ml-6 md:w-48">
                        <Link
                          to={`/insurance/${plan.id}`}
                          className="button-primary w-full text-center"
                        >
                          View Plan
                        </Link>
                        <button className="button-outline w-full">
                          Compare
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg bg-white p-8 text-center shadow-sm">
                <h3 className="text-xl font-medium text-gray-900">No insurance plans found</h3>
                <p className="mt-2 text-gray-600">Try adjusting your filters</p>
                <button
                  onClick={() => {
                    setSelectedCity('');
                    setCoverageRange([0, 1500000]);
                    setPremiumRange([0, 30000]);
                  }}
                  className="mt-4 rounded-lg bg-health-600 px-4 py-2 text-sm font-medium text-white hover:bg-health-700"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Insurance;
