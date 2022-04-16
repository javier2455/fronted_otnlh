import React from 'react'
import { useHistory } from 'react-router-dom'

//Esta pagina es solo para poder utilizar la ruta '/' para rediccionar para el login

const Blank = () => {

    let historial = useHistory()
    historial.push("/login");

  return (
    <></>
  )
}

export default Blank