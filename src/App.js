import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/Home';
import LaEmpresaPage from './pages/LaEmpresa';
import ProductosPage from './pages/Productos';
import ServiciosPage from './pages/Servicios';
import ContactoPage from './pages/Contacto';

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/Home" exact element={<HomePage />} />
        <Route path="/LaEmpresa" exact element={<LaEmpresaPage />} />
        <Route path="/Productos" exact element={<ProductosPage />} />
        <Route path="/Servicios" exact element={<ServiciosPage />} />
        <Route path="/Contacto" exact element={<ContactoPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;