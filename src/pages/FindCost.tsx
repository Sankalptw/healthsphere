
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Filter, ArrowRight, Clock, LineChart, TrendingUp } from 'lucide-react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { treatments } from '@/data/costs';
import { cities } from '@/data/doctors';

const FindCost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  const [selectedCity, setSelectedCity] = useState<string>(queryParams.get('city') || '');
  const [selectedTreatment, setSelectedTreatment] = useState<string>(queryParams.get('treatment') || '');
  const [costRange, setCostRange] = useState<[number, number]>([0, 2000000]);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('recommended');
  
  const treatmentTypes = [...new Set(treatments.map(treatment => treatment.name))];
  
  // Filter treatments based on selected criteria
  const filteredTreatments = treatments.filter(treatment => {
    const matchesCity = selectedCity ? treatment.city === selectedCity : true;
    const matchesTreatment = selectedTreatment ? treatment.name === selectedTreatment : true;
    const matchesCost = treatment.cost >= costRange[0] && treatment.cost <= costRange[1];
    
    return matchesCity && matchesTreatment && matchesCost;
  });
  
  // Sort treatments based on selected criteria
  const sortedTreatments = [...filteredTreatments].sort((a, b) => {
    switch (sortBy) {
      case 'cost-low':
        return a.cost - b.cost;
      case 'cost-high':
        return b.cost - a.cost;
      default:
        return 0;
    }
  });
  
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCity) params.set('city', selectedCity);
    if (selectedTreatment) params.set('treatment', selectedTreatment);
    
    const newSearch = params.toString();
    if (newSearch !== location.search.substring(1)) {
      navigate({ search: newSearch ? `?${newSearch}` : '' }, { replace: true });
    }
  }, [selectedCity, selectedTreatment, navigate, location.search]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-health-600/10 py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                Compare Treatment Costs
              </h1>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                Get transparent pricing information for medical procedures in India's top hospitals
              </p>
            </div>
            
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <div className="relative flex-1">
                <select
                  className="input-field"
                  value={selectedTreatment}
                  onChange={(e) => setSelectedTreatment(e.target.value)}
                >
                  <option value="">All Treatments</option>
                  {treatmentTypes.map((treatment) => (
                    <option key={treatment} value={treatment}>{treatment}</option>
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
                  <label htmlFor="city-filter" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <select
                    id="city-filter"
                    className="input-field mt-1"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    <option value="">All Cities</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                
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
                    <option value="cost-low">Cost: Low to High</option>
                    <option value="cost-high">Cost: High to Low</option>
                  </select>
                </div>
                
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Cost Range: ₹{costRange[0].toLocaleString()} - ₹{costRange[1].toLocaleString()}
                  </label>
                  <div className="mt-2 flex space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="2000000"
                      step="50000"
                      className="w-full"
                      value={costRange[0]}
                      onChange={(e) => setCostRange([parseInt(e.target.value), costRange[1]])}
                    />
                    <input
                      type="range"
                      min="0"
                      max="2000000"
                      step="50000"
                      className="w-full"
                      value={costRange[1]}
                      onChange={(e) => setCostRange([costRange[0], parseInt(e.target.value)])}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6">
            {sortedTreatments.length > 0 ? (
              <div className="space-y-6">
                {sortedTreatments.map((treatment) => (
                  <div key={treatment.id} className="card-hover rounded-xl bg-white p-6 shadow-md">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <div className="flex items-start">
                          <div>
                            <div className="flex items-center">
                              <h3 className="text-xl font-semibold text-gray-900">{treatment.name}</h3>
                              <span className="ml-3 rounded-full bg-health-50 px-2.5 py-0.5 text-xs font-medium text-health-700">
                                {treatment.city}
                              </span>
                            </div>
                            <p className="mt-1 text-health-600">{treatment.hospital}</p>
                          </div>
                        </div>
                        
                        <p className="mt-4 text-gray-600">{treatment.description}</p>
                        
                        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-5 w-5 text-gray-400" />
                            <div>
                              <p className="text-sm text-gray-600">Duration</p>
                              <p className="font-medium text-gray-900">{treatment.duration}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-5 w-5 text-gray-400" />
                            <div>
                              <p className="text-sm text-gray-600">Success Rate</p>
                              <p className="font-medium text-gray-900">{treatment.successRate}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <LineChart className="h-5 w-5 text-gray-400" />
                            <div>
                              <p className="text-sm text-gray-600">Recovery Time</p>
                              <p className="font-medium text-gray-900">{treatment.recoveryTime}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex flex-col items-end md:mt-0 md:ml-6">
                        <div className="rounded-lg bg-gray-50 p-4 text-center">
                          <p className="text-sm text-gray-600">Estimated Cost</p>
                          <p className="text-2xl font-bold text-gray-900">₹{treatment.cost.toLocaleString()}</p>
                          <p className="text-xs text-gray-500">All-inclusive package</p>
                        </div>
                        
                        <div className="mt-4 flex space-x-2">
                          <button className="flex items-center justify-center rounded-lg border border-health-600 px-4 py-2 text-sm font-medium text-health-600 transition-colors hover:bg-health-50">
                            Compare
                          </button>
                          <button className="flex items-center justify-center rounded-lg bg-health-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-health-700">
                            Enquire
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg bg-white p-8 text-center shadow-sm">
                <h3 className="text-xl font-medium text-gray-900">No treatments found</h3>
                <p className="mt-2 text-gray-600">Try adjusting your filters</p>
                <button
                  onClick={() => {
                    setSelectedCity('');
                    setSelectedTreatment('');
                    setCostRange([0, 2000000]);
                  }}
                  className="mt-4 rounded-lg bg-health-600 px-4 py-2 text-sm font-medium text-white hover:bg-health-700"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>
        
        <section className="bg-health-50/70 py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                How Cost Comparison Works
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We provide transparent, all-inclusive price estimates based on real data from our partner hospitals
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-health-100 text-health-600">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Select Treatment</h3>
                <p className="mt-2 text-gray-600">
                  Choose from a wide range of medical procedures across specialties.
                </p>
              </div>
              
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-health-100 text-health-600">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Compare Options</h3>
                <p className="mt-2 text-gray-600">
                  Review costs across different hospitals, cities, and quality parameters.
                </p>
              </div>
              
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-health-100 text-health-600">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Get Detailed Quote</h3>
                <p className="mt-2 text-gray-600">
                  Request a personalized estimate including all medical and stay expenses.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <button className="button-primary">
                Get a Personalized Cost Estimate
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FindCost;
