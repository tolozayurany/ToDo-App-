import React from 'react';
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {

  const { error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter
      // le damos las propiedades de total y completed a este componente
      />

      <TodoSearch
      // Le asignamos dos propiedades a este componente que son las que permiten 
      // el cambio de estado en el componente TodoSearch
      />

      <TodoList>
        {/* Estos son avisos de estado que se ejecutan cuando se presenten los tres casos, eroor, cargando y completo */}
        {error && <p> Hubo un error </p>}
        {loading && <p> Estamos cargando, espera ... </p>}
        {(!loading && !searchedTodos.length) && <p> crea tu primer to do  </p>}
        {/* cuando los usuarios escriben algo, se mostraran aquellos que coincidan con el valor escrito  */}
        {searchedTodos.map(todo => (
          /* Se asigna un key que es un valor único que tendra
          los elementos, para que no genere problemas dentro del map
          en este caso, los valores unicos son los del texto pero puede ser un id */
          <TodoItem key={todo.text}
            text={todo.text}
            completed={todo.completed}
            // creamos propiedad oncomplete que lee la función de completeTodo
            // enviandole el texto de ese todo
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
        <TodoItem />
      </TodoList >
      {openModal && (
        <Modal>
          <TodoForm>
            
          </TodoForm>
        </Modal>
      )}
      <CreateTodoButton
      setOpenModal = {setOpenModal} 
      />
    </React.Fragment>
  );
}

export { AppUI }