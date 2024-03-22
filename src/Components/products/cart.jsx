import React, { useEffect, useState } from "react";
import ProductCard from "./cards";
import styles from "../../app.module.css";
import { collection, getDocs, deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import { userSelectors } from "../../Redux/userReducer";
// Cart component renders the user's cart items
export default function Cart() {
  const navigate = useNavigate()
  // Retrieve userData from context
  const userData = useSelector(userSelectors)
  // State to store fetched cart items
  const [fetchedCart, setFetchedCart] = useState([]);
  
  useEffect(() => {
    // Function to fetch cart items
    async function getCartItem() {
      try {
        const querySnapshot = await getDocs(
          collection(db, "cartData", userData.username, "product")
        );
        const cartData = querySnapshot.docs.map((doc) => doc.data());
        setFetchedCart(cartData);
      } catch (error) {
        console.log("Error fetching cart items:", error);
      }
    }
    // Fetch cart items if userData is available
    
      getCartItem();
    
  }, [userData,fetchedCart]);


  async function remove(name)
  { toast.success("Item removed from cart")
  await deleteDoc(doc(db, "cartData", userData.username, "product", name));
  const  newCart = fetchedCart.filter((item)=> item.name!==name);
  setFetchedCart(newCart);
  };


async function orderNow() {
  try {
    const date = new Date().toDateString();
    var totalPrice = 0
    fetchedCart.forEach((item)=> {totalPrice += (item.price*item.qty)})
    const id = date + String(Math.random())

    // Create a new order document in the database
    const orderRef = doc(db, "orders", userData.username,"orderDetails",id);
    await setDoc(orderRef, {
      items: fetchedCart,date,totalPrice
    });

    async function deleteCartItems(name){
    await deleteDoc(doc(db, "cartData", userData.username, "product", name))
    };

    fetchedCart.forEach(item=> deleteCartItems(item.name))
    // Clear the fetchedCart state
    setFetchedCart([]);

    navigate("/myOrders")
    
  } catch (error) {
    console.error("Error placing order:", error);
    // You can display an error message to the user here if needed
  }
}




  // Render a message if user is not logged in
  if (userData.length === 0) {
    return (
      <>
        <h2 className={styles.cartHeader}>
          Please login/signup to view your cart items.
        </h2>
      </>
    );
  }

  return (<>
    <div className={styles.cartDiv}>
      {/* Render cart items or a message if cart is empty */}
      {fetchedCart.length > 0 ? (
        fetchedCart.map((item, id) => <ProductCard item={item} key={id} type="cart" remove={remove}/>)
      ) : (
        <h2 className={styles.noItem}>No item in your cart</h2>
      )}
    </div>
    <div className={styles.orderDiv}>
        {fetchedCart.length >0? (<button className={styles.orderButton} onClick={orderNow}>Order Now</button>):(<p></p>)}
    </div>
    </>
  );
}
