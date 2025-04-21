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
import GLPIPres from "./pages/GLPIPres"
import SSHPres from "./pages/SSHPres";

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/e5" element={<E5Page />} />
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
