import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  })

  const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // Post api
  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:5000/users", user);
    navigate("/")
  }

  return (
    <div className='container'>
      <div className='w-75 mx-auto shadow p-5'>
        <h2 className='text-center mb-4'>Add a User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input
              type="text"
              className='form-control form-control-lg'
              placeholder='Enter Your Name'
              name='name'
              autoComplete='off'
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type="text"
              className='form-control form-control-lg'
              placeholder='Enter Your Username'
              name='username'
              autoComplete='off'
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type="email"
              className='form-control form-control-lg'
              placeholder='Enter Your E-mail Address'
              name='email'
              autoComplete='off'
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type="number"
              className='form-control form-control-lg'
              placeholder='Enter Your Phone Number'
              name='phone'
              autoComplete='off'
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type="text"
              className='form-control form-control-lg'
              placeholder='Enter Your Website Name'
              name='website'
              autoComplete='off'
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className='btn btn-primary btn-block'>Add user</button>
        </form>
      </div>
    </div>
  )
}

export default AddUser