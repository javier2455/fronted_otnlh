import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";

const TablaDeUsuarios = ({
  data,
  detallesUsuario,
  editarUsuario,
  confirmarEliminacion,
  handleShow,
}) => {
  return (
<div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title mt-1">Listado de Usuarios&nbsp;&nbsp;</h3>
              <span data-toggle="tooltip" className="badge badge-info mt-2">{data.length}</span>
              {/* <div className="card-tools">
              <div className="input-group input-group-sm"> 
              <button type="button" className="btn btn-tool btn-sm" title="Crear usuario" onClick={insertarUsuario}>
                <i className="fas fa-user-plus" />
              </button>
              {/* <div className="input-group-append">
                  <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                </div> */}
              {/* </div> 
            </div>*/}
            </div>
            <div className="card-body p-0">
              {data.length === 0 ? (
                <div className="row mt-2">
                  <div className="col-4" />
                  <div className="col-4"><h3>No hay datos que mostrar</h3></div>
                  <div className="col-4" />
                </div>
              ) : (
                <table className="table table-head-fixed text-nowrap">
                  <thead>
                    <tr>
                      <th>Usuario</th>
                      <th>Nombre</th>
                      <th>Apellidos</th>
                      <th>Correo</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((fila) => (
                      <tr key={fila.id} style={{ verticalAlign: "middle" }}>
                        <td>{fila.username}</td>
                        <td>{fila.first_name}</td>
                        <td>{fila.last_name}</td>
                        <td>{fila.email}</td>
                        {/* <td><span className="tag tag-success">Approved</span></td> */}
                        <td class="text-right py-0 align-middle">
                          <div className="btn-group btn-group-sm">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => detallesUsuario(fila)}
                            >
                              <i class="nav-icon fas fa-eye" />
                              {/* <AiOutlineEye /> */}
                            </button>
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={() => editarUsuario(fila)}
                            >
                              <i class="nav-icon fas fa-edit" />
                              {/* <AiOutlineEdit /> */}
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => confirmarEliminacion(fila.id)}
                            >
                              <i class="nav-icon fas fa-trash" />
                              {/* <BiTrashAlt /> */}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div className="card-footer clearfix">
              <button type="button" className="btn btn-primary float-left" onClick={handleShow}><i className="fas fa-user-plus"></i>&nbsp;&nbsp;Crear usuario</button>
            </div>
          </div>
        </div>
      </div>
    </div>




    
  );
};

export default TablaDeUsuarios;

/* <div className="row">
        </div>
      </div>
    </div> */