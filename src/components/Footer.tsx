import React from 'react';
import { MapPin, Clock, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 font-poppins">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                <span>123 Foodie Lane, Flavor District, Culinary City, 400001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-red-500 mr-2 flex-shrink-0" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-red-500 mr-2 flex-shrink-0" />
                <span>taste@momomania.com</span>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4 font-poppins">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock size={20} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p>11:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Saturday - Sunday</p>
                  <p>10:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Social & Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4 font-poppins">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
            <form className="mt-4">
              <p className="mb-2">Subscribe to our newsletter</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-md text-gray-800 w-full focus:outline-none"
                />
                <button 
                  type="submit" 
                  className="bg-red-600 px-4 py-2 rounded-r-md hover:bg-red-700 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} MomoMania. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;