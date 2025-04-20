
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Calendar, MapPin, Star, Filter } from 'lucide-react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { doctors, cities, specializations } from '@/data/doctors';

const Doctors = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  const [selectedCity, setSelectedCity] = useState<string>(queryParams.get('city') || '');
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  
  // Filter doctors based on selected criteria
  const filteredDoctors = doctors.filter(doctor => {
    const matchesCity = selectedCity ? doctor.city === selectedCity : true;
    const matchesSpecialization = selectedSpecialization ? doctor.specialization === selectedSpecialization : true;
    const matchesSearch = searchTerm 
      ? doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    
    return matchesCity && matchesSpecialization && matchesSearch;
  });
  
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCity) params.set('city', selectedCity);
    if (selectedSpecialization) params.set('specialization', selectedSpecialization);
    
    const newSearch = params.toString();
    if (newSearch !== location.search.substring(1)) {
      navigate({ search: newSearch ? `?${newSearch}` : '' }, { replace: true });
    }
  }, [selectedCity, selectedSpecialization, navigate, location.search]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-health-600/10 py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                Find the Right Doctor
              </h1>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                Connect with top medical specialists in India tailored to your healthcare needs
              </p>
            </div>
            
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search by doctor name or hospital"
                  className="input-field"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
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
              <div className="mt-4 grid grid-cols-1 gap-4 rounded-xl bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-4 animate-fade-in">
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
                  <label htmlFor="specialization-filter" className="block text-sm font-medium text-gray-700">
                    Specialization
                  </label>
                  <select
                    id="specialization-filter"
                    className="input-field mt-1"
                    value={selectedSpecialization}
                    onChange={(e) => setSelectedSpecialization(e.target.value)}
                  >
                    <option value="">All Specializations</option>
                    {specializations.map((spec) => (
                      <option key={spec} value={spec}>{spec}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6">
            {filteredDoctors.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredDoctors.map((doctor) => (
                  <Link
                    key={doctor.id}
                    to={`/doctors/${doctor.id}`}
                    className="card-hover rounded-xl bg-white p-6 shadow-md transition-all"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
                        <p className="text-health-600">{doctor.specialization}</p>
                        <div className="mt-1 flex items-center">
                          <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                          <span className="ml-1 text-sm text-gray-600">{doctor.rating.toFixed(1)}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-600">{doctor.experience} years exp.</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center space-x-1 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{doctor.hospital}, {doctor.city}</span>
                    </div>
                    
                    <div className="mt-2 flex items-center space-x-1 text-sm text-gray-600">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>{doctor.availableDates.length} slots available</span>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-900">
                        ₹{doctor.consultationFee}
                      </span>
                      <span className="rounded-lg bg-health-50 px-3 py-1 text-sm text-health-700">
                        View Profile
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-lg bg-white p-8 text-center shadow-sm">
                <h3 className="text-xl font-medium text-gray-900">No doctors found</h3>
                <p className="mt-2 text-gray-600">Try adjusting your filters or search criteria</p>
                <button
                  onClick={() => {
                    setSelectedCity('');
                    setSelectedSpecialization('');
                    setSearchTerm('');
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

export default Doctors;
