import { useState} from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target})=>{

        setInputValue(target.value);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        const valueClean = inputValue.trim();
        if( valueClean.length <= 1 ) return;

        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory(valueClean);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input type="text" 
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ onInputChange }></input>
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequire
}