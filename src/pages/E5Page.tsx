import React from "react";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

import imgTP1 from "../assets/images/Logo-ad.png";
import imgTP2 from "../assets/images/qu-est-ce-qu-apache.png";
import imgTP3 from "../assets/images/logo-filtrage-acl.png";
import imgTP4 from "../assets/images/GLPI_logo officiel.jpg";
import imgTP6 from "../assets/images/lampos-logo.jpg";
import imgTP7 from "../assets/images/nagios-xi-logo.jpeg";
import imgTP8 from "../assets/images/nat-logo.jpg";
import imgTP9 from "../assets/images/logo-pfsense.jpg";
import imgTP10 from "../assets/images/vtp-logo.jpg";

const synthèse = "/Tableau de synthèse 2025 BROURI Oussama.pdf";

const E5Page: React.FC = () => {
  const tpE5 = [
    {
      title:
        "TP1 - ADDS, DNS, DHCP : Configuration des services d'infrastructure Windows",
      description:
        "Mise en place et configuration des services d'annuaire Active Directory, DNS et DHCP dans un environnement Windows Server.",
      image: imgTP1,
      link: "/tp1",
    },
    {
      title: "TP2 - Apache : Création et configuration d'un serveur WEB HTTP",
      description:
        "Installation et configuration d'un serveur web Apache, avec paramétrage des hôtes virtuels.",
      image: imgTP2,
      link: "/tp2",
    },
    {
      title: "TP3 - Filtrage ACL : Configuration des règles de sécurité réseau",
      description:
        "Mise en place de listes de contrôle d'accès (ACL) pour sécuriser et filtrer le trafic réseau.",
      image: imgTP3,
      link: "/tp3",
    },
    {
      title:
        "TP4 - GLPI : Mise en place d'un outil de gestion de parc informatique",
      description:
        "Installation et configuration de l'outil GLPI pour la gestion des actifs informatiques, inventaire et helpdesk.",
      image: imgTP4,
      link: "/tp4",
    },
    {
      title: "TP5 - HSRP : Configuration de la redondance de passerelle",
      description:
        "Configuration du protocole HSRP pour assurer la haute disponibilité des passerelles dans un réseau.",
      link: "/tp5",
    },
    {
      title: "TP6 - LAMP OS : Déploiement d'un serveur web complet",
      description:
        "Installation et configuration d'une pile LAMP (Linux, Apache, MySQL, PHP) pour héberger des applications web.",
      image: imgTP6,
      link: "/tp6",
    },
    {
      title: "TP7 - NAGIOS XL : Mise en place d'un système de supervision",
      description:
        "Configuration de Nagios XI pour la supervision réseau et système avec alertes et tableaux de bord.",
      image: imgTP7,
      link: "/tp7",
    },
    {
      title: "TP8 - NAT : Configuration de la traduction d'adresses",
      description:
        "Mise en place et configuration de la traduction d'adresses réseau pour permettre le routage entre différents réseaux.",
      image: imgTP8,
      link: "/tp8",
    },
    {
      title:
        "TP9 - Pfsense : Intégration d'un routeur et pare-feu avec PfSense",
      description:
        "Configuration de PfSense pour gerer les connexions et le pare-feu.",
      image: imgTP9,
      link: "/tp9",
    },
    {
      title: "TP10 - Protocole VTP : Gestion des VLANs sur switches Cisco",
      description:
        "Configuration du protocole VTP pour la gestion et la propagation des VLANs sur des équipements Cisco.",
      image: imgTP10,
      link: "/tp10",
    },
  ];
  const tpEntreprise = [
    {
      title:
        "TP1 - Administration Active Directory sur la plateforme Corporate Directory",
      description:
        "Gestion des utilisateurs sur l’Active Directory interne de Capgemini : création, modification, activation/désactivation des comptes, gestion des dates de péremption. Utilisation d'Intune pour l'administration des postes et utilisateurs.",
      link: "/tpe1", // tu peux créer cette route plus tard si tu veux détailler davantage
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8" style={{ marginTop: "72px" }}>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 font-merriweather">
        Épreuve E5
      </h2>
      <h3 className="text-2xl font-bold text-gray-400 mb-6 font-merriweather">
        TP effectués en cours
      </h3>
      <h4 className="mb-6 font-merriweather">
        Plusieurs de ces TP ont été aussi fait en groupe, sur les serveurs de la
        classe, virtualisés sur Proxmox, mais suite a des problèmes
        d'organisation interne et sur les serveurs, seules des reproductions
        virtuelles sont incluses dans ce portfolio.
      </h4>
      <div className="grid gap-6">
        {tpE5.map((tp, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-6"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800">
                {tp.title}
              </h3>
              <p className="text-gray-600 mt-2">{tp.description}</p>
              <Link
                to={`/e5${tp.link}`}
                className="mt-4 flex items-center text-blue-600 hover:text-blue-800"
              >
                <FileText size={18} className="mr-2" />
                Voir le TP
              </Link>
            </div>
            {tp.image && (
              <img
                src={tp.image}
                alt={`Illustration de ${tp.title}`}
                className="w-48 h-32 object-cover rounded-lg"
              />
            )}
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-bold text-gray-400 mt-6 mb-6 font-merriweather">
        En entreprise
      </h3>
      <div className="grid gap-6">
        {tpEntreprise.map((tp, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-6"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800">
                {tp.title}
              </h3>
              <p className="text-gray-600 mt-2">{tp.description}</p>
              <Link
                to={`/e5${tp.link}`}
                className="mt-4 flex items-center text-blue-600 hover:text-blue-800"
              >
                <FileText size={18} className="mr-2" />
                Voir le détail
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Tableau de Synthèse */}
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow mt-12">
        <h3 className="text-2xl font-bold text-gray-400 mb-6 font-merriweather">
          Tableau de Synthèse
        </h3>
        <p className="text-gray-600 mb-4">
          Vous pouvez consulter et télécharger mon tableau de synthèse des
          compétences acquises durant ma formation à l'EFREI et mon alternance à
          Capgemini.
        </p>
        <div className="flex gap-2 mb-4">
          <a
            href={synthèse}
            download
            className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Télécharger le tableau de synthèse
          </a>
        </div>
      </div>
    </div>
  );
};

export default E5Page;
