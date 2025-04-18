import React from 'react';
import { FileText } from 'lucide-react';

// Remarque: Assurez-vous que ces images sont bien présentes dans le dossier assets/images
import imgTP1 from "../assets/images/Logo-ad.png";
import imgTP2 from "../assets/images/qu-est-ce-qu-apache.png";
import imgTP3 from "../assets/images/logo-filtrage-acl.png";
import imgTP4 from "../assets/images/GLPI_logo officiel.jpg";
//import imgTP5 from "../assets/images/hsrp-logo.jpg";
import imgTP6 from "../assets/images/lampos-logo.jpg";
import imgTP7 from "../assets/images/nagios-xi-logo.jpeg";
import imgTP8 from "../assets/images/nat-logo.jpg";
//import imgTP9 from "../assets/images/ospf-rip-logo.jpg";
import imgTP10 from "../assets/images/logo-pfsense.jpg";
import imgTP11 from "../assets/images/vtp-logo.jpg";
import imgTP12 from "../assets/images/logo-vlan.jpg";

const E5Page: React.FC = () => {
  const tpE5 = [
    {
      title: "TP1 - ADDS, DNS, DHCP : Configuration des services d'infrastructure Windows",
      description: "Mise en place et configuration des services d'annuaire Active Directory, DNS et DHCP dans un environnement Windows Server.",
      image: imgTP1
    },
    {
      title: "TP2 - Apache : Création et configuration d'un serveur WEB HTTP",
      description: "Installation et configuration d'un serveur web Apache, avec paramétrage des hôtes virtuels et des règles de sécurité.",
      image: imgTP2
    },
    {
      title: "TP3 - Filtrage ACL : Configuration des règles de sécurité réseau",
      description: "Mise en place de listes de contrôle d'accès (ACL) pour sécuriser et filtrer le trafic réseau.",
      image: imgTP3
    },
    {
      title: "TP4 - GLPI : Mise en place d'un outil de gestion de parc informatique",
      description: "Installation et configuration de l'outil GLPI pour la gestion des actifs informatiques, inventaire et helpdesk.",
      image: imgTP4
    },
    {
      title: "TP5 - HSRP : Configuration de la redondance de passerelle",
      description: "Configuration du protocole HSRP pour assurer la haute disponibilité des passerelles dans un réseau.",
      //image: imgTP5
    },
    {
      title: "TP6 - LAMP OS : Déploiement d'un serveur web complet",
      description: "Installation et configuration d'une pile LAMP (Linux, Apache, MySQL, PHP) pour héberger des applications web.",
      image: imgTP6
    },
    {
      title: "TP7 - NAGIOS XL : Mise en place d'un système de supervision",
      description: "Configuration de Nagios XI pour la supervision réseau et système avec alertes et tableaux de bord.",
      image: imgTP7
    },
    {
      title: "TP8 - NAT : Configuration de la traduction d'adresses",
      description: "Mise en place et configuration de la traduction d'adresses réseau pour permettre le routage entre différents réseaux.",
      image: imgTP8
    },
    {
      title: "TP9 - OSPF-RIP : Configuration des protocoles de routage",
      description: "Configuration des protocoles de routage OSPF et RIP pour optimiser les chemins de communication entre les réseaux.",
      //image: imgTP9
    },
    {
      title: "TP10 - Pfsense LDAP : Intégration d'un pare-feu avec authentification centralisée",
      description: "Configuration de PfSense avec intégration LDAP pour une authentification centralisée des utilisateurs.",
      image: imgTP10
    },
    {
      title: "TP11 - Protocole VTP : Gestion des VLANs sur switches Cisco",
      description: "Configuration du protocole VTP pour la gestion et la propagation des VLANs sur des équipements Cisco.",
      image: imgTP11
    },
    {
      title: "TP12 - VLAN : Segmentation et isolation des réseaux",
      description: "Mise en place de VLANs pour segmenter et isoler le trafic réseau pour améliorer les performances et la sécurité.",
      image: imgTP12
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Épreuve E5
      </h2>
      <div className="grid gap-6">
        {tpE5.map((tp, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-6"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800">{tp.title}</h3>
              <p className="text-gray-600 mt-2">{tp.description}</p>
              <button className="mt-4 flex items-center text-blue-600 hover:text-blue-800">
                <FileText size={18} className="mr-2" />
                Voir le TP
              </button>
            </div>
            <img
              src={tp.image}
              alt={`Illustration de ${tp.title}`}
              className="w-48 h-32 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default E5Page;
