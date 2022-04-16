import React from "react";
import img from "../img/person-digging-solid.svg"

const UnderConstruct = () => {

    return (
        <div className="content-wrapper">
            <div className="content-header">
            </div>
            <section style={{ display: "flex", justifyContent: "center", marginLeft: 20 }} className="content">
                <div className="error-page">
                    <img className="headline text-warning" alt="En construcción" src={img} style={{ width: 150 }} />
                    <div className="error-content">
                        <h3><i className="fas fa-exclamation-triangle text-warning"></i> Lo sentimos. Página en contrucción.</h3>
                        <p>
                            Por favor disculpen las molestias que puedan causar nuestro sistema en mantenimiento.
                            Le agradecemos su comprensión, en su lugar por favor visite nuestro enlace <a href="/">Indicadores</a>
                        </p>
                    </div >
                </div >
            </section >
        </div >
    );
};

export default UnderConstruct;
