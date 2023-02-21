import React from 'react';
import { addData } from '../action/products';

const Addproduct = (products) => {
    return async(dispatch, getdata)=>{
       const res = await fetch('https://content-management-server-eight.vercel.app/items/',{
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
        alert('done')
      }
    }
};

export default Addproduct;