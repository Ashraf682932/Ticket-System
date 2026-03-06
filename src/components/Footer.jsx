import React from 'react'

const Footer = () => {
  return (
   <footer className="footer sm:footer-horizontal bg-black text-white p-10">
  <aside>
    
  
      <h1 className='font-bold'>CS-Ticket System</h1>
      <br />
        <p>
      CS-Ticket is a simple and efficient customer support ticket management  system. <br /> It helps teams track, manage, and resolve support requests in  an organized way. <br /> Users can easily create tickets, monitor their progress, and get  timely resolutions. <br /> The system improves communication and ensures better support service for customers.

    </p>
  </aside>
  <nav>
    <h6 className="footer-title font-bold">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Our mission</a>
    <a className="link link-hover">Contact saled</a>
    
  </nav>
  <nav>
    <h6 className="footer-title font-bold">Services</h6>
    <a className="link link-hover">Products & Services</a>
    <a className="link link-hover">Customer Storeis</a>
    <a className="link link-hover">Downloded Apps</a>
    
  </nav>
  <nav>
    <h6 className="footer-title font-bold">Information</h6>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Terms & Condition </a>
    <a className="link link-hover">Join us</a>
  </nav>
</footer>
  )
}

export default Footer
