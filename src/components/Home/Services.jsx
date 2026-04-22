import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getServices, updateServices } from '../../utils/localStorage';
import { FaShieldAlt, FaVideo, FaDog, FaLock, FaUsers, FaPaw, FaEdit, FaSave, FaTimes, FaUpload } from 'react-icons/fa';

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
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [imagePreview, setImagePreview] = useState('');
  const navigate = useNavigate();
  const { isAdmin } = useAuth();

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = () => {
    setServices(getServices());
  };

  const handleServiceClick = (serviceId) => {
    navigate(`/service/${serviceId}`);
  };

  const handleEdit = (service, e) => {
    e.stopPropagation();
    setEditingId(service.id);
    setEditForm({ ...service });
    setImagePreview(service.image);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setEditForm({ ...editForm, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async (e) => {
    e.stopPropagation();
    const updatedServices = services.map(service => 
      service.id === editingId ? editForm : service
    );
    updateServices(updatedServices);
    setServices(updatedServices);
    setEditingId(null);
    alert('Service updated successfully!');
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    setEditingId(null);
    setEditForm({});
    setImagePreview('');
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setEditForm({ ...editForm, image: url });
    setImagePreview(url);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Security Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive security solutions tailored to meet your specific needs
          </p>
          {isAdmin() && (
            <p className="text-sm text-primary mt-2">👑 Admin: Click Edit on any service to change its image</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="card group hover:-translate-y-2 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {editingId === service.id ? (
                // Edit Mode
                <div className="p-4" onClick={(e) => e.stopPropagation()}>
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={imagePreview || editForm.image}
                      alt={editForm.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <label className="bg-primary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-secondary flex items-center gap-2">
                        <FaUpload /> Change Image
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Name</label>
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Image URL (Optional)</label>
                      <input
                        type="text"
                        value={editForm.image}
                        onChange={handleImageUrlChange}
                        placeholder="https://example.com/image.jpg"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={editForm.description}
                        onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                        rows="3"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
                      <select
                        value={editForm.icon}
                        onChange={(e) => setEditForm({ ...editForm, icon: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-primary focus:border-primary"
                      >
                        <option value="🛡️">🛡️ Shield</option>
                        <option value="📹">📹 Camera</option>
                        <option value="🐕">🐕 Dog</option>
                        <option value="🔒">🔒 Lock</option>
                        <option value="👮">👮 Officer</option>
                        <option value="🐕‍🦺">🐕‍🦺 Security Dog</option>
                      </select>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <button onClick={handleSave} className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center justify-center gap-2">
                        <FaSave /> Save
                      </button>
                      <button onClick={handleCancel} className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 flex items-center justify-center gap-2">
                        <FaTimes /> Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // View Mode
                <>
                  <div className="relative h-48 overflow-hidden" onClick={() => handleServiceClick(service.id)}>
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/600x400/1e3a8a/white?text=Security+Service";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white text-3xl">
                      {iconMap[service.icon] || <FaShieldAlt />}
                    </div>
                    {isAdmin() && (
                      <button
                        onClick={(e) => handleEdit(service, e)}
                        className="absolute top-2 right-2 bg-primary text-white p-2 rounded-full hover:bg-secondary transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <FaEdit />
                      </button>
                    )}
                  </div>
                  <div className="p-6" onClick={() => handleServiceClick(service.id)}>
                    <h3 className="text-xl font-bold mb-2 text-dark">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description.substring(0, 120)}...</p>
                    <div className="flex justify-between items-center">
                      <button className="text-primary font-semibold hover:text-secondary transition-colors">
                        Learn More →
                      </button>
                      <span className="text-sm text-gray-400">Click for details</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;