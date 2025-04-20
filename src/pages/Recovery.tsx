import React, { useState } from 'react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sun, Leaf, Mountain } from 'lucide-react';
import PaymentModal from '@/components/payment/PaymentModal';

// Sample recovery centers data
const recoveryCenters = [
  {
    id: 'ananda-himalayas',
    name: 'Ananda in the Himalayas',
    type: 'Yoga & Ayurveda',
    city: 'Rishikesh',
    state: 'Uttarakhand',
    treatments: ['Yoga Therapy', 'Meditation', 'Ayurvedic Treatments', 'Naturopathy'],
    pricePerDay: 18000,
    description: 'A luxury wellness retreat set in the Himalayan foothills, offering holistic Ayurvedic and Yoga programs for post-surgery recovery and rejuvenation.',
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    icon: Sun
  },
  {
    id: 'soukya-bangalore',
    name: 'Soukya International Holistic Centre',
    type: 'Ayurveda & Naturopathy',
    city: 'Bangalore',
    state: 'Karnataka',
    treatments: ['Panchakarma', 'Naturopathy', 'Homeopathy', 'Acupuncture'],
    pricePerDay: 15000,
    description: 'Integrative medical facility combining traditional systems like Ayurveda with modern medicine for comprehensive post-treatment recovery.',
    image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    icon: Sun
  },
  {
    id: 'niraamaya-kovalam',
    name: 'Niraamaya Retreats',
    type: 'Spa & Wellness',
    city: 'Kovalam',
    state: 'Kerala',
    treatments: ['Ayurvedic Rejuvenation', 'Stress Management', 'Weight Management'],
    pricePerDay: 22000,
    description: 'Luxury wellness retreat on the Arabian Sea offering authentic Ayurvedic treatments and therapeutic massages ideal for post-surgical recovery.',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    icon: Leaf
  },
  {
    id: 'kairali-palakkad',
    name: 'Kairali Ayurvedic Healing Village',
    type: 'Ayurveda',
    city: 'Palakkad',
    state: 'Kerala',
    treatments: ['Panchakarma', 'Detoxification', 'Rejuvenation Therapy', 'Stress Relief'],
    pricePerDay: 12000,
    description: 'Award-winning Ayurvedic wellness center set in a natural forest that specializes in traditional healing for post-operative recovery.',
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    icon: Leaf
  },
  {
    id: 'atmantan-pune',
    name: 'Atmantan Wellness Centre',
    type: 'Integrated Wellness',
    city: 'Pune',
    state: 'Maharashtra',
    treatments: ['Physiotherapy', 'Pranic Healing', 'Nutrition Therapy', 'Fitness'],
    pricePerDay: 20000,
    description: 'Modern wellness resort combining traditional and contemporary healing techniques for comprehensive post-treatment recovery programs.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    icon: Mountain
  },
  {
    id: 'naad-wellness-delhi',
    name: 'Naad Wellness',
    type: 'Integrated Medicine',
    city: 'Delhi',
    state: 'NCR',
    treatments: ['Ayurveda', 'Naturopathy', 'Yoga', 'Physiotherapy'],
    pricePerDay: 16000,
    description: 'Integrated wellness center near Delhi offering personalized recovery programs combining Ayurveda, Yoga, and Naturopathy.',
    image: 'https://images.unsplash.com/photo-1592124549776-a7f0cc973b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    icon: Sun
  },
  {
    id: 'somatheeram-kerala',
    name: 'Somatheeram Ayurveda Village',
    type: 'Ayurveda',
    city: 'Trivandrum',
    state: 'Kerala',
    treatments: ['Panchakarma', 'Spine & Neck Care', 'Slimming Programs', 'Anti-Aging'],
    pricePerDay: 14000,
    description: 'Award-winning Ayurvedic resort specializing in traditional Kerala treatments and therapeutic programs for recovery and rehabilitation.',
    image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    icon: Sun
  },
  {
    id: 'vana-dehradun',
    name: 'Vana Wellness Retreat',
    type: 'Wellness Retreat',
    city: 'Dehradun',
    state: 'Uttarakhand',
    treatments: ['Ayurveda', 'Traditional Chinese Medicine', 'Tibetan Healing', 'Yoga'],
    pricePerDay: 25000,
    description: 'Sophisticated wellness sanctuary offering personalized retreat programs incorporating ancient healing traditions for recovery and rejuvenation.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    icon: Mountain
  },
  {
    id: 'carnoustie-kerala',
    name: 'Carnoustie Ayurveda & Wellness Resort',
    type: 'Luxury Wellness',
    city: 'Alappuzha',
    state: 'Kerala',
    treatments: ['Ayurveda', 'Naturopathy', 'Yoga', 'Meditation'],
    pricePerDay: 23000,
    description: 'Luxury wellness resort on the backwaters of Kerala offering authentic Ayurvedic treatments and holistic recovery programs.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    icon: Mountain
  },
  {
    id: 'shreyas-retreat-bangalore',
    name: 'Shreyas Yoga Retreat',
    type: 'Yoga Retreat',
    city: 'Bangalore',
    state: 'Karnataka',
    treatments: ['Yoga', 'Meditation', 'Ayurveda', 'Naturopathy'],
    pricePerDay: 19000,
    description: 'Boutique yoga retreat offering personalized programs combining therapeutic yoga, meditation, and Ayurveda for post-treatment recovery.',
    image: 'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    icon: Sun
  }
];

