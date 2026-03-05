import React from 'react'

const Hero = () => {
  return (
    <div className=' m-10  w-full flex justify-center gap-40'>
    
        <div className='w-150 flex  items-center  justify-center h-50 bg-gradient-to-tr from-[#4338ca] via-[#1e40af] to-[#164e63]'>
     <p>In process <br /> <span className='text-6xl'>0</span></p>
        <img className='' src="https://github.com/Apollo-Level2-Web-Dev/Mission-Restart-A2/blob/main/vector1.png?raw=true" alt="" />
      </div>
      
       <div className=' flex  items-center  justify-center w-150 h-50  bg-gradient-to-bl from-[#65a30d] via-[#16a34a] to-[#15803d]'>
     
        <p>Resolved <br /> <span className='text-6xl'>0</span></p>
        <img className='' src="https://github.com/Apollo-Level2-Web-Dev/Mission-Restart-A2/blob/main/vector1.png?raw=true" alt="" />
      </div>
     
    </div>
  )
}

export default Hero
