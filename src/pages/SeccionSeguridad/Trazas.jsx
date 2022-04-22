import React, { useState, useEffect } from "react";
import TablaDeTrazas from "../../components/Tablas/TablaDeTrazas";
import { helpHttp } from "../../helpers/helpHttp";
import { useAutenticationManager } from "../../hooks/useAutenticationManager";

//let url = "http://localhost:5000/trazas";

const Trazas = () => {
  const [datosTrazas, setDatosTrazas] = useState([]);
  const [ruta, setRuta] = useState(null);

  useEffect(() => {
    helpHttp()
      .get("./routes/rutas.json")
      .then((response) => {
        setRuta(response.rutasDesarrollo.rutaTrazas);
        helpHttp()
          .get(response.rutasDesarrollo.rutaTrazas)
          .then((res) => {
            //console.log(res);
            if (!res.error) {
              //console.log(res)
              //setDbUsuarios(res.data);
              setDatosTrazas(res);
            } else {
              setDatosTrazas([]);
            }
          });
      });
  }, []);

  let autenticacion = useAutenticationManager();

  autenticacion.inSession();

  return (
    <div className="content-wrapper">
      <div className="content-header"></div>
      <section className="content">
        <TablaDeTrazas trazas={datosTrazas} />
      </section>
    </div>
  );
};

export default Trazas;
