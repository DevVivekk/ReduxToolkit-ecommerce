import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const state = useSelector((state)=>state.cart.cart.length)
  return (
    <div>
      <button onClick={()=>navigate('/cartpage')} style={{"fontSize":"2rem","width":"20rem","height":"3rem","backgroundColor":"green"}}>Cart<sup>{state}</sup></button>
    </div>
  )
}

export default Navbar