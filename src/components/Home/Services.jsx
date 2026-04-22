import React, { useState, useEffect } from 'react';
import { getServices } from '../../utils/localStorage';
import { FaShieldAlt, FaVideo, FaDog, FaLock, FaUsers, FaPaw } from 'react-icons/fa';

const iconMap = {
  '🛡️': <FaShieldAlt />,
  '📹': <FaVideo />,
  '🐕': <FaDog />,
  '🔒': <FaLock />,
  '👮': <FaUsers />,
  '🐕‍🦺': <FaPaw />
};

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(getServices());
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Security Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive security solutions tailored to meet your specific needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="card group hover:-translate-y-2 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative h-48 overflow-hidden">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white text-3xl">{iconMap[service.icon] || <FaShieldAlt />}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dark">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;