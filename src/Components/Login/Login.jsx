import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [mode, setMode] = useState('login');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('All fields are required!');
      return;
    }
    if (mode === 'signup' && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    setError('');
    
    if (mode === 'login') {
      console.log('Logging in with:', formData);
      navigate('/product/');
    } else {
      console.log('Signing up with:', formData);
    }
  };

  const toggleMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
    setError('');
    setFormData({ email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          {mode === 'login' ? 'Login' : 'Sign Up'}
        </h2>
        
        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {mode === 'signup' && (
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            {mode === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p 
          onClick={toggleMode}
          className="mt-4 text-center text-blue-500 cursor-pointer hover:underline"
        >
          {mode === 'login' 
            ? "Don't have an account? Sign Up" 
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}
