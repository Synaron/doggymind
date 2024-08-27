import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/css/ContactForm.css'; // Import your CSS file

export const ContactForm = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ce53x1b', 'template_rck0n0n', form.current, {
        publicKey: 'JgMmuVjh0G2U1PPwC',
      })
      .then(
        () => {
          setMessage('Form sent successfully!');
          form.current.reset(); // Optionally clear the form after successful submission
        },
        (error) => {
          setMessage('Failed to send form. Please try again.');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="background-with-overlay">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h1 id='kontaktformular'>Kontaktformular</h1>
        <label>Name:</label>
        <input type="text" name="from_name" className="form-input" />
        <label>Anschrift:</label>
        <input type="text" name="anschrift" className="form-input" />
        <label>Telefonnummer:</label>
        <input type="text" name="telefonnummer" className="form-input" />
        <label>Email</label>
        <input type="email" name="email" className="form-input" />
        <label>Alter des Hundes:</label>
        <input type="text" name="alter_des_hundes" className="form-input" />
        <label>Hunderasse:</label>
        <input type="text" name="rasse" className="form-input" />
        <label>Beschreibung des Anliegens</label>
        <textarea name="beschreibung" className="form-textarea" />
        <input type="submit" value="Absenden" className="form-submit" />
        {message && <p className="success-message">{message}</p>}
      </form>
    </div>
  );
};

export default ContactForm;