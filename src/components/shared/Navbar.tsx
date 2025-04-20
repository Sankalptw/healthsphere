import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Heart, Airplay } from 'lucide-react';
import { useModal } from '@/hooks/useModal';
import SignUpModal from './SignUpModal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const location = useLocation();
  const { isOpen, openModal, closeModal } = useModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Doctors', path: '/doctors' },
    { name: 'Insurance', path: '/insurance' },
    { name: 'Hotels', path: '/hotels' },
    { name: 'Flights', path: '/flights' },
    { name: 'Recovery', path: '/recovery' },
    { name: 'Find Cost', path: '/find-cost' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md transition-all">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
            <Heart className="h-8 w-8 text-health-600" />
            <span className="text-xl font-semibold text-gray-900">HealthSphere</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="block rounded p-2 text-gray-600 hover:text-gray-900 focus:outline-none md:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item transition-all duration-300 hover:scale-105 ${isActive(item.path) ? 'nav-item-active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="ml-4 flex items-center space-x-1 rounded-full bg-health-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-health-700 focus:outline-none focus:ring-2 focus:ring-health-500 focus:ring-offset-2 transition-all duration-300 hover:scale-105">
                <User className="h-4 w-4 mr-1" />
                <span>PROFILE</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <Link to="/profile">
                  <DropdownMenuItem className="cursor-pointer">
                    View Profile
                  </DropdownMenuItem>
                </Link>
                <Link to="/status">
                  <DropdownMenuItem className="cursor-pointer">
                    Application Status
                  </DropdownMenuItem>
                </Link>
                <Link to="/bookings">
                  <DropdownMenuItem className="cursor-pointer">
                    My Bookings
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer" onClick={openModal}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="animate-fade-in border-t bg-white py-2 md:hidden">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block rounded-lg px-4 py-2 text-sm ${
                      isActive(item.path)
                        ? 'bg-health-50 font-medium text-health-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/profile"
                  className="mt-2 w-full rounded-lg bg-health-600 py-2 text-center text-sm font-medium text-white hover:bg-health-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PROFILE
                </Link>
              </div>
            </div>
          </nav>
        )}
      </header>
      <SignUpModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;
