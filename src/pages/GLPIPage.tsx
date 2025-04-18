import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Download,
} from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const GLPIPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [scale, setScale] = useState(1);

  const pdfPath = "/Documentation technique GLPI.pdf";

  return (
    <div className="container mx-auto px-4 py-8" style={{ marginTop: "72px" }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800 font-merriweather">
          Documentation technique GLPI
        </h2>
        <a
          href={pdfPath}
          download
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
        >
          <Download className="w-4 h-4" />
          Télécharger le PDF
        </a>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="border rounded-lg bg-gray-100 p-4">
          <div className="flex justify-center">
            <Document
              file={pdfPath}
              onLoadSuccess={({ numPages }) => setTotalPages(numPages)}
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
                pageNumber={page}
                scale={1.5}
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
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1}
              className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-gray-600">
              Page {page} sur {totalPages || "?"}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages || p, p + 1))}
              disabled={page >= totalPages}
              className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="h-4 w-px bg-gray-300 mx-2"></div>
            <button
              onClick={() => setScale((s) => Math.min(2, s + 0.1))}
              disabled={scale >= 2}
              className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <span className="text-xs text-gray-600">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={() => setScale((s) => Math.max(0.5, s - 0.1))}
              disabled={scale <= 0.5}
              className="p-1 rounded-full hover:bg-gray-200 disabled:opacity-50"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GLPIPage;
