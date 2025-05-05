import React, { useState, useEffect } from "react";
import { Rss } from "lucide-react";
import { Link } from "react-router-dom";

interface Item {
  link: string;
  thumbnail: string | null;
  title: string;
  description: string;
  pubDate: string;
}

const VeillePage: React.FC = () => {
  const [rssItems, setRssItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRssFeed = async () => {
      setLoading(true);
      setError(null);
      try {
        // Flux RSS dynamiques via le proxy AllOrigins
        const rssUrls = [
          "https://www.actuia.com/feed/",
          "https://tpe-intelligence-artificielle.webnode.fr/rss/all.xml",
        ];

        const proxiedUrls = rssUrls.map(
          (url) =>
            `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`
        );

        const responses = await Promise.all(
          proxiedUrls.map((url) => fetch(url))
        );

        if (responses.some((res) => !res.ok)) {
          throw new Error("Un ou plusieurs flux sont inaccessibles.");
        }

        const xmlTexts = await Promise.all(responses.map((res) => res.text()));

        const allItems: Item[] = [];

        xmlTexts.forEach((xmlText) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xmlText, "application/xml");
          const items = xmlDoc.getElementsByTagName("item");

          for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const title =
              item.getElementsByTagName("title")[0]?.textContent || "";
            const link =
              item.getElementsByTagName("link")[0]?.textContent || "";
            const description =
              item.getElementsByTagName("description")[0]?.textContent || "";
            const pubDate =
              item.getElementsByTagName("pubDate")[0]?.textContent || "";
            const thumbnail =
              item
                .getElementsByTagName("media:content")[0]
                ?.getAttribute("url") || null;

            allItems.push({ title, link, description, pubDate, thumbnail });
          }
        });

        // Tri des articles par date décroissante
        const sortedItems = allItems.sort(
          (a, b) =>
            new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
        );

        setRssItems(sortedItems.slice(0, 8)); // Limite à 8 articles
      } catch (err) {
        console.error(err);
        setError("Erreur lors du chargement des flux RSS.");
      } finally {
        setLoading(false);
      }
    };

    fetchRssFeed();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8" style={{ marginTop: "72px" }}>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 font-merriweather">
        Veille technologique - Intelligence Artificielle
      </h2>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Ma méthode de veille
        </h3>
        <div className="flex items-start space-x-2 text-gray-600 mb-4">
          <Rss className="mt-1 flex-shrink-0" size={20} />
          <p>
            Je réalise ma veille technologique sur l'Intelligence Artificielle
            en utilisant différentes sources d'information : flux RSS,
            newsletters spécialisées, et conférences en ligne. Cette approche me
            permet de rester informé des dernières avancées et tendances dans ce
            domaine en constante évolution. Je consulte aussi quand j'en ai
            l'occasion, des documents de recherche, des publications
            scientifiques, et dans la mesure de mes connaissances et quand
            l'accès est libre, des publications arxiv, google scholar et autres.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded shadow-md">
          <p className="text-red-700">{error}</p>
          <p className="text-gray-600 mt-2">
            Vérifiez votre connexion Internet ou réessayez plus tard.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {rssItems.map((item: Item, index) => (
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
          ))}
        </div>
      )}

      {/* Section d'exposé */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Je veille regulièrement sur les nouveautés du Machine Learning et du
          Deep Learning, et de l'Intelligence artificielle.
        </h3>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">
              Introduction
            </h4>
            <p className="text-gray-600">
              L’apprentissage automatique (Machine Learning, ML) est une branche
              de l’intelligence artificielle qui permet aux ordinateurs d’«
              apprendre » des données sans être explicitement programmés pour
              chaque tâche. Comme l’écrivait Arthur Samuel dans les années 1950,
              c’est « le champ d’étude qui donne aux ordinateurs la capacité
              d’apprendre sans être programmés de manière explicite ».
              L’apprentissage profond (Deep Learning, DL) est un sous-domaine du
              ML qui repose sur des réseaux de neurones artificiels profonds
              (comportant de nombreuses couches cachées) pour résoudre des
              problèmes complexes. Ces architectures multicouches permettent aux
              machines de traiter de grandes quantités de données brutes
              (images, sons, textes) et d’en extraire automatiquement les
              caractéristiques les plus pertinentes. Les progrès récents de ces
              techniques – soutenus par l’essor du calcul parallèle (unités GPU)
              et par d’importants jeux de données, ainsi que par des
              investissements massifs des géants de la tech – ont provoqué une
              véritable révolution : la détection d’objets, la reconnaissance
              vocale, la traduction automatique, la santé, l’automobile, les
              médias et bien d’autres domaines exploitent désormais des
              algorithmes d’apprentissage automatique. L’évolution de ces
              domaines est fulgurante. Après une première phase historique de
              recherche (premiers réseaux de neurones en 1980, LSTM au début des
              années 1990), une renaissance a lieu depuis la fin des années 2000
              grâce au calcul intensif et aux grands jeux de données. Par
              exemple, un sondage Deloitte de 2020 rapporte que près des deux
              tiers des entreprises utilisaient déjà le machine learning, et 97%
              comptaient s’y mettre l’année suivante. De nouveaux modèles ont
              repoussé les limites de l’apprentissage profond (par exemple,
              AlexNet en 2012 pour la vision par ordinateur). Cette dynamique
              est accélérée par le perfectionnement continu des architectures
              (empilement de couches, attention multi-têtes, etc.), ainsi que
              par la formation de grandes communautés de chercheurs et
              d’entreprises. Aujourd’hui, le ML et le DL sont au cœur de
              l’innovation technologique mondiale. Il est crucial pour les
              professionnels et chercheurs de comprendre ces fondements pour
              saisir les enjeux actuels et futurs de l’IA.
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
                Les modèles de langage (Large Language Models, LLM) récents ont
                montré des capacités étonnantes dans la compréhension et la
                génération de texte. Parmi les plus avancés figurent GPT-4
                d’OpenAI, Claude d’Anthropic, et Llama 2 de Meta. Par exemple,
                GPT-4 est un modèle multimodal (texte et images) de très grande
                taille qui atteint des performances « niveau humain » sur divers
                tests (il se classe dans le top 10% au barreau américain, contre
                bottom 10% pour GPT-3.5). De même, Claude (versions 3.5 et 3.7)
                peut traiter texte et images et excelle en mathématiques,
                programmation et raisonnement logique. Llama 2, quant à lui, est
                un modèle open-source disponible en 7B, 13B et 70B de
                paramètres, dont les versions « chat » ont été finement ajustées
                (fine-tuning) pour améliorer l’assistance conversationnelle
                (performance comparable à ChatGPT ou PaLM sur certains tests).
                Ces modèles reposent sur l’architecture Transformer, introduite
                en 2017 (article Attention Is All You Need). Un Transformer
                convertit d’abord le texte en une suite de tokens puis applique
                des couches d’attention multi-têtes pour contextualiser chaque
                mot par rapport aux autres. Contrairement aux modèles
                séquentiels classiques (RNN/LSTM), les Transformers traitent
                tous les tokens en parallèle, ce qui accélère drastiquement
                l’entraînement. Chaque tête d’attention calcule une «
                pondération » entre tous les tokens (« requête », « clé », «
                valeur ») et permet au modèle de focaliser son attention sur les
                mots les plus importants de la séquence. Cette structure
                innovante a permis l’entraînement de très grands modèles sur
                d’énormes corpus textuels, d’où l’explosion des capacités des
                LLM modernes. La formation de ces modèles s’effectue en deux
                temps : un pré-entraînement « non supervisé » (modélisation du
                langage sur de vastes données textuelles) suivi d’un ajustement
                fin (fine-tuning) sur des tâches spécifiques ou des demandes de
                dialogues. Pour aligner le comportement des modèles sur des
                valeurs humaines (pertinence, sécurité), on utilise souvent
                l’apprentissage par renforcement à partir du retour humain
                (RLHF). Par exemple, Claude a été entraîné via la Constitutional
                AI (deux phases supervisée et RLHF avec une « constitution » de
                principes de réponse), et OpenAI a passé plusieurs mois à
                aligner GPT-4 en s’appuyant sur les leçons de ChatGPT et d’un
                test d’attaque adversariale. Ces techniques visent à réduire les
                hallucinations (génération de faits faux mais plausibles) et les
                biais problématiques, tout en améliorant la sécurité (refus de
                contenus dangereux). Malgré ces progrès, plusieurs défis
                techniques subsistent. Les modèles massifs consomment énormément
                d’énergie pour l’entraînement ( milliards de tokens et
                CPU/GPU-heures), d’où des efforts pour les rendre plus
                efficients : quantification (passer de 16 bits à 8 ou 4 bits),
                pruning (élaguer les neurones inutiles), distillation de
                connaissances (former des modèles plus petits sur les sorties
                d’un grand modèle), etc. Ces approches visent à diminuer la
                taille et l’empreinte carbone des LLM tout en conservant la
                précision. Par ailleurs, on développe des algorithmes de
                Transformer plus efficients (Longformer, Reformer, etc.) et des
                techniques hybrides (par ex. inférer seulement sur une fenêtre
                locale) pour gérer de longs textes. Enfin, la gestion des biais
                (culturels, politiques, sociaux) et la lutte contre les
                hallucinations restent des sujets de recherche actifs. Des
                travaux récents proposent des « gardes-fous » additionnels
                (vérification de faits, re-génération, etc.) pour améliorer la
                fiabilité des modèles dans les usages critiques. Les
                applications pratiques des modèles de langage sont désormais
                nombreuses. Ils servent d’assistants virtuels conversationnels
                (chatbots intelligents comme ChatGPT, Claude ou Bard) capables
                de répondre aux questions, rédiger des courriels, ou tenir un
                dialogue cohérent. Ils assistent les développeurs en génération
                de code (ex. GitHub Copilot suggère des lignes de code en temps
                réel). Ils automatisent le résumé automatique de textes
                (articles, rapports, emails) et la traduction automatique de
                langues. Ils stimulent la créativité : aide à la rédaction
                littéraire ou journalistique, génération de poèmes, scénarios,
                marketing, etc. (de nombreux écrivains et créateurs utilisent
                aujourd’hui ces outils pour étoffer leurs idées). Plus
                généralement, tout système « centré utilisateur » exploitant du
                langage – service client automatisé, tutoriels interactifs,
                analyses de sentiments sur les réseaux sociaux, aide juridique,
                d’aide à la décision – peut bénéficier de ces technologies.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h5 className="text-lg font-medium text-gray-700 mb-2">
                Vision par ordinateur et multimodalité
              </h5>
              <p className="text-gray-600">
                Les modèles génératifs visuels ont aussi connu une révolution.
                DALL·E 3 (OpenAI), Midjourney et Stable Diffusion sont désormais
                capables de créer des images de qualité remarquable à partir
                d’instructions textuelles. Par exemple, DALL·E 3 « comprend de
                manière significative plus de nuances et de détails » que ses
                prédécesseurs, permettant de traduire facilement des idées
                précises en images visuellement fidèles. Ces systèmes peuvent
                affiner un prompt avec l’utilisateur (par le biais d’un chatbot)
                pour ajuster l’image finale. Les images générées – qu’il
                s’agisse de photographie synthétique, de peinture,
                d’illustration — sont généralement libres de droits pour
                l’utilisateur. Des garde-fous ont été ajoutés (rejet des
                demandes de personnes publiques, diminution des biais de
                représentation, etc.) pour limiter les abus. Les techniques
                sous-jacentes sont variées. Les modèles diffusion – à l’origine
                de Stable Diffusion – fonctionnent en « bruitant »
                progressivement une image et en entraînant un réseau neuronal à
                inverser ce bruit : lors de la génération, on part d’un bruit
                aléatoire, puis on fait de multiples passes de débruitage
                guidées par le texte pour converger vers une image cohérente.
                Cette approche produit des résultats de qualité très élevée et
                offre beaucoup de flexibilité (par exemple la génération
                conditionnelle). Les réseaux GAN (Generative Adversarial
                Networks) sont une autre approche antérieure : un réseau «
                générateur » crée des images à partir de bruit, pendant qu’un
                réseau « discriminateur » apprend à distinguer les vraies images
                des fausses. Les deux réseaux s’affrontent jusqu’à ce que le
                générateur produise des images réalistes. Tandis que les GANs
                ont permis de nombreux progrès en synthèse d’images (voire d’art
                vidéo), les modèles de diffusion ont récemment démontré des
                performances égales ou supérieures en termes de diversité et de
                qualité visuelle. Par ailleurs, les Vision Transformers (ViT)
                ont adapté l’architecture Transformer aux images : l’image est
                découpée en un ensemble de petits patches, transformés en
                vecteurs et traités comme des « tokens » dans un réseau de
                Transformer. Ces ViT offrent aujourd’hui des niveaux de
                précision proches des meilleurs CNN pour la classification et la
                détection d’objets. L’émergence de l’apprentissage multimodal
                est un autre tournant majeur. Des modèles comme CLIP (OpenAI) ou
                Flamingo (DeepMind) apprennent simultanément le langage et la
                vision : CLIP, par exemple, est entraîné sur un très grand
                corpus de paires image-texte pour aligner les représentations
                visuelles et textuelles. Ainsi, on peut par exemple donner à un
                modèle une image et une instruction textuelle, et il comprend le
                contexte pour répondre ou générer du contenu approprié. GPT-4V
                (version vision de GPT-4) étend ce principe : en plus du texte,
                il accepte en entrée des images et peut les analyser dans le
                cadre d’une conversation. L’arrivée de tels modèles multimodaux
                (qui traitent ensemble texte, image et bientôt audio – comme
                annoncé pour GPT-4o) ouvre de nouvelles interfaces utilisateur
                et capacités : par exemple, on peut montrer un plan ou un
                diagramme à l’IA et lui demander d’en commenter la structure ou
                de le modifier textuellement. En pratique, ces avancées ont déjà
                des applications industrielles variées. En santé, le DL en
                imagerie médicale permet de détecter des anomalies (tumeurs,
                fractures, rétinopathies, pneumonie, etc.) souvent aussi bien ou
                mieux qu’un expert humain. De nombreux hôpitaux déploient des
                aides au diagnostic par réseaux de neurones pour accélérer et
                fiabiliser l’interprétation des radiographies, IRM ou scanners.
                En conception et design assistés, on utilise la génération
                d’images pour créer des prototypes de produits, architecturaux
                ou artistiques : un architecte peut esquisser un concept de
                bâtiment en simple texte, et explorer immédiatement plusieurs
                rendus visuels. En robotique, les modèles visuels servent à la
                vision 3D et à la navigation : un robot mobile peut interpréter
                son environnement (reconnaître des objets, estimer des
                distances) grâce à des CNN ou ViT entraînés en grands volumes.
                Enfin, la création artistique connaît un essor inédit :
                illustrateurs, graphistes et designers utilisent DALL·E,
                Midjourney ou Stable Diffusion comme outils collaboratifs pour
                imaginer de nouveaux styles visuels et créer des œuvres
                originales.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h5 className="text-lg font-medium text-gray-700 mb-2">
                Apprentissage par renforcement et agents autonomes
              </h5>
              <p className="text-gray-600">
                L’apprentissage par renforcement (Reinforcement Learning, RL)
                est un paradigme où un agent intelligent apprend à agir dans un
                environnement pour maximiser une récompense. Formellement,
                l’agent observe un état, choisit une action et reçoit une
                récompense (feedback) ; son but est d’optimiser la somme des
                récompenses futures. Ce cadre mathématique (processus de
                décision markovien) est particulièrement adapté aux problèmes de
                contrôle séquentiel (jeux, robotique, etc.). L’intégration du
                deep learning a donné naissance au Deep Reinforcement Learning
                (DRL), où l’agent utilise un réseau de neurones pour estimer sa
                valeur ou sa politique. Le DRL combine ainsi l’apprentissage de
                fonctions de valeur/probabilités (comme en RL classique) avec la
                capacité des réseaux profonds à traiter des entrées complexes
                (pixels d’écran, observations 3D, etc.). Par exemple, la
                combinaison d’un agent RL et d’un réseau convolutif a permis en
                2015 à DeepMind d’apprendre à jouer à une vingtaine de jeux
                Atari (pixel par pixel) avec des performances souvent
                supérieures à celles des humains. Divers algorithmes ont été
                développés pour le RL et DRL : DQN (Deep Q-Network) qui a
                introduit les premiers succès en DRL (Atari), PPO (Proximal
                Policy Optimization) et SAC (Soft Actor-Critic) comptent parmi
                les plus utilisés en pratique. Le RL a généré des systèmes
                autonomes remarquables. Dans les jeux vidéo, DeepMind a repoussé
                les frontières : l’agent AlphaGo a battu le champion du monde du
                jeu de Go en 2016, puis son successeur AlphaZero a atteint le
                niveau grand maître aux échecs, shōgi et Go sans connaissance
                humaine préalable. DeepMind a continué avec AlphaStar, qui en
                2019 a atteint le niveau Grandmaster au jeu de stratégie en
                temps réel StarCraft II, figurant parmi les 0.2% des meilleurs
                joueurs humains. Ces succès démontrent que l’auto-apprentissage
                par des parties jouées contre soi-même (self-play) et un
                entraînement itératif peuvent générer des stratégies inédites.
                Au-delà du jeu, de nombreux robots autonomes exploitent le RL
                pour des tâches réelles. Des bras robots en usine apprennent à
                saisir des objets variés par essais-erreurs ; des véhicules
                autonomes utilisent des techniques connexes pour la prise de
                décision (après apprentissage à partir de simulateurs). Un
                exemple marquant est celui de DeepMind chez Google : des
                algorithmes de DRL ont été utilisés pour optimiser le système de
                refroidissement des centres de données, permettant de réduire de
                40% la consommation énergétique liée à la climatisation (en
                ajustant intelligemment les actionneurs selon la charge). De
                même, les GRÈ (gestion adaptative des réseaux électriques) et
                les stocks en supply chain sont étudiés avec du RL pour
                accroître l’efficacité. En résumé, l’apprentissage par
                renforcement – classic et deep – est la clé de voûte de nombreux
                agents autonomes modernes, du petit drone qui évite les
                obstacles au système complexe de gestion d’infrastructures.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h5 className="text-lg font-medium text-gray-700 mb-2">
                Éthique et régulation de l'IA
              </h5>
              <p className="text-gray-600">
                La montée en puissance de ces technologies pose naturellement
                des questions éthiques et réglementaires. Les modèles IA ont
                montré qu’ils peuvent intégrer des biais sociaux présents dans
                les données (inégalités, stéréotypes), ou générer des contenus
                douteux. Les effets de « boîte noire » des réseaux profonds
                rendent difficile l’explicabilité de leurs décisions. Il devient
                essentiel que ces systèmes restent fiables, équitables et
                transparents : une IA biaisée ou imprévisible peut nuire à la
                vie privée, à la confiance du public, voire entraîner des
                risques légaux coûteux. De nombreux organismes insistent sur ces
                principes : l’OCDE, par exemple, a adopté en 2019 (mise à jour
                2024) une charte de l’IA fondée sur des valeurs telles que la
                transparence, la sécurité, la responsabilité, l’égalité de
                traitement et les droits humains. Ces principes guidant le «
                cadre d’intelligence artificielle digne de confiance » sont
                repris dans les politiques de l’UE, du Conseil de l’Europe, et
                d’autres organisations internationales. Au niveau législatif,
                plusieurs projets émergent. L’AI Act de l’Union européenne, en
                cours d’adoption, propose un classement des usages de l’IA selon
                leur niveau de risque (ex : usages interdits ou à haut risque)
                et impose des obligations de conformité (exigence de robustesse,
                auditabilité, transparence des données d’entraînement, contrôle
                humain) pour les applications critiques. À l’échelle mondiale,
                des initiatives de « IA responsable » prolifèrent : audits
                externes d’algorithmes, normes industrielles, comités d’éthique.
                Les chercheurs insistent aussi sur l’alignement à long terme
                (aligner les objectifs des IA avancées sur les valeurs humaines)
                et sur des « éthiques embarquées » (Constitutional AI, feedback
                humain, simulation adversariale pour éviter les abus). Ainsi, la
                régulation de l’IA s’oriente vers un équilibre entre innovation
                technologique et protection des individus : promouvoir
                l’innovation (par ex. accès ouvert à des modèles comme Llama 2)
                tout en encadrant strictement les usages les plus sensibles.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">
              Conclusion
            </h4>
            <p className="text-gray-600">
              En synthèse, le Machine Learning et le Deep Learning ont
              profondément transformé notre société. Ces techniques
              révolutionnent la manière dont nous construisons des systèmes
              intelligents — de la compréhension du langage naturel à la vision
              par ordinateur, en passant par des agents autonomes robustes —
              ouvrant des perspectives autrefois confinées à la science-fiction.
              Leurs impacts concrets sont déjà massifs (diagnostics médicaux
              plus rapides, assistants virtuels omniprésents, créativité
              augmentée en art et industrie, optimisation des ressources
              énergétiques, etc.). Le défi pour l’avenir est double : d’une
              part, techniquement, il faut poursuivre les progrès (faire évoluer
              les modèles pour qu’ils soient plus scalables, interprétables et
              efficaces sur le plan énergétique, maîtriser les nouveaux formats
              multimodaux, la 5G/6G de l’IA, etc.) ; d’autre part, socialement,
              nous devons assurer une gouvernance responsable de ces outils
              (continuer à travailler sur l’explicabilité, l’élimination des
              biais, la robustesse contre les mauvaises utilisations). Les
              modèles génératifs de nouvelle génération (ayant une compréhension
              contextuelle encore plus fine) se profilent déjà, de même que des
              architectures hybrides alliant symbolique et apprentissage
              profond. Il est donc indispensable de rester informé et critique :
              comprendre en profondeur ces algorithmes et leur évolution permet
              de détecter tôt les risques et de saisir de nouvelles opportunités
              d’innovation. En somme, l’IA évolue à grande vitesse ; une veille
              technologique rigoureuse nous permet de naviguer au mieux dans ce
              paysage en perpétuel changement.
            </p>
          </div>

          {/* Sources */}
          <Link
            to="/contact"
            className="flex gap-2 mb-4 mt-6 font-merriweather"
          >
            Contactez-moi pour obtenir le fichier des sources, ou si vous avez
            une question particuliere, sur le lexique utilisé. Je vous ferai
            parvenir une documentation précise pour la technique.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VeillePage;
