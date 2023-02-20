import React from 'react';
import { getData } from '../action/products';

const fetchData = () => {
    return async (dispath, getState)=>{
        const res = await fetch('products.json')
        const data = await res.json()
       // console.log(dispath);
        if(data.length){
            dispath(getData(data))
        }

    }
};

export default fetchData;