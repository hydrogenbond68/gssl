import React from 'react';
import { FaShieldAlt, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaShieldAlt className="text-accent text-2xl" />
              <span className="text-white text-xl font-bold">Gssl SecureGuard Pro</span>
            </div>
            <p className="text-sm">Providing top-notch security solutions for over a decade. Your safety is our priority.</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="/login" className="hover:text-accent transition-colors"></a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaPhone className="text-accent" />
                <span>+254704 461 031</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-accent" />
                <span>gssl@secureguardpro.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-accent" />
                <span>Lower kabete, Nairobi</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-accent transition-colors"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-accent transition-colors"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-accent transition-colors"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 SecureGuard Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;