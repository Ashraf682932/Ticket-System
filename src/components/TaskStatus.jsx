import React from 'react'

const TaskStatus = ( {tasks , handleComplete,}) => {
  return (
    <div>
      
      <h2 className="font-bold mb-4">Task Status</h2>
    
    {tasks.map(task => (
        <div key={task.id} className='bg-white p-3 rounded shadow'>
            <p>{task.title}</p>

            <button onClick={() => handleComplete(task.id) }
               className='bg-green-500 text-white px-3 py-1 rounded mt-2'   
                >
                Complete
            </button>
        </div>
    ))}

    </div>
  ) ;
} ;

export default TaskStatus ;
