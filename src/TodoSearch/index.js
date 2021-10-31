import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

// creamos el estado en el componente padre y se pasa aqui como parametro o prop
// Creamos un estado con estring vacío que se guarda en searchValue
  // se tiene una función que permite actualizar ese estado setsearchvalue
  
function TodoSearch() {

  // Creamos el estado con context para traer los valores que necesitamos para cambio de estado

  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    // event.target.value sirve para identificar lo que se escribe 
    // en el imput de abajo donde se llama esta función
    console.log(event.target.value);
    // llamamos la función para actualizar el estado
    setSearchValue(event.target.value)
  };
  // Usando array se puede retornar varios elementos sin necesidad de 
  // utilizar un fragment o un div general
  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      // el valor del imput será el valor que guardamos con searchvalue para que se
      // vaya acualizando con el imput
      value={searchValue}
      onChange={onSearchValueChange}
    />
  
  )
}

export { TodoSearch };