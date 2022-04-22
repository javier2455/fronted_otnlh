import React, { useState, useEffect } from "react";

//Componentes
import Tabla from "../../components/Tablas/TablaDeUsuarios";
import MyToast from "../../components/Mensajes/MyToast";
import { Multiselect } from 'multiselect-react-dropdown'


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
  { Country: "Cuba", id: 1 },
  { Country: "Canada", id: 2 },
  { Country: "EEUU", id: 3 },
  { Country: "France", id: 4 },
  { Country: "India", id: 5 },
]

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
  const [permisos, setPermisos] = useState([])

  //Toast
  const [mostrar, setMostrar] = useState(false);
  const [msg, setMsg] = useState({});

  //Efecto para cargar los datos antes de que se rendericen los componentes
  useEffect(() => {
    //setLoading(true);

    helpHttp()
      .get("./routes/rutas.json")
      .then((response) => {
        setRuta(response.rutasDesarrollo.rutaUsuarios);
        helpHttp()
          .get(response.rutasDesarrollo.rutaUsuarios)
          .then((res) => {
            //console.log(res);
            if (!res.error) {
              //console.log(res)
              //setDbUsuarios(res.data);
              setDbUsuarios(res);
            } else {
              setDbUsuarios([]);
            }
          });
      });
  }, []);

  let autenticacion = useAutenticationManager();

  autenticacion.inSession();

  //console.log(ruta);

  //Metodos del CRUD
  const crearUsuario = (datos) => {
    //datos.id = Date.now();
    datos.id = Math.floor(Math.random() * (30 - 12)) + 12;
    datos.user_permissions = permisos;

    let cuerpo = {
      body: datos,
      headers: { "content-type": "application/json" },
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
          console.log(res);
        }
      });
  };

  const detallesUsuario = (datos) => {
    setInsertarUsuario(datos);
    //console.log(datos);
    handleShowD();
  };

  const editarUsuario = (datos) => {
    tituloModal = "Editar Usuario";
    setInsertarUsuario(datos);
    console.log(datos);
    handleShow();
  };

  const actualizarUsuario = (datos) => {
    let endpoint = `${ruta}/${datos.id}`;
    datos.user_permissions = permisos;
    console.log(endpoint);
    console.log(datos);
    let cuerpo = {
      body: datos,
      headers: { "content-type": "application/json" },
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
    insertarUsuario.date_joined = date.toLocaleDateString();

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
    setPermisos([...permisos, selectedItem])
  }

  let onRemove = (selectedList, removedItem) => {
    let actualizacion = permisos.filter(e => e.id !== removedItem.id);
    setPermisos(actualizacion)
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
          <Modal.Header>
            <Modal.Title>{tituloModal}</Modal.Title>
            <AiOutlineClose
              style={{ fontSize: 20, cursor: "pointer" }}
              onClick={handleClose}
            />
          </Modal.Header>
          <Modal.Body>
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
                  <Form.Group className="mb-3">
                    <Form.Label>Permisos:</Form.Label>
                    <Multiselect
                      options={data}
                      displayValue="Country"
                      onSelect={onSelect}
                      onRemove={onRemove}
                      placeholder="Selección"
                      emptyRecordMsg='No hay opciones que mostrar'
                      style={{
                        searchBox: { // To change search box element look
                          fontSize: 16,
                          height: 38
                        },
                        inputField: { // To change input field position or margin
                          paddingBottom: 8,
                        },
                        optionContainer: { // To change css for option container 
                          border: "2px solid",
                          height: 120,
                        },
                        chips: { // To change css chips(Selected options)
                          background: "#007bff",
                          borderRadius: 3
                        },
                      }} />
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
          </Modal.Body>
          <Modal.Footer>
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
          </Modal.Footer>
        </Modal>

        <Modal /* size="lg" */ show={showDetalles} onHide={handleCloseD}>
          <Modal.Body>
            <div className="card card-primary">
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
                <hr />
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
                  {insertarUsuario.user_permissions.map((per) => 
                    `${per.Country},`
                  )}
                </p>
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
          <Modal.Header>
            <Modal.Title>Eliminar Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>¿Estás seguro de eliminar?</p>
          </Modal.Body>
          <Modal.Footer>
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
          </Modal.Footer>
        </Modal>

        {mostrar && <MyToast setMostrar={setMostrar} msg={msg} />}
      </div>
    </>
  );
};

export default GestionUsuarios;
