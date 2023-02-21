import React from 'react';
import { removeData } from '../action/products';

const Deleteitem = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/items/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        });
        const data = await res.json();
    
        if (data.acknowledged) {
          alert('ok')
          dispatch(removeData(id));
        }
      };
};

export default Deleteitem;