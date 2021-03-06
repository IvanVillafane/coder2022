import React from "react";
import CategoriasContainer from "../Categorias/CategoriasContainer";
import ItemListContainer from "../ItemList/ItemListContainer";
import CarouselBt from "../StateLess/CarouselBt";

function Home() {
  return (
    <main>
      <CarouselBt />

      <h4 className="text-center mt-5">Productos</h4>
      <ItemListContainer />

      <CategoriasContainer />
    </main>
  );
}

export default Home;
