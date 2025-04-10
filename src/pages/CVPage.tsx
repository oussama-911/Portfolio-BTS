import React from 'react';
// Remarque: Vous devrez placer cette image dans le dossier assets/images
import profileImage from "../assets/images/moi-alger.png";

const CVPage: React.FC = () => {
  const experiencesPro = [
    {
      date: "Août 2023 - Novembre 2024",
      titre: "Technicien support informatique",
      entreprise: "Capgemini, Paris",
      description: "Assistance technique et résolution d'incidents via ServiceNow. Gestion des utilisateurs sur l'Active Directory. Installation des postes de travail et configuration. Maintenance OS : Déploiement de patches, dépannage hardware/software (MacOS, Windows) 20+ tickets/jour. Application stricte des politiques de sécurité et conseils aux utilisateurs.",
    },
    {
      date: "Juin 2021 - Août 2022",
      titre: "Commercial",
      entreprise: "STS Construction, Vincennes",
      description: "Développement et fidélisation de la clientèle, Préparation des propositions, rédaction des devis. Gestion de projet IT en équipe.",
    },
  ];

  const formations = [
    {
      date: "2025 - 2026",
      titre: "Licence ASSR (Administration Systèmes et Sécurité des Réseaux)",
      etablissement: "PSTB, Paris",
      description: "Formation en administration des systèmes et sécurité des réseaux",
    },
    {
      date: "2023 - 2025",
      titre: "BTS SIO SISR (Solutions d'Infrastructure, Systèmes et Réseaux)",
      etablissement: "EFREI, Villejuif",
      description: "Formation en solutions d'infrastructure, systèmes et réseaux",
    },
    {
      date: "2023",
      titre: "Baccalauréat",
      etablissement: "Candidat libre",
      description: "Obtention du baccalauréat en candidat libre",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center flex-col" style={{ marginTop: '72px' }}>
      <div className="bg-white rounded-lg shadow-md p-10 mb-10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="ml-10 mt-0 justify-center h-full w-full">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Qui suis-je ?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Passionné d'informatique, je suis actuellement en BTS SIO option SISR, 
              en alternance, que j'ai effectué chez Capgemini en tant que technicien 
              support informatique. Cette expérience m'a permis de plonger dans le monde 
              de l'entreprise et de développer des compétences solides en informatique. <br/><br/>
              Depuis tout petit, j'ai toujours été attiré par l'informatique, l'horlogerie 
              et l'automobile, des passions que mon père m'a transmises. Si la mécanique et 
              l'automobile m'ont été enseignées par lui, l'horlogerie est une passion que 
              j'ai développée de mon côté, attiré par l'art du détail et de la précision. <br/><br/>
              Aujourd'hui, je combine ces passions avec mon travail et mes études, et si 
              l'informatique reste toujours mon domaine de prédilection, j'aime aussi nourrir mon 
              intérêt pour la mécanique et les montres, des domaines qui m'apportent un 
              équilibre entre mon côté technique et créatif.
            </p>
          </div>
          <div className="flex items-center justify-center h-full w-full">
            <div>
            {<img
              src={profileImage}
              alt="Portrait"
              className="rounded-lg shadow-lg w-80 h-80 object-cover"
            />}
            </div>
          </div>
        </div>
      </div>

      {/* Expériences professionnelles */}
      <div className="mb-12 w-1/2 mx-auto">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Expériences professionnelles
        </h3>
        <div className="space-y-8">
          {experiencesPro.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-blue-500"
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
              <div className="mb-1 text-sm font-medium text-blue-600">
                {exp.date}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">
                {exp.titre}
              </h4>
              <div className="text-gray-600 font-medium">
                {exp.entreprise}
              </div>
              <p className="mt-2 text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Formation */}
      <div className="mb-12 w-1/2 mx-auto">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Formation
        </h3>
        <div className="space-y-8">
          {formations.map((formation, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-green-500"
            >
              <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-0"></div>
              <div className="mb-1 text-sm font-medium text-green-600">
                {formation.date}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">
                {formation.titre}
              </h4>
              <div className="text-gray-600 font-medium">
                {formation.etablissement}
              </div>
              <p className="mt-2 text-gray-600">
                {formation.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CVPage;