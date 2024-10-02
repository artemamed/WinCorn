import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-[6rem]">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-green-600 text-center mb-6">
          Terms and Conditions
        </h1>

        {/* General Section */}
        <div className="text-lg leading-relaxed text-gray-700">
          <h2 className="text-2xl font-semibold text-green-500 mb-3">General:</h2>
          <p className="mb-6">
            All products and services of Artema Medical Solutions and its
            partners are exclusively subject to the following general terms and
            conditions: If the customer’s general terms and conditions differ
            from these, they will not be accepted in any way.
          </p>

          {/* Terms List */}
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-3 text-green-500">✔</span>
              <p>
                All of our offers are unbinding unless they are agreed upon in
                written form. Orders shall be subjected to our company after a
                written order confirmation. Artema is not responsible for any
                mistake regarding the information provided by the customer.
              </p>
            </li>

            <li className="flex items-start">
              <span className="mr-3 text-green-500">✔</span>
              <p>
                Any data and information related to company products and
                services serve solely as a guideline and become part of the
                contract only in the case of written consent, which is agreed
                upon by both the company and the customer.
              </p>
            </li>

            <li className="flex items-start">
              <span className="mr-3 text-green-500">✔</span>
              <p>
                The quality and shelf-life of the product shall only be
                guaranteed if they are already stated in the product
                description.
              </p>
            </li>
          </ul>
        </div>

        {/* Call to Action or Additional Info */}
        <div className="mt-10 text-center">
          <p className="text-gray-500">
            Please make sure to read our terms carefully before proceeding with
            any transactions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
