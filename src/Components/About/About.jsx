import React from "react";

export default function About() {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
              Passionate Developers Crafting Exceptional React Experiences
            </h2>
            <p className="text-lg text-gray-600">
              We are a team of skilled developers dedicated to building high-quality
              React applications. Our goal is to create user-friendly, efficient, and
              visually appealing interfaces for a seamless experience.
            </p>
            <p className="text-lg text-gray-600">
              Whether it's web applications, e-commerce platforms, or data-driven
              dashboards, we strive to push the boundaries of web development.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VwZXJtYXJrZXR8ZW58MHx8MHx8fDA%3D"
              alt="About Us"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
