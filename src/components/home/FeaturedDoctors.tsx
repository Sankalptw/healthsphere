
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Calendar, Clock, MapPin } from 'lucide-react';
import { doctors } from '@/data/doctors';

const FeaturedDoctors = () => {
  // Select top three doctors for the feature section
  const featuredDoctors = doctors.slice(0, 3);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Get to know our Doctors</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our team of specialized healthcare professionals dedicated to providing world-class medical care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDoctors.map((doctor, index) => (
            <Link 
              key={doctor.id} 
              to={`/doctors/${doctor.id}`}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:shadow-xl ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 transition-opacity group-hover:opacity-90"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-2 flex items-center">
                  <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                  <span className="ml-1 text-sm">{doctor.rating.toFixed(1)}</span>
                  <span className="ml-2 rounded-full bg-health-600/90 px-2 py-0.5 text-xs font-medium">
                    {doctor.specialization}
                  </span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-health-300 transition-colors">{doctor.name}</h3>
                <p className="text-sm text-gray-200">{doctor.hospital}, {doctor.city}</p>
                
                <div className={`mt-3 overflow-hidden transition-all duration-300 ease-in-out ${
                  hoveredIndex === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="flex items-center text-sm text-gray-200 mb-2">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{doctor.experience} years experience</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-200 mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{doctor.hospital}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-200 mb-3">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{doctor.availableDates.length} available slots</span>
                  </div>
                  <span className="mt-2 inline-block text-sm font-medium text-health-400 group-hover:text-health-300 transition-colors">
                    Book an appointment →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className={`mt-12 text-center transition-all duration-700 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link 
            to="/doctors" 
            className="button-primary inline-flex items-center hover:scale-105 transition-transform duration-300"
          >
            View All Doctors
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDoctors;
