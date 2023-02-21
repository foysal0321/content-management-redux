import React from 'react';
import { getData } from '../action/products';

const fetchData = () => {
    return async (dispath, getState)=>{
        const res = await fetch('http://localhost:5000/items')
        const data = await res.json()
       // console.log(dispath);
        if(data.length){
            dispath(getData(data))
        }

    }
};

export default fetchData;