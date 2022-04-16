import React from "react";

import FormularioLogin from "../components/Formularios/FormularioLogin";

const Login = () => {

  return (
    <>
      <div className="content-wrapper bg-white">
        <div className="content-header"></div>
        {/* Main content */}
        <section style={{width: "80%", marginTop: 80}} className="content">
          {/* <button onClick={mandarAlHome}>Ir al Home</button> */}
           <FormularioLogin />
        </section>
      </div>
    </>
  );
};

export default Login;
