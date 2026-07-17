import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@/App.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Home from "@/pages/Home";
import Solutions from "@/pages/Solutions";
import Realisations from "@/pages/Realisations";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

function App() {
  return (
    <div className="App noise relative">
      <BrowserRouter>
        <SmoothScroll>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
          <FloatingActions />
        </SmoothScroll>
      </BrowserRouter>
    </div>
  );
}

export default App;
