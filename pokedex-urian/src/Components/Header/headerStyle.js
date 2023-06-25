import { styled } from "styled-components";

export const Container = styled.header`
height: 20vh;
width: 100%;
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
export const BackToList = styled.text`
position: absolute;
width: 210px;
height: 36px;
left: 100px;
top: 62px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
/* identical to box height */

text-decoration-line: underline;

color: #1A1A1A;
`

export const DeletePokemon = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px, 10px, 4px, 10px;

position: absolute;
width: 226px;
height: 57px;
margin-left: 1112px;
margin-right: 41px;
top: 51px;

background: #FF6262;
border-color: #FF6262;
border-radius: 8px;
font-family: poppins;
font-size: 18px;
color: #ffff;
`