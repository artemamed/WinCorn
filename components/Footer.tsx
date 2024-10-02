import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-10 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between xl:space-x-[1rem]">
        <div className="w-full md:w-1/3 mb-6 text-center md:text-left xl:-ml-[5rem] xl:mr-[5rem] md:pl-2">
          <h3 className="text-3xl font-semibold">
            Win<span className="text-green-400">Corn Pharmaceuticals</span>
          </h3>
          <p className="text-gray-300 mt-2">
            Wincorn Pharmaceuticals provides novel medicines and surgical instruments to everyone worldwide, ensuring safety, precision, and quality.
          </p>
        </div>

        <div className="w-full md:w-1/6 mb-6 text-center md:text-left">
          <h4 className="text-xl font-bold">About Us</h4>
          <ul className="text-gray-300 space-y-2">
            <li className="hover:text-green-400 transition duration-300 cursor-pointer">Home</li>
            <li className="hover:text-green-400 transition duration-300 cursor-pointer">About Us</li>
            <li className="hover:text-green-400 transition duration-300 cursor-pointer">Our Blog</li>
            <li className="hover:text-green-400 transition duration-300 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        <div className="w-full md:w-1/6 mb-6 text-center md:text-left">
          <h4 className="text-xl font-bold">Policies</h4>
          <ul className="text-gray-300 space-y-2">
            <li className="hover:text-green-400 transition duration-300 cursor-pointer">Terms & Condition</li>
            <li className="hover:text-green-400 transition duration-300 cursor-pointer">Shipping Policy</li>
            <li className="hover:text-green-400 transition duration-300 cursor-pointer">Refund Policy</li>
            <li className="hover:text-green-400 transition duration-300 cursor-pointer">Cookies Policy</li>
            <li className="hover:text-green-400 transition duration-300 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-6 text-center md:text-left">
          <h4 className="text-xl font-bold">Contact Us</h4>
          <p className="flex items-center justify-center md:justify-start text-gray-300 mt-2">
            <FaMapMarkerAlt className="mr-2" /> 123, London Bridge Street, London
          </p>
          <p className="flex items-center justify-center md:justify-start text-gray-300 mt-2">
            <FaEnvelope className="mr-2" /> support@care.com
          </p>
          <p className="flex items-center justify-center md:justify-start text-gray-300 mt-2">
            <FaPhone className="mr-2" /> (+012) 3456 789
          </p>
        </div>
      </div>

      <div className="text-center mt-6">
        <h4 className="text-xl font-bold">Follow Us</h4>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600 transition duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-600 transition duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-700 transition duration-300">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
