import React from 'react';
import { updateData } from '../action/products';

const Updateitem = (item) => {
    // return async(dispatch)=>{
    //     const res = await fetch(`https://content-management-server-eight.vercel.app/items/${item}`,{
    //         method: 'PUT',
    //         headers:{
    //             "Content-type": "application/json",
    //         },
    //      //   body: JSON.stringify(item)
    //     })
    //     const data = await res.json()

    //     if (data.acknowledged) {
    //          dispatch(updateData(item));
    //        }
    // }
};

export default Updateitem;