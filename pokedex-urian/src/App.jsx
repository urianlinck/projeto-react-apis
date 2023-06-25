import React from 'react';
import {Router} from "./Router/Router"
import { GlobalStyled } from './GlobalStyled';
import Header from './Components/Header/Header';
import PokemonsListPage from './Pages/PokemonsListPage/PokemonsListPage';
import { ChakraProvider } from '@chakra-ui/react';
import GlobalState from './contexts/GlobalState';

export default function App() {
  return (
    <ChakraProvider>
      <GlobalStyled>
        <GlobalState>
          <Router/>
        </GlobalState>
      </GlobalStyled>
    </ChakraProvider>
  );
}


