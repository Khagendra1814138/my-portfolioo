import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "../Styles/Contact.css"

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0vg4215', 'template_dvemdm4', form.current, 'UbZHG0vr0NrbNe-GI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
          console.log("message is sent!");
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contactForm-Frame'>
      {/* <label id="style">Name</label> */}
      <input id="styleInput" type="text" name="user_name" placeholder='Full Name*'/>
      
   
      
      {/* <label id="style">Email</label> */}
      <input id="styleInput" type="email" name="user_email" placeholder='Email*'/>
      
      
      {/* <label id="style">Message</label> */}
      <textarea id="msgInput" name="message" placeholder='How can I help you? :)'/>
      
      <input id="send-Button" type="submit" value="SEND MESSAGE 📧" />
    </form>
  );
};