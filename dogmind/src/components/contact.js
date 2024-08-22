import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ce53x1b', 'template_rck0n0n', form.current, {
        publicKey: 'JgMmuVjh0G2U1PPwC',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Anschrift</label>
      <input type="text" name="anschrift" />
      <label>Telefonnummer:</label>
      <input type="text" name="telefonnummer" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Alter des Hundes:</label>
      <input type="text" name="alter_des_hundes" />
      <label>Hunderasse:</label>
      <input type="text" name="rasse" />
      <label>Beschreibung des Anliegens</label>
      <textarea name="beschreibung" />
      <input type="submit" value="Send" />
    </form>
  );
};
