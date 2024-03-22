import React, { useEffect, useState } from 'react';
import ProductCard from './cards';
import { db } from '../../firebase';
import { data } from '../../productData';
import styles from '../../app.module.css'
import {toast} from "react-toastify"
import { useSelector } from 'react-redux';
import { filterSelectors } from '../../Redux/filterReducer';
import { userSelectors } from '../../Redux/userReducer';
import { collection, getDocs, doc, setDoc,updateDoc } from "firebase/firestore";


// Product component fetches and renders product data
export default function Product() {
  // State to store fetched product data
  const [docs, setDocs] = useState([]);
  // Retrieve userData and filter from context
  const userData = useSelector(userSelectors)
  const filter = useSelector(filterSelectors)

  useEffect(() => {
        let fetchedDocs = data
        // Filter product data based on filter
        if (filter.length > 0) {
          fetchedDocs = fetchedDocs.filter((item) => filter.includes(item.category));
        }
        // Update state with filtered product data
        setDocs(fetchedDocs);

  }, [filter]);

  // Function to add item to cart
  function addCart(name, image, price) { 
    async function addItem() {
      const querySnapshot = await getDocs(
        collection(db, "cartData", userData.username, "product")
      );
      const cartData = querySnapshot.docs.map((doc) => doc.data());
      const find = cartData.find((item,id)=> item.name === name);
      if(find){
        toast.success("Item quantity increased")
        const itemRef = doc(db, "cartData", userData.username, "product",find.name);
        // Set the itme qty
        await updateDoc(itemRef, {
          qty: find.qty+1
        });

      }
      // Add item to cartData collection in Firestore
      else
     { toast.success("Item added to cart")
      await setDoc(doc(db, "cartData", userData.username, "product", name), {
        name, image, price,qty:1
      });}
    }
    // Call addItem function
    addItem();
  }

  // Render loading message if product data is not available
  if (docs.length === 0) {
    return (<><h2>Loading.....</h2></>);
  }

  return (
    <>
      {/* Render ProductCard for each product */}
      <div className={styles.outerCardDiv}>
      {docs.map((item, id) => 
        <ProductCard key={id} item={item} addCart={addCart} type="product"/>
      )}
      </div>
    </>
  );
}
