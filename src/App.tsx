import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";
import CVPage from "./pages/CVPage";
import E5Page from "./pages/E5Page";
import E6Page from "./pages/E6Page";
import VeillePage from "./pages/VeillePage";
import ContactPage from "./pages/ContactPage";
import GLPIPage from "./pages/GLPIPage";
import SSHPage from "./pages/SSHPage";
import GLPIPres from "./pages/GLPIPres";
import SSHPres from "./pages/SSHPres";
import TP1Page from "./pages/TP1Page";
import TP2Page from "./pages/TP2Page";
import TP3Page from "./pages/TP3Page";
import TP4Page from "./pages/TP4Page";
import TP5Page from "./pages/TP5Page";
import TP6Page from "./pages/TP6Page";
import TP7Page from "./pages/TP7Page";
import TP8Page from "./pages/TP8Page";
import TP9Page from "./pages/TP9Page";
import TP10Page from "./pages/TP10Page";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/e5" element={<E5Page />} />
        <Route path="/e5/tp1" element={<TP1Page />} />
        <Route path="/e5/tp2" element={<TP2Page />} />
        <Route path="/e5/tp3" element={<TP3Page />} />
        <Route path="/e5/tp4" element={<TP4Page />} />
        <Route path="/e5/tp5" element={<TP5Page />} />
        <Route path="/e5/tp6" element={<TP6Page />} />
        <Route path="/e5/tp7" element={<TP7Page />} />
        <Route path="/e5/tp8" element={<TP8Page />} />
        <Route path="/e5/tp9" element={<TP9Page />} />
        <Route path="/e5/tp10" element={<TP10Page />} />
        <Route path="/e6" element={<E6Page />} />
        <Route path="/e6/glpi" element={<GLPIPage />} />
        <Route path="/e6/glpi/pres" element={<GLPIPres />} />
        <Route path="/e6/ssh" element={<SSHPage />} />
        <Route path="/e6/ssh/pres" element={<SSHPres />} />
        <Route path="/veille" element={<VeillePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
