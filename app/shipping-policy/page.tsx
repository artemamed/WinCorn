import React from "react";
import { FiMail, FiTruck, FiMapPin, FiPackage, FiRefreshCw, FiXCircle, FiAlertCircle, FiCheckCircle } from "react-icons/fi";

const ShippingPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Container */}
      <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-green-600 text-center mb-8">
          Shipping Policy
        </h1>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Artema is committed to excellence and the full satisfaction of our
          customers. We proudly offer reliable shipping services and are doing
          everything in our power to get your order to you as soon as possible.
          Please consider any holidays that might impact delivery times.
        </p>

        {/* Section 1: Shipping */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <FiTruck className="text-green-500 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-800"> SHIPPING</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            All orders for our products are processed and shipped out within 4-10
            business days. Orders are not shipped or delivered on weekends or holidays.
            If there is a significant delay in the shipment of your order, we will
            contact you via email.
          </p>
        </div>

        {/* Section 2: Wrong Address Disclaimer */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <FiMapPin className="text-green-500 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-800">
                WRONG ADDRESS DISCLAIMER
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            It is the customer’s responsibility to ensure the shipping address is
            correct. If you believe you have provided an incorrect shipping address,
            please contact us immediately.
          </p>
        </div>

        {/* Section 3: Undeliverable Orders */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <FiPackage className="text-green-500 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-800">
               UNDELIVERABLE ORDERS
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Orders returned as undeliverable due to incorrect shipping information
            may be subject to a restocking fee.
          </p>
        </div>

        {/* Section 4: Lost/Stolen Packages */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <FiXCircle className="text-green-500 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-800">
               LOST/STOLEN PACKAGES
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Artema is not responsible for lost or stolen packages. If your tracking
            information states that your package was delivered, but you have not
            received it, please report to local authorities.
          </p>
        </div>

        {/* Section 5: Return Request Days */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <FiRefreshCw className="text-green-500 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-800">
               RETURN REQUEST DAYS
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            You can return items within 3 days of receipt. The items must be returned
            unopened and unused.
          </p>
        </div>

        {/* Section 6: Out of Stock Item Process */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <FiAlertCircle className="text-green-500 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-800">
               OUT OF STOCK ITEM PROCESS
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            In case of out-of-stock items, Artema will wait for all items to be in
            stock before dispatching.
          </p>
        </div>

        {/* Section 7: Import Duty and Taxes */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <FiCheckCircle className="text-green-500 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-800">
               IMPORT DUTY AND TAXES
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Taxes and import duties can be pre-paid and included in the price of your
            order. For more information, visit{" "}
            <a href="https://artemamed.com" className="text-blue-500 underline">
              Artema
            </a>.
          </p>
        </div>

        {/* Section 8: Acceptance */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <FiCheckCircle className="text-green-500 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-800"> ACCEPTANCE</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            By accessing our site and placing an order, you agree to the terms of
            this Shipping Policy.
          </p>
        </div>

        {/* Section 9: Contact Information */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <FiMail className="text-green-500 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-800"> CONTACT INFORMATION</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            For any questions or concerns, please reach out to us at: <br />
            Email:{" "}
            <a href="mailto:sales@artemamed.com" className="text-blue-500 underline">
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

export default ShippingPolicy;
