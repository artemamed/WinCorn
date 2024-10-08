import React from "react";
import { FiShield, FiUsers, FiLink, FiFileText } from "react-icons/fi";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="p-10 rounded-lg shadow-xl max-w-4xl mx-auto bg-white">
        <h1 className="text-4xl font-bold mb-6 text-center text-green-600">
          Privacy Policy
        </h1>
        <p className="mb-4 text-gray-700">
          At Wincorn Pharmaceuticals, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website{" "}
          <a href="https://artemamed.com/" className="text-green-500 hover:underline">https://artemamed.com/</a> and interact with our products and services.
        </p>

        <section className="mb-8 border-b pb-4">
          <h2 className="text-2xl font-bold mb-4">
            <FiFileText className="inline-block mr-2 text-green-600" size={24} />
            Information We Collect
          </h2>
          <ul className="list-disc ml-8 mb-4 text-gray-700">
            <li><strong>Personal Information:</strong> This includes information that can identify you, such as your name, email address, phone number, billing address, and shipping address, when you place an order or contact us.</li>
            <li><strong>Non-Personal Information:</strong> This includes data that does not identify you personally, such as browser type, IP address, pages visited on our Site, and the date and time of your visit.</li>
            <li><strong>Health Information:</strong> If you provide information related to health for our products, we will handle this information in accordance with applicable laws and regulations.</li>
          </ul>
        </section>

        <section className="mb-8 border-b pb-4">
          <h2 className="text-2xl font-bold mb-4">
            <FiShield className="inline-block mr-2 text-green-600" size={24} />
            How We Use Your Information
          </h2>
          <ul className="list-disc ml-8 mb-4 text-gray-700">
            <li>To process and fulfill your orders.</li>
            <li>To communicate with you about your account, orders, and inquiries.</li>
            <li>To improve our products and services.</li>
            <li>To send you marketing communications, if you have opted in to receive them.</li>
            <li>To comply with legal obligations and protect our rights.</li>
          </ul>
        </section>

        <section className="mb-8 border-b pb-4">
          <h2 className="text-2xl font-bold mb-4">
            <FiUsers className="inline-block mr-2 text-green-600" size={24} />
            Disclosure of Your Information
          </h2>
          <ul className="list-disc ml-8 mb-4 text-gray-700">
            <li><strong>With Service Providers:</strong> We may share your information with third-party vendors who assist us in operating our Site, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.</li>
            <li><strong>For Legal Reasons:</strong> We may disclose your information to comply with applicable laws, regulations, or legal requests, or to protect our rights, privacy, safety, or property, or that of others.</li>
          </ul>
        </section>

        <section className="mb-8 border-b pb-4">
          <h2 className="text-2xl font-bold mb-4">
            <FiShield className="inline-block mr-2 text-green-600" size={24} />
            Security of Your Information
          </h2>
          <p className="mb-4 text-gray-700">
            We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="mb-8 border-b pb-4">
          <h2 className="text-2xl font-bold mb-4">
            <FiFileText className="inline-block mr-2 text-green-600" size={24} />
            Your Rights
          </h2>
          <ul className="list-disc ml-8 mb-4 text-gray-700">
            <li>The right to access and receive a copy of your personal information.</li>
            <li>The right to request correction of any inaccuracies in your personal information.</li>
            <li>The right to request deletion of your personal information.</li>
            <li>The right to opt-out of marketing communications.</li>
          </ul>
        </section>

        <section className="mb-8 border-b pb-4">
          <h2 className="text-2xl font-bold mb-4">
            <FiLink className="inline-block mr-2 text-green-600" size={24} />
            Third-Party Websites
          </h2>
          <p className="mb-4 text-gray-700">
            Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            <FiFileText className="inline-block mr-2 text-green-600" size={24} />
            Changes to This Privacy Policy
          </h2>
          <p className="mb-4 text-gray-700">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically for any updates.
          </p>
        </section>

        <footer className="bg-gray-200 py-4 text-center rounded-lg">
          <p className="text-sm text-gray-700">
            If you have any questions about this Privacy Policy or our practices, please contact us.
          </p>
          <p className="text-sm text-gray-700">
            <a
              href="mailto:sales@artemamed.com"
              className="text-green-500 hover:underline"
            >
              sales@artemamed.com
            </a>
            <br />
            +(92)4232361469
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
