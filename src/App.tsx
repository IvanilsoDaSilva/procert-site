import { Route, Routes, BrowserRouter } from "react-router-dom";

// Componentes
import Header from "./components/header/Header.tsx"
import TopNavBar from "./components/TopNavBar/TopNavBar.tsx"
import Footer from "./components/Footer/Footer.tsx"

// Pages
import Index from "./Pages/Index";
import Services from "./Pages/services";
import About from "./Pages/Index";
import Contact from "./Pages/services";

function App() {
  return (
    <>
      <Header />
      <TopNavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  )
}

export default App
