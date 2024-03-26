import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Post({blog, key}) {
  return (
    <Link to={`/read/${blog.id}`} className='post-link'>
        <div className='blog'>
            <img src={blog.thumbnail} className="blog-image"/>
            <div className='blog-title'>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
            </div>
        </div>
    </Link>
  )
}

export default Post