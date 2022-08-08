import React from 'react'
import styled from '@emotion/styled'

const Resultados = styled.div`
    color: #fff;
    font-family: 'Titillium Web', sans-serif;
    display:flex;
    align-items:center;
    gap:1rem;
    margin-top:30px;
`

const Imagen = styled.img`
    display:block;
    width:120px;
`

const Texto = styled.p`
    font-size:18px;
    span{
        font-weight:700
    }

`

const Precio = styled.p`
    font-size:24px;
    span{
        font-weight:700
    }

`

const Resultado = ({resultado}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
    return (
    <Resultados>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto" />
        <div>
            <Precio>El Precio es de: <span>{PRICE}</span> </Precio>
            <Texto>El Precio mas ato del día: <span>{HIGHDAY}</span> </Texto>
            <Texto>El Precio más bajo del día de: <span>{LOWDAY}</span> </Texto>
            <Texto>Variacióñn ultimas 24 hrs <span>{CHANGEPCT24HOUR}</span> </Texto>
            <Texto>Última Actualización <span>{LASTUPDATE}</span> </Texto>
        </div>
    </Resultados>

    )
}

export default Resultado