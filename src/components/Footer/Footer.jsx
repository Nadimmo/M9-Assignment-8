import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-4">The Guardian Books</h2>
          <p className="text-sm">
            Discover the best books, reviews, and features brought to you by The Guardian Books team. Your go-to for literary inspiration and information.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#about"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#reviews"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#facebook"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#twitter"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#instagram"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} The Guardian Books. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
