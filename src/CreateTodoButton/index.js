import React from 'react';
import './CreateTodoButton.css'
import logo from './plus.png'

function CreateTodoButton(props) {

    const onClickButton = () => {
        // con este prevstate se puede identificar el estado previo de nuestra propiedad
        // true o false dependiendo si la modal está abierta o cerrada
        // se retorna entonces !prev state que es la negacion del estado previo
        props.setOpenModal(prevState => !prevState);
    };
    return (
        <React.Fragment>
            <h1 className='CreateTodoButton'>
                <img src={logo}
                    onClick={onClickButton}
                    alt='plus'></img>
            </h1>
        </React.Fragment>
    );
}

export { CreateTodoButton };