import React from 'react'
import styled from '@emotion/styled'
const Texto = styled.div`
    background-color: #B7322C;
    color: #fff;
    text-transform:uppercase;
    padding:12px;
    font-size:20px;
    text-align:center;
    font-weight:700;
    font-family: 'Titillium Web', sans-serif;
    border-radius:7px;
`

const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error