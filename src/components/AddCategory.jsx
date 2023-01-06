import { useState } from 'react';

export const AddCategory = ({ setCategories, onNewCategory }) => {
  const [inputValue, setInputvalue] = useState('');

  const onInputChange = ({ target }) => {
    const value = target.value;
    setInputvalue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const value = inputValue.trim();
    if (value.length < 1) return;

    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(value);
    setInputvalue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
