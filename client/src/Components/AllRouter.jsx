import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tasks from './Tasks'
import Login from './Login'
import Register from './Register'

const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Tasks />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

        </Routes>
    </div>
  )
}

export default AllRouter