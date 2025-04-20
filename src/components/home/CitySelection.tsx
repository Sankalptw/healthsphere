
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Building, Users } from 'lucide-react';
import { cities } from '@/data/doctors';

const cityImages = {
  Delhi: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  Mumbai: "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  Chennai: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  Bangalore: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
};

const cityInfo = {
  Delhi: "Home to AIIMS, one of Asia's premier medical institutes, and world-class cardiology centers.",
  Mumbai: "Leading in oncology and neurosurgery with state-of-the-art technology and research facilities.",
  Chennai: "Renowned for organ transplants and affordable quality healthcare with seaside recovery.",
  Bangalore: "Excellence in technological healthcare innovations and specialized surgery centers."
};

const CitySelection = () => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const cityData = [
    { name: "Delhi", icon: <Building className="h-5 w-5 text-health-600" />, specialty: "Cardiology" },
    { name: "Mumbai", icon: <Building className="h-5 w-5 text-health-600" />, specialty: "Oncology" },
    { name: "Chennai", icon: <Building className="h-5 w-5 text-health-600" />, specialty: "Transplants" },
    { name: "Bangalore", icon: <Building className="h-5 w-5 text-health-600" />, specialty: "Technology" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Choose Your Destination</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore top medical facilities in these four major Indian cities, each offering specialized care and unique healing environments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cityData.map((city, index) => (
            <Link 
              key={city.name} 
              to={`/doctors?city=${city.name}`}
              className={`relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
              onMouseEnter={() => setHoveredCity(city.name)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={cityImages[city.name as keyof typeof cityImages]} 
                  alt={city.name} 
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 mr-2 text-health-400" />
                  <h3 className="text-2xl font-bold">{city.name}</h3>
                </div>
                
                <div className="flex items-center mb-3">
                  <span className="text-xs px-2 py-1 bg-health-600/70 rounded-full">{city.specialty} Specialists</span>
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    hoveredCity === city.name ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm text-gray-200 mb-2">{cityInfo[city.name as keyof typeof cityInfo]}</p>
                  <div className="flex items-center text-health-300">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="text-xs font-semibold">Top Rated Doctors Available</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitySelection;
