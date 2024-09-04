// import React from 'react';
// import ImageCarousel from './ImageCorosel2'; // Assuming this component displays a carousel of images
// import projectBanner from '../Assets/rohanlogo.png'; // Example image path

// const Project2 = () => {
//   return (
//     <div className="max-w-7xl mx-auto p-8 bg-blue-100 rounded-lg shadow-lg">
//       {/* Project Banner */}
//       <div className="mb-8 flex justify-center">
//         <img src={projectBanner} alt="Project Banner" className="w-auto h-32 object-contain" />
//       </div>

//       {/* Project Details */}
//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-bold text-blue-900 mb-3">
//           ⚜️ ROHAN INFRA BUILDERS and DEVELOPERS ⚜️
//         </h1>
//         <h2 className="text-3xl font-semibold text-blue-700 mb-3">
//           🏡 ROHAN HILL VIEW ENCLAVE 🏡
//         </h2>
//         <p className="text-lg text-gray-700 mb-2">
//           *Location:* Devanahalli Main Road, opposite the Honda Bike Showroom 🚗
//         </p>
//         <p className="text-lg text-gray-700 mb-2">
//           *Approval:* ✅ BIAAPA
//         </p>
//         <p className="text-lg text-gray-700 mb-2">
//           *Price:* ₹4750/sqft
//         </p>
//         <p className="text-lg text-gray-700 mb-2">
//           *Total Area:* 2 Acres
//         </p>
//         <p className="text-lg text-gray-700 mb-2">
//           *Total Plots:* 29
//         </p>
//       </div>

//       {/* Amenities Section */}
//       <div className="mb-10">
//         <h3 className="text-2xl font-semibold text-blue-900 mb-4">✨ Amenities ✨</h3>
//         <ul className="list-disc list-inside text-gray-700 space-y-2">
//           <li>*Secure Gated Community* 🔒</li>
//           <li>*Spacious Roads* 🚧</li>
//           <li>*24/7 Security Surveillance* 📹</li>
//           <li>*Abundant Water Supply* 💧</li>
//           <li>*Underground Electrical Systems* ⚡</li>
//           <li>*Rainwater Harvesting* 🌧️</li>
//           <li>*Children's Play Area* 🛝</li>
//         </ul>
//       </div>

//       {/* Nearby Locations Section */}
//       <div className="mb-10">
//         <h3 className="text-2xl font-semibold text-blue-900 mb-4">📍 Conveniently Located Near:</h3>
//         <ul className="list-disc list-inside text-gray-700 space-y-2">
//           <li>NH-44 Devanahalli Highway 🛣️</li>
//           <li>Kempegowda International Airport ✈️</li>
//           <li>Devanahalli Town 🏘️</li>
//           <li>D Mart 🛒</li>
//           <li>Devanahalli Fort 🏰</li>
//           <li>Club Cabana 🏌️‍♂️</li>
//           <li>Akash Hospital 🏥</li>
//           <li>Ancient Wisdom International School 📚</li>
//           <li>Govt ITI College 🎓</li>
//           <li>Nivasa Resort 🏖️</li>
//         </ul>
//       </div>

//       {/* Registration and Payment Details */}
//       <div className="mb-10 text-center">
//         <h3 className="text-2xl font-semibold text-blue-900 mb-4">🔑 Ready for Registration & Construction 🔑</h3>
//         <p className="text-lg text-gray-700 mb-2">
//           *Bank Loan:* Approved by all leading banks 🏦
//         </p>
//         <p className="text-lg text-gray-700 mb-2">
//           *Flexible Payment Options:* Cheque, Cash, & Online 💳
//         </p>
//         <p className="text-lg text-gray-700">*For More Details Contact:* 📲</p>
//       </div>

//       {/* Image Carousel */}
//       <div className="mb-10 text-center">
//         <ImageCarousel />
//       </div>
//     </div>
//   );
// };

// export default Project2;

import React from 'react';
import ImageCarousel from './ImageCorosel2'; // Assuming this component displays a carousel of images
import projectBanner from '../Assets/rohanlogo.png'; // Example image path

