import React from 'react'
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext';

//EN ESTE ARCHVIO SE ENCUTNTRA TODA LA LOGICA Y LO QUE ES UI
// SE HACE EN EL COMPONENTE APPUI.JS
/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar curso React', completed: false },
  { text: 'Hacerse bolita', completed: false },
]; */


function App() {

  
  return (

    <TodoProvider>
    
    <AppUI
     
    />
    </TodoProvider>
  );
}

export default App;
