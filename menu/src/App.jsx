import { useState } from "react";
import cafeteria1 from "./assets/image/cafeteria1.jpg";
import { Navigation } from "./Navigation";
import { MenuItem } from "./MenuItem";
import { snacks, desserts, drinks } from "./menu";
import "./App.css";

export default function App() {
  const [selectedPage, setSelectedPage] = useState(0);
  const menuPage = [snacks, desserts, drinks];
  return (
    <>
      <h1>PitStop Cafeteria</h1>
      <img
        src={cafeteria1}
        alt="front-side cafeteria image"
        className="cover"
      />
      <Navigation setSelectedPage={setSelectedPage} />
      <div className="menu">
        {menuPage[selectedPage].map((item, index) => (
          <MenuItem
            key={index}
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            imagem={item.imagem}
          />
        ))}
      </div>
    </>
  );
}
