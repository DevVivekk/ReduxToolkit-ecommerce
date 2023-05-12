import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseItem, getCartTotal, increaseItem, removeItem } from '../redux/cartslice'

const CartPage = () => {
    const {cart,totalQuantity,totalPrice} = useSelector((state)=>state.cart)
    console.log(totalQuantity,totalPrice)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCartTotal())
    },[])

    const remove = (id)=>{
        dispatch(removeItem(id))
        dispatch(getCartTotal())
    }
    const inc = (id)=>{
        dispatch(increaseItem(id))
        dispatch(getCartTotal())
    }
    const dec = (id)=>{
        dispatch(decreaseItem(id))
        dispatch(getCartTotal())
    }

  return (
    <div>
<h1>Welcome to your cart page!</h1>
{
    cart.map((item)=>{
        const price = item.quantity*item.price
        return(
            <div key={item.id}>
                    <h2>{item.title}</h2>
                    <img src={item.img} style={{"width":"30rem","height":"30rem"}} alt="img" />
                    <button onClick={()=>inc(item.id)}>Inc quantity</button>
                    <button onClick={()=>dec(item.id)}>Dec quantity</button>
                    <button onClick={()=>remove(item.id)}>Delete quantity</button>
                    <h2>Toatl Price :{price}</h2>
                    <h2>quantity: {item.quantity}</h2>
            </div>
        )
    })
}
<h1>Toatl Cart Price :{totalPrice}</h1>
<h1>Toatl Cart quantity :{totalQuantity}</h1>
    </div>
  )
}

export default CartPage