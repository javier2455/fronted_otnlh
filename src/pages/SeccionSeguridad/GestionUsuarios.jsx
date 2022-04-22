import React, { useState, useEffect } from "react";

//Componentes
import Tabla from "../../components/Tablas/TablaDeUsuarios";
import MyToast from "../../components/Mensajes/MyToast";
import { Multiselect } from "multiselect-react-dropdown";

//Iconos
import { AiOutlineClose } from "react-icons/ai";

//Componentes de React-Bootstrap
import { Button, Modal, Row, Col, Form } from "react-bootstrap";

//Libreria para peticiones AJAX
import { helpHttp } from "../../helpers/helpHttp";
import { useAutenticationManager } from "../../hooks/useAutenticationManager";

//variables globales
let arregloUsuarios = [];
const data = [
  { Country: "Cuba", id: 1, codeName: 1, content_type: 23 },
  { Country: "Canada", id: 2, codeName: 1, content_type: 23 },
  { Country: "EEUU", id: 3, codeName: 1, content_type: 23 },
  { Country: "France", id: 4, codeName: 1, content_type: 23 },
  { Country: "India", id: 5, codeName: 1, content_type: 23 },
];

//let url = "./routes/rutas.json"
//let url = "http://localhost:5000/usuarios";
//let url = "http://192.168.8.60:8000/gestionar-usuarios";
let tituloModal = "Insertar nuevo usuario";

let nuevoUsuario = {
  id: null,
  password: "",
  last_login: null,
  is_superuser: false,
  username: "",
  first_name: "",
  last_name: "",
  email: "",
  is_staff: false,
  is_active: false,
  date_joined: "",
  groups: [],
  user_permissions: [],
};

