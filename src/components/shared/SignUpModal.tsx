
import { useState } from 'react';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModal = ({ isOpen, onClose }: SignUpModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    country: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account created!",
      description: "You've successfully signed up for HealthSphere.",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content max-w-md p-0 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button 
            className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="bg-health-50/50 px-6 py-8">
            <h2 className="text-center text-2xl font-bold text-gray-900">Join HealthSphere</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Access personalized medical tourism services and exclusive offers
            </p>
            
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="input-field mt-1"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="input-field mt-1"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Home Country
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  required
                  className="input-field mt-1"
                  placeholder="Your country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="input-field mt-1"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <button
                type="submit"
                className="w-full rounded-xl bg-health-600 py-3 text-sm font-medium text-white shadow-sm hover:bg-health-700 focus:outline-none focus:ring-2 focus:ring-health-500 focus:ring-offset-2"
              >
                Create Account
              </button>
            </form>
          </div>
          
          <div className="px-6 py-4 text-center text-xs text-gray-600">
            By signing up, you agree to our{' '}
            <a href="#" className="text-health-600 hover:text-health-800">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-health-600 hover:text-health-800">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
