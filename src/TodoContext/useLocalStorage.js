import React from 'react';

// Crear nuestro propio react Hook
// Una de las reglas esque el nombre empiece por use

function useLocalStorage(itemName, initialValue) {
    // Se crean los estados de carga y de error
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    // Creamos un nuevo estado para los todos
    // Le asignamos un estado por defecto que será (array vacío, valor vacío, etc)
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          // Si el usuario no ha creado ningun to do se crea un array que muestra to do por defecto
          if (!localStorageItem) {
  
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
            // Si el usuario ya ha creado to do, por lo tanto se encuentran en el local sotrage
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          // Cuando la información ya fue obtenida del localStorage y se actualiza el estado se llama setLoading 
          setLoading(false)
        } catch (error) {
          setError(error)
        }
      }, 1000);
    });
  
  
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        // Guradamos la información en el local storage
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    }
  
  }

  export {useLocalStorage};