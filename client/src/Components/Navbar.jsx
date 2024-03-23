import React from 'react'
import { Link } from 'react-router-dom'
import {shallowEqual, useSelector} from 'react-redux'

const Navbar = () => {

  const {isAuth} = useSelector(store=>{
    return{
      isAuth:store.authReducer.isAuth
    }
  },shallowEqual)
  
  return (
    <div className='w-full flex justify-between h-[60px] bg-[#aad2e8] items-center font-bold text-[#243945] '>
      <Link to={"/"} className='ml-3 font-bold text-2xl uppercase'>Tasks</Link>
      <div className='mx-8'>
        {isAuth ? <button className='bg-[#5687a1] text-white py-1 text-center border rounded px-4 font-bold '>Logout</button> :
         <div className=' w-[200px] flex justify-evenly '>
          <Link to={"/login"} className='py-1 px-2 text-lg uppercase'>Login</Link>
          <Link to={"/register"} className='py-1 px-2 text-lg uppercase'>Register</Link>

        </div>}

      </div>
    </div>
  )
}

export default Navbar