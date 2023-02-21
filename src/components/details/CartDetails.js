import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLoaderData } from 'react-router-dom';
import { removeData } from '../../redux/action/products';
import Deleteitem from '../../redux/thunk/Deleteitem';

const CartDetails = () => {
    const products = useLoaderData()
    const {name, about, cetagori, image} = products
    const dispath = useDispatch()

    return (
        <div>
            <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>
         
         <div className='h-52 w-72 mx-auto'>
           <img src={products.image}  />
         </div>
         <h1 className='font-bold text-center text-2xl py-6'>{products.name}</h1>
          <p className='w-96 text-center mx-auto'>{products.about}</p>
          <p className='py-2 font-semibold'>Cetagory : {products.cetagori}-end</p>
         <p className='text-center font-semibold py-1'>Posted date: {products.month} / {products.years}</p>            
         <div className='flex gap-2 mt-5'>
         </div>
         <ul>
         <Link to={`/updateitem/${products._id}`} >
            <button className='bg-slate-700 p-3 text-white m-2'>Update item</button>
            </Link>
         
            <button onClick={()=>dispath(Deleteitem(products._id))} className='bg-red-700 p-3 text-white m-2'>Delete item</button>
           
            </ul>
       </div>
            
        </div>
    );
};

export default CartDetails;