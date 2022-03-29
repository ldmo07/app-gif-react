import React, { useState } from "react";
import PropTypes from "prop-types";

export const SearchGif = ({ setTermino }) => {

 const [inputValue, setinputValue] = useState("");

 const cambiarValorInputBusqueda = (e) =>{
     setinputValue(e.target.value);
 }

 const agregarTermino = (e) =>{
     e.preventDefault();
     setTermino(term=>[inputValue,...term]);
     setinputValue("");
 }

  return (
    <>
      <form onSubmit={agregarTermino}>
        <input type="text" 
            placeholder="Escriba..." 
            value={inputValue}
            onChange={cambiarValorInputBusqueda}/>
      </form>
    </>
  );
};

//DEFINO LOS PARAMETROS QUE VA RECIBIR EL COMPONENTE
SearchGif.propTypes = {
  setTermino: PropTypes.func.isRequired,
};
