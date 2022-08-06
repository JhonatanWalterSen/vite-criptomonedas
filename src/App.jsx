import { useState } from 'react'
import styled from '@emotion/styled'
import imagenCripto from './img/imagen-criptos.png'
import Formulario from './Components/Formulario'



const Contenedor= styled.div`
  max-width: 900px;
  margin: 0 auto;
  width:90%;
  @media (min-width: 990px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap:2rem;
  }
`

const Imagen = styled.img`
  max-width:400px;
  width:80%;
  margin: 100px 0 auto 0;
  display:block;
`

const Heading = styled.h1`
  font-family: 'Titillium Web', sans-serif;
  color: #fff;
  text-align:center;
  font-weight:700;
  margin-top:80px;
  margin-bottom:50px;
  font-size:34px;

  ::after{
    content:'';
    width:100px;
    height: 7px;
    background-color: #66a2fe;
    display:block;
    margin: 10px auto 0 auto;
  }
`

function App() {
  return (
    <Contenedor>
      <Imagen
        src={imagenCripto}
        alt="Imagen Criptomonedas">
      </Imagen>
      <div>
        <Heading>Cotiza Monedas al Instantex</Heading>
        <Formulario />
      </div>
    </Contenedor>
  )
}

export default App
