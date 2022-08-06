import { useState } from 'react'
import styled from '@emotion/styled'
import imagenCripto from './img/imagen-criptos.png'

const Contenedor= styled.div`
  max-width: 900px;
  margin: 0 auto;
  width:90%;
`

const imagen = styled.img`
  max-width:400px;
  width:80%;
  margin: 100px 0 auto 0;
  display:block;
`

const Heading = styled.h1`
  font-family: 'Titillium Web', sans-serif;
  color: #fff;
`

function App() {
  return (
    <Contenedor>
      <Heading>Desde App Jsx</Heading>
    </Contenedor>
  )
}

export default App
