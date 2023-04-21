import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Types from "./pages/Types";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Wishlist from "./pages/Wishlist";
import "./App.css";

import Pokemon from "./pages/Pokemon";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Types" element={<Types />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Search/:name" element={<Pokemon />} />
        <Route path="/Wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}