//Componente GestionUsuarios
const GestionUsuarios = () => {
  const [dbUsuarios, setDbUsuarios] = useState(arregloUsuarios);
  const [checkSu, setCheckSu] = useState(false);
  const [checkSt, setCheckSt] = useState(false);
  const [show, setShow] = useState(false);
  const [showEl, setShowEl] = useState(false);
  const [showDetalles, setShowDetalles] = useState(false);
  const [insertarUsuario, setInsertarUsuario] = useState(nuevoUsuario);
  const [eliminarUs, setEliminarUs] = useState(null);
  const [ruta, setRuta] = useState(null);
  const [permisosG, setPermisosG] = useState([]);
  const [permisosA, setPermisosA] = useState([]);
  const [gruposG, setGruposG] = useState([]);
  const [gruposA, setGruposA] = useState([]);

  //Toast
  const [mostrar, setMostrar] = useState(false);
  const [msg, setMsg] = useState({});

  //Efecto para cargar los datos antes de que se rendericen los componentes
  useEffect(() => {
    //setLoading(true);
    let userAccount = JSON.parse(sessionStorage.getItem("userAccount"));
    let cuerpo = {
      headers: { 
        "content-type": "application/json",
        "Authorization": `${userAccount.datos}`
      }
    };

    helpHttp()
      .get("./routes/rutas.json")
      .then((response) => {
        setRuta(response.rutasProduccion.rutaUsuarios);
        helpHttp()
          .get(response.rutasProduccion.rutaUsuarios, cuerpo)
          .then((res) => {
            //console.log(res);
            if (!res.error) {
              console.log(res);
              setDbUsuarios(res.datos);
              //setDbUsuarios(res);
            } else {
              //console.log(res.status, res.statusText)
              console.log(res);
              setDbUsuarios([]);
            }
          });
      });

      cargarPermisos();
      cargarGrupos();
  }, []);

  let autenticacion = useAutenticationManager();

  autenticacion.inSession();

  //console.log(ruta);

  //Metodos del CRUD
  const crearUsuario = (datos) => {
    //datos.id = Date.now();
    datos.id = Math.floor(Math.random() * (30 - 12)) + 12;
    datos.user_permissions = permisosA.map(permiso => permiso.id);
    datos.groups = gruposA.map(grupo => grupo.id);

    //console.log(gruposA);
    //console.log(permisosA);

    console.log(datos)
    let userAccount = JSON.parse(sessionStorage.getItem("userAccount"));
    let cuerpo = {
      headers: { 
        "content-type": "application/json",
        "Authorization": `${userAccount.datos}`
      }
    };

    helpHttp()
      .post(ruta, cuerpo)
      .then((res) => {
        if (!res.error) {
          setDbUsuarios([...dbUsuarios, res]);
          setMostrar(true);
          setMsg({
            msg: "Usuario creado satisfactoriamente",
            tipo: "success",
            titulo: "Creación de Usuario",
          });
        } else {
          setMostrar(true);
          setMsg({
            msg: `${res.error}`,
            tipo: "danger",
            titulo: "Error Creando",
          });
          console.log(res);
        }
      });

    setPermisosA([]);
    setGruposA([]);
  };

  const detallesUsuario = (datos) => {
    let datosActualizados = datos.user_permissions.map(per => getDatosDePermiso(per))
    let datosActualizados2 = datos.groups.map(per => getDatosDeGrupos(per))
    let prueba = [];
    let prueba2 = [];
    //console.log(datosActualizados);
    datosActualizados.forEach(element => {
      prueba.push(element[0]);
    });
    datosActualizados2.forEach(element => {
      prueba2.push(element[0]);
    });
    //console.log(prueba);
    datos.user_permissions = prueba;
    datos.groups = prueba2;
    setInsertarUsuario(datos);
    //console.log(datos);
    handleShowD();
  };

  const editarUsuario = (datos) => {
    tituloModal = "Editar Usuario";
    setInsertarUsuario(datos);
    setPermisosA(datos.user_permissions);
    setGruposA(datos.groups);
    console.log(datos);
    handleShow();
  };

  const actualizarUsuario = (datos) => {
    let endpoint = `${ruta}/${datos.id}`;
    datos.user_permissions = permisosA;
    datos.groups = gruposA;
    console.log(endpoint);
    console.log(datos);

    let userAccount = JSON.parse(sessionStorage.getItem("userAccount"));
    let cuerpo = {
      headers: { 
        "content-type": "application/json",
        "Authorization": `${userAccount.datos}`
      }
    };

    helpHttp()
      .put(endpoint, cuerpo)
      .then((res) => {
        console.log(res);
        if (!res.error) {
          let actualizacion = dbUsuarios.map((usuario) =>
            usuario.id === datos.id ? datos : usuario
          );
          setMostrar(true);
          setMsg({
            msg: "Usuario Editado Satisfactoriamente",
            tipo: "info",
            titulo: "Usuario Editado",
          });
          setDbUsuarios(actualizacion);
        } else {
          console.log(res.error);
          setMostrar(true);
          setMsg({
            msg: `${res.statusText}`,
            tipo: "danger",
            titulo: `${res.status}`,
          });
        }
      });
  };

  const confirmarEliminacion = (id) => {
    setEliminarUs(id);
    handleShowE();
  };

  const eliminarUsuario = (id) => {
    let endpoint = `${ruta}/${id}`;

    let cuerpo = {
      headers: { "content-type": "application/json" },
    };

    helpHttp()
      .del(endpoint, cuerpo)
      .then((res) => {
        if (!res.error) {
          let actualizacion = dbUsuarios.filter((cliente) => cliente.id !== id);
          setMostrar(true);
          setMsg({
            msg: "Usuario Eliminado Satisfactoriamente",
            tipo: "danger",
            titulo: "Usuario Eliminado",
          });
          setDbUsuarios(actualizacion);
        } else {
          alert(res);
        }
      });
  };

  //Funciones Manejadoras de Eventos
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !insertarUsuario.password ||
      !insertarUsuario.username ||
      !insertarUsuario.first_name ||
      !insertarUsuario.last_name ||
      !insertarUsuario.email
    ) {
      alert("Debe llenar todos los campos del formulario");
      return;
    }

    //Cargando los valores restantes del nuevo usuario
    let date = new Date();

    insertarUsuario.is_superuser = checkSu;
    insertarUsuario.is_staff = checkSt;
    insertarUsuario.date_joined = date.toISOString();
    //insertarUsuario.date_joined = date.toLocaleDateString();

    if (insertarUsuario.id === null) {
      crearUsuario(insertarUsuario);
    } else {
      actualizarUsuario(insertarUsuario);
    }

    handleReset();
    handleClose();
  };

  const handleChange = (e) => {
    setInsertarUsuario({
      ...insertarUsuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckSu = (e) => {
    setCheckSu(!checkSu);
  };

  const handleCheckSt = (e) => {
    setCheckSt(!checkSt);
  };

  const handleReset = () => {
    setInsertarUsuario(nuevoUsuario);
  };

  //Funciones Manejadoras de los eventos de los Modales
  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setCheckSt(false);
    setCheckSu(false);
    handleReset();
    setShow(false);
    tituloModal = "Insertar nuevo usuario";
  };

  const handleShowD = () => setShowDetalles(true);

  const handleCloseD = () => {
    setCheckSt(false);
    setCheckSu(false);
    handleReset();
    setShowDetalles(false);
    tituloModal = "Insertar nuevo usuario";
  };

  const handleShowE = () => setShowEl(true);

  const handleCloseE = () => setShowEl(false);

  //Metodos del Mutiselect
  let onSelect = (selectedList, selectedItem) => {
    setPermisosA([...permisosA, selectedItem]);
  };

  let onRemove = (selectedList, removedItem) => {
    let actualizacion = permisosA.filter((e) => e.id !== removedItem.id);
    setPermisosA(actualizacion);
  };

  let onSelectG = (selectedList, selectedItem) => {
    setGruposA([...gruposA, selectedItem]);
  };

  let onRemoveG = (selectedList, removedItem) => {
    let actualizacion = gruposA.filter((e) => e.id !== removedItem.id);
    setGruposA(actualizacion);
  };


  //Cargar permisos
  function cargarPermisos() {

    let userAccount = JSON.parse(sessionStorage.getItem("userAccount"));
    let cuerpo = {
      headers: { 
        "content-type": "application/json",
        "Authorization": `${userAccount.datos}`
      }
    };

    helpHttp()
      .get("./routes/rutas.json")
      .then((response) => {
        helpHttp()
          .get(response.rutasProduccion.rutaGestionarPermisos, cuerpo)
          .then((res) => {
            //console.log(res);
            if (!res.error) {
              console.log(res);
              setPermisosG(res.datos);
              //setDbUsuarios(res);
            } else {
              //console.log(res.status, res.statusText)
              console.log(res);
              setPermisosG([]);
            }
          });
      });

    //console.log(permisos);
  };

  function cargarGrupos() {
    let userAccount = JSON.parse(sessionStorage.getItem("userAccount"));
    let cuerpo = {
      headers: { 
        "content-type": "application/json",
        "Authorization": `${userAccount.datos}`
      }
    };
    helpHttp()
      .get("./routes/rutas.json")
      .then((response) => {
        helpHttp()
          .get(response.rutasProduccion.rutaGestionarGrupos,cuerpo)
          .then((res) => {
            //console.log(res);
            if (!res.error) {
              console.log(res);
              setGruposG(res.datos);
              //setDbUsuarios(res);
            } else {
              //console.log(res.status, res.statusText)
              console.log(res);
              setGruposG([]);
            }
          });
      });

    //console.log(permisos);
  };

  //Funcion para recuperar el nombre de los permisos y los grupos
  function getDatosDePermiso (idABuscar) {
    let data = permisosG.filter(data => data.id === idABuscar);
    //console.log(`Esta es la data: ${data}`)
    return data;
  }
  function getDatosDeGrupos (idABuscar) {
    let data = gruposG.filter(data => data.id === idABuscar);
    //console.log(`Esta es la data: ${data}`)
    return data;
  }


  return (
    <>
      <div className="content-wrapper">
        <div className="content-header"></div>
        <section className="content">
          <Tabla
            data={dbUsuarios}
            detallesUsuario={detallesUsuario}
            editarUsuario={editarUsuario}
            confirmarEliminacion={confirmarEliminacion}
            handleShow={handleShow}
          />
        </section>

        {/* {msg.abrir && <Toast msg={msg}/>} */}

        {/* Modal */}
        <Modal size="lg" show={show} onHide={handleClose}>
          {/* <Modal.Header>
            <Modal.Title>{tituloModal}</Modal.Title>
            <AiOutlineClose
              style={{ fontSize: 20, cursor: "pointer" }}
              onClick={handleClose}
            />
          </Modal.Header> */}
          <Modal.Body>
            <div
              className={
                tituloModal === "Insertar nuevo usuario"
                  ? "card card-primary"
                  : "card card-success"
              }
            >
              <div className="card-header">
                <h3 className="card-title">{tituloModal}</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool btn-sm"
                    title="Cerrar"
                    onClick={handleCloseD}
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre:</Form.Label>
                      <Form.Control
                        type="text"
                        name="first_name"
                        onChange={handleChange}
                        value={insertarUsuario.first_name}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Apellidos:</Form.Label>
                      <Form.Control
                        type="text"
                        name="last_name"
                        onChange={handleChange}
                        value={insertarUsuario.last_name}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre de usuario:</Form.Label>
                      <Form.Control
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={insertarUsuario.username}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Correo:</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={insertarUsuario.email}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Contraseña:</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={insertarUsuario.password}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Asignar Permisos:</Form.Label>
                      <Multiselect
                        options={permisosG}
                        displayValue="name"
                        onSelect={onSelect}
                        onRemove={onRemove}
                        selectedValues={insertarUsuario.user_permissions}
                        hidePlaceholder={true}
                        placeholder="Seleccionar permisos"
                        emptyRecordMsg="No hay opciones que mostrar"
                        style={{
                          searchBox: {
                            // To change search box element look
                            fontSize: 16,
                          },
                          /* inputField: {
                            // To change input field position or margin
                            paddingBottom: 8,
                          }, */
                          optionContainer: {
                            // To change css for option container
                            border: "2px solid",
                            height: 130,
                          },
                          chips: {
                            // To change css chips(Selected options)
                            background: "#007bff",
                            borderRadius: 3,
                          },
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Asignar Grupos:</Form.Label>
                      <Multiselect
                        options={gruposG}
                        displayValue="name"
                        onSelect={onSelectG}
                        onRemove={onRemoveG}
                        selectedValues={insertarUsuario.groups}
                        hidePlaceholder={true}
                        placeholder="Seleccionar grupos"
                        emptyRecordMsg="No hay opciones que mostrar"
                        style={{
                          searchBox: {
                            // To change search box element look
                            fontSize: 16,
                          } /* 
                          inputField: {
                            // To change input field position or margin
                            paddingBottom: 8,
                          }, */,
                          optionContainer: {
                            // To change css for option container
                            border: "2px solid",
                            height: 130,
                          },
                          chips: {
                            // To change css chips(Selected options)
                            background: "#007bff",
                            borderRadius: 3,
                          },
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Form.Check
                    type="checkbox"
                    className="ml-4"
                    name="is_superuser"
                    onChange={handleCheckSu}
                    value={insertarUsuario.is_superuser}
                  />
                  <Form.Label>¿Es superusuario?</Form.Label>
                  <Form.Check
                    type="checkbox"
                    className="ml-5"
                    name="is_staff"
                    onChange={handleCheckSt}
                    value={insertarUsuario.is_staff}
                  />
                  <Form.Label>¿Es usuario del sistema?</Form.Label>
                </Row>
              </Form>
            </div>
            <div
              style={{ display: "flex", justifyContent: "flex-end" }}
              className="card-footer clearfix"
            >
              <Button
                style={{ marginRight: 15 }}
                type="submit"
                onClick={handleSubmit}
                variant={
                  tituloModal.startsWith("Editar") ? "success" : "primary"
                }
              >
                {tituloModal.startsWith("Editar") ? "Editar" : "Insertar"}
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button
              type="submit"
              onClick={handleSubmit}
              variant={tituloModal.startsWith("Editar") ? "success" : "primary"}
            >
              {tituloModal.startsWith("Editar") ? "Editar" : "Insertar"}
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer> */}
        </Modal>

        <Modal size="lg" show={showDetalles} onHide={handleCloseD}>
          <Modal.Body>
            <div className="card card-primary ">
              <div className="card-header">
                <h3 className="card-title">Detalles del usuario</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool btn-sm"
                    title="Cerrar"
                    onClick={handleCloseD}
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <strong>Nombre</strong>
                      <p className="text-muted">{insertarUsuario.first_name}</p>
                      <hr />
                      <strong>Apellidos</strong>
                      <p className="text-muted">{insertarUsuario.last_name}</p>
                      <hr />
                      <strong>Usuario</strong>
                      <p className="text-muted">{insertarUsuario.username}</p>
                      <hr />
                      <strong>Correo</strong>
                      <p className="text-muted">{insertarUsuario.email}</p>
                    </div>
                    <div className="col">
                      <strong>Estado</strong>
                      <p className="text-muted">
                        {insertarUsuario.is_active === true ? (
                          <>Activo</>
                        ) : (
                          <>Deshabilitado</>
                        )}
                      </p>
                      <hr />
                      <strong>Administrador</strong>
                      <p className="text-muted">
                        {insertarUsuario.is_active === true ? <>Si</> : <>No</>}
                      </p>
                      <hr />
                      <strong>Permisos de Usuario</strong>
                      <p className="text-muted">
                        {insertarUsuario.user_permissions.length !== 0
                          ? insertarUsuario.user_permissions.map(
                              (per) => `${per.name},`
                            )
                          : "No tiene asignado ningún permiso"}
                      </p>
                      <hr />
                      <strong>Grupos asignados al Usuario</strong>
                      <p className="text-muted">
                        {insertarUsuario.groups.length !== 0
                          ? insertarUsuario.groups.map(
                              (per) => `${per.name},`
                            )
                          : "No esta asignado a ningún grupo"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer clearfix">
                <button
                  type="button"
                  className="btn btn-secondary btn-md float-right"
                  onClick={handleCloseD}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal show={showEl} onHide={handleCloseE}>
          {/* <Modal.Header>
            <Modal.Title>Eliminar Usuario</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <div className="card card-danger">
              <div className="card-header">
                <h3 className="card-title">Eliminar usuario</h3>
              </div>
              <div className="card-body">
                <p>¿Éstas seguro de eliminar este usuario?</p>
              </div>
              <div
                style={{ display: "flex", justifyContent: "flex-end" }}
                className="card-footer clearfix"
              >
                <Button
                  style={{ marginRight: 15 }}
                  type="submit"
                  onClick={() => {
                    eliminarUsuario(eliminarUs);
                    handleCloseE();
                  }}
                  variant="danger"
                >
                  Si
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setEliminarUs(null);
                    handleCloseE();
                  }}
                >
                  No
                </Button>
              </div>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button
              type="submit"
              onClick={() => {
                eliminarUsuario(eliminarUs);
                handleCloseE();
              }}
              variant="danger"
            >
              Si
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setEliminarUs(null);
                handleCloseE();
              }}
            >
              No
            </Button>
          </Modal.Footer> */}
        </Modal>

        {mostrar && <MyToast setMostrar={setMostrar} msg={msg} />}
      </div>
    </>
  );
};



export default GestionUsuarios;
