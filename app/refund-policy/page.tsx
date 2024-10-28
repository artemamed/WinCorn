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
          At <strong>Wincorn Medical</strong>, If, we are committed to providing high-quality surgical instruments. If you are
          not completely satisfied with your purchase, we offer a refund policy to ensure your confidence in our
          products.
        </p>

        {/* Order Cancellation Rights */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <FiArrowLeftCircle className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">
              Eligibility for Refund:
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Refund requests can be made within 7 days of the purchase date. Products must be in their
            original condition, unused, and in the original packaging. Proof of purchase (invoice or receipt) is
            required for all refund requests.
          </p>

        </div>

        {/* Conditions for Returns */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <FiBox className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Refund Process:</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            To initiate a refund, please contact our customer service team. Provide your order number and
            reason for the refund. Our team will review your request and may ask for additional information
            or photos of the product. Once your refund request is approved, we will issue a return
            authorization and provide instructions for returning the item.
          </p>

        </div>

        {/* Returning Goods */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <FiArrowLeftCircle className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Return Shipping:</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Customers are responsible for return shipping costs unless the item is defective or the wrong
            item was sent. We recommend using a trackable shipping service or purchasing shipping
            insurance for items, as we cannot guarantee that we will receive your returned item.
          </p>
        </div>

        {/* Gifts */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <FiGift className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Refund Timeline:</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Once we receive the returned item, we will process your refund within 5-10 business days.
            Refunds will be issued to the original payment method used at the time of purchase.
          </p>
        </div>

        {/* Contact Us */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <FiMail className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Defective or Damaged Products:</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            If you receive a defective or damaged product, please contact us immediately. We will arrange
            for a replacement or full refund at no additional cost.

          </p>
        </div>

        
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <FiMail className="text-green-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Non-Refundable Items:</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wincorn Medical reserves the right to modify this refund policy at any time. Changes will be
            posted on our website, and the revised policy will apply to all purchases made after the effective date.

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
