import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Link } from "react-router-dom";

// Initialiser le worker PDF
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const E6Page: React.FC = () => {
  const [glpiPage, setGlpiPage] = useState(1);
  const [sshPage, setSshPage] = useState(1);
  const [glpiTotalPages, setGlpiTotalPages] = useState(0);
  const [sshTotalPages, setSshTotalPages] = useState(0);
  const [glpiScale, setGlpiScale] = useState(1);
  const [sshScale, setSshScale] = useState(1);

  // Pour les PDFs, vous devriez les placer dans le dossier public
  // Les chemins de PDFs sont relatifs au dossier public
  const glpiPdfPath = "/FICHE E6 GLPI.pdf";
  const sshPdfPath = "/FICHE E6 SSH.pdf";

  return (
    <div className="container mx-auto px-4 py-8" style={{ marginTop: "72px" }}>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 font-merriweather">
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
          <div className="flex gap-2 mb-4">
            <a
              href={glpiPdfPath}
              download
              className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Télécharger le PDF
            </a>
            <Link
              to="/e6/glpi"
              className="px-3 py-1.5 text-sm bg-gray-800 text-white rounded hover:bg-gray-900 transition"
            >
              Voir la documentation technique
            </Link>
            <Link
              to="/e6/glpi/pres"
              className="px-3 py-1.5 text-sm bg-gray-800 text-white rounded hover:bg-gray-900 transition"
            >
              Voir la présentation
            </Link>
          </div>

          <div className="h-[600px] border rounded-lg overflow-hidden flex flex-col">
            <div className="flex-1 overflow-auto bg-gray-100 flex items-center justify-center">
              <Document
                file={glpiPdfPath}
                onLoadSuccess={({ numPages }) => setGlpiTotalPages(numPages)}
                loading={
                  <div className="text-gray-500">Chargement du PDF...</div>
                }
                error={
                  <div className="text-red-500 p-4">
                    Erreur: Le PDF n'a pas pu être chargé. Assurez-vous qu'il
                    existe dans le dossier public.
                  </div>
                }
              >
                <Page
                  pageNumber={glpiPage}
                  scale={glpiScale}
                  error={
                    <div className="text-red-500">
                      Erreur lors du chargement de la page
                    </div>
                  }
                />
              </Document>
            </div>
            <div className="flex justify-center items-center gap-2 p-2 bg-gray-50 border-t">
              <button
                onClick={() => setGlpiPage((p) => Math.max(1, p - 1))}
                disabled={glpiPage <= 1}
                className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-gray-600">
                Page {glpiPage} sur {glpiTotalPages || "?"}
              </span>
              <button
                onClick={() =>
                  setGlpiPage((p) => Math.min(glpiTotalPages || p, p + 1))
                }
                disabled={glpiPage >= glpiTotalPages}
                className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="h-4 w-px bg-gray-300 mx-2"></div>
              <button
                onClick={() => setGlpiScale((s) => Math.min(2, s + 0.1))}
                disabled={glpiScale >= 2}
                className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <span className="text-xs text-gray-600">
                {Math.round(glpiScale * 100)}%
              </span>
              <button
                onClick={() => setGlpiScale((s) => Math.max(0.5, s - 0.1))}
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
          <div className="flex gap-2 mb-4">
            <a
              href={glpiPdfPath}
              download
              className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Télécharger le PDF
            </a>
            <Link
              to="/e6/ssh"
              className="px-3 py-1.5 text-sm bg-gray-800 text-white rounded hover:bg-gray-900 transition"
            >
              Voir la documentation technique
            </Link>
            <Link
              to="/e6/ssh/pres"
              className="px-3 py-1.5 text-sm bg-gray-800 text-white rounded hover:bg-gray-900 transition"
            >
              Voir la présentation
            </Link>
          </div>

          <div className="h-[600px] border rounded-lg overflow-hidden flex flex-col">
            <div className="flex-1 overflow-auto bg-gray-100 flex items-center justify-center">
              <Document
                file={sshPdfPath}
                onLoadSuccess={({ numPages }) => setSshTotalPages(numPages)}
                loading={
                  <div className="text-gray-500">Chargement du PDF...</div>
                }
                error={
                  <div className="text-red-500 p-4">
                    Erreur: Le PDF n'a pas pu être chargé. Assurez-vous qu'il
                    existe dans le dossier public.
                  </div>
                }
              >
                <Page
                  pageNumber={sshPage}
                  scale={sshScale}
                  error={
                    <div className="text-red-500">
                      Erreur lors du chargement de la page
                    </div>
                  }
                />
              </Document>
            </div>
            <div className="flex justify-center items-center gap-2 p-2 bg-gray-50 border-t">
              <button
                onClick={() => setSshPage((p) => Math.max(1, p - 1))}
                disabled={sshPage <= 1}
                className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-gray-600">
                Page {sshPage} sur {sshTotalPages || "?"}
              </span>
              <button
                onClick={() =>
                  setSshPage((p) => Math.min(sshTotalPages || p, p + 1))
                }
                disabled={sshPage >= sshTotalPages}
                className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="h-4 w-px bg-gray-300 mx-2"></div>
              <button
                onClick={() => setSshScale((s) => Math.min(2, s + 0.1))}
                disabled={sshScale >= 2}
                className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <span className="text-xs text-gray-600">
                {Math.round(sshScale * 100)}%
              </span>
              <button
                onClick={() => setSshScale((s) => Math.max(0.5, s - 0.1))}
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
  );
};

export default E6Page;
