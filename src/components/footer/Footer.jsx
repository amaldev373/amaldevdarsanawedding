import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-black sm:mt-20 lg:mt-40 mb-40 sm:px-2">
      <div className="sm:border-t lg:border-t-2 border-black pt-10 mainContainer max-w-7xl mx-auto lg:px-3 sm:px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8 ">
          {/* About Section */}
          <div>
            <h5 className="text-lg font-semibold mb-2">About Us</h5>
            <p className="text-sm">
              Team of Expert MERN Stack Developer delivering robust and scalable
              web solutions. For collaborations or inquiries,Email us on
              arjunravi1213@gmail.com
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
            <p className="text-sm">
              bbee0143@gmail.com
              <br />
              Phone: +91 9446722008
              <br/>
              Insta: arju_n.ravee_ndran
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-gray-300">
                <FaInstagram size="1.5em" />
              </a>
              <a href="https://facebook.com" className="hover:text-gray-300">
                <FaFacebookF size="1.5em" />
              </a>
              <a href="https://twitter.com" className="hover:text-gray-300">
                <FaTwitter size="1.5em" />
              </a>
              <a href="https://pinterest.com" className="hover:text-gray-300">
                <FaPinterestP size="1.5em" />
              </a>
            </div>
          </div>

          {/* Additional Links or Info */}
          <div className="">
            <h5 className="text-lg font-semibold mb-2">Services</h5>
            <ul className="text-sm">
              <li className="hover:text-gray-300">Wedding Photography</li>
              <li className="hover:text-gray-300">Engagement Sessions</li>
              <li className="hover:text-gray-300">Photo Albums</li>
            </ul>
          </div>
        </div>

        <div className="text-center sm:text-sm lg:text-md pt-2">
          © {new Date().getFullYear()} Wedding Photos, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