const Recovery = () => {
  const [selectedCenter, setSelectedCenter] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [days, setDays] = useState(7);
  const [showPayment, setShowPayment] = useState(false);
  
  const handleViewDetails = (center: any) => {
    setSelectedCenter(center);
    setShowDetails(true);
    window.scrollTo(0, 0);
  };
  
  const handleBookNow = () => {
    setShowPayment(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Recovery & Wellness</h1>
            <p className="text-gray-600">Discover specialized centers for post-treatment recovery and rejuvenation</p>
          </div>
          
          {showDetails && selectedCenter ? (
            <div>
              <button 
                onClick={() => setShowDetails(false)}
                className="flex items-center text-health-600 hover:text-health-700 mb-6"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to All Centers
              </button>
              
              <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                  <div className="rounded-xl overflow-hidden h-[400px] mb-6">
                    <img 
                      src={selectedCenter.image} 
                      alt={selectedCenter.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 mb-6">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="rounded-lg overflow-hidden h-24">
                        <img 
                          src={selectedCenter.image} 
                          alt={`${selectedCenter.name} view ${i+1}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-xl">About {selectedCenter.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{selectedCenter.description}</p>
                      
                      <div className="mt-6">
                        <h3 className="font-semibold text-gray-800 mb-3">Available Treatments</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {selectedCenter.treatments.map((treatment: string, index: number) => (
                            <div key={index} className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-health-500 mr-2"></div>
                              <span>{treatment}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="font-semibold text-gray-800 mb-3">Facilities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-health-500 mr-2"></div>
                            <span>Swimming Pool</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-health-500 mr-2"></div>
                            <span>Meditation Hall</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-health-500 mr-2"></div>
                            <span>Yoga Studio</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-health-500 mr-2"></div>
                            <span>Organic Restaurant</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-health-500 mr-2"></div>
                            <span>Treatment Rooms</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-health-500 mr-2"></div>
                            <span>Herbal Garden</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Location</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-lg overflow-hidden h-64 bg-gray-200">
                        {/* Placeholder for map */}
                        <div className="w-full h-full flex items-center justify-center">
                          <p className="text-gray-500">Map View</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-gray-700">
                          <strong>Address:</strong> {selectedCenter.name}, {selectedCenter.city}, {selectedCenter.state}, India
                        </p>
                        <p className="text-gray-700 mt-2">
                          <strong>Contact:</strong> +91 98765 43210
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card className="sticky top-20">
                    <CardHeader>
                      <CardTitle className="text-xl">{selectedCenter.name}</CardTitle>
                      <CardDescription>{selectedCenter.type} in {selectedCenter.city}, {selectedCenter.state}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-4">
                        <p className="text-gray-700">Price per day:</p>
                        <p className="text-xl font-bold text-gray-900">₹{selectedCenter.pricePerDay.toLocaleString()}</p>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="days" className="block text-sm font-medium text-gray-700 mb-1">
                          Number of days:
                        </label>
                        <div className="flex items-center">
                          <button 
                            type="button"
                            className="border rounded-l-md px-3 py-2 bg-gray-100 hover:bg-gray-200"
                            onClick={() => setDays(days > 1 ? days - 1 : 1)}
                          >
                            -
                          </button>
                          <input 
                            type="number" 
                            id="days"
                            min="1"
                            className="border-y px-3 py-2 w-16 text-center" 
                            value={days}
                            onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
                          />
                          <button 
                            type="button"
                            className="border rounded-r-md px-3 py-2 bg-gray-100 hover:bg-gray-200"
                            onClick={() => setDays(days + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-gray-700">Price for {days} days:</p>
                          <p className="font-semibold text-gray-900">₹{(selectedCenter.pricePerDay * days).toLocaleString()}</p>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-gray-700">Taxes & fees:</p>
                          <p className="font-semibold text-gray-900">₹{Math.round(selectedCenter.pricePerDay * days * 0.18).toLocaleString()}</p>
                        </div>
                        
                        <div className="border-t pt-4 mb-6">
                          <div className="flex justify-between items-center">
                            <p className="text-gray-900 font-bold">Total Amount:</p>
                            <p className="text-xl font-bold text-gray-900">₹{Math.round(selectedCenter.pricePerDay * days * 1.18).toLocaleString()}</p>
                          </div>
                        </div>
                        
                        <Button 
                          className="w-full" 
                          size="lg"
                          onClick={handleBookNow}
                        >
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Tabs defaultValue="all">
                <TabsList className="mb-8">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="ayurveda">Ayurveda</TabsTrigger>
                  <TabsTrigger value="yoga">Yoga</TabsTrigger>
                  <TabsTrigger value="naturopathy">Naturopathy</TabsTrigger>
                  <TabsTrigger value="spa">Wellness Spa</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recoveryCenters.map((center) => (
                      <Card key={center.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative h-48">
                          <img 
                            src={center.image} 
                            alt={center.name} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-white/90 rounded-full p-2">
                            <center.icon className="h-5 w-5 text-health-600" />
                          </div>
                        </div>
                        <CardContent className="p-5">
                          <h3 className="font-semibold text-lg text-gray-900 mb-1">{center.name}</h3>
                          <p className="text-sm text-gray-500 mb-3">{center.type} • {center.city}, {center.state}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {center.treatments.slice(0, 3).map((treatment, index) => (
                              <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                                {treatment}
                              </span>
                            ))}
                            {center.treatments.length > 3 && (
                              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                                +{center.treatments.length - 3} more
                              </span>
                            )}
                          </div>
                          
                          <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                            {center.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xs text-gray-500">Starting from</p>
                              <p className="font-bold text-health-600">₹{center.pricePerDay.toLocaleString()}/day</p>
                            </div>
                            <Button 
                              variant="outline" 
                              onClick={() => handleViewDetails(center)}
                            >
                              View Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="ayurveda" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recoveryCenters
                      .filter(center => 
                        center.type.toLowerCase().includes('ayurveda') || 
                        center.treatments.some(t => t.toLowerCase().includes('ayurved'))
                      )
                      .map((center) => (
                        <Card key={center.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="relative h-48">
                            <img 
                              src={center.image} 
                              alt={center.name} 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-3 left-3 bg-white/90 rounded-full p-2">
                              <center.icon className="h-5 w-5 text-health-600" />
                            </div>
                          </div>
                          <CardContent className="p-5">
                            <h3 className="font-semibold text-lg text-gray-900 mb-1">{center.name}</h3>
                            <p className="text-sm text-gray-500 mb-3">{center.type} • {center.city}, {center.state}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {center.treatments.slice(0, 3).map((treatment, index) => (
                                <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                                  {treatment}
                                </span>
                              ))}
                              {center.treatments.length > 3 && (
                                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                                  +{center.treatments.length - 3} more
                                </span>
                              )}
                            </div>
                            
                            <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                              {center.description}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-xs text-gray-500">Starting from</p>
                                <p className="font-bold text-health-600">₹{center.pricePerDay.toLocaleString()}/day</p>
                              </div>
                              <Button 
                                variant="outline" 
                                onClick={() => handleViewDetails(center)}
                              >
                                View Details
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    }
                  </div>
                </TabsContent>
                
                <TabsContent value="yoga" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recoveryCenters
                      .filter(center => 
                        center.type.toLowerCase().includes('yoga') || 
                        center.treatments.some(t => t.toLowerCase().includes('yoga'))
                      )
                      .map((center) => (
                        <Card key={center.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="relative h-48">
                            <img 
                              src={center.image} 
                              alt={center.name} 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-3 left-3 bg-white/90 rounded-full p-2">
                              <center.icon className="h-5 w-5 text-health-600" />
                            </div>
                          </div>
                          <CardContent className="p-5">
                            <h3 className="font-semibold text-lg text-gray-900 mb-1">{center.name}</h3>
                            <p className="text-sm text-gray-500 mb-3">{center.type} • {center.city}, {center.state}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {center.treatments.slice(0, 3).map((treatment, index) => (
                                <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                                  {treatment}
                                </span>
                              ))}
                              {center.treatments.length > 3 && (
                                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                                  +{center.treatments.length - 3} more
                                </span>
                              )}
                            </div>
                            
                            <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                              {center.description}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-xs text-gray-500">Starting from</p>
                                <p className="font-bold text-health-600">₹{center.pricePerDay.toLocaleString()}/day</p>
                              </div>
                              <Button 
                                variant="outline" 
                                onClick={() => handleViewDetails(center)}
                              >
                                View Details
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    }
                  </div>
                </TabsContent>
                
                <TabsContent value="naturopathy" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recoveryCenters
                      .filter(center => 
                        center.type.toLowerCase().includes('naturopathy') || 
                        center.treatments.some(t => t.toLowerCase().includes('naturopathy'))
                      )
                      .map((center) => (
                        <Card key={center.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="relative h-48">
                            <img 
                              src={center.image} 
                              alt={center.name} 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-3 left-3 bg-white/90 rounded-full p-2">
                              <center.icon className="h-5 w-5 text-health-600" />
                            </div>
                          </div>
                          <CardContent className="p-5">
                            <h3 className="font-semibold text-lg text-gray-900 mb-1">{center.name}</h3>
                            <p className="text-sm text-gray-500 mb-3">{center.type} • {center.city}, {center.state}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {center.treatments.slice(0, 3).map((treatment, index) => (
                                <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                                  {treatment}
                                </span>
                              ))}
                              {center.treatments.length > 3 && (
                                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                                  +{center.treatments.length - 3} more
                                </span>
                              )}
                            </div>
                            
                            <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                              {center.description}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-xs text-gray-500">Starting from</p>
                                <p className="font-bold text-health-600">₹{center.pricePerDay.toLocaleString()}/day</p>
                              </div>
                              <Button 
                                variant="outline" 
                                onClick={() => handleViewDetails(center)}
                              >
                                View Details
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    }
                  </div>
                </TabsContent>
                
                <TabsContent value="spa" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recoveryCenters
                      .filter(center => 
                        center.type.toLowerCase().includes('spa') || 
                        center.treatments.some(t => t.toLowerCase().includes('spa'))
                      )
                      .map((center) => (
                        <Card key={center.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="relative h-48">
                            <img 
                              src={center.image} 
                              alt={center.name} 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-3 left-3 bg-white/90 rounded-full p-2">
                              <center.icon className="h-5 w-5 text-health-600" />
                            </div>
                          </div>
                          <CardContent className="p-5">
                            <h3 className="font-semibold text-lg text-gray-900 mb-1">{center.name}</h3>
                            <p className="text-sm text-gray-500 mb-3">{center.type} • {center.city}, {center.state}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {center.treatments.slice(0, 3).map((treatment, index) => (
                                <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                                  {treatment}
                                </span>
                              ))}
                              {center.treatments.length > 3 && (
                                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                                  +{center.treatments.length - 3} more
                                </span>
                              )}
                            </div>
                            
                            <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                              {center.description}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-xs text-gray-500">Starting from</p>
                                <p className="font-bold text-health-600">₹{center.pricePerDay.toLocaleString()}/day</p>
                              </div>
                              <Button 
                                variant="outline" 
                                onClick={() => handleViewDetails(center)}
                              >
                                View Details
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    }
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </main>
      <Footer />
      
      {showPayment && selectedCenter && (
        <PaymentModal 
          onClose={() => setShowPayment(false)} 
          amount={Math.round(selectedCenter.pricePerDay * days * 1.18)} 
        />
      )}
    </div>
  );
};

export default Recovery;
