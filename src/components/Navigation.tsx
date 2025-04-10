import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Home, FileText, BookOpen, Binary, Radio, Mail, X } from 'lucide-react';
import imgP from "../assets/images/Logo Brouri.png";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: "/", label: "Accueil", icon: Home },
    { id: "/cv", label: "CV", icon: FileText },
    { id: "/e5", label: "E5", icon: BookOpen },
    { id: "/e6", label: "E6", icon: Binary },
    { id: "/veille", label: "Veille technologique", icon: Radio },
    { id: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              src={imgP}
              alt="photo"
              style={{
                width: "40px",
                height: "40px",
              }}
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  location.pathname === item.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-2 w-full px-4 py-3 rounded-md transition-colors ${
                  location.pathname === item.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;