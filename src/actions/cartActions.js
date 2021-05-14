import axios from "axios";
import { CART_ADD_ITEM, 
         CART_REMOVE_ITEM,
         CART_SAVE_PAYMENT_METHOD,
         CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants";


export const addToCart = (productId, qty) => async (dispatch, getState) => {
 // try {
    const { data } = await axios.get(`/api/products/${productId}`);
    dispatch({
      type: CART_ADD_ITEM, payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
 /*   const { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));

  } catch (error) {

  }*/
};

export const removeFromCart = (productId) => (dispatch, getState) => {

  dispatch({type: CART_REMOVE_ITEM, payload: productId});

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) =>{
  dispatch({type: CART_SAVE_SHIPPING_ADDRESS, payload: data});
  localStorage.setItem('shippingAddress', JSON.stringify(data));

};

export const savePaymenMethod = (data) => (dispatch) =>{
  dispatch({type: CART_SAVE_PAYMENT_METHOD, payload: data});
};