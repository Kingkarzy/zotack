import React, { useRef } from 'react';
import './contact.css';
import { MdEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
// import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs.sendForm('service_9jmclzv', 'template_xfs2zhb', form.current, 'LRqFyM9QJ4sLK7vfp')
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
            <h5>cjahanwa@gmail.com</h5>
            <a
              href='mailto:cjahanwa@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon' />
            <h4>Facebook</h4>
            <h5>Chijioke Ahanwa</h5>
            <a
              href='https://m.me/chijioke.ahanwa'
              target='_blank'
              rel='noopener noreferrer'
            >
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+234 811 831 8270</h5>
            <a
              href='https://api.whatsapp.com/send?phone=+2348118318270'
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
