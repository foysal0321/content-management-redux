import React from 'react';
import { addData } from '../action/products';

const Addproduct = (products) => {
    return async(dispatch, getdata)=>{
       const res = await fetch('http://localhost:5000/items/',{
       method: 'POST',
       body: JSON.stringify(products),
       headers: {
        "Content-type": "application/json",
       }
       })
       const data = await res.json()
       if (data.acknowledged) {
        dispatch(
          addData({
            _id: data.insertedId,
            ...products
          })
        );
      }
    }
};

export default Addproduct;