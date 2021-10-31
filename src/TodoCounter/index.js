import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

// se le asignan las props al componente (las que fueron declaradas en el padre)
function TodoCounter() {

    const {totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <h1 className='YourTodo'>Worki</h1>
            {/* Le asignamos el valor de las propiedades al texto para que cambie segun las marcadas */}
            <h2 className='titleCounter'>Has completado {completedTodos} de {totalTodos} tareas</h2>
        </React.Fragment>
    );
}

export { TodoCounter };