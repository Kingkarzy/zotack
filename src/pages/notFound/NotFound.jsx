import React from 'react'
import './notFound.css'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <section>
        <div className="container notfound__container">
            <h1>Page Not Found</h1>
            <Link to="/" className='btn'>Return To HomePage</Link>
        </div>
    </section>
  )
}

export default NotFound