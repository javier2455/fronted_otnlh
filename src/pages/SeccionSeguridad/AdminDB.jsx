import React from "react";
import { useAutenticationManager } from "../../hooks/useAutenticationManager"

const AdminDB = () => {

  let autenticacion = useAutenticationManager()

  autenticacion.inSession();

  return (
    <div className="content-wrapper">
      <div className="content-header">

      </div>
      <section style={{ display: "flex", marginLeft: 20 }} className="content">
        <div style={{ maxWidth: 500 }} className="card card-primary mr-5">
          <div className="card-header">
            <h3 className="card-title">Guardar Bases de Datos</h3>
          </div>
          <div className="card-body">
            Al guardar, salvamos los últimos cambios realizados en la base de
            datos. Asegurandonos de que todos los cambios quedan salvados de
            forma permanente.
          </div>
          <div
            style={{ display: "flex", justifyContent: "flex-end" }}
            className="card-footer"
          >
            <button
              style={{ width: 150 }}
              type="button"
              className="btn btn-block btn-outline-primary"
            >
              Guadar
            </button>
          </div>
        </div>
        <div style={{ maxWidth: 500 }} className="card card-primary mr-5">
          <div className="card-header">
            <h3 className="card-title">Restaurar Bases de Datos</h3>
          </div>
          <div className="card-body">
            Al restaurar, recuperamos la ultima versión de la base de datos que
            teniamos guardada, descartando todos los cambios realizados hasta el
            momento.
          </div>
          <div
            style={{ display: "flex", justifyContent: "flex-end" }}
            className="card-footer"
          >
            <button
              style={{ width: 150 }}
              type="button"
              className="btn btn-block btn-outline-primary"
            >
              Restaurar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDB;
