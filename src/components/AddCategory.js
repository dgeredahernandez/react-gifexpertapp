import React, { useState } from 'react';
import ProtoTypes from 'prop-types';

export const AddCategory = ( { setCategories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = ( e ) => {
        //console.log(e.target.value);
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Submit hecho');
       if ( inputValue.trim().length > 2){
        setCategories( cat => [ inputValue, ...cat] );
        setinputValue('');
       }
    }
    
    return (
          <form onSubmit={ handleSubmit }>
           <input 
             type="text" 
             value={ inputValue }
             onChange={ handleInputChange }
            />  
          </form>
    )
}

AddCategory.prototype = {
    setCategories: ProtoTypes.func.isRequired
}
