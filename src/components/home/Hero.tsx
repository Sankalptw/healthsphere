
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, Award, Globe } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [animateItems, setAnimateItems] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setAnimateItems(true);
  }, []);

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-b from-health-50/50 to-white">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-health-300 animate-pulse-slow blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-health-200 animate-pulse-slow blur-3xl"></div>
      </div>
      
      <div className="container mx-auto flex h-full px-6 pt-12 pb-24 md:pt-24 md:pb-32">
        <div className="flex w-full flex-col items-center justify-between lg:flex-row">
          <div className="w-full max-w-2xl text-center lg:text-left">
            <h1 className={`text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl transition-all duration-700 ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="block">Your Global</span>
              <span className="block mt-1 text-health-600">Destination for</span>
              <span className="block mt-1">Wellness</span>
            </h1>
            <p className={`mt-6 text-lg leading-relaxed text-gray-600 transition-all duration-700 delay-300 ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Bringing World-Class Care Closer to You. Experience cutting-edge medical treatments in India's premier healthcare facilities at a fraction of the cost.
            </p>
            
            <div className="mt-10 flex flex-col items-center space-y-4 mx-auto w-full max-w-xl">
              <div className={`relative w-full max-w-md transition-all duration-700 delay-500 ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  className="w-full rounded-full border-2 border-health-100 bg-white py-3 pl-10 pr-4 text-gray-900 shadow-md focus:border-health-300 focus:outline-none focus:ring-1 focus:ring-health-300 transition-all"
                  placeholder="Search for doctors, hospitals, treatments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className={`flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 w-full max-w-md transition-all duration-700 delay-700 ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Link
                  to="/doctors"
                  className="button-primary flex-1 text-center hover:scale-105 transition-transform duration-300"
                >
                  Book an Appointment
                </Link>
                <Link
                  to="/find-cost"
                  className="button-outline flex-1 text-center hover:scale-105 transition-transform duration-300"
                >
                  Compare Costs
                </Link>
              </div>
            </div>
          </div>
          
          <div className={`mt-12 flex w-full justify-center lg:mt-0 lg:w-1/2 transition-all duration-1000 delay-300 ${animateItems ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative h-[400px] w-[400px] rounded-3xl">
              <div className="glass-card absolute h-full w-full overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                  alt="Medical professionals in India"
                  className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className={`absolute -right-4 -top-4 z-10 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur transition-all duration-700 delay-700 hover:shadow-xl ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">JCI Accredited</p>
                    <p className="text-xs text-gray-500">International Standards</p>
                  </div>
                </div>
              </div>
              
              <div className={`absolute -bottom-4 -left-4 z-10 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur transition-all duration-700 delay-900 hover:shadow-xl ${animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Save up to 80%</p>
                    <p className="text-xs text-gray-500">On medical treatments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white"></div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className={`animate-bounce text-health-500 transition-all duration-700 delay-1000 ${animateItems ? 'opacity-100' : 'opacity-0'}`}>
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
