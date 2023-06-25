import { styled, createGlobalStyle } from "styled-components"

export const PokedexPageStyle = styled.body`
display: grid;
background-color:#5E5E5E;
height: 2295px;
width: 100%;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 10%, 90%;
align-items: stretch;
box-sizing: border-box;
justify-content: center;
flex-wrap: wrap;
`