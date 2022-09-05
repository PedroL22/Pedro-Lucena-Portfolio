import React, { useState, useRef } from 'react';
import './styles.css';
import emailjs from 'emailjs-com';
import PersonalText from '../../assets/images/undraw_personal_text.svg';

function Section4() {
  const [message, setMessage] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p8f68rz', 'template_ixeh0fe', form.current, '-xo0bQBMsXWq4CwN9')
      .then();
    e.target.reset();
    setMessage(
      setTimeout(() => {
        setMessage(false);
      }, 3000),
    );
  };

  return (
    <div className="section4">
      {message && (
        <div className="success-message">
          <h3>Message sent successfully.</h3>
        </div>
      )}
      <div className="form-wrapper">
        <div className="left">
          <img src={PersonalText} alt="" />
        </div>
        <div className="form-class">
          <h1 className="title3">Get In Touch</h1>
          <form ref={form} onSubmit={sendEmail}>
            <label className="label1">
              <input className="input-form" id="name" type="text" placeholder="Name" name="name" />
              <input
                className="input-form"
                id="email"
                type="email"
                placeholder="Email Address"
                name="email"
              />
            </label>
            <label>
              <input
                className="input-form"
                id="subject"
                type="text"
                placeholder="Subject"
                name="subject"
              />
              <input
                className="input-form"
                id="message"
                type="textarea"
                placeholder="Message"
                name="message"
              />
            </label>
            <button className="form-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Section4;
