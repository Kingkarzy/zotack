import React from 'react';
import { Link } from 'react-router-dom';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
//import {MdEmail} from 'react-icons/md'
import { BsHeartFill } from 'react-icons/bs';

import './about.css';

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Us</h2>
      <div className='container about__container'>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>65+ Completed</small>
            </article>
          </div>
          <br />
          <span>
            {' '}
            We specialize in creating wesites for individuals and
            small businesses.
            <span>
              {' '}
              Why settle for special offers and templates when we
              provides custom designs.{' '}
            </span>
            <span>
              {' '}
              We are passionate about building things for the web.{' '}
            </span>
            <span>
              {' '}
              We have a zeal for coding by studying the IT field.
            </span>
          </span>

          <h4>
            We <BsHeartFill id='heart__icon' /> working with small
            businesses
          </h4>
          <span>
            We offer a great service & opportunity to startups. We are
            always looking to provide the best services possible as
            customers experience is our responsibility.
          </span>
          <span>
            {' '}
            Take a look at our portfolio below. If you think we'd
            serve you well{' '}
          </span>
          <br />
          <br />
          <Link
            to='/contact'
            className='btn btn-sm'
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default about;
