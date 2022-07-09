import { useState } from 'react';

export const InputTask = ({ onAddTask }) => {

  const [inputValue, setInputValue] = useState('');
  const [color, setColor] = useState('#287eff')

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  }

  const onModifyColor = ({ target: { value }}) => {
    setColor(value);
  }

  return (
    <div className='input-button'>
      <form onSubmit={ (e) => onAddTask(e, inputValue, color, setColor, setInputValue) }>
        <input 
          type="text"
          className="input-task"
          placeholder='Escribe la tarea (Máx 50 caracteres)'
          onChange={ onChange }
          value={ inputValue } />
      </form>
      <input type="color" className='input-color' value={ color } title="Choose your color" onChange={ onModifyColor } />
      <button onClick={ (e) => onAddTask(e, inputValue, color, setColor, setInputValue) } className="btn btn-primary mt-2">Agregar</button>
    </div>
  )
}
