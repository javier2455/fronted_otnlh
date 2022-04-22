import React from "react";

import { FaBookOpen } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const TablaNomencladores = ({ trazas, titulo }) => {
  return (
    <div style={{ height: 600, width: "100%" }} className="row ">
      <div className="col-12">
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title mt-2">{titulo}</h3>
            <span
              title="Cantidad de Nomencladores"
              style={{marginTop: 12}}
              className="badge badge-secondary ml-3"
            >
              {trazas.length}
            </span>
            <div className="card-tools">
              <button
                /* onClick={handleShow} */ type="button"
                className="btn btn-light" /* title="Agregar Nuevo Nomenclador" */
              >
                <FaBookOpen style={{marginBottom: 1}}/> Agregar Nuevo Nomenclador
                {/* <i className="fa fa-book"></i> */}
              </button>
            </div>
          </div>
          {/* /.card-header */}
          <div
            className="card-body table-responsive p-0"
            style={{ height: 600, width: "100%" }}
          >
            {trazas.length === 0 ? (
              "No hay Trazas que mostrar"
            ) : (
              <table
                style={{ height: 600, width: "100%" }}
                className="table table-head-fixed text-nowrap"
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Tipo</th>
                    <th>Nombre</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {trazas.map((traza) => (
                    <tr key={traza.id} style={{ verticalAlign: "middle" }}>
                      <td>{traza.id}</td>
                      <td>{traza.tipo}</td>
                      <td>{traza.nombre}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-outline-success mr-1"
                          /* onClick={() => editarUsuario(fila)} */
                        >
                          <FaEdit />
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-danger mr-1"
                          /* onClick={() => confirmarEliminacion(fila.id)} */
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
    </div>
  );
};

export default TablaNomencladores;
