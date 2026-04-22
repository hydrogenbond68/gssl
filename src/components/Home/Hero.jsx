import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-dark to-primary text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Your Safety is Our Mission
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Professional security solutions tailored to protect what matters most to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services" className="bg-accent px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 text-center">
              Explore Services
            </Link>
            <Link to="/register" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-dark transition-all text-center">
              Get Started
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-6">
            <div className="flex items-center space-x-2"><FaCheckCircle className="text-accent" /><span>24/7 Protection</span></div>
            <div className="flex items-center space-x-2"><FaCheckCircle className="text-accent" /><span>Licensed Professionals</span></div>
            <div className="flex items-center space-x-2"><FaCheckCircle className="text-accent" /><span>Advanced Technology</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;