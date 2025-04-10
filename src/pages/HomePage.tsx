import React from 'react';
// Remarque: Vous devrez placer cette image dans le dossier assets/images
import backgroundImage from "../assets/images/mosquée.jpg";

const HomePage: React.FC = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen" 
      style={{
        // Remplacez cette couleur de fond par l'image quand elle sera disponible
        backgroundImage: `url(${backgroundImage})`,
        //backgroundColor: "#1a365d",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="relative text-center space-y-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Brouri </h1>
        <h2 className="text-2xl md:text-3xl font-medium">Oussama</h2>
        <p className="text-lg">Étudiant en BTS SIO</p>
      </div>
    </div>
  );
};

export default HomePage;