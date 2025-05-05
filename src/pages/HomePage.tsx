import React from "react";
import backgroundImage from "../assets/images/mosquée.jpg";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
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
          <h1 className="text-4xl md:text-6xl font-bold font-merriweather">
            BROURI
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium font-merriweather">
            Oussama
          </h2>
          <p className="text-lg">Étudiant en BTS SIO SISR</p>
        </div>
      </div>

      {/* BTS SIO Section */}
      <section className="w-full py-24 bg-gray-100">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-5xl font-merriweather">
              Le BTS SIO, qu'est ce que c'est ?
            </h2>
            <p className="mt-4 text-lg text-gray-700 font-merriweather">
              Deux épreuves clés permettent de valider nos compétences en
              informatique dans un cadre professionnel : l'épreuve E5 de mise à
              disposition des services informatiques et l'épreuve E6 du parcours
              professionnel.
            </p>
          </div>

          {/* Grid for E5 and E6 */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Épreuve E5 Section */}
            <div className="rounded-2xl border bg-white p-6 shadow-md transition hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Épreuve E5</h3>
              <p className="mt-2 text-gray-600">
                Épreuve E5 - Parcours de professionnalisation et présentation du
                portfolio
              </p>
              <Link
                to="/e5"
                className="mt-4 inline-block text-sm font-medium text-primary underline underline-offset-4"
              >
                Découvrir l'épreuve E5 →
              </Link>
              <div className="mt-10">
                <h4 className="text-xl font-semibold">
                  Objectifs de l'épreuve <br />
                </h4>
                <p>Dans le cadre de cette épreuve, nous devons :</p>
                <ul className="list-disc pl-6">
                  <br />
                  <li>
                    <strong>Présenter notre parcours</strong> : stages,
                    alternance, missions en entreprise.
                  </li>
                  <li>
                    <strong>Expliquer nos projets</strong> : démontrer les
                    compétences acquises sur des cas concrets.
                  </li>
                  <li>
                    <strong>Mettre en avant notre portfolio</strong> : support
                    principal de l’épreuve, il contient tous les éléments clés.
                  </li>
                  <li>
                    <strong>Relier au référentiel</strong> : montrer les liens
                    entre nos expériences et les compétences du BTS SIO.
                  </li>
                </ul>
                <h4 className="text-xl font-semibold mt-4">
                  Compétences évaluées
                </h4>
                <ul className="list-disc pl-6">
                  <li>
                    Capacité à s’exprimer clairement et professionnellement
                  </li>
                  <li>Présentation structurée des expériences</li>
                  <li>Réflexion critique sur son parcours</li>
                </ul>
              </div>
            </div>

            {/* Épreuve E6 Section */}
            <div className="rounded-2xl border bg-white p-6 shadow-md transition hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Épreuve E6</h3>
              <p className="mt-2 text-gray-600">
                Épreuve E6 - Mise en valeur du parcours professionnel
              </p>
              <Link
                to="/e6"
                className="mt-4 inline-block text-sm font-medium text-primary underline underline-offset-4"
              >
                Découvrir l'épreuve E6 →
              </Link>
              <div className="mt-10">
                <h4 className="text-xl font-semibold">
                  Objectifs de l'épreuve
                </h4>
                <p>Dans le cadre de cette épreuve, nous devons :</p>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Présenter notre parcours professionnel</strong> :
                    Décrire nos missions réalisées au sein de l'entreprise et
                    les compétences développées.
                  </li>
                  <li>
                    <strong>Analyser nos expériences</strong> : Relier nos
                    expériences aux compétences du référentiel du BTS SIO.
                  </li>
                  <li>
                    <strong>Décrire les projets réalisés</strong> : Expliquer
                    les projets réalisés en détaillant les technologies
                    utilisées.
                  </li>
                  <li>
                    <strong>Apporter des preuves</strong> : Utiliser des
                    rapports et des supports pour appuyer notre présentation.
                  </li>
                </ul>
                <h4 className="text-xl font-semibold mt-4">
                  Compétences évaluées
                </h4>
                <ul className="list-disc pl-6">
                  <li>Rédaction de rapports professionnels</li>
                  <li>
                    Capacité à analyser et résoudre des problématiques
                    professionnelles
                  </li>
                  <li>Présentation et communication professionnelle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
