import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-[6rem]">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-green-500 text-center mb-6">
          Terms and Conditions
        </h1>

        {/* General Section */}
        <div className="text-lg leading-relaxed text-gray-700">
          <h2 className="text-2xl font-semibold text-green-500 mb-3">General:</h2>
          <p className="mb-6">
            All products and services of Wincorn Medical are exclusively subject to the following terms and
            conditions. If the customer’s terms and conditions differ from these, they will not be accepted.
          </p>

          {/* Terms List */}
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-3 text-green-500">✔</span>
              <p>
                All offers are invalid unless they are agreed upon in written form. Orders shall only be processed
                by our company after confirmation by written order.
              </p>
            </li>

            <li className="flex items-start">
              <span className="mr-3 text-green-500">✔</span>
              <p>
                Wincorn Medical is not responsible for any mistake or negligence regarding the
                information provided by the customer.
              </p>
            </li>

            <li className="flex items-start">
              <span className="mr-3 text-green-500">✔</span>
              <p>
                Any information or data related to the company serves only as a guideline and will become part
                of the contract after an agreement from both parties in the form of written consent.
              </p>
            </li>

            <li className="flex items-start">
              <span className="mr-3 text-green-500">✔</span>
              <p>
                There will be no guarantee regarding the shelf-life of the products unless it is officially stated in
                the product description.
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
