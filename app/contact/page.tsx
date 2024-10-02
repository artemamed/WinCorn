import { BiMap } from "react-icons/bi";
import { BsEnvelope, BsTelephoneForward } from "react-icons/bs";
import ContactForm from "./form";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto p-12">
      {/* Information of the office */}
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold text-green-600 py-4">
          Head Office
        </h1>
        <div className="flex flex-col items-center">
          <div className="flex items-center py-2 bg-white rounded-lg shadow-md p-4 mb-4">
            <BiMap className="w-10 h-10 text-green-500" />
            <span className="text-gray-700 font-semibold ml-3">
              1135 3rd Ave SW Carmel, IN 46032 USA
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-10">
            <div className="flex items-center space-x-3 bg-white rounded-lg shadow-md p-4">
              <BsEnvelope className="w-10 h-10 text-green-500" />
              <div className="flex flex-col text-gray-800">
                <span className="font-bold text-lg">GENERAL ENQUIRIES</span>
                <span className="text-sm md:text-md">
                  chris.mattson@dynamicmed.net
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white rounded-lg shadow-md p-4">
              <BsTelephoneForward className="w-10 h-10 text-green-500" />
              <div className="flex flex-col text-gray-800">
                <span className="font-bold text-lg">TELEPHONE NUMBER</span>
                <span className="text-sm md:text-md">+1 317 918 2825</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form title */}
      

      <div className="flex justify-center items-center">
        <ContactForm />
      </div>
    </div>
  );
}
