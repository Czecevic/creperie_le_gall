import "./App.css";
import { Menu } from "./components/Menu";
import crepe from "./assets/crepe.jpg";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <img
        src={crepe}
        alt="img_creperie"
        className="w-full h-auto rounded-lg shadow-lg"
      />
      <div>
        <h1 className="text-2xl font-bold mb-4">Ouvert 7 jours / 7</h1>
        <h2 className="text-xl font-semibold mb-2">Du Lundi au Samedi</h2>
        <p className="mb-4">De 11h45 à 22h30</p>
        <h2 className="text-xl font-semibold mb-2">Le Dimanche</h2>
        <p>De 11h45 à 22h</p>
      </div>
      {/* Menu */}
      <span className=" block h-0.5 bg-gray-300 my-4"></span>
      <Menu />
    </>
  );
}

export default App;
