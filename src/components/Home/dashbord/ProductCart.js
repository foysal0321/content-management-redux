import React from 'react';
import { Link } from 'react-router-dom';

const ProductCart = ({product}) => {
    return (
        <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>
         
        <div className='h-52 w-52 mx-auto'>
          <img src={product.image}  />
        </div>
        <h1 className='font-bold text-center text-2xl py-2'>{product.name}</h1>
        <p className='text-center font-semibold mb-1'>Posted month: {product.month}</p>
        <p className='text-center font-semibold mb-3'>Posted years: {product.years}</p>
        <div className=' flex-1'>
          <ul className='space-y-2'>
            {/* {product.keyFeature.map((feature) => {
              return (
                <li key={feature} className='text-sm'>
                  {feature}
                </li>
              );
            })} */}
          </ul>
        </div>
        <div className='flex gap-2 mt-5'>
         <Link to='/details'>
            <button           
              className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>      
              View details
            </button>
          </Link>
        </div>
      </div>
    );
};

export default ProductCart;