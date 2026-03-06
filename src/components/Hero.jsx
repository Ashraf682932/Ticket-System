import React from 'react'

const Hero = ({ inProgress , resolved}) => {
  return (
    <div className=' m-10  w-full flex justify-center gap-40'>
    
        <div className='w-150 flex flex-col  items-center  justify-center h-50 bg-gradient-to-tr from-[#4338ca] via-[#1e40af] to-[#164e63]'>
          <h3 className="text-lg">In-Progress</h3>
          
           <h1 className="text-4xl font-bold">{inProgress}</h1>
       
      </div>
      
       <div className=' flex flex-col  items-center  justify-center w-150 h-50  bg-gradient-to-bl from-[#65a30d] via-[#16a34a] to-[#15803d]'>
     
         <h3 className="text-lg">Resolved</h3>
           <h1 className="text-4xl font-bold">{resolved}</h1>
       
      </div>
     
    </div>
  )
}

export default Hero
