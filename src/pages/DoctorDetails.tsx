
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, Star, Award, Clock, Calendar, User, Phone, Mail, BookOpen, Heart, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { doctors } from '@/data/doctors';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const DoctorDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [doctor, setDoctor] = useState<typeof doctors[0] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  useEffect(() => {
    // Find the doctor with the matching ID
    const foundDoctor = doctors.find(doc => doc.id === id);
    setDoctor(foundDoctor || null);
    setLoading(false);
  }, [id]);

  const handleBookAppointment = () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Please select both date and time",
        description: "You need to choose an appointment date and time slot",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, you would save the selected date and time
    // For now, navigate to the booking form with query params
    navigate(`/book-appointment?doctorId=${id}&date=${selectedDate}&time=${selectedTime}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-12 w-48 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-36 bg-gray-200 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Doctor Not Found</h1>
            <p className="text-gray-600 mb-8">The doctor you're looking for doesn't exist or has been removed.</p>
            <Link to="/doctors" className="button-primary inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Doctors
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Format available dates for display
  const formattedDates = doctor.availableDates.map(dateString => {
    const date = new Date(dateString);
    return {
      value: dateString.split('T')[0],
      label: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
    };
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 md:py-12 animate-fade-in">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <Link 
            to="/doctors" 
            className="inline-flex items-center text-health-600 hover:text-health-700 mb-6 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Doctors
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Doctor Info Column */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="h-full w-full object-cover md:object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-flex items-center rounded-full bg-health-100 px-2.5 py-0.5 text-sm font-medium text-health-800">
                        {doctor.specialization}
                      </span>
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                        {doctor.rating.toFixed(1)}
                      </span>
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <Award className="h-4 w-4 text-gray-400 mr-1" />
                        {doctor.experience} years exp.
                      </span>
                    </div>
                    
                    <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">{doctor.name}</h1>
                    
                    <div className="flex items-center mt-2 text-gray-600">
                      <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                      <span>{doctor.hospital}, {doctor.city}</span>
                    </div>
                    
                    <div className="mt-4">
                      <h3 className="font-medium text-gray-900">About</h3>
                      <p className="mt-2 text-gray-600">{doctor.description}</p>
                    </div>
                    
                    <div className="mt-6 flex items-center">
                      <span className="text-2xl font-bold text-gray-900">₹{doctor.consultationFee}</span>
                      <span className="ml-2 text-sm text-gray-500">Consultation Fee</span>
                    </div>
                  </div>
                </div>
                
                {/* Additional Information */}
                <div className="border-t border-gray-200 px-6 py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {doctor.qualifications && (
                      <div>
                        <h3 className="font-medium text-gray-900 flex items-center">
                          <BookOpen className="h-4 w-4 text-health-600 mr-2" />
                          Qualifications
                        </h3>
                        <ul className="mt-2 text-gray-600 list-disc list-inside ml-4">
                          {doctor.qualifications.map((qual, index) => (
                            <li key={index}>{qual}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {doctor.languages && (
                      <div>
                        <h3 className="font-medium text-gray-900 flex items-center">
                          <User className="h-4 w-4 text-health-600 mr-2" />
                          Languages
                        </h3>
                        <p className="mt-2 text-gray-600">{doctor.languages.join(', ')}</p>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Hospital Information */}
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="font-medium text-gray-900 flex items-center">
                    <Heart className="h-4 w-4 text-health-600 mr-2" />
                    Hospital Details
                  </h3>
                  
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm text-gray-500">Hospital</h4>
                      <p className="font-medium text-gray-900">{doctor.hospital}</p>
                    </div>
                    
                    {doctor.hospitalAddress && (
                      <div>
                        <h4 className="text-sm text-gray-500">Address</h4>
                        <p className="font-medium text-gray-900">{doctor.hospitalAddress}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Booking Column */}
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Book an Appointment</h2>
                  
                  {/* Date Selection */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Select Date
                    </label>
                    <select 
                      className="select-field w-full" 
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    >
                      <option value="">Choose a date</option>
                      {formattedDates.map((date, index) => (
                        <option key={index} value={date.value}>{date.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Time Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Select Time
                    </label>
                    <select 
                      className="select-field w-full" 
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      disabled={!selectedDate}
                    >
                      <option value="">Choose a time</option>
                      {doctor.availableSlots?.map((slot, index) => (
                        <option key={index} value={slot}>{slot}</option>
                      ))}
                    </select>
                    {!selectedDate && (
                      <p className="text-sm text-gray-500 mt-1">Please select a date first</p>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full bg-health-600 hover:bg-health-700 transition-colors"
                    onClick={handleBookAppointment}
                  >
                    Book Appointment
                  </Button>
                  
                  <div className="mt-4 text-center text-sm text-gray-500">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <Clock className="h-4 w-4" />
                      <span>Consultation: {doctor.availableSlots?.[0]?.split('-')[0]} - {doctor.availableSlots?.[doctor.availableSlots.length - 1]?.split('-')[1]}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{doctor.availableDates.length} available dates</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 border-t border-gray-200 pt-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Need assistance?</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Phone className="h-4 w-4 text-health-600 mr-2" />
                      <span>+91-98765-43210</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="h-4 w-4 text-health-600 mr-2" />
                      <span>support@healthsphere.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorDetails;
