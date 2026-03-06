import React from 'react'

function navbar() {
  return (
    <div className='m-10  flex justify-between'>
        <div className='font-bold'>
            CS-Ticket System 
        </div>
       <div className='flex gap-20'>
        <div className='flex gap-5'>
            <div><ul><li><a href="">Home</a></li></ul></div>
            <div><ul><li><a href="">FAQ</a></li></ul></div>
            <div><ul><li><a href="">Challenging</a></li></ul></div>
            <div><ul><li><a href="">Blog </a></li></ul></div>
            <div><ul><li><a href="">Download</a></li></ul></div>
            <div><ul><li><a href="">Contacts</a></li></ul></div>
        </div>
        <div className=' p-2 text-white text-sm rounded-2xl justify-center items-center  bg-[#422AD5]'><button>New Ticket</button></div>
       </div>
    </div>
  )
}

export default navbar
