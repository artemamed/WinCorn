import React from 'react';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, link }) => {
  return (
    <div className="p-8 text-center rounded-lg shadow-lg cursor-pointer transition duration-300 hover:shadow-xl bg-white">
      <span className="inline-block mb-4 p-4 text-4xl text-teal-600 bg-teal-100 rounded-full transition duration-300 hover:bg-teal-600 hover:text-teal-100">
        <Icon />
      </span>
      <h4 className="mb-2 text-lg font-semibold text-gray-800">{title}</h4>
      <p className="mb-4 text-gray-600">{description}</p>
      <a href={link} className="text-teal-500 hover:text-teal-700 transition">
        Learn More
      </a>
    </div>
  );
};

export default ServiceCard;
