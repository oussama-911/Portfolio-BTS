import React from 'react';
import backgroundImage from "../assets/images/mosquée.jpg";

const HomePage: React.FC = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen" 
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="relative text-center space-y-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold font-merriweather">BROURI</h1>
        <h2 className="text-2xl md:text-3xl font-medium font-merriweather">Oussama</h2>
        <p className="text-lg">Étudiant en BTS SIO SISR</p>
      </div>
    </div>
  );
};

export default HomePage;