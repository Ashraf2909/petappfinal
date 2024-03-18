import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from './Post';
import './styles.css';
import logo from './img/Happy-Guy.jpg';

function Posts() {
  const [blogs, setBlogs] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Your fetch logic here to setRecords, for example:
    // axios.get('your-api-endpoint').then(response => setRecords(response.data));
  }, []);

  const getInputData = (event) => {
    setBlogs(records.filter(r => r.title.toLowerCase().includes(event.target.value.toLowerCase())));
  };

  return (
    <div className='posts'>
      <div className='search-container'>
        <input type="text" placeholder='search' 
        onInput={getInputData} className='search-input'></input>
      </div>
      <div className='profile-container'>
        <img src={logo} className="profile-image" alt="Jeff A." />
        <div className="profile-description">
          <h4>Jeff A.</h4>
          <p>Hello everyone! My name is Jeff. I have plenty of experience looking after dogs. I currently own a pet dog in which i have been taking care of it for over three years.</p>
        </div>
      </div>
      <div className='blog-icon'>
        <h3>Current Sitters</h3>
        <i className='fa fa-calculator'></i>
      </div>
      <div className='posts-container'>
        {blogs.map((blog, index) => (
          <Post blog={blog} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default Posts;
