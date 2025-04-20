
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { MapPin, Wifi, Star, Coffee, Car, DollarSign, Filter } from 'lucide-react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { hotels } from '@/data/hotels';
import { cities } from '@/data/doctors';

const Hotels = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  const [selectedCity, setSelectedCity] = useState<string>(queryParams.get('city') || '');
  const [selectedDate, setSelectedDate] = useState<string>(queryParams.get('date') || '');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000]);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('recommended');
  
  // Filter hotels based on selected criteria
  const filteredHotels = hotels.filter(hotel => {
    const matchesCity = selectedCity ? hotel.city === selectedCity : true;
    const matchesPrice = hotel.pricePerNight >= priceRange[0] && hotel.pricePerNight <= priceRange[1];
    const matchesDate = selectedDate 
      ? hotel.availableDates.some(date => new Date(date).toISOString().split('T')[0] === selectedDate) 
      : true;
    
    return matchesCity && matchesPrice && matchesDate;
  });
  
  // Sort hotels based on selected criteria
  const sortedHotels = [...filteredHotels].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.pricePerNight - b.pricePerNight;
      case 'price-high':
        return b.pricePerNight - a.pricePerNight;
      case 'rating':
        return b.rating - a.rating;
      case 'distance':
        return a.distanceFromHospital - b.distanceFromHospital;
      default:
        return 0;
    }
  });
  
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCity) params.set('city', selectedCity);
    if (selectedDate) params.set('date', selectedDate);
    
    const newSearch = params.toString();
    if (newSearch !== location.search.substring(1)) {
      navigate({ search: newSearch ? `?${newSearch}` : '' }, { replace: true });
    }
  }, [selectedCity, selectedDate, navigate, location.search]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-health-600/10 py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                Find Accommodations
              </h1>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                Discover comfortable hotels near medical facilities for a relaxing recovery
              </p>
            </div>
            
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <div className="relative flex-1">
                <input
                  type="date"
                  className="input-field"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
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
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rating</option>
                    <option value="distance">Closest to Hospital</option>
                  </select>
                </div>
                
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
                  </label>
                  <div className="mt-2 flex space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="15000"
                      step="500"
                      className="w-full"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    />
                    <input
                      type="range"
                      min="0"
                      max="15000"
                      step="500"
                      className="w-full"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6">
            {sortedHotels.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sortedHotels.map((hotel) => (
                  <Link
                    key={hotel.id}
                    to={`/hotels/${hotel.id}`}
                    className="card-hover group rounded-xl bg-white overflow-hidden shadow-md transition-all"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-3 right-3 rounded-full bg-white px-3 py-1 text-sm font-medium text-health-700 shadow-sm">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                          <span>{hotel.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-gray-900">{hotel.name}</h3>
                      
                      <div className="mt-2 flex items-center space-x-1 text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span>{hotel.city}</span>
                        <span className="mx-1 text-gray-300">•</span>
                        <span>{hotel.distanceFromHospital} km from hospital</span>
                      </div>
                      
                      <div className="mt-3 flex flex-wrap gap-2">
                        {hotel.amenities.slice(0, 3).map((amenity, index) => (
                          <span 
                            key={index} 
                            className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-800"
                          >
                            {amenity === 'Free Breakfast' && <Coffee className="mr-1 h-3 w-3" />}
                            {amenity === 'Airport Shuttle' && <Car className="mr-1 h-3 w-3" />}
                            {amenity === 'Free Wi-Fi' && <Wifi className="mr-1 h-3 w-3" />}
                            {amenity}
                          </span>
                        ))}
                        {hotel.amenities.length > 3 && (
                          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-800">
                            +{hotel.amenities.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="mt-4 flex items-center justify-between">
                        <div>
                          <span className="text-lg font-semibold text-gray-900">
                            ₹{hotel.pricePerNight}
                          </span>
                          <span className="text-sm text-gray-600">/night</span>
                        </div>
                        <span className="rounded-lg bg-health-50 px-3 py-1 text-sm text-health-700">
                          View Details
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-lg bg-white p-8 text-center shadow-sm">
                <h3 className="text-xl font-medium text-gray-900">No hotels found</h3>
                <p className="mt-2 text-gray-600">Try adjusting your filters or changing your dates</p>
                <button
                  onClick={() => {
                    setSelectedCity('');
                    setSelectedDate('');
                    setPriceRange([0, 15000]);
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

export default Hotels;
