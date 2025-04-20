import React, { useState } from 'react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Airplay, Calendar, Users, Search, ArrowRight, Clock, IndianRupee } from 'lucide-react';
import PaymentModal from '@/components/payment/PaymentModal';

// Sample flight data
const flights = [
  {
    id: 'AI101',
    airline: 'Air India',
    logo: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    from: 'New York',
    to: 'Delhi',
    departureTime: '09:00 AM',
    arrivalTime: '10:30 PM',
    date: '2024-07-15',
    duration: '14h 30m',
    price: 75000,
    stops: 1,
    stopCity: 'Dubai'
  },
  {
    id: 'EK203',
    airline: 'Emirates',
    logo: 'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    from: 'London',
    to: 'Mumbai',
    departureTime: '03:45 PM',
    arrivalTime: '05:30 AM',
    date: '2024-07-20',
    duration: '9h 45m',
    price: 85000,
    stops: 0,
    stopCity: null
  },
  {
    id: 'SQ306',
    airline: 'Singapore Airlines',
    logo: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    from: 'Singapore',
    to: 'Chennai',
    departureTime: '11:30 PM',
    arrivalTime: '02:15 AM',
    date: '2024-07-18',
    duration: '4h 45m',
    price: 45000,
    stops: 0,
    stopCity: null
  },
  {
    id: 'LH755',
    airline: 'Lufthansa',
    logo: 'https://images.unsplash.com/photo-1497604401993-f2e922074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    from: 'Frankfurt',
    to: 'Delhi',
    departureTime: '10:15 AM',
    arrivalTime: '11:45 PM',
    date: '2024-07-22',
    duration: '8h 30m',
    price: 80000,
    stops: 0,
    stopCity: null
  },
  {
    id: 'QR518',
    airline: 'Qatar Airways',
    logo: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    from: 'Doha',
    to: 'Bengaluru',
    departureTime: '02:30 AM',
    arrivalTime: '09:45 AM',
    date: '2024-07-25',
    duration: '4h 15m',
    price: 60000,
    stops: 0,
    stopCity: null
  }
];

const Flights = () => {
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    passengers: 1
  });
  
  const [selectedFlight, setSelectedFlight] = useState<any>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [flightSearched, setFlightSearched] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFlightSearched(true);
    // In a real app, this would trigger an API call to search for flights
  };
  
  const handleInputChange = (field: string, value: any) => {
    setSearchParams(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleBookFlight = (flight: any) => {
    setSelectedFlight(flight);
    setShowPayment(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">International Flights</h1>
            <p className="text-gray-600">Find and book flights for your medical treatment in India</p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <Tabs defaultValue="roundtrip">
                <TabsList className="mb-6">
                  <TabsTrigger value="roundtrip">Round Trip</TabsTrigger>
                  <TabsTrigger value="oneway">One Way</TabsTrigger>
                  <TabsTrigger value="multicity">Multi-City</TabsTrigger>
                </TabsList>
                
                <form onSubmit={handleSearch}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                    <div>
                      <Label htmlFor="from">From</Label>
                      <div className="relative mt-1">
                        <Input 
                          id="from" 
                          placeholder="City or Airport" 
                          value={searchParams.from}
                          onChange={(e) => handleInputChange('from', e.target.value)}
                          className="pl-10"
                          required
                        />
                        <Airplay className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="to">To</Label>
                      <div className="relative mt-1">
                        <Input 
                          id="to" 
                          placeholder="City or Airport" 
                          value={searchParams.to}
                          onChange={(e) => handleInputChange('to', e.target.value)}
                          className="pl-10"
                          required
                        />
                        <Airplay className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="departureDate">Departure Date</Label>
                      <div className="relative mt-1">
                        <Input 
                          id="departureDate" 
                          type="date" 
                          value={searchParams.departureDate}
                          onChange={(e) => handleInputChange('departureDate', e.target.value)}
                          className="pl-10"
                          required
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="returnDate">Return Date</Label>
                      <div className="relative mt-1">
                        <Input 
                          id="returnDate" 
                          type="date" 
                          value={searchParams.returnDate}
                          onChange={(e) => handleInputChange('returnDate', e.target.value)}
                          className="pl-10"
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="passengers">Passengers</Label>
                      <div className="relative mt-1">
                        <Input 
                          id="passengers" 
                          type="number" 
                          min={1}
                          max={10}
                          value={searchParams.passengers}
                          onChange={(e) => handleInputChange('passengers', parseInt(e.target.value))}
                          className="pl-10"
                          required
                        />
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full md:w-auto">
                    <Search className="mr-2 h-4 w-4" />
                    Search Flights
                  </Button>
                </form>
              </Tabs>
            </CardContent>
          </Card>
          
          {flightSearched && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Flights</h2>
                {flights.map((flight) => (
                  <Card key={flight.id} className="mb-4 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <div className="flex items-center">
                          <img 
                            src={flight.logo} 
                            alt={flight.airline} 
                            className="w-10 h-10 object-cover rounded-full mr-3"
                          />
                          <div>
                            <h3 className="font-medium text-gray-900">{flight.airline}</h3>
                            <p className="text-sm text-gray-500">Flight {flight.id}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-center">
                            <p className="font-semibold text-gray-900">{flight.departureTime}</p>
                            <p className="text-sm text-gray-500">{flight.from}</p>
                          </div>
                          
                          <div className="mx-2 flex flex-col items-center">
                            <div className="text-xs text-gray-500 mb-1">{flight.duration}</div>
                            <div className="relative w-24 h-px bg-gray-300">
                              <div className="absolute -top-1 right-0 w-2 h-2 bg-gray-300 rounded-full"></div>
                              <div className="absolute -top-1 left-0 w-2 h-2 bg-gray-300 rounded-full"></div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {flight.stops === 0 ? 'Non-stop' : `${flight.stops} Stop`}
                            </div>
                          </div>
                          
                          <div className="text-center">
                            <p className="font-semibold text-gray-900">{flight.arrivalTime}</p>
                            <p className="text-sm text-gray-500">{flight.to}</p>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="flex items-center justify-center">
                            <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-700">
                              {new Date(flight.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                            </span>
                          </div>
                          {flight.stopCity && (
                            <p className="text-xs text-gray-500 mt-1">Via {flight.stopCity}</p>
                          )}
                        </div>
                        
                        <div className="flex flex-col md:items-end">
                          <p className="font-bold text-xl text-gray-900 flex items-center">
                            <IndianRupee className="h-4 w-4" />
                            {flight.price.toLocaleString()}
                          </p>
                          <p className="text-xs text-gray-500 mb-2">per person</p>
                          <Button 
                            onClick={() => handleBookFlight(flight)}
                            className="w-full md:w-auto"
                          >
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          {!flightSearched && (
            <div className="text-center py-12">
              <Airplay className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">Search for Flights</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Enter your travel details above to find available flights to your medical treatment destination in India.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      
      {selectedFlight && showPayment && (
        <PaymentModal 
          onClose={() => setShowPayment(false)} 
          amount={selectedFlight.price * searchParams.passengers} 
        />
      )}
    </div>
  );
};

export default Flights;
