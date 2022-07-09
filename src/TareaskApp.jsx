import { GridTasks } from './components/GridTasks';
import { InputTask } from './components/InputTask';
import { useTask } from './hooks/useTask';

export const TareaskApp = () => {

  const { tasks, onAddTask, removeTask } = useTask();

  return (
    <>
      <h1>Tareask</h1>

      <InputTask onAddTask={ onAddTask }/>

      { tasks.length == 0 ? <p className='msg'>¡Agrega una tarea!</p> : <GridTasks tasks={ tasks } removeTask={removeTask} /> }
      
    </>
  );
}
