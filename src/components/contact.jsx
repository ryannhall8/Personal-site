import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_klppu2f', 'template_x3f5qtd', form.current, 'U7TiPYe5ijdjExC_J')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Something went wrong. Please try again later.');
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <h4>Feel free to reach out!!</h4>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">
          <span>📩</span> Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;