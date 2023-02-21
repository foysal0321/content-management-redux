import React from 'react';
import { removeData } from '../action/products';

const Deleteitem = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://content-management-server-eight.vercel.app/items/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        });
        const data = await res.json();
    
        if (data.acknowledged) {
          dispatch(removeData(id));
          alert('done')
        }
      };
};

export default Deleteitem;