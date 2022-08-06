import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'

const InputSubmit = styled.input`
    background-color:#9497FF;
    border:none;
    width:100%;
    padding:10px;
    color:#fff;
    font-weight:700;
    text-transform:uppercase;
    border-radius:5px;
    font-size:20px;
    transition: background-color .3s ease;
    :hover{
        background-color:#7A7DFE;
        cursor:pointer
    }
`

const Formulario = () => {

    const [SelectMonedas] = useSelectMonedas()
    


  return (
    <form>

        <SelectMonedas />
        
        <InputSubmit
            type="submit"
            value="Cotizar"
        />
    </form>
  )
}

export default Formulario