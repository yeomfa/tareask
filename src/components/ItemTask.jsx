import { useState } from 'react';

export const ItemTask = ({ task, color, removeTask }) => {

  const [check, setCheck] = useState(false);

  const onCheck = () => {
    setCheck( true );
  }

  return (
    <div className={`task ${check ? 'b-green' : ''}`.trim()} style={{border: `2px solid ${color}`}}>
      <p>{ task }</p>

      <button 
        className="btn-check"
        onClick={ onCheck }><i className='bx bx-check'></i></button>

      <button 
        className="btn-x"
        onClick={ () => removeTask(task) }><i className='bx bx-x' ></i></button>
    </div>
  )
}
