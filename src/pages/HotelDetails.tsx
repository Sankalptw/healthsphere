
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Star, Wifi, Coffee, Car, IndianRupee } from 'lucide-react';
import { hotels } from '@/data/hotels';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { Card, CardContent } from "@/components/ui/card";
import PaymentModal from '@/components/payment/PaymentModal';
import { useState, useEffect } from 'react';

// Sample hotel images for gallery
const hotelGalleryImages = [
  'https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
];

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);
  const [selectedDates, setSelectedDates] = useState({ checkIn: '', checkOut: '' });
  const [hotel, setHotel] = useState(hotels.find(h => h.id === id));
  const [totalNights, setTotalNights] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (!id || !hotel) {
      navigate('/hotels');
    }
  }, [id, hotel, navigate]);

  useEffect(() => {
    if (selectedDates.checkIn && selectedDates.checkOut) {
      const checkIn = new Date(selectedDates.checkIn);
      const checkOut = new Date(selectedDates.checkOut);
      
      // Calculate the difference in days
      const diffTime = checkOut.getTime() - checkIn.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays > 0) {
        setTotalNights(diffDays);
        setTotalAmount(hotel ? hotel.pricePerNight * diffDays : 0);
      } else {
        setTotalNights(0);
        setTotalAmount(0);
      }
    } else {
      setTotalNights(0);
      setTotalAmount(0);
    }
  }, [selectedDates, hotel]);

  const handleBooking = () => {
    if (!selectedDates.checkIn || !selectedDates.checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }
    
    if (totalNights <= 0) {
      alert('Check-out date must be after check-in date');
      return;
    }
    
    setShowPayment(true);
  };

  // Sample reviews data
  const reviews = [
    { id: 1, user: "Rahul M.", rating: 4.5, comment: "Great location near the hospital. Clean rooms and helpful staff." },
    { id: 2, user: "Priya S.", rating: 5, comment: "Excellent amenities and very comfortable stay. Highly recommended!" },
    { id: 3, user: "John D.", rating: 4, comment: "Good value for money. Convenient for medical visits." }
  ];

  if (!hotel) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <p>Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid gap-8">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img 
              src={hotel.image} 
              alt={hotel.name}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              {hotelGalleryImages.map((image, i) => (
                <div key={i} className="relative h-[190px] bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={image}
                    alt={`${hotel.name} view ${i + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Hotel Info */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{hotel.name}</h1>
                <div className="flex items-center mt-2 space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{hotel.city}</span>
                  <span>•</span>
                  <span>{hotel.distanceFromHospital} km from hospital</span>
                </div>
                <div className="flex items-center mt-2">
                  <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  <span className="ml-1 font-semibold">{hotel.rating}</span>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-gray-600">{hotel.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hotel.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      {amenity === 'Free Breakfast' && <Coffee className="h-4 w-4" />}
                      {amenity === 'Airport Shuttle' && <Car className="h-4 w-4" />}
                      {amenity === 'Free Wi-Fi' && <Wifi className="h-4 w-4" />}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Reviews</h2>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{review.user}</span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                            <span className="ml-1">{review.rating}</span>
                          </div>
                        </div>
                        <p className="mt-2 text-gray-600">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <p className="text-2xl font-bold flex items-center justify-center">
                      <IndianRupee className="h-6 w-6" />
                      {hotel.pricePerNight.toLocaleString()}
                    </p>
                    <p className="text-gray-600">per night</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Check-in</label>
                      <input
                        type="date"
                        className="w-full p-2 border rounded-md"
                        value={selectedDates.checkIn}
                        onChange={(e) => setSelectedDates(prev => ({ ...prev, checkIn: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Check-out</label>
                      <input
                        type="date"
                        className="w-full p-2 border rounded-md"
                        value={selectedDates.checkOut}
                        onChange={(e) => setSelectedDates(prev => ({ ...prev, checkOut: e.target.value }))}
                      />
                    </div>
                    
                    {totalNights > 0 && (
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between mb-1">
                          <span>Price per night:</span>
                          <span>₹{hotel.pricePerNight.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between mb-1">
                          <span>Nights:</span>
                          <span>{totalNights}</span>
                        </div>
                        <div className="flex justify-between font-bold border-t pt-1 mt-1">
                          <span>Total:</span>
                          <span>₹{totalAmount.toLocaleString()}</span>
                        </div>
                      </div>
                    )}
                    
                    <button
                      onClick={handleBooking}
                      className="w-full py-3 bg-health-600 text-white rounded-lg hover:bg-health-700 transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {showPayment && (
        <PaymentModal 
          onClose={() => setShowPayment(false)} 
          amount={totalAmount} 
        />
      )}
    </div>
  );
};

export default HotelDetails;
