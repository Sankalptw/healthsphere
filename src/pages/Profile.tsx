
import { useState } from 'react';
import { User, Phone, Mail, MapPin, Calendar, FileText, Edit, Save } from 'lucide-react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock user data
  const [userData, setUserData] = useState({
    name: "Rajiv Kumar",
    age: 45,
    gender: "Male",
    email: "rajiv.kumar@gmail.com",
    phone: "+91 98765 43210",
    address: "42 Maharaja Complex, Model Town, New Delhi - 110009",
    nationality: "Indian",
    passportNumber: "J8234567",
    bloodGroup: "O+",
    emergencyContact: "Priya Kumar: +91 98765 12345",
    medicalHistory: [
      "Hypertension (Since 2015)",
      "Type 2 Diabetes (Since 2018)",
      "Knee replacement surgery (2019)"
    ],
    allergies: "Penicillin, Shellfish",
    currentMedications: "Metformin 500mg, Losartan 50mg"
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, you'd save the changes to a database here
  };

  const handleInputChange = (field: string, value: string) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Upcoming appointments
  const appointments = [
    {
      id: "APT-001",
      doctor: "Dr. Sanjay Gupta",
      specialty: "Cardiology",
      hospital: "Apollo Hospital",
      date: "2024-07-15",
      time: "10:00 AM"
    },
    {
      id: "APT-002",
      doctor: "Dr. Meera Sharma",
      specialty: "Orthopedics",
      hospital: "Fortis Hospital",
      date: "2024-07-22",
      time: "2:30 PM"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">My Profile</h1>
            <p className="text-gray-600">Manage your personal information and medical details</p>
          </div>

          <Tabs defaultValue="personal">
            <TabsList className="mb-8 bg-white">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="medical">Medical History</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div>
                    <CardTitle className="text-xl font-bold">Personal Information</CardTitle>
                    <CardDescription>Your basic details and contact information</CardDescription>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={isEditing ? handleSave : handleEdit}
                  >
                    {isEditing ? (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Save
                      </>
                    ) : (
                      <>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </>
                    )}
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Full Name</label>
                        {isEditing ? (
                          <Input 
                            value={userData.name} 
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="mt-1"
                          />
                        ) : (
                          <p className="text-gray-900 flex items-center mt-1">
                            <User className="h-4 w-4 mr-2 text-gray-400" />
                            {userData.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Age</label>
                        {isEditing ? (
                          <Input 
                            value={userData.age.toString()} 
                            onChange={(e) => handleInputChange('age', e.target.value)}
                            type="number"
                            className="mt-1"
                          />
                        ) : (
                          <p className="text-gray-900 mt-1">{userData.age} years</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Gender</label>
                        {isEditing ? (
                          <select 
                            value={userData.gender}
                            onChange={(e) => handleInputChange('gender', e.target.value)}
                            className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        ) : (
                          <p className="text-gray-900 mt-1">{userData.gender}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Nationality</label>
                        {isEditing ? (
                          <Input 
                            value={userData.nationality} 
                            onChange={(e) => handleInputChange('nationality', e.target.value)}
                            className="mt-1"
                          />
                        ) : (
                          <p className="text-gray-900 mt-1">{userData.nationality}</p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Passport Number</label>
                        {isEditing ? (
                          <Input 
                            value={userData.passportNumber} 
                            onChange={(e) => handleInputChange('passportNumber', e.target.value)}
                            className="mt-1"
                          />
                        ) : (
                          <p className="text-gray-900 mt-1">{userData.passportNumber}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Email Address</label>
                        {isEditing ? (
                          <Input 
                            value={userData.email} 
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            type="email"
                            className="mt-1"
                          />
                        ) : (
                          <p className="text-gray-900 flex items-center mt-1">
                            <Mail className="h-4 w-4 mr-2 text-gray-400" />
                            {userData.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Phone Number</label>
                        {isEditing ? (
                          <Input 
                            value={userData.phone} 
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="mt-1"
                          />
                        ) : (
                          <p className="text-gray-900 flex items-center mt-1">
                            <Phone className="h-4 w-4 mr-2 text-gray-400" />
                            {userData.phone}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Address</label>
                        {isEditing ? (
                          <Textarea 
                            value={userData.address} 
                            onChange={(e) => handleInputChange('address', e.target.value)}
                            className="mt-1"
                          />
                        ) : (
                          <p className="text-gray-900 flex items-start mt-1">
                            <MapPin className="h-4 w-4 mr-2 text-gray-400 mt-1" />
                            {userData.address}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Emergency Contact</label>
                        {isEditing ? (
                          <Input 
                            value={userData.emergencyContact} 
                            onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                            className="mt-1"
                          />
                        ) : (
                          <p className="text-gray-900 mt-1">{userData.emergencyContact}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="medical">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Medical History</CardTitle>
                  <CardDescription>Your medical conditions, allergies, and medications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-md font-medium text-gray-700 mb-2">Medical Conditions</h3>
                      {isEditing ? (
                        <Textarea 
                          value={userData.medicalHistory.join("\n")} 
                          onChange={(e) => handleInputChange('medicalHistory', e.target.value)}
                          className="min-h-[100px]"
                        />
                      ) : (
                        <ul className="list-disc pl-5 space-y-1">
                          {userData.medicalHistory.map((condition, index) => (
                            <li key={index} className="text-gray-700">{condition}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div>
                      <h3 className="text-md font-medium text-gray-700 mb-2">Allergies</h3>
                      {isEditing ? (
                        <Input 
                          value={userData.allergies} 
                          onChange={(e) => handleInputChange('allergies', e.target.value)}
                        />
                      ) : (
                        <p className="text-gray-700">{userData.allergies}</p>
                      )}
                    </div>
                    <div>
                      <h3 className="text-md font-medium text-gray-700 mb-2">Current Medications</h3>
                      {isEditing ? (
                        <Input 
                          value={userData.currentMedications} 
                          onChange={(e) => handleInputChange('currentMedications', e.target.value)}
                        />
                      ) : (
                        <p className="text-gray-700">{userData.currentMedications}</p>
                      )}
                    </div>
                    <div>
                      <h3 className="text-md font-medium text-gray-700 mb-2">Blood Group</h3>
                      {isEditing ? (
                        <select 
                          value={userData.bloodGroup}
                          onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        >
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                        </select>
                      ) : (
                        <p className="text-gray-700">{userData.bloodGroup}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="appointments">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Upcoming Appointments</CardTitle>
                  <CardDescription>Your scheduled doctor visits and treatments</CardDescription>
                </CardHeader>
                <CardContent>
                  {appointments.length > 0 ? (
                    <div className="space-y-4">
                      {appointments.map((appointment) => (
                        <div key={appointment.id} className="border rounded-lg p-4 bg-white">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <h3 className="font-medium text-gray-900">{appointment.doctor}</h3>
                              <p className="text-sm text-gray-500">{appointment.specialty} - {appointment.hospital}</p>
                            </div>
                            <div className="flex items-center mt-2 md:mt-0 space-x-4">
                              <div className="flex items-center text-sm text-gray-700">
                                <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                                {new Date(appointment.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                              </div>
                              <div className="text-sm text-gray-700">{appointment.time}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="pt-4">
                        <Link to="/book-appointment">
                          <Button>Book New Appointment</Button>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 mb-4">You don't have any upcoming appointments</p>
                      <Link to="/book-appointment">
                        <Button>Book an Appointment</Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <div className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Application Status</CardTitle>
                    <CardDescription>Check the status of your medical visa and treatment applications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/status">
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        View Application Status
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="documents">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Medical Documents</CardTitle>
                  <CardDescription>Upload and manage your medical reports and documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="border rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-blue-500 mr-3" />
                        <div>
                          <p className="font-medium">Blood Test Report</p>
                          <p className="text-sm text-gray-500">Uploaded on 20 Apr, 2024</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                    <div className="border rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-blue-500 mr-3" />
                        <div>
                          <p className="font-medium">Cardiac Evaluation</p>
                          <p className="text-sm text-gray-500">Uploaded on 15 Mar, 2024</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                    <div className="border rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-blue-500 mr-3" />
                        <div>
                          <p className="font-medium">MRI Scan Report</p>
                          <p className="text-sm text-gray-500">Uploaded on 05 Feb, 2024</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">View</Button>
                    </div>
                    
                    <div className="mt-4">
                      <Button>Upload New Document</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
