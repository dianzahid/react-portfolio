import './index.scss'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
 

const Contact = () => {

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_8n7tecm', form.current, { publicKey: 'Qos_fQP46t4ciAIiR' })
      .then(() => {
        alert('Email sent');
        window.location.reload(false);
      }, () => {
        alert('Failed to send email, please try again');
      });
  };
  return (

    <>
    <div className="container contact-page">
        <div className="text-zone">
          <h1>
            Contact me
          </h1>
            <p>
            I am currently pursuing my Honours Bachelor of Computer Engineering at Toronto Metropolitan University, with a concentration in Software Engineering. Alongside my studies, I've built hands-on experience developing full-stack applications, algorithm visualizers, and tutoring advanced math and physics. I'm actively seeking co-op opportunities where I can contribute as a full-stack developer or software engineer while continuing to learn and grow.
            </p>
            <p>
            In today's fast-moving tech landscape, staying connected is key. If you're hiring, interested in discussing career opportunities, or simply want to connect and chat about technology, feel free to reach out — I'd be happy to connect.
            </p>
            <p>
            Thank you for your time,
            Dian Zahid
            </p>
        </div>

        <div className="contact-form-container">
          <div className="contact-form">
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder='Email' required />
                </li>
                <li>
                  <input type='text' name='subject' placeholder='Subject' required />
                </li>
                <li>
                  <textarea placeholder='Message' name='message' required></textarea>     
                </li>
                <li>
                  <input type='submit' value='SEND' className='flat-button' />
                </li>        
              </ul>
            </form>
          </div>
        </div>

    </div>
    </>

  )
}

export default Contact