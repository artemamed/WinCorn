import { BiMap } from "react-icons/bi";
import { BsEnvelope, BsTelephoneForward } from "react-icons/bs";
import ContactForm from "./form";

export default function Contact() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Office Information Section */}
        <div className="flex flex-col justify-center items-start space-y-8 lg:ml-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-green-600 mb-6 tracking-wide">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            We’d love to hear from you! Reach out to us via the following contact details, or use the form to get in touch.
          </p>
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-center bg-white p-5 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <BiMap className="w-10 h-10 text-green-500" />
              <div className="ml-6">
                <h3 className="text-sm md:text-lg font-bold text-gray-800">KGW Law</h3>
                <p className="text-gray-700 text-xs md:text-md">100 N Central Expy Suite 1310 Chase Bank Building Richardson, TX 75080</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center bg-white p-5 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <BsEnvelope className="w-10 h-10 text-green-500" />
              <div className="ml-6">
                <h3 className="text-sm md:text-lg font-bold text-gray-800">General Enquiries</h3>
                <p className="text-gray-700 text-xs md:text-md">info@kgwlawfirm.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center bg-white p-5 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <BsTelephoneForward className="w-10 h-10 text-green-500" />
              <div className="ml-6">
                <h3 className="text-sm md:text-lg font-bold text-gray-800">Telephone</h3>
                <p className="text-gray-700 text-xs md:text-md">+1 214 630 1221</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
          <ContactForm />
      </div>
    </div>
  );
}
