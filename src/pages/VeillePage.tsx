import React, { useState, useEffect } from "react";
import { Rss } from "lucide-react";

interface Item {
  link: string;
  thumbnail: string;
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
        const response1 = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://www.artificialintelligence-news.com/feed/"
        );

        const response2 = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://www.sciencedaily.com/rss/computers_math/artificial_intelligence.xml"
        );

        const data1 = await response1.json();
        const data2 = await response2.json();

        if (!response1.ok || !response2.ok) {
          throw new Error("Erreur lors du chargement des flux RSS");
        }

        const combinedData = [...data1.items, ...data2.items]; // Combiner les articles des deux flux

        if (combinedData.length > 0) {
          setRssItems(combinedData.slice(0, 8)); // Limité à 8 articles
        } else {
          setError("Aucun élément trouvé dans les flux RSS");
        }
      } catch (error) {
        console.error("Erreur lors du chargement des flux RSS:", error);
        setError(
          "Erreur lors du chargement des flux RSS. Veuillez réessayer plus tard."
        );
        setRssItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRssFeed();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8" style={{ marginTop: '72px' }}>
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
            Je réalise ma veille technologique sur l'Intelligence Artificielle
            en utilisant différentes sources d'information : flux RSS,
            newsletters spécialisées, et conférences en ligne. Cette approche me
            permet de rester informé des dernières avancées et tendances dans ce
            domaine en constante évolution.
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
          {rssItems.map(
            (
              item: Item,
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
      )}

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
              Le Machine Learning et le Deep Learning sont des domaines en
              constante évolution qui transforment rapidement notre façon
              d'interagir avec la technologie. Cette présentation explore les
              dernières avancées et tendances dans ces domaines, en mettant
              l'accent sur leurs applications pratiques et leurs implications
              pour l'avenir.
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
                Les modèles de langage comme GPT-4, Claude et Llama 2 ont
                révolutionné la génération de texte et la compréhension du
                langage naturel. Ces modèles sont de plus en plus capables de
                produire des contenus créatifs, de répondre à des questions
                complexes et même d'assister dans des tâches de programmation.
                Les avancées récentes se concentrent sur l'amélioration de la
                précision, la réduction des hallucinations et l'optimisation des
                performances.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h5 className="text-lg font-medium text-gray-700 mb-2">
                Vision par ordinateur et multimodalité
              </h5>
              <p className="text-gray-600">
                Les modèles de vision par ordinateur comme DALL-E 3, Midjourney
                et Stable Diffusion ont transformé la création d'images. Les
                systèmes multimodaux qui combinent vision et langage, comme
                GPT-4V, permettent une compréhension plus riche du monde visuel.
                Ces technologies trouvent des applications dans la conception,
                l'art, la médecine et la robotique.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h5 className="text-lg font-medium text-gray-700 mb-2">
                Apprentissage par renforcement et agents autonomes
              </h5>
              <p className="text-gray-600">
                L'apprentissage par renforcement (RL) continue d'évoluer avec
                des agents capables d'apprendre des comportements complexes dans
                des environnements dynamiques. Les agents autonomes basés sur
                ces techniques peuvent désormais accomplir des tâches
                sophistiquées, de la planification à la prise de décision en
                temps réel. Cette technologie est particulièrement prometteuse
                pour la robotique et l'automatisation.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h5 className="text-lg font-medium text-gray-700 mb-2">
                Éthique et régulation de l'IA
              </h5>
              <p className="text-gray-600">
                Alors que les systèmes d'IA deviennent plus puissants, les
                questions éthiques et réglementaires prennent de l'importance.
                Les débats sur la transparence, les biais, la confidentialité
                des données et la responsabilité des systèmes d'IA façonnent
                l'évolution du domaine. Les initiatives comme l'IA responsable
                et les cadres réglementaires émergents visent à garantir que ces
                technologies bénéficient à la société tout en minimisant les
                risques.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">
              Conclusion
            </h4>
            <p className="text-gray-600">
              Le Machine Learning et le Deep Learning continuent de progresser à
              un rythme sans précédent, ouvrant de nouvelles possibilités dans
              pratiquement tous les domaines. Les avancées en modèles de
              langage, vision par ordinateur, apprentissage par renforcement et
              éthique de l'IA transforment notre façon de travailler, de créer
              et d'interagir avec la technologie. Comprendre ces évolutions est
              essentiel pour rester à la pointe de l'innovation et anticiper les
              transformations à venir.
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
  );
};

export default VeillePage;
