import React from 'react';
import { Presentation, Users, GraduationCap, Building } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', icon: Presentation, path: '/' },
  { label: 'Startups', icon: Building, path: '/startups' },
  { label: 'Investors', icon: Users, path: '/investors' },
  { label: 'Incubations', icon: Users, path: '/incubators' },
  { label: 'Courses', icon: GraduationCap, path: '/courses' },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <Presentation className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">PitchDeck</span>
            </Link>
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-purple-600 bg-purple-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