const Project2 = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-out">
      {/* Project Banner */}
      <div className="mb-8 flex justify-center">
        <img
          src={projectBanner}
          alt="Project Banner"
          className="w-auto h-32 object-contain animate-pulse"
        />
      </div>

      {/* Project Details */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-3 animate-fade-in-up">
          ⚜️ ROHAN INFRA BUILDERS and DEVELOPERS ⚜️
        </h1>
        <h2 className="text-3xl font-semibold text-blue-700 mb-3 animate-fade-in-up">
          🏡 ROHAN HILL VIEW ENCLAVE 🏡
        </h2>
        <p className="text-lg text-gray-700 mb-2 animate-fade-in-up">
          <strong>Location:</strong> Devanahalli Main Road, opposite the Honda Bike Showroom 🚗
        </p>
        <p className="text-lg text-gray-700 mb-2 animate-fade-in-up">
          <strong>Approval:</strong> ✅ BIAAPA
        </p>
        <p className="text-lg text-gray-700 mb-2 animate-fade-in-up">
          <strong>Price:</strong> ₹4750/sqft
        </p>
        <p className="text-lg text-gray-700 mb-2 animate-fade-in-up">
          <strong>Total Area:</strong> 2 Acres
        </p>
        <p className="text-lg text-gray-700 mb-2 animate-fade-in-up">
          <strong>Total Plots:</strong> 29
        </p>
      </div>

      {/* Amenities Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4 animate-slide-in-left">✨ Amenities ✨</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-5 animate-slide-in-left">
          {[
            { text: "Secure Gated Community 🔒", animationDelay: "delay-150" },
            { text: "Spacious Roads 🚧", animationDelay: "delay-300" },
            { text: "24/7 Security Surveillance 📹", animationDelay: "delay-450" },
            { text: "Abundant Water Supply 💧", animationDelay: "delay-600" },
            { text: "Underground Electrical Systems ⚡", animationDelay: "delay-750" },
            { text: "Rainwater Harvesting 🌧️", animationDelay: "delay-900" },
            { text: "Children's Play Area 🛝", animationDelay: "delay-1050" }
          ].map((item, index) => (
            <li key={index} className={`hover:text-blue-600 transition-colors duration-300 ${item.animationDelay}`}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Nearby Locations Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4 animate-slide-in-right">📍 Conveniently Located Near:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-5 animate-slide-in-right">
          {[
            { text: "NH-44 Devanahalli Highway 🛣️", animationDelay: "delay-150" },
            { text: "Kempegowda International Airport ✈️", animationDelay: "delay-300" },
            { text: "Devanahalli Town 🏘️", animationDelay: "delay-450" },
            { text: "D Mart 🛒", animationDelay: "delay-600" },
            { text: "Devanahalli Fort 🏰", animationDelay: "delay-750" },
            { text: "Club Cabana 🏌️‍♂️", animationDelay: "delay-900" },
            { text: "Akash Hospital 🏥", animationDelay: "delay-1050" },
            { text: "Ancient Wisdom International School 📚", animationDelay: "delay-1200" },
            { text: "Govt ITI College 🎓", animationDelay: "delay-1350" },
            { text: "Nivasa Resort 🏖️", animationDelay: "delay-1500" }
          ].map((item, index) => (
            <li key={index} className={`hover:text-blue-600 transition-colors duration-300 ${item.animationDelay}`}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Registration and Payment Details */}
      <div className="mb-10 text-center">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4 animate-fade-in-down">🔑 Ready for Registration & Construction 🔑</h3>
        <p className="text-lg text-gray-700 mb-2 animate-fade-in-down">
          <strong>Bank Loan:</strong> Approved by all leading banks 🏦
        </p>
        <p className="text-lg text-gray-700 mb-2 animate-fade-in-down">
          <strong>Flexible Payment Options:</strong> Cheque, Cash, & Online 💳
        </p>
        <p className="text-lg text-gray-700 animate-fade-in-down">
          <strong>For More Details Contact:</strong> 📲
        </p>
      </div>

      {/* Image Carousel */}
      <div className="mb-10 text-center animate-fade-in-up">
        <ImageCarousel />
      </div>
    </div>
  );
};

export default Project2;

