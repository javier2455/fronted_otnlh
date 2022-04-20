import React from "react";

const TablaDeTrazas = ({trazas}) => {
  return (
    <div className="container">
      <div style={{ minHeight: 200, minWidth: 600 }} className="row">
        <div className="col-12">
          <div className="card card-primary">
            <div className="card-header clearfix">
              <h3 className="card-title">Listado de Trazas&nbsp;&nbsp;</h3>
              <div className="float-right"><span className="badge badge-info mr-1">{trazas.length}</span>
              <i className="fas fa-shoe-prints"/></div>
              {/*  <div className="card-tools">
              <div className="input-group input-group-sm">
                <span className="form-control float-left badge badge-danger">{trazas.length}</span>
                <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-default">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </div> */}
            </div>

            <div
              className="card-body p-0"
              style={{ minHeight: 200, minWidth: 600 }}
            >
              {trazas.length === 0 ? (
                <div className="row align-items-center" style={{ minHeight: 200 }}>
                  <div className="col"></div>
                  <div className="col">
                    <h4><strong>No hay datos que mostrar</strong></h4>
                  </div>
                  <div className="col"></div>
                </div>
              ) : (
                <table
                  style={{ minHeight: 200, minWidth: 600 }}
                  className="table table-head-fixed table-striped"
                >
                  <thead>
                    <tr>
                      <th>Fecha</th>
                      <th>Objeto Id</th>
                      <th>Objeto Descripción</th>
                      <th>Acción</th>
                      <th>Mensaje</th>
                      <th>Usuario</th>
                      <th>Contenedor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trazas.map((traza) => (
                      <tr key={traza.id}>
                        <td>{traza.action_time}</td>
                        <td>{traza.object_id}</td>
                        <td>{traza.object_repr}</td>
                        <td>{traza.action_flag}</td>
                        <td>{traza.change_message}</td>
                        <td>{traza.user}</td>
                        <td>{traza.content_type}</td>
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
    </div>
  );
};

export default TablaDeTrazas;
