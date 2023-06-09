import { styled } from "styled-components";

export const Container = styled.header`
height: 20vh;
width: 100vw;
padding-top: 21px;
display: flex;
justify-content: space-around;
align-items: center;
background-color: #fff;
padding-right: 41px;
`
export const Logo = styled.img`
min-width: 15vw;
max-width: 20vw;
`
export const PokedexButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px, 10px, 4px, 10px;

position: absolute;
width: 287px;
height: 74px;
margin-left: 1112px;
margin-right: 41px;
top: 41px;

background: #33A4F5;
border-color: #33A4F5;
border-radius: 8px;
font-family: poppins;
font-size: 24px;
color: #ffff;
`