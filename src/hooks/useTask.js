import { useState } from 'react';

export const useTask = ( initialValue = [] ) => {

  const [tasks, setTasks] = useState( initialValue );

  const onAddTask = ( e, inputValue, color, setColor, setInputValue ) => {

    e.preventDefault();

    if(inputValue.length <= 1 || inputValue.length >= 50) return;

    setTasks( [{task: inputValue, color}, ...tasks] );

    setColor('#287eff');
    setInputValue('');

  }

  const removeTask = ( deleteTask ) => {
    const newArray = tasks.filter( ({task}) =>  task != deleteTask )
    setTasks(newArray);
  }

  return {
    tasks,
    onAddTask,
    removeTask,
  }
  
}