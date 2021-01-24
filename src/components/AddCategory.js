import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [ inputValue, setInputValue ] = useState('');

  const hadnleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories(oldCategories => [inputValue, ...oldCategories]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        value={inputValue}
        onChange={ hadnleInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
