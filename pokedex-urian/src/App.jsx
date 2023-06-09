import React from 'react';
import { GlobalStyled } from './GlobalStyled';
import Header from './Components/Header/Header';
import PokemonsListPage from './Pages/PokemonsListPage/PokemonsListPage';

export default function App() {
  return (
    <GlobalStyled>
    <Header/>
    <PokemonsListPage/>
    </GlobalStyled>
  );
}


