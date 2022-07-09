import { ItemTask } from './ItemTask';

export const GridTasks = ( { tasks, removeTask } ) => {
  return (
    <div className='cont-tasks'>

      {tasks.map( ({ task, color }) => (
        <ItemTask 
          key={ task }
          task={ task }
          color={ color }
          removeTask={ removeTask } />
      ) ) }
      
    </div>
  )
}
