import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, SignUp } from '../screens'
import { Typography } from 'antd'


const { Title } = Typography


const AuthRouters = () => {
  return (

    <div className="container">
      <div className="row">
        <div className="col text-center d-none d-lg-block" style={{marginTop:'12%'}}>
          <img src="" alt="" />
          <div className='mb-4'>
            <img src="https://firebasestorage.googleapis.com/v0/b/kanban-project-a6612.appspot.com/o/Logo.png?alt=media&token=cf75ffdc-41fb-47ca-af1a-a7b1832ff8ba"
              alt=""
              style={{
                width: '300px',
                objectFit:'cover'
              }} />
          </div>
          <Title style={{color:'#F15E2B'}}>LAVU'S SHOESSHOP</Title>
        </div>
        <div className="col content-center">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>

  )
}

export default AuthRouters