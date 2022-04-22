import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <>
      <div style={{ display: "flex" }} class="card-body">
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginRight: 10 }} className="icono">
          <i style={{ fontSize: 24 }} class="fas fa-bullhorn"></i>
        </div>
        <div class="callout callout-danger">
          <h4>Error 404</h4>

          <p>Lo sentimos, esta intentando acceder a una dirección incorrecta,
            revise que haya escrito correctamente la dirección. O visite nuestro
            sitio a tráves del siguiente enlace: <Link style={{ textDecoration: "none", color: "blue" }} to='/home'>Pulse Aquí</Link></p>
        </div>
      </div>
    </>
  )
}

export default Error404