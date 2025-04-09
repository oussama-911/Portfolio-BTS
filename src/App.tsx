import { useState, useEffect } from "react";
import {
  Menu,
  Home,
  FileText,
  BookOpen,
  Binary,
  Radio,
  Mail,
  X,
  Rss,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import imgP from "../Images/Logo Brouri.png";
import imgPR from "../Images/moi-alger.png";
import imgAB from "../Images/mosquée.jpg";
import imgTP1 from "../Images/Logo-ad.png";
import imgTP2 from "../Images/qu-est-ce-qu-apache.png";
import imgTP3 from "../Images/logo-filtrage-acl.png";
import imgTP4 from "../Images/GLPI_logo officiel.jpg";
import imgTP5 from "../Images/mosquée.jpg";
import imgTP6 from "../Images/lampos-logo.jpg";
import imgTP7 from "../Images/nagios-xi-logo.jpeg";
import imgTP8 from "../Images/nat-logo.jpg";
import imgTP9 from "../Images/mosquée.jpg";
import imgTP10 from "../Images/logo-pfsense.jpg";
import imgTP11 from "../Images/vtp-logo.jpg";
import imgTP12 from "../Images/logo-vlan.jpg";
import imgplanete from "../Images/planete4k.jpg"
import emailjs from '@emailjs/browser';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Initialiser le worker PDF
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("accueil");
  const [rssItems, setRssItems] = useState([]);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });
  const [glpiPage, setGlpiPage] = useState(1);
  const [sshPage, setSshPage] = useState(1);
  const [glpiTotalPages, setGlpiTotalPages] = useState(0);
  const [sshTotalPages, setSshTotalPages] = useState(0);
  const [glpiScale, setGlpiScale] = useState(1);
  const [sshScale, setSshScale] = useState(1);
  

  const menuItems = [
    { id: "accueil", label: "Accueil", icon: Home },
    { id: "cv", label: "CV", icon: FileText },
    { id: "e5", label: "E5", icon: BookOpen },
    { id: "e6", label: "E6", icon: Binary },
    { id: "veille", label: "Veille technologique", icon: Radio },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    const fetchRssFeed = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://www.artificialintelligence-news.com/feed/"
        );
        const data = await response.json();
        if (data.items) {
          setRssItems(data.items.slice(0, 8));
        }
      } catch (error) {
        console.error("Erreur lors du chargement du flux RSS:", error);
        setRssItems([]);
      }
    };

    if (activePage === "veille") {
      fetchRssFeed();
    }
  }, [activePage]);

  useEffect(() => {
    emailjs.init("K4qDdmVU7SoUjlLJb");
  }, []);

  const tpE5 = [
    {
      title: "TP1 - ADDS, DNS, DHCP : Configuration des services d'infrastructure Windows",
      image: imgTP1
    },
    {
      title: "TP2 - Apache : Création et configuration d'un serveur WEB HTTP",
      image: imgTP2
    },
    {
      title: "TP3 - Filtrage ACL : Configuration des règles de sécurité réseau",
      image: imgTP3
    },
    {
      title: "TP4 - GLPI : Mise en place d'un outil de gestion de parc informatique",
      image: imgTP4
    },
    {
      title: "TP5 - HSRP : Configuration de la redondance de passerelle",
      image: undefined
    },
    {
      title: "TP6 - LAMP OS : Déploiement d'un serveur web complet",
      image: imgTP6
    },
    {
      title: "TP7 - NAGIOS XL : Mise en place d'un système de supervision",
      image: imgTP7
    },
    {
      title: "TP8 - NAT : Configuration de la traduction d'adresses",
      image: imgTP8
    },
    {
      title: "TP9 - OSPF-RIP : Configuration des protocoles de routage",
      image: undefined
    },
    {
      title: "TP10 - Pfsense LDAP : Intégration d'un pare-feu avec authentification centralisée",
      image: imgTP10
    },
    {
      title: "TP11 - Protocole VTP : Gestion des VLANs sur switches Cisco",
      image: imgTP11
    },
    {
      title: "TP12 - VLAN : Segmentation et isolation des réseaux",
      image: imgTP12
    }
  ];

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false });

    try {
      await emailjs.send(
        'service_ivglnf1',
        'template_b6cxrpd',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'K4qDdmVU7SoUjlLJb'
      );

      setFormStatus({ submitting: false, success: true, error: false });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      setFormStatus({ submitting: false, success: false, error: true });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <img
              src={imgP}
              alt="photo"
              style={{
                width: "40px",
                height: "40px",
              }}
            />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="hidden md:flex space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                    activePage === item.id
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 w-full px-4 py-3 rounded-md transition-colors ${
                    activePage === item.id
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main content */}
      <main className="pt-20 min-h-screen">
        {activePage === "accueil" && (
          <div
            className="relative flex items-center justify-center min-h-screen"
            style={{
              backgroundImage: `url(${imgAB})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: "-5rem"
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
            <div className="relative text-center space-y-4 text-white">
              <h1 className="text-4xl md:text-6xl font-bold">Brouri </h1>
              <h2 className="text-2xl md:text-3xl font-medium">Oussama</h2>
              <p className="text-lg">Étudiant en BTS SIO</p>
            </div>
          </div>
        )}

        {activePage === "cv" && (
          <div className="container mx-auto px-4 py-8 flex items-center justify-center flex-col">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="ml-10 mt-10">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Qui suis-je ?
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Passionné d'informatique, je suis actuellement en BTS SIO option SISR, 
                    en alternance, que j'ai effectué chez Capgemini en tant que technicien 
                    support informatique. Cette expérience m’a permis de plonger dans le monde 
                    de l’entreprise et de développer des compétences solides en informatique. <br/><br/>
                    Depuis tout petit, j’ai toujours été attiré par l’informatique, l’horlogerie 
                    et l’automobile, des passions que mon père m’a transmises. Si la mécanique et 
                    l’automobile m’ont été enseignées par lui, l’horlogerie est une passion que 
                    j’ai développée de mon côté, attiré par l'art du détail et de la précision. <br/><br/>
                    Aujourd’hui, je combine ces passions avec mon travail et mes études, et si 
                    l'informatique reste toujours mon domaine de prédilection, j’aime aussi nourrir mon 
                    intérêt pour la mécanique et les montres, des domaines qui m’apportent un 
                    équilibre entre mon côté technique et créatif.

                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src={imgPR}
                    alt="Portrait"
                    className="rounded-lg shadow-lg w-64 h-64 object-cover"
                  />
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
        )}

        {activePage === "e5" && (
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
                    <button className="mt-4 flex items-center text-blue-600 hover:text-blue-800">
                      <FileText size={18} className="mr-2" />
                      Voir le TP
                    </button>
                  </div>
                  <div className="w-48 h-32 flex-shrink-0">
                    {tp.image && (
                      <img
                        src={tp.image}
                        alt={`Illustration ${tp.title}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activePage === "e6" && (
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Épreuve E6
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  TP GLPI avec PROXMOX
                </h3>
                <p className="text-gray-600 mb-4">
                  Installation et configuration de GLPI dans un environnement
                  virtualisé avec PROXMOX.
                </p>
                <div className="h-[600px] border rounded-lg overflow-hidden flex flex-col">
                  <div className="flex-1 overflow-auto">
                    <Document
                      file="/FICHE E6 GLPI.pdf"
                      onLoadSuccess={({ numPages }) => setGlpiTotalPages(numPages)}
                      loading="Chargement du PDF..."
                    >
                      <Page pageNumber={glpiPage} scale={glpiScale} />
                    </Document>
                  </div>
                  <div className="flex justify-center items-center gap-2 p-2 bg-gray-50 border-t">
                    <button
                      onClick={() => setGlpiPage(p => Math.max(1, p - 1))}
                      disabled={glpiPage <= 1}
                      className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-gray-600">
                      Page {glpiPage} sur {glpiTotalPages}
                    </span>
                    <button
                      onClick={() => setGlpiPage(p => Math.min(glpiTotalPages, p + 1))}
                      disabled={glpiPage >= glpiTotalPages}
                      className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <div className="h-4 w-px bg-gray-300 mx-2"></div>
                    <button
                      onClick={() => setGlpiScale(s => Math.min(2, s + 0.1))}
                      disabled={glpiScale >= 2}
                      className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-gray-600">
                      {Math.round(glpiScale * 100)}%
                    </span>
                    <button
                      onClick={() => setGlpiScale(s => Math.max(0.5, s - 0.1))}
                      disabled={glpiScale <= 0.5}
                      className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  TP SSH avec PROXMOX
                </h3>
                <p className="text-gray-600 mb-4">
                  Configuration et sécurisation des connexions SSH dans un
                  environnement PROXMOX.
                </p>
                <div className="h-[600px] border rounded-lg overflow-hidden flex flex-col">
                  <div className="flex-1 overflow-auto">
                    <Document
                      file="/FICHE E6 SSH.pdf"
                      onLoadSuccess={({ numPages }) => setSshTotalPages(numPages)}
                      loading="Chargement du PDF..."
                    >
                      <Page pageNumber={sshPage} scale={sshScale} />
                    </Document>
                  </div>
                  <div className="flex justify-center items-center gap-2 p-2 bg-gray-50 border-t">
                    <button
                      onClick={() => setSshPage(p => Math.max(1, p - 1))}
                      disabled={sshPage <= 1}
                      className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-gray-600">
                      Page {sshPage} sur {sshTotalPages}
                    </span>
                    <button
                      onClick={() => setSshPage(p => Math.min(sshTotalPages, p + 1))}
                      disabled={sshPage >= sshTotalPages}
                      className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <div className="h-4 w-px bg-gray-300 mx-2"></div>
                    <button
                      onClick={() => setSshScale(s => Math.min(2, s + 0.1))}
                      disabled={sshScale >= 2}
                      className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-gray-600">
                      {Math.round(sshScale * 100)}%
                    </span>
                    <button
                      onClick={() => setSshScale(s => Math.max(0.5, s - 0.1))}
                      disabled={sshScale <= 0.5}
                      className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePage === "veille" && (
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Veille technologique - Intelligence Artificielle
            </h2>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Ma méthode de veille
              </h3>
              <div className="flex items-start space-x-2 text-gray-600 mb-4">
                <Rss className="mt-1 flex-shrink-0" size={20} />
                <p>
                  Je réalise ma veille technologique sur l'Intelligence
                  Artificielle en utilisant différentes sources d'information :
                  flux RSS, newsletters spécialisées, et conférences en ligne.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {rssItems.map(
                (
                  item: {
                    link: string;
                    thumbnail: string;
                    title: string;
                    description: string;
                    pubDate: Date;
                  },
                  index
                ) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {item.thumbnail && (
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-4">
                      <h4 className="text-lg font-medium text-gray-800 mb-2 line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {item.description?.replace(/<[^>]*>/g, "")}
                      </p>
                      <span className="text-xs text-gray-500 mt-2 block">
                        {new Date(item.pubDate).toLocaleDateString()}
                      </span>
                    </div>
                  </a>
                )
              )}
            </div>

            {/* Section d'exposé */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Exposé sur les nouveautés du Machine Learning et du Deep Learning
              </h3>
              
              <div className="space-y-8">
                {/* Introduction */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-xl font-semibold text-gray-700 mb-3">
                    Introduction
                  </h4>
                  <p className="text-gray-600">
                    Le Machine Learning et le Deep Learning sont des domaines en constante évolution qui transforment rapidement notre façon d'interagir avec la technologie. Cette présentation explore les dernières avancées et tendances dans ces domaines, en mettant l'accent sur leurs applications pratiques et leurs implications pour l'avenir.
                  </p>
                </div>
                
                {/* Développement */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-gray-700 mb-4">
                    Développement
                  </h4>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h5 className="text-lg font-medium text-gray-700 mb-2">
                      Modèles de langage et génération de texte
                    </h5>
                    <p className="text-gray-600">
                      Les modèles de langage comme GPT-4, Claude et Llama 2 ont révolutionné la génération de texte et la compréhension du langage naturel. Ces modèles sont de plus en plus capables de produire des contenus créatifs, de répondre à des questions complexes et même d'assister dans des tâches de programmation. Les avancées récentes se concentrent sur l'amélioration de la précision, la réduction des hallucinations et l'optimisation des performances.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h5 className="text-lg font-medium text-gray-700 mb-2">
                      Vision par ordinateur et multimodalité
                    </h5>
                    <p className="text-gray-600">
                      Les modèles de vision par ordinateur comme DALL-E 3, Midjourney et Stable Diffusion ont transformé la création d'images. Les systèmes multimodaux qui combinent vision et langage, comme GPT-4V, permettent une compréhension plus riche du monde visuel. Ces technologies trouvent des applications dans la conception, l'art, la médecine et la robotique.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h5 className="text-lg font-medium text-gray-700 mb-2">
                      Apprentissage par renforcement et agents autonomes
                    </h5>
                    <p className="text-gray-600">
                      L'apprentissage par renforcement (RL) continue d'évoluer avec des agents capables d'apprendre des comportements complexes dans des environnements dynamiques. Les agents autonomes basés sur ces techniques peuvent désormais accomplir des tâches sophistiquées, de la planification à la prise de décision en temps réel. Cette technologie est particulièrement prometteuse pour la robotique et l'automatisation.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h5 className="text-lg font-medium text-gray-700 mb-2">
                      Éthique et régulation de l'IA
                    </h5>
                    <p className="text-gray-600">
                      Alors que les systèmes d'IA deviennent plus puissants, les questions éthiques et réglementaires prennent de l'importance. Les débats sur la transparence, les biais, la confidentialité des données et la responsabilité des systèmes d'IA façonnent l'évolution du domaine. Les initiatives comme l'IA responsable et les cadres réglementaires émergents visent à garantir que ces technologies bénéficient à la société tout en minimisant les risques.
                    </p>
                  </div>
                </div>
                
                {/* Conclusion */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-xl font-semibold text-gray-700 mb-3">
                    Conclusion
                  </h4>
                  <p className="text-gray-600">
                    Le Machine Learning et le Deep Learning continuent de progresser à un rythme sans précédent, ouvrant de nouvelles possibilités dans pratiquement tous les domaines. Les avancées en modèles de langage, vision par ordinateur, apprentissage par renforcement et éthique de l'IA transforment notre façon de travailler, de créer et d'interagir avec la technologie. Comprendre ces évolutions est essentiel pour rester à la pointe de l'innovation et anticiper les transformations à venir.
                  </p>
                </div>
                
                {/* Sources */}
                <div className="mt-8">
                  <h4 className="text-xl font-semibold text-gray-700 mb-3">
                    Sources
                  </h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>OpenAI - GPT-4 Technical Report</li>
                    <li>Anthropic - Claude 3 Technical Overview</li>
                    <li>Google Research - PaLM 2 Technical Paper</li>
                    <li>Stanford AI Index Report 2023</li>
                    <li>MIT Technology Review - State of AI 2023</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePage === "contact" && (
          <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <img
                  src={imgplanete}
                  alt="Contact"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Contact
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className={`w-full py-2 px-4 rounded-md text-white transition-colors ${
                      formStatus.submitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {formStatus.submitting ? 'Envoi en cours...' : 'Envoyer'}
                  </button>
                  {formStatus.success && (
                    <p className="text-green-600 text-center mt-4">
                      Message envoyé avec succès !
                    </p>
                  )}
                  {formStatus.error && (
                    <p className="text-red-600 text-center mt-4">
                      Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
