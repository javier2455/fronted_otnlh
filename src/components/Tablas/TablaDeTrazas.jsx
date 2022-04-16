import React from "react";

const TablaDeTrazas = ({trazas}) => {
  return (
    <div style={{ height: 200, width: 600 }} className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header bg-blue" style={{ width: 600 }}>
            <h3 className="card-title">Lista de Trazas</h3>
            {/* <div className="card-tools">
                            <div className="input-group input-group-sm" style={{ width: 150 }}>
                                <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-default">
                                        <i className="fas fa-search" />
                                    </button>
                                </div>
                            </div>
                        </div> */}
          </div>
          {/* /.card-header */}
          <div
            className="card-body table-responsive p-0"
            style={{ height: 200, width: 600 }}
          >
            {trazas.length === 0 ? (
              "No hay Trazas que mostrar"
            ) : (
              <table style={{ height: 200, width: 600 }} className="table table-head-fixed text-nowrap table-primary">
                <thead>
                  <tr>
                    <th>Fecha de Creación</th>
                    <th>Nombre de Archivo</th>
                  </tr>
                </thead>
                <tbody>
                  {trazas.map((traza) => (
                    <tr key={traza.id} style={{ verticalAlign: "middle" }}>
                      <td>{traza.fecha_creada}</td>
                      <td>{traza.nombre}</td>
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

export default TablaDeTrazas;
