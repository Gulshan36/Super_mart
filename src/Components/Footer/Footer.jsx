import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* About Us Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            Discover quality and convenience at our supermarket. From fresh produce to pantry staples, we’re your go-to for all grocery needs.
          </p>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: gulshankumar.117019@marwadiuniversity.ac.in</p>
          <p className="text-gray-400">Email: shivamkumar.118774@marwadiuniversity.ac.in</p>
          <p className="text-gray-400">Phone: 9534311604</p>
          <p className="text-gray-400">Phone: 6200854150</p>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <p className="text-gray-400">Stay connected with us on social media:</p>
          <div className="flex justify-center md:justify-start mt-3 space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-300 transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Supermarket. All Rights Reserved. |
          <a href="#" className="text-blue-400 hover:underline"> Terms of Service</a> |
          <a href="#" className="text-blue-400 hover:underline"> Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
