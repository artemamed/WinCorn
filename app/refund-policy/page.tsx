import React from "react";
import { FiMail, FiGift, FiBox, FiArrowLeftCircle } from "react-icons/fi";

const RefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Container */}
      <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-extrabold text-center text-green-600 mb-8">
          Refund Policy
        </h1>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Thank you for shopping at <strong>Artema Medical Group</strong>. If, for any reason, you are
          not completely satisfied with a purchase, we invite you to review our
          policy on refunds and returns.
        </p>

        {/* Order Cancellation Rights */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <FiArrowLeftCircle className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">
              Your Order Cancellation Rights
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            You are entitled to cancel your order within 7 days without giving any
            reason. The deadline for cancellation is 7 days from the date on which
            you received the goods or a third party you appointed (not the carrier)
            takes possession of the product.
          </p>
          <p className="text-gray-700 leading-relaxed">
            To exercise your right of cancellation, please inform us by:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>
              Email:{" "}
              <a href="mailto:sales@artemamed.com" className="text-blue-500 hover:underline">
                sales@artemamed.com
              </a>
            </li>
          </ul>
        </div>

        {/* Conditions for Returns */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <FiBox className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Conditions for Returns</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            To be eligible for a return, please ensure:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>The goods were purchased in the last 7 days.</li>
            <li>The goods are in the original packaging.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            The following goods cannot be returned:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Custom or personalized goods.</li>
            <li>Goods that deteriorate rapidly or are expired.</li>
            <li>Unsealed goods due to hygiene reasons.</li>
            <li>Goods inseparably mixed with other items after delivery.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to refuse returns that don&apos;t meet these conditions.
          </p>
        </div>

        {/* Returning Goods */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <FiArrowLeftCircle className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Returning Goods</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            You are responsible for the cost and risk of returning the goods to us. Send
            returns to:
          </p>
          <address className="bg-gray-100 p-4 rounded-lg text-gray-800 mb-4">
            Kashmir Rd, Pakka Garha Ghumman, Sialkot, Punjab, 51310
          </address>
          <p className="text-gray-700 leading-relaxed">
            We recommend using an insured, trackable mail service. Refunds cannot be
            issued without proof of return.
          </p>
        </div>

        {/* Gifts */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <FiGift className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Gifts</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            If the goods were marked as a gift and shipped directly to you, you will
            receive a gift credit for the return. If the goods were not marked as a gift,
            the refund will go to the original purchaser.
          </p>
        </div>

        {/* Contact Us */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <FiMail className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions, feel free to contact us at:{" "}
            <a href="mailto:sales@artemamed.com" className="text-blue-500 hover:underline">
              sales@artemamed.com
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-600">
        <p>© 2024 Artema Medical Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RefundPolicy;
