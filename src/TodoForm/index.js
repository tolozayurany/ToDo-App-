import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

// Formulario para crear nuevos todos
function TodoForm() {

    // estado local para ver los cambios del text area
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onCancel = () => {
        // se usa esto para que se cierre cambia el estado a false que permite cerrarla
        setOpenModal(false)

    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        // se usa esto para que se cierre cambia el estado a false que permite cerrarla
        setOpenModal(false)
    };
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nueva tarea</label>
            {/* Sirve para agregar texto grandey que se baja hacia abajo y no hacia un lado */}
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Hacer listado de tareas'>

            </textarea>
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}>
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type="submit">
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };