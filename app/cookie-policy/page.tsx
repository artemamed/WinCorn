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

        <p className="text-gray-700 leading-relaxed mb-8">
          At Wincorn Medical, we are committed to protecting your privacy. This Cookie Policy explains how we use cookies and similar technologies on our website (<a href="https://artemamed.com/" className="text-green-500 hover:underline">https://artemamed.com/</a>).
        </p>

        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <FaCookieBite className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">
              What Are Cookies?
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Cookies are small text files placed on your device when you visit our Site. They help us enhance your experience by remembering your preferences and improving the functionality of our site.
          </p>
        </section>

        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <FaUserShield className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">
              How We Use Cookies?
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We use cookies for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li className="mb-4">
              <strong>Essential Cookies:</strong> These cookies are necessary for the operation of our Site. They enable you to navigate the Site and use its features, such as accessing secure areas.
            </li>
            <li className="mb-4">
              <strong>Performance Cookies:</strong> These cookies collect information about how visitors use our Site, such as which pages are visited most often. This information helps us improve our Site and provide a better user experience.
            </li>
            <li className="mb-4">
              <strong>Functional Cookies:</strong> These cookies allow us to remember choices you make (like your user name or language preferences) and provide enhanced features. For example, they may be used to provide services you have requested.
            </li>
            <li className="mb-4">
              <strong>Targeting/Advertising Cookies:</strong> These cookies are used to deliver advertisements that are relevant to you and your interests. They help us measure the effectiveness of our advertising campaigns.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <FaCookieBite className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">
              Types of Cookies We Use
            </h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700">
            <li className="mb-4">
              <strong>Session Cookies:</strong> These cookies are temporary and are deleted when you close your browser.
            </li>
            <li className="mb-4">
              <strong>Persistent Cookies:</strong> These cookies remain on your device for a set period or until you delete them.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <FaLock className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">
              Your Choices Regarding Cookies
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            You can manage your cookie preferences through your browser settings. Most web browsers allow you to refuse cookies or delete specific cookies. However, if you choose to disable cookies, some parts of our Site may not function properly.
          </p>
        </section>

        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <FaChartLine className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">
              Third-Party Cookies
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We may also use third-party cookies from service providers that help us analyze our Site’s performance or deliver advertisements. These third parties have their own privacy policies, and we encourage you to review them.
          </p>
        </section>

        <p className="text-gray-700 leading-relaxed mb-8">
          We may update this Cookie Policy from time to time. Any changes will be posted on this page with a new effective date. If you have any questions about this Cookie Policy or our practices, please contact us.
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500">
        <p>© 2024 Wincorn Medical. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CookiePolicyPage;
