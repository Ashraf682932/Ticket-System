import React from 'react'

function TicketCard({ticket , handleAddTask}) {
  return (
    <div onClick={() => handleAddTask(ticket)}
    className="bg-white p-4 rounded shadow cursor-pointer"
    >
         <h2 className="font-bold">{ticket.title}</h2>
        <p className="text-sm">{ticket.description}</p>

        <div className="flex justify-between mt-3 text-sm">
        <span>#{ticket.id}</span>
        <span>{ticket.customer}</span>
         </div>

        <div className="flex justify-between mt-2 text-sm">
        <span>{ticket.priority} Priority</span>
        <span>{ticket.createdAt}</span>
      </div>
     
    </div>
  )
}

export default TicketCard ;
