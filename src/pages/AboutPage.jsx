import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaAward, FaUsers, FaClock, FaCheckCircle, FaChartLine, FaHandshake, FaGlobeAfrica } from 'react-icons/fa';

const AboutPage = () => {
  const stats = [
    { icon: <FaUsers className="text-4xl" />, value: '500+', label: 'Security Experts' },
    { icon: <FaAward className="text-4xl" />, value: '15+', label: 'Years Experience' },
    { icon: <FaClock className="text-4xl" />, value: '24/7', label: 'Support Available' },
    { icon: <FaGlobeAfrica className="text-4xl" />, value: '50+', label: 'Cities Covered' }
  ];

  const values = [
    {
      title: 'Integrity',
      description: 'We operate with honesty and transparency in all our dealings.',
      icon: <FaHandshake className="text-3xl" />
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in security services.',
      icon: <FaChartLine className="text-3xl" />
    },
    {
      title: 'Reliability',
      description: 'We deliver consistent, dependable protection 24/7.',
      icon: <FaCheckCircle className="text-3xl" />
    }
  ];

  const team = [
    {
      name: 'John Mwangi',
      role: 'CEO & Founder',
      experience: '20+ years in security',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Sarah Wanjiku',
      role: 'Operations Director',
      experience: '15+ years in security management',
      image: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      name: 'Peter Odhiambo',
      role: 'Head of Training',
      experience: 'Expert in security dog handling',
      image: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-dark to-primary text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">About SecureGuard Pro</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Kenya's leading security solutions provider, committed to protecting what matters most to you.
          </p>
        </div>
      </div>

      {/* Company Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              Founded in 2010, SecureGuard Pro has grown to become one of Kenya's most trusted security service providers. 
              We started with a simple mission: to provide reliable, professional security solutions that give our clients 
              peace of mind.
            </p>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              Over the past 15 years, we've expanded our services from basic guarding to comprehensive security solutions 
              including CCTV surveillance, dog handling, and executive protection. Today, we serve over 500 clients across 
              Kenya, from small businesses to large corporations.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our commitment to excellence, continuous training, and investment in modern technology has made us a leader 
              in the security industry. We're proud of the trust our clients place in us and work tirelessly to maintain 
              the highest standards of security.
            </p>
          </div>
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600"
                alt="Security team"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600"
                alt="CCTV installation"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="text-primary text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-dark mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional security services that protect lives, property, and assets through 
                professional expertise, advanced technology, and unwavering commitment to our clients' safety.
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="text-primary text-5xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold text-dark mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and innovative security solutions provider in Africa, setting the standard 
                for excellence in protection services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-dark to-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-blue-100">Delivering excellence across Kenya</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="flex justify-center mb-4 text-accent">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="text-primary flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What makes SecureGuard Pro the preferred security partner for hundreds of clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Licensed and insured security professionals',
              '24/7 customer support and emergency response',
              'Advanced technology and surveillance systems',
              'Customized security solutions for every client',
              'Regular training and quality assurance',
              'Competitive pricing with flexible packages'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Leadership Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the experts behind our success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-dark mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your World?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and security assessment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-accent px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
              Explore Services
            </Link>
            <Link to="/contact" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-dark transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;