import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Projetos from "./pages/Projetos";
import Voluntariado from "./pages/Voluntariado";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Voluntariado />
      <Footer />
    </div>
  );
}

export default App;
