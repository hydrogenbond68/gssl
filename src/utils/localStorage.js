const USERS_KEY = 'security_users';
const SERVICES_KEY = 'security_services';
const REVIEWS_KEY = 'security_reviews';
const CURRENT_USER_KEY = 'security_current_user';

const defaultServices = [
  {
    id: '1',
    name: 'Guarding Services',
    description: 'Professional security guards for residential and commercial properties. 24/7 surveillance and rapid response.',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800',
    icon: '🛡️'
  },
  {
    id: '2',
    name: 'CCTV Installation',
    description: 'State-of-the-art CCTV systems with remote monitoring. High-definition cameras and intelligent analytics.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800',
    icon: '📹'
  },
  {
    id: '3',
    name: 'Dog Handling & Training',
    description: 'Expertly trained security dogs and handlers for enhanced security operations.',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800',
    icon: '🐕'
  },
  {
    id: '4',
    name: 'Protection Services',
    description: 'Comprehensive protection for life and property. Executive protection and asset security.',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800',
    icon: '🔒'
  },
  {
    id: '5',
    name: 'Trained Personnel',
    description: 'Highly trained security professionals certified in latest security protocols.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800',
    icon: '👮'
  },
  {
    id: '6',
    name: 'Security Dogs',
    description: 'Specially trained security dogs for patrol, detection, and response.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800',
    icon: '🐕‍🦺'
  }
];

export const initializeStorage = () => {
  if (!localStorage.getItem(USERS_KEY)) {
    localStorage.setItem(USERS_KEY, JSON.stringify([]));
  }
  
  if (!localStorage.getItem(SERVICES_KEY)) {
    localStorage.setItem(SERVICES_KEY, JSON.stringify(defaultServices));
  }
  
  if (!localStorage.getItem(REVIEWS_KEY)) {
    localStorage.setItem(REVIEWS_KEY, JSON.stringify([]));
  }
};

export const getUsers = () => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

export const saveUser = (user) => {
  const users = getUsers();
  users.push({ ...user, id: Date.now().toString(), createdAt: new Date().toISOString() });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const findUser = (email, password) => {
  const users = getUsers();
  return users.find(user => user.email === email && user.password === password);
};

export const findUserByEmail = (email) => {
  const users = getUsers();
  return users.find(user => user.email === email);
};

export const getServices = () => {
  const services = localStorage.getItem(SERVICES_KEY);
  return services ? JSON.parse(services) : [];
};

export const saveService = (service) => {
  const services = getServices();
  services.push(service);
  localStorage.setItem(SERVICES_KEY, JSON.stringify(services));
};

export const updateServices = (services) => {
  localStorage.setItem(SERVICES_KEY, JSON.stringify(services));
};

export const getReviews = () => {
  const reviews = localStorage.getItem(REVIEWS_KEY);
  return reviews ? JSON.parse(reviews) : [];
};

export const saveReview = (review) => {
  const reviews = getReviews();
  reviews.push({
    ...review,
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  });
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
};

export const deleteReview = (reviewId) => {
  const reviews = getReviews();
  const updatedReviews = reviews.filter(review => review.id !== reviewId);
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(updatedReviews));
};

export const setCurrentUser = (user) => {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
};

export const getCurrentUser = () => {
  const user = localStorage.getItem(CURRENT_USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const clearCurrentUser = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};