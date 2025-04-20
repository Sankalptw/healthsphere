import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, MapPin, Filter, CheckCircle, Clock, XCircle, AlertCircle } from 'lucide-react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Mock logged-in user ID (in a real app, this would come from authentication)
const LOGGED_IN_USER_ID = "user123";

// Updated interface with userId
interface Application {
  id: string;
  userId: string;
  name: string;
  city: string;
  treatmentType: string;
  status: 'Received' | 'Under Review' | 'Approved' | 'Rejected';
  date: string;
  doctor: string;
  hospital: string;
  estimatedArrival?: string;
  submittedOn: string;
}

// Mock applications with userId
const allApplications: Application[] = [
  {
    id: 'APP-001',
    userId: 'user123',
    name: 'John Smith',
    city: 'Delhi',
    treatmentType: 'Cardiac Surgery',
    status: 'Approved',
    date: '2024-07-15',
    doctor: 'Dr. Rajesh Mehta',
    hospital: 'AIIMS',
    estimatedArrival: '2024-07-10',
    submittedOn: '2024-05-25'
  },
  {
    id: 'APP-002',
    userId: 'user123',
    name: 'John Smith',
    city: 'Mumbai',
    treatmentType: 'Orthopedic Consultation',
    status: 'Under Review',
    date: '2024-06-20',
    doctor: 'Dr. Rahul Desai',
    hospital: 'Breach Candy Hospital',
    submittedOn: '2024-05-28'
  }
];

const Status = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  
  // Filter applications to show only the logged-in user's applications
  const userApplications = allApplications.filter(app => app.userId === LOGGED_IN_USER_ID);
  
  // Then apply the search and filters
  const filteredApplications = userApplications.filter(app => {
    const matchesSearch = app.treatmentType.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         app.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.hospital.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter ? app.status === statusFilter : true;
    const matchesCity = cityFilter ? app.city === cityFilter : true;
    
    return matchesSearch && matchesStatus && matchesCity;
  });

  // Get the status badge color
  const getStatusColor = (status: Application['status']) => {
    switch(status) {
      case 'Received':
        return 'bg-blue-100 text-blue-800';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  // Get the status icon
  const getStatusIcon = (status: Application['status']) => {
    switch(status) {
      case 'Received':
        return <Clock className="h-4 w-4" />;
      case 'Under Review':
        return <AlertCircle className="h-4 w-4" />;
      case 'Approved':
        return <CheckCircle className="h-4 w-4" />;
      case 'Rejected':
        return <XCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 md:py-12 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Application Status</h1>
          
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search by name, ID, or treatment"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              
              <div>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="">All Statuses</option>
                  <option value="Received">Received</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              
              <div>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                >
                  <option value="">All Cities</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Bangalore">Bangalore</option>
                </select>
              </div>
            </div>
          </div>
          
          {filteredApplications.length > 0 ? (
            <div className="space-y-4">
              {filteredApplications.map(application => (
                <div key={application.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
                  <div className="border-l-4 border-health-600">
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <div className="flex items-center">
                            <h2 className="text-lg font-semibold text-gray-900">{application.name}</h2>
                            <span className="ml-3 px-2.5 py-0.5 rounded-full text-xs font-medium inline-flex items-center gap-1 whitespace-nowrap"
                                  style={{backgroundColor: `rgba(var(--${application.status === 'Approved' ? 'success' : application.status === 'Rejected' ? 'error' : application.status === 'Under Review' ? 'warning' : 'info'}-rgb), 0.1)`,
                                  color: `hsl(var(--${application.status === 'Approved' ? 'success' : application.status === 'Rejected' ? 'error' : application.status === 'Under Review' ? 'warning' : 'info'}))`}}>
                              {getStatusIcon(application.status)}
                              {application.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">ID: {application.id} • Submitted on {new Date(application.submittedOn).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                        </div>
                        
                        <div className="mt-2 md:mt-0">
                          <Link 
                            to={`/status/${application.id}`} 
                            className="text-health-600 hover:text-health-700 text-sm font-medium inline-flex items-center"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-xs text-gray-500">Treatment</p>
                          <p className="text-sm font-medium text-gray-900">{application.treatmentType}</p>
                        </div>
                        
                        <div>
                          <p className="text-xs text-gray-500">Hospital & Doctor</p>
                          <p className="text-sm font-medium text-gray-900">{application.hospital}</p>
                          <p className="text-sm text-gray-600">{application.doctor}</p>
                        </div>
                        
                        <div>
                          <p className="text-xs text-gray-500">Appointment Date</p>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                            <p className="text-sm font-medium text-gray-900">
                              {new Date(application.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </p>
                          </div>
                          
                          <div className="flex items-center mt-1">
                            <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                            <p className="text-sm text-gray-600">{application.city}</p>
                          </div>
                        </div>
                      </div>
                      
                      {application.status === 'Approved' && application.estimatedArrival && (
                        <div className="mt-4 bg-green-50 rounded-lg p-3">
                          <p className="text-sm text-green-800">
                            <span className="font-medium">Estimated Arrival:</span> {new Date(application.estimatedArrival).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                          </p>
                        </div>
                      )}
                      
                      {application.status === 'Rejected' && (
                        <div className="mt-4 bg-red-50 rounded-lg p-3">
                          <p className="text-sm text-red-800">
                            <span className="font-medium">Reason:</span> The requested treatment requires additional documentation. Please contact support for assistance.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No applications found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filters</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setStatusFilter('');
                  setCityFilter('');
                }}
                variant="outline"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Status;
