import React, { useEffect, useState } from "react";

import Cuenta from "./Cuenta.jsx";
import CuentaAtras from "./CuentaAtras.jsx";
import Alert from "./Alert.jsx"


//create your first component
const Home = () => {
  return (
    <div className="container p-0 text-center">
      <Cuenta />
      <CuentaAtras />
    </div>
  );
};

export default Home;
