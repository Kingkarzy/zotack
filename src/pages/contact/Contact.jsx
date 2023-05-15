import React, { useRef } from 'react';
import './contact.css';
import { MdEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import emailjs from 'emailjs-com';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Contact = () => {
  const form = useRef();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_6gqql3k',
      'template_3v4y30a',
      form.current,
      'wXb5XShz6Pb0fTC2q'
    );
    setOpen(true);
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
              href='https://api.whatsapp.com/send?phone=2349036980222'
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              id='modal-modal-description'
              sx={{ mt: 2 }}
            >
              Message Sent Successfully
            </Typography>
          </Box>
        </Modal>
      </div>
    </section>
  );
};

export default Contact;
