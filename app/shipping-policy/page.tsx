import React from "react";
import { FiMail, FiTruck, FiMapPin, FiPackage, FiXCircle, FiAlertCircle, FiCheckCircle } from "react-icons/fi";

const ShippingPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Container */}
      <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-green-600 text-center mb-8">
          Shipping Policy
        </h1>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          At Wincorn Pharmaceuticals, we strive to provide timely and reliable shipping for our surgical
          instruments and pharmaceutical products. Below are the details of our shipping policy.
        </p>

        {/* Section 1: Shipping */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <FiTruck className="text-green-500 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-800"> SHIPPING</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            All orders are processed within 1-3 business days. Orders placed on weekends or holidays will
            be processed on the next business day.
          </p>
        </div>

        {/* Section 2: Confirmation Email */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <FiMail className="text-green-500 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-800"> CONFIRMATION EMAIL</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            You will receive a confirmation email once your order has been processed and shipped.
          </p>
        </div>

        {/* Section 3: Shipping Costs */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <FiPackage className="text-green-500 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-800"> SHIPPING COSTS</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Shipping costs are calculated at checkout based on the weight of the items and the selected
            shipping method.
          </p>
        </div>

        {/* Section 4: Tracking Number */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <FiCheckCircle className="text-green-500 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-800"> TRACKING NUMBER</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Once your order has shipped, you will receive a tracking number via email. You can use this
            tracking number to monitor the status of your shipment.
          </p>
        </div>

        {/* Section 5: Delivery Issues */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <FiXCircle className="text-green-500 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-800"> DELIVERY ISSUES</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            If you experience any issues with your delivery (e.g., delayed, lost, or damaged items), please
            contact our customer service team within 7 days of the expected delivery date. We will work to
            resolve the issue promptly.
          </p>
        </div>

        {/* Section 6: Address Changes */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <FiMapPin className="text-green-500 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-800"> ADDRESS CHANGES</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            If you need to change your shipping address after placing an order, please contact us as soon as
            possible. Changes can only be made before the order has been processed.
          </p>
        </div>

        {/* Section 7: Policy Modifications */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <FiAlertCircle className="text-green-500 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-800"> POLICY MODIFICATIONS</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wincorn Pharmaceuticals reserves the right to modify this shipping policy at any time. Any changes will
            be posted on our website, and the revised policy will apply to all orders placed after the effective date.
          </p>
        </div>

        {/* Section 8: Contact Information */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <FiMail className="text-green-500 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-800"> CONTACT INFORMATION</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            For any questions or concerns, please reach out to us at: <br />
            Email:{" "}
            <a href="mailto:sales@wincornpharma.com" className="text-blue-500 underline">
              sales@wincornpharma.com
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-600">
        <p>© 2024 Wincorn Pharmaceuticals. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ShippingPolicy;
