import React from 'react'
import './Contact.css'
import Layout from '../../components/layout/Layout'
const Contact = () => {
  return (
    <Layout>
     <div className='contact-box'>
      {/* <div className='contact-img'>
      <img src='https://www.shutterstock.com/image-vector/contact-us-icon-logo-modern-600nw-567152911.jpg'/>
      </div> */}
      <div className='contact-info'>
      <h1>Contact Us</h1>
      <p>Email : mayureshmayuresh56@gmail.com</p>
      <p>Mobile : 9834404492</p>
      <p><a href='http://www.linkedin.com/in/mayuresh-devadkar-874403224'>Linkedin</a></p>
      <h6>For any inquiries or information about our product, don't hesitate to reach out.</h6>

      </div>
     </div>
    </Layout>
  )
}

export default Contact