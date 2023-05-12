import {createSlice} from '@reduxjs/toolkit'
import { productList } from '../comp/productlist'
const initialState = {
    cart:[],
    items:productList,
    totalQuantity:0,
    totalPrice:0
}
export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            let find = state.cart.findIndex((item)=>item.id===action.payload.id);
            console.log("find",find)
            if(find>=0){
                state.cart[find].quantity +=1
            }else{
            state.cart.push(action.payload)
            }
        },
        getCartTotal:(state) =>{
            let {totalQuantity,totalPrice} = state.cart.reduce((acc,currval)=>{
                let {price,quantity} = currval;
                let updatedToatlAmount = price * quantity;
                acc.totalPrice+=updatedToatlAmount
                acc.totalQuantity += quantity;
                console.log("called")
                return acc;
            },{
                totalQuantity:0,
                totalPrice:0
            });
            return {...state,totalQuantity, totalPrice}
    
        },
        removeItem :(state,action)=>{
            console.log("action",action)
            state.cart= state.cart.filter((item)=>item.id !== action.payload)
        },
        increaseItem :(state,action) =>{
            state.cart = state.cart.map((item)=>{
                if(item.id===action.payload){
                    return {...item, quantity:item.quantity+1}
                }else{
                    return item
                }
            })
        },
        decreaseItem :(state,action) =>{
            state.cart = state.cart.map((item)=>{
                if(item.id===action.payload){
                    return {...item, quantity:item.quantity-1}
                }else{
                    return item
                }
            }).filter((cur)=>{
                return cur.quantity !== 0;
        })
    }
}})

export const {addToCart,getCartTotal,removeItem,increaseItem,decreaseItem} = cartSlice.actions
export default cartSlice.reducer