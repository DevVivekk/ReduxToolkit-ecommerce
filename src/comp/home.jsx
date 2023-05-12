import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/cartslice';
const Home = () => {
    const dispatch = useDispatch();
    const[items,setItems] = useState([])
    const item = useSelector((state)=>state.cart.items)
    const itemm = useSelector((state)=>state.cart)
    console.log(itemm)
    useEffect(()=>{
      setItems(item)
    },[])
    
  return (
    <div>
    <h2>My devices</h2>
    {
        items.map((item)=>{
            return(
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <img src={item.img} style={{"width":"30rem","height":"30rem"}} alt="img" />
                    <h2>{item.price}</h2>
                    <h2>{item.quantity}</h2>
                    <button onClick={()=>dispatch(addToCart(item))}>Add to Cart</button>
                    </div>
            )
        })
    }
    </div>

  )
}

export default Home