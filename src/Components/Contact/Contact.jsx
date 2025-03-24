import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', tel: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.tel) {
            setError('All fields are required!');
            return;
        }
        setError('');
        alert('Form submitted successfully!');
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden shadow-lg rounded-xl bg-white p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Info Section */}
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h1 className="text-4xl text-gray-800 font-extrabold tracking-tight">
                                Get in touch
                            </h1>
                            <p className="text-lg text-gray-600 mt-2">
                                Fill in the form to start a conversation.
                            </p>

                            <div className="flex items-center mt-6 text-gray-600 space-x-4">
                                <span className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full">
                                    📍
                                </span>
                                <p className="text-md font-semibold">Marwadi University, Rajkot, Gujarat</p>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600 space-x-4">
                                <span className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full">
                                    📞
                                </span>
                                <p className="text-md font-semibold">+91 9534311604</p>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600 space-x-4">
                                <span className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-full">
                                    📧
                                </span>
                                <p className="text-md font-semibold">gulshankumar93053@gmail.com</p>
                            </div>
                        </div>

                        {/* Form Section */}
                        <form onSubmit={handleSubmit} className="p-6 flex flex-col justify-center bg-white rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-gray-700 mb-4">Contact Us</h2>

                            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="input-field border border-gray-300 rounded-md px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="input-field border border-gray-300 rounded-md px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />

                            <input
                                type="tel"
                                name="tel"
                                value={formData.tel}
                                onChange={handleChange}
                                placeholder="Telephone Number"
                                className="input-field border border-gray-300 rounded-md px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />

                            <button
                                type="submit"
                                className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out shadow-md"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
