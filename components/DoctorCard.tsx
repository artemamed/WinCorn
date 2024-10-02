import Image from 'next/image';
import React from 'react';
import { IconType } from 'react-icons';

interface DoctorCardProps {
    image: string;
    name: string;
    specialty: string;
    socials: { icon: IconType; link: string }[];
}

const DoctorCard: React.FC<DoctorCardProps> = ({ image, name, specialty, socials }) => {
    return (
        <div className="text-center rounded-lg shadow-lg overflow-hidden cursor-pointer transition duration-300 hover:shadow-xl">
            <div className="relative overflow-hidden">
                <Image src={image} alt={name} width={400} height={256} className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-4 bg-white/70 translate-y-full transition-transform duration-300 hover:translate-y-0">
                    {socials.map((social, index) => (
                        <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                            <social.icon className="text-xl text-gray-700 hover:text-teal-500 transition" />
                        </a>
                    ))}
                </div>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-gray-800">{name}</h4>
            <p className="mb-4 text-gray-600">{specialty}</p>
        </div>
    );
};

export default DoctorCard;
