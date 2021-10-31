import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider (props){
    // llamamos nuestro custom hook creado arriba y le pasamos los argumentos necesitados
  const { item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  // Declaramos el estado para search value para usarlo en el componente TodoSearch
  const [searchValue, setSearchValue] = React.useState('')

  // Creamos un nuevo estado para nuestra modal
  const [openModal, setOpenModal] = React.useState(false);
  // contar los todos completados 
  const completedTodos = todos.filter(todo => todo.completed === true).length; /* tambien puede escribirse !!todo.completed  */
  const totalTodos = todos.length;
  //filtrar los todos
  let searchedTodos = [];
  // si el valor escrito es menor que 1, muestra el listado normal de tareas
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
    // si el valor es mayor que 1
  } else {
    // se le asigna el valor a searchedTodos que seran los valores filtrados por las letras escritas en el imput
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      // si cada uno de los todos incluye el texto buscado se retorna este valor para filtrarlo
      return todoText.includes(searchText);
    });
  }

   // añadir un to do
   const addTodo = (text) => {
   // asignamos el valor newTodos al listado anterior de todos que ya teniamos
    const newTodos = [...todos];

    // le asignamos los nuevos valores al listado de todos, completed true 
    newTodos.push ({
      completed: false,
      text,
    });
    // le damos el valor nuevo del estado de setTodos
    saveTodos(newTodos);
  };

  // marcar un to do como completado
  const completeTodo = (text) => {
    // se analiza to do por to do para determinar cual tiene ese mismo texto
    // y al encontrarlo vamos a obtener su posicion con findIndex
    const todoIndex = todos.findIndex(todo => todo.text === text);
    // asignamos el valor newTodos al listado anterior de todos que ya teniamos
    const newTodos = [...todos];
    // le asignamos los nuevos valores al listado de todos, completed true 
    newTodos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: true,
    }
    // le damos el valor nuevo del estado de setTodos
    saveTodos(newTodos);
  };

  // borrar un to do con x
  const deleteTodo = (text) => {
    // se analiza to do por to do para determinar cual tiene ese mismo texto
    // y al encontrarlo vamos a obtener su posicion con findIndex
    const todoIndex = todos.findIndex(todo => todo.text === text);
    // asignamos el valor newTodos al listado anterior de todos que ya teniamos
    const newTodos = [...todos];
    // cuando el texto coincide con el elemento de todoIndex se eliminara un todo
    newTodos.splice(todoIndex, 1);
    // le damos el valor nuevo del estado de setTodos
    saveTodos(newTodos);
  };

  /* console.log('render antes del use efect');
    React.useEffect(() => {
      console.log('use effect');
      // el array vacio se envia para que el useeffect se ejecte una unica vez
      // si queremos que se renderice cuando ocurra un cambio de estado, se escribe dentro del arrya
      // es decir le ponemos condiciones para que se renderice cuando queremos 
      // se pone la condicion de cambio de estado dentro del array
    }, []);
    console.log('render luego del use efect');
   */
    return (
        <TodoContext.Provider value ={{
          loading,
          error,
          totalTodos,
          completedTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          addTodo,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider}