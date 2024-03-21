import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p>
            Music School is a Premier insttitute dedicated to teaching the art
            of science. the best place to learn.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <p>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </a>
          </p>
          <p>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              About Us
            </a>
          </p>
          <p>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Courses
            </a>
          </p>
          <p>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <p>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
          </p>
          <p>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
          </p>
          <p>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </p>
          <p>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Yahoo
            </a>
          </p>
        </div>
        <div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Contact us
            </h2>
            <p>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Navi Mumbai,India
            </a>
            </p>
          <p>
          <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Turbhe 400123
            </a>
          </p>
            <p>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Email
            </a>
            </p>
           <p>
           <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              music@gmail.com
            </a>
           </p>
           
          </div>
        </div>
      </div>
      <p className="text-center pt-8">@2024 Music School. All right reserved.</p>

    </footer>
  );
};

export default Footer;
