import React from 'react';
import { Utensils } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen max-h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Delicious Momos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <div className="flex items-center mb-4">
            <Utensils className="text-red-500 mr-2" size={28} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold font-poppins tracking-tight">
              MomoMania
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-white font-light mb-6">
            <span className="font-medium">Bite into Joy</span> - Handcrafted Momos with Love
          </p>
          
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-lg">
            Experience the authentic taste of traditional Himalayan dumplings with our 
            modern twist. Every bite tells a story of flavor and tradition.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#menu" 
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-colors duration-300 transform hover:-translate-y-1"
            >
              View Our Menu
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white rounded-full transition-colors duration-300"
            >
              Find Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;