import React from 'react'
import TicketCard from './TicketCard'
import TaskStatus from './TaskStatus'
import { useEffect ,useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const TicketSection = ({ setInProgress , setResolved}) => {

    const [tickets ,setTickets] = useState([]) ;

     const [tasks,setTasks] = useState([]) ;

     useEffect (() => {
        fetch("/ticket.json")
        .then ( res => res.json())
        .then ( data =>setTickets(data)); 
        
     },[]) ;

     const handleAddTask = (ticket) => {

        toast.success ("Ticket Added")
        setTasks([...tasks , ticket]);
        setInProgress(prev => prev + 1);
        
     };
     const handleComplete = (id) =>
     {
        toast.info("Task completed");

        const remaining = tasks.filter(task => task.id !== id);

        setTasks(remaining);

        setResolved(prev => prev + 1);

     };

  return (

    <div className='grid grid-cols-3 gap-6 mt-10'>

      <div className='col-span-2 grid grid-cols-2 gap-4'>
        
            {tickets.map(ticket => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            handleAddTask={handleAddTask}
          />
        ))}
        </div>  
        <TaskStatus
        tasks={tasks}
        handleComplete={handleComplete}
        />
      
    </div>
  )
}

export default TicketSection ;
