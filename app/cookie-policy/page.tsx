import React from "react";
import { FaCookieBite, FaLock, FaChartLine, FaUserShield } from "react-icons/fa";

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Container */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-green-600 mb-8">
          Cookie Policy
        </h1>

        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <FaCookieBite className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">
              What Are Cookies
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            This site uses cookies to enhance your browsing experience. Cookies are small files downloaded to your computer to help improve the functionality and performance of the website.
          </p>
        </section>

        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <FaUserShield className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">
              How We Use Cookies
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We use cookies for various purposes, such as account management, login authentication, and enhancing user experience. Disabling cookies may lead to functionality loss in certain areas of the site.
          </p>
        </section>

        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <FaLock className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">
              Disabling Cookies
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            You can disable cookies through your browser settings, but this may affect site performance and the availability of certain features.
          </p>
        </section>

        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <FaCookieBite className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">
              The Cookies We Set
            </h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700">
            <li className="mb-4">
              <strong>Account-related cookies:</strong> Manage the signup process and general account administration. They are usually deleted when you log out.
            </li>
            <li className="mb-4">
              <strong>Login-related cookies:</strong> Keep you logged in across pages without needing to log in again.
            </li>
            <li className="mb-4">
              <strong>Order-processing cookies:</strong> Ensure your order is remembered between pages for a seamless checkout experience.
            </li>
            <li className="mb-4">
              <strong>Survey-related cookies:</strong> Help us conduct user surveys and remember survey participation.
            </li>
            <li className="mb-4">
              <strong>Site preference cookies:</strong> Store your preferences to enhance your browsing experience.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <FaChartLine className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">
              Third Party Cookies
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            In some cases, we use cookies from trusted third parties, including Google Analytics and social media platforms.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li className="mb-4">
              <strong>Google Analytics:</strong> Tracks site usage and performance to help us improve content and user experience.
            </li>
            <li className="mb-4">
              <strong>Social media cookies:</strong> Allow integration with social platforms and may be used to improve your social experience on the site.
            </li>
          </ul>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500">
        <p>© 2024 Artema Medical Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CookiePolicyPage;
