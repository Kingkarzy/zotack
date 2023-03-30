import React, { useRef } from 'react';
import './contact.css';
import { MdEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_6gqql3k',
      'template_3v4y30a',
      form.current,
      'wXb5XShz6Pb0fTC2q'
    );
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>contact@zotack.com</h5>
            <a
              href='mailto:contact@zotack.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon' />
            <h4>Facebook</h4>
            <h5>Zotack</h5>
            <a
              href='https://m.me/zotack0'
              target='_blank'
              rel='noopener noreferrer'
            >
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+234 813 643 4416</h5>
            <a
              href='https://api.whatsapp.com/send?phone=+2349036980222'
              target='_blank'
              rel='noopener noreferrer'
            >
              Send a message
            </a>
          </article>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            required
          />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>
          <button
            type='submit'
            className='btn btn-primary'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
