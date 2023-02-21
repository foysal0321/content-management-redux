import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleCeta, toggleFull } from '../../redux/action/filter';
import fetchData from '../../redux/thunk/fetchData';
import ProductCart from './dashbord/ProductCart';

const Home = () => {
    const products = useSelector(state => state.products.products)
    const filter = useSelector(state => state.filter.filter)
    const {cetagory, full,arr} = filter
    const dispath = useDispatch()

   // console.log(full);

    useEffect(()=>{
        dispath(fetchData())
    },[dispath])

    let context;
    const activeClass = "text-white bg-indigo-500 border-white";

    if(products.length){
        context = products.sort((a,b)=> a.years - b.years ).map(item=> <ProductCart
        key={item._id}
        product={item} >
        </ProductCart>)
    }

    if(products.length && (full || cetagory.length)){
        context = products 
        .filter((item)=>{
            if(full){
              return  item.status === true
            }
            return item
        })
        .filter((item)=>{
           if(cetagory.length){
            return cetagory.includes(item.cetagori)
           }
           return item
        })

        .sort((a,b)=> a.years - b.years )
       .map(item=> <ProductCart 
        key={item._id}
        product={item} >
      </ProductCart>)
    }

    return (
        <div className=''>
            <div className="cetagori py-30 ">
                <Link>
                <button onClick={()=> dispath(toggleFull())}
                  className={`border px-3 py-2 rounded-full font-semibold ${full ? activeClass: null}`}>  Full-stack</button>                                  
                </Link>
                <Link>
                <button onClick={()=> dispath(toggleCeta('front'))} className={`border px-3 py-2 rounded-full font-semibold ${cetagory.includes('front') ? activeClass: null}`}>  Front-end</button>                                  
                </Link>
                <Link>
                <button onClick={()=> dispath(toggleCeta("back"))} className={`border px-3 py-2 rounded-full font-semibold ${cetagory.includes("back") ? activeClass: null}`}>Back-end</button>
                </Link>
                <Link>
                <button onClick={()=> dispath(toggleCeta('database'))} className={`border px-3 py-2 rounded-full font-semibold ${cetagory.includes('database') ? activeClass: null}`}>Database</button>
                </Link>
                <Link to='/additem' >
            <button className='bg-slate-700 p-2 rounded-sm text-white m-2 mx-24'>Add item</button>
            </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 p-12">
            {
              context
            }
            </div>
           
        </div>
    );
};

export default Home;