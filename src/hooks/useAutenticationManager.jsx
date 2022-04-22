import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { helpHttp } from "../helpers/helpHttp";

export const useAutenticationManager = () => {
  const [userData, setUserData] = useState([]);
  const [ruta, setRuta] = useState(null);
  const [rutaCerrarSesion, setRutaCerrarSesion] = useState(null)

  let history = useHistory();

  useEffect(() => {

    helpHttp()
      .get("./routes/rutas.json")
      .then(response => {
        setRuta(response.rutasDesarrollo.rutaUsuarios);
        helpHttp()
          .get(response.rutasDesarrollo.rutaUsuarios)
          .then((res) => {
            //console.log(res);
            if (!res.error) {
              //console.log(res)
              //setDbUsuarios(res.data);
              setUserData(res);
            } else {
              setUserData([]);
            }
          })
      })

    helpHttp()
      .get("./routes/rutas.json")
      .then(response => {
        setRutaCerrarSesion(response.rutasProduccion.rutaCloseSession);
      })


  }, []);


  //Valida que el usuario coincida con la información extraída de la base de datos
  const ValidateUser = (user = null) => {
    if (user === null) {
      return {
        code: "02",
        messageError: "Los datos del usuario no deben ser nulos",
      };
    } else if (user.username === "" || user.password === "") {
      return {
        code: "03",
        messageError: "Los campos del usuario no deben estar vacios",
      };
    } else {
      let validateResponse = null;

      if(userData === null) {
        alert("Probando error");
        return;  
      }

      userData.forEach((usuario) => {
        console.log(usuario);
        if (
          usuario.username === user.username &&
          usuario.password === user.password
        ) {
          sessionStorage.setItem("userAuth", JSON.stringify(usuario));
          return (validateResponse = {
            code: "200",
            message: "Usuario correcto",
          });
        }
      });
      //console.log(validateResponse);
      if (validateResponse === null) {
        return {
          code: "04",
          messageError: "El usuario no se encuentra en la base de datos",
        };
      } else if (validateResponse.code === "200") {
        return validateResponse;
      }
    }
  };

  //Verfica que la sesión este activa
  const inSession = () => {
    let user = JSON.parse(sessionStorage.getItem("userAccount"));
    if (!user) {
      history.push("/");
    }
    /* let user = JSON.parse(sessionStorage.getItem("userAuth"));
    if (!user) {
      history.push("/");
    } */
  };

  //cierra la sesión
  const closeSession = ( ) => {
    /* let userAccount = JSON.parse(sessionStorage.getItem("userAccount"));
    console.log(userAccount.datos)
    //console.log(rutaCerrarSesion);
    let cuerpo = {
      headers: { 
        "content-type": "application/json",
        "Authorization": `Token ${userAccount.datos}`
      },
    };
    helpHttp().post(rutaCerrarSesion, cuerpo).then((res) => {
      if (!res.error) {
        console.log(res)
      } else {
        console.log(res);
      }
    }); */

    sessionStorage.removeItem("userAuth");
    history.push("/");
  };

  const ConfirmValidation = (objeto) => {
    sessionStorage.setItem("userAccount", JSON.stringify(objeto));
  }

  return {
    ValidateUser,
    inSession,
    closeSession,
    ConfirmValidation
  };
};

/* let usersData = [
    { user_id: 24, username: "admin", pass: "admin" },
    { user_id: 13, username: "Leo", pass: "123" },
  ]; */
