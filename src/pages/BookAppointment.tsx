
import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Upload, Calendar, Clock, ChevronRight } from 'lucide-react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { doctors } from '@/data/doctors';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const BookAppointment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryParams = new URLSearchParams(location.search);
  const doctorId = queryParams.get('doctorId') || '';
  const selectedDate = queryParams.get('date') || '';
  const selectedTime = queryParams.get('time') || '';
  
  const doctor = doctors.find(doc => doc.id === doctorId);
  
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: 'Male',
    nationality: '',
    passportNumber: '',
    email: '',
    phone: '',
    treatmentType: '',
    illnessDescription: '',
    preferredHospital: doctor?.hospital || '',
    preferredDate: selectedDate,
    preferredTime: selectedTime,
    stayDuration: '',
    hasMedicalReports: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Application submitted successfully!",
        description: "You can check the status in your profile.",
      });
      
      setIsSubmitting(false);
      
      // Redirect to status page or home
      navigate('/status');
    }, 1500);
  };
  
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
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 md:py-12 animate-fade-in">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <Link 
            to={`/doctors/${doctorId}`} 
            className="inline-flex items-center text-health-600 hover:text-health-700 mb-6 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Doctor Profile
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Form Column */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Book Appointment with {doctor.name}</h1>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-4">
                      <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="fullName">Full Name*</Label>
                          <Input 
                            id="fullName" 
                            name="fullName" 
                            value={formData.fullName} 
                            onChange={handleChange} 
                            className="mt-1" 
                            required 
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="age">Age*</Label>
                          <Input 
                            id="age" 
                            name="age" 
                            type="number" 
                            value={formData.age} 
                            onChange={handleChange} 
                            className="mt-1" 
                            required 
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="gender">Gender*</Label>
                          <select 
                            id="gender" 
                            name="gender" 
                            value={formData.gender} 
                            onChange={handleChange} 
                            className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
                            required
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <Label htmlFor="nationality">Nationality*</Label>
                          <Input 
                            id="nationality" 
                            name="nationality" 
                            value={formData.nationality} 
                            onChange={handleChange} 
                            className="mt-1" 
                            required 
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="passportNumber">Passport Number*</Label>
                          <Input 
                            id="passportNumber" 
                            name="passportNumber" 
                            value={formData.passportNumber} 
                            onChange={handleChange} 
                            className="mt-1" 
                            required 
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email*</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className="mt-1" 
                            required 
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="phone">Phone Number*</Label>
                          <Input 
                            id="phone" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            className="mt-1" 
                            required 
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h2 className="text-lg font-semibold text-gray-900 mb-4">Medical Information</h2>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="treatmentType">Type of Treatment Needed*</Label>
                          <Input 
                            id="treatmentType" 
                            name="treatmentType" 
                            value={formData.treatmentType} 
                            onChange={handleChange} 
                            className="mt-1" 
                            required 
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="illnessDescription">Description of Illness*</Label>
                          <Textarea 
                            id="illnessDescription" 
                            name="illnessDescription" 
                            value={formData.illnessDescription} 
                            onChange={handleChange} 
                            className="mt-1" 
                            rows={4}
                            required 
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="preferredHospital">Preferred Hospital*</Label>
                          <Input 
                            id="preferredHospital" 
                            name="preferredHospital" 
                            value={formData.preferredHospital} 
                            onChange={handleChange} 
                            className="mt-1" 
                            required 
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="preferredDate">Preferred Date of Visit*</Label>
                            <Input 
                              id="preferredDate" 
                              name="preferredDate" 
                              type="date" 
                              value={formData.preferredDate} 
                              onChange={handleChange} 
                              className="mt-1" 
                              required 
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="preferredTime">Preferred Time*</Label>
                            <Input 
                              id="preferredTime" 
                              name="preferredTime" 
                              value={formData.preferredTime} 
                              onChange={handleChange} 
                              className="mt-1" 
                              required 
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="stayDuration">Duration of Stay (in days)*</Label>
                          <Input 
                            id="stayDuration" 
                            name="stayDuration" 
                            type="number" 
                            value={formData.stayDuration} 
                            onChange={handleChange} 
                            className="mt-1" 
                            required 
                          />
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <input 
                            type="checkbox" 
                            id="hasMedicalReports" 
                            name="hasMedicalReports" 
                            checked={formData.hasMedicalReports} 
                            onChange={handleCheckboxChange} 
                            className="rounded border-gray-300 text-health-600 focus:ring-health-600" 
                          />
                          <Label htmlFor="hasMedicalReports" className="font-normal">
                            I have medical reports to upload
                          </Label>
                        </div>
                        
                        {formData.hasMedicalReports && (
                          <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                            <Upload className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">
                              Drag and drop your medical reports here, or click to browse
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Supports: PDF, JPG, PNG (Max size: 5MB)
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        type="submit" 
                        className="bg-health-600 hover:bg-health-700 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Summary Column */}
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Appointment Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className="h-16 w-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{doctor.name}</h3>
                        <p className="text-sm text-health-600">{doctor.specialization}</p>
                        <p className="text-sm text-gray-500">{doctor.hospital}, {doctor.city}</p>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4 space-y-2">
                      {selectedDate && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                            <span>Date</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900">
                            {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                      )}
                      
                      {selectedTime && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 text-gray-400 mr-2" />
                            <span>Time</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900">{selectedTime}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-600">
                          <span>Consultation Fee</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">₹{doctor.consultationFee}</span>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <h3 className="text-sm font-medium text-gray-900 mb-2">What happens next?</h3>
                      <ol className="space-y-2">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-health-100 text-health-600 text-xs mr-2">
                            1
                          </div>
                          <span className="text-sm text-gray-600">Submit your application</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-health-100 text-health-600 text-xs mr-2">
                            2
                          </div>
                          <span className="text-sm text-gray-600">Receive confirmation email</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-health-100 text-health-600 text-xs mr-2">
                            3
                          </div>
                          <span className="text-sm text-gray-600">Doctor reviews your details</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-health-100 text-health-600 text-xs mr-2">
                            4
                          </div>
                          <span className="text-sm text-gray-600">Application status updated</span>
                        </li>
                      </ol>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link 
                        to="/contact-us" 
                        className="text-sm text-health-600 hover:text-health-700 inline-flex items-center"
                      >
                        Need help? Contact support
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
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

export default BookAppointment;
