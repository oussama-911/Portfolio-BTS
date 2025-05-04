import React from "react";
import profileImage from "../assets/images/moi-alger.png";
import MotifBerbere from "../assets/images/motifs/berbere-svg.svg";

const CVPage: React.FC = () => {
  const experiencesPro = [
    {
      date: "Août 2023 - Juillet 2025",
      titre: "Technicien support informatique",
      entreprise: "Capgemini, Paris",
      description: (
        <a>
          Assistance technique et résolution d'incidents via ServiceNow. <br />
          Gestion des utilisateurs sur l'Active Directory. <br />
          Installation des postes de travail et configuration. <br />
          Maintenance OS : Déploiement de patches, dépannage hardware/software
          (MacOS, Windows) 20+ tickets/jour. <br />
          Application stricte des politiques de sécurité et conseils aux
          utilisateurs.
        </a>
      ),
    },
    {
      date: "Juin 2021 - Août 2022",
      titre: "Commercial",
      entreprise: "STS Construction, Vincennes",
      description: (
        <a>
          Développement et fidélisation de la clientèle. <br />
          Préparation des propositions, rédaction des devis. <br />
          Gestion de projet IT en équipe.
        </a>
      ),
    },
  ];

  const formations = [
    {
      date: "2023 - 2025",
      titre: "BTS SIO SISR (Solutions d'Infrastructure, Systèmes et Réseaux)",
      etablissement: "EFREI, Villejuif",
      description: (
        <a>
          Formation en solutions d'infrastructure, systèmes et réseaux. <br />
          Acquisition de compétences techniques : Mise en place, gestion et
          optimisation des infrastructures réseaux et systèmes.
          <br />
          Projets pratiques : Développement de solutions adaptées aux besoins
          des entreprises, configuration de serveurs, gestion des réseaux
          sécurisés.
          <br />
          Compétences acquises : Virtualisation avec VMware, administration de
          serveurs, gestion de la sécurité informatique, mise en place de
          réseaux locaux (LAN) et de réseaux étendus (WAN), gestion des bases de
          données, protocoles réseau (TCP/IP, DNS, DHCP, etc.).
          <br />
        </a>
      ),
    },
    {
      date: "2023",
      titre: "Baccalauréat S",
      etablissement: "Candidat libre",
      description:
        "Baccalauréat Scientifique en candidat libre, spécialité Mathématiques",
    },
  ];

  const competencesTechniques = [
    "Virtualisation (VMware, VirtualBox)",
    "Administration systèmes (Windows, Linux, MacOS)",
    "Réseaux : TCP/IP, DNS, DHCP, LAN/WAN, Cisco",
    "Sécurité informatique",
    "Gestion d'utilisateurs (Active Directory)",
    "Outils ITSM (ServiceNow, GLPI)",
    "Scripting (PowerShell, Bash)",
    "Developpement (Python, C, HTML, CSS)",
  ];

  const competencesPersonnelles = [
    "Esprit d'équipe",
    "Sens de l'analyse",
    "Curiosité technique",
    "Autonomie",
    "Rigueur",
  ];

  const langues = [
    { langue: "Français", niveau: "Langue maternelle" },
    { langue: "Anglais", niveau: "Professionnel" },
    { langue: "Arabe", niveau: "Courant" },
    { langue: "Kabyle", niveau: "Courant" },
    { langue: "Allemand", niveau: "A2" },
  ];

  return (
    <div
      className="container mx-auto px-4 py-8 flex items-center justify-center flex-col"
      style={{ marginTop: "72px" }}
    >
      <div className="bg-white rounded-lg shadow-md p-10 mb-10">
        <div className="grid md:grid-cols-2 gap-8 items-start relative">
          <div className="ml-10 mt-0 justify-center h-full w-full">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 font-merriweather">
              Qui suis-je ?
            </h2>
            <p className="text-gray-600 leading-relaxed mr-20">
              Passionné d'informatique, je suis actuellement en BTS SIO option
              SISR en alternance. Apprentissage que j'ai effectué chez Capgemini
              en tant que technicien support informatique. Cette expérience m'a
              permis de plonger dans le monde de l'entreprise et de développer
              des compétences solides en informatique. <br />
              <br />
              Depuis tout petit, j'ai toujours été attiré par l'informatique,
              l'horlogerie et l'automobile, des passions auxquelles j'ai collé
              directement, attiré par l'art du détail et de la précision. <br />
              <br />
              Aujourd'hui, je combine ces passions avec mon travail et mes
              études, et si l'informatique reste toujours mon domaine de
              prédilection, j'aime aussi nourrir mon intérêt pour beaucoup
              d'autres choses, ce qui me permet d'avoir un bon équilibre entre
              la technique et la créativité.
            </p>
          </div>

          <div className="flex items-center justify-center h-full w-full">
            <div>
              <img
                src={profileImage}
                alt="Portrait"
                className="rounded-lg shadow-lg w-80 h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Expériences professionnelles */}
      <div className="relative w-full mt-20">
        <div className="timeline">
          <img
            src={MotifBerbere}
            alt="Motif berbère gauche"
            className="absolute left-0 bottom-0 transform translate-y-1/2 w-32 h-32 md:w-48 md:h-48"
          />

          <div className="mb-12 w-2/3 mx-auto">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center font-merriweather">
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

          <img
            src={MotifBerbere}
            alt="Motif berbère droit"
            className="absolute right-0 bottom-0 transform translate-y-1/2 w-32 h-32 md:w-48 md:h-48"
          />
        </div>
      </div>

      {/* Formation */}
      <div className="mb-12 w-2/3 mx-auto">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center font-merriweather">
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
              <p className="mt-2 text-gray-600">{formation.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Compétences techniques */}
      <div className="mb-12 w-2/3 mx-auto">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center font-merriweather">
          Compétences techniques
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          {competencesTechniques.map((skill, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Compétences personnelles */}
      <div className="mb-12 w-2/3 mx-auto">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center font-merriweather">
          Compétences personnelles
        </h3>
        <div className="flex flex-wrap gap-4 justify-center text-gray-700">
          {competencesPersonnelles.map((softSkill, index) => (
            <span key={index} className="px-4 py-2 bg-blue-100 rounded-full">
              {softSkill}
            </span>
          ))}
        </div>
      </div>

      {/* Langues */}
      <div className="mb-12 w-2/3 mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center font-merriweather">
          Langues
        </h3>
        <div className="space-y-6">
          {langues.map((langue, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg border border-gray-200"
            >
              <div className="flex items-center gap-4 w-1/3">
                <span className="text-lg font-medium text-gray-800">
                  {langue.langue}
                </span>
              </div>

              <div className="w-2/3">
                <div className="bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{
                      width:
                        langue.niveau === "Langue maternelle"
                          ? "100%"
                          : langue.niveau === "Courant"
                          ? "75%"
                          : langue.niveau === "Professionnel"
                          ? "75%"
                          : langue.niveau === "A2"
                          ? "30%"
                          : "50%"
                    }}
                  ></div>
                </div>
              </div>

              <div className="w-1/3 text-sm text-gray-600 text-center">
                {langue.niveau}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CVPage;
