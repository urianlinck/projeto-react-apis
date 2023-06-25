import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import PokemonListPage from "../Pages/PokemonsListPage/PokemonsListPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import { PokeContext } from "../contexts/Contexts";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { PokeListPage } from "../Pages/PokemonsListPage/pokemonsListPageStyle";

export const Router = () => {
  
  return (
  
    <BrowserRouter>
      <Header />
      <Routes>
          <Route index element={<PokemonListPage />}></Route>
          <Route path="/pokedex" element={<PokedexPage />}></Route>
          <Route path="/details/:id" element={<PokemonDetailPage />}></Route>   
      </Routes>
    </BrowserRouter>

  );
};