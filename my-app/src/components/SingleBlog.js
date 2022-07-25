import React from 'react'
import { Link } from 'react-router-dom'


const SingleBlog = ({ img, h4, p, h1}) => {
  return (
    <div className="blog-box position-relative d-flex align-items-center w-100">
    <div className="blog-img">
        <img src={img} alt="" />
    </div>
    <div className="blog-texts">
        <h4>
           {h4}
        </h4>
        <p>
           {p}
        </p>
        <Link to="/blog">Continue Reading</Link>
    </div>
    <h1>{h1}</h1>
</div>
  )
}

export default SingleBlog;