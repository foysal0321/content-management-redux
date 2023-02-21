import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Addproduct from '../../redux/thunk/Addproduct';

const Additem = () => {
    const { register, handleSubmit } = useForm();
   const dispatch = useDispatch();

    const submit =(data)=>{
        const product={
            name: data.name,
            image: data.image,
            cetagori: data.ceta,
            about: data.about,
            month: data.month,
            years: data.year,
            status: true
        }
        //console.log(product);
        dispatch(Addproduct(product))

    }
    return (
      <div className="">
             <h3 className='py-3 text-center text-2xl'>Add Item</h3>
        <div className='flex justify-center items-center h-full '>  
      <form
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
        onSubmit={handleSubmit(submit)}
      >
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='model'>
            Name
          </label>
          <input type='text' id='name' className='border p-2' {...register("name")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'>
            Image url
          </label>
          <input type='text' name='image' className='border p-2' id='image' {...register("image")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='brand'>
            Cetegory
          </label>
          <select name='ceta' id='ceta' {...register("ceta")}>
            <option value='front'>front</option>
            <option value='back'>back</option>
            <option value='database'>database</option>
          </select>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='price'>
            About
          </label>
          <input type='text' name='about' className='border p-2 h-20' id='price' {...register("about")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='price'>
            Month
          </label>
          <input type='number' name='month' className='border p-2 ' id='month' {...register("month")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='price'>
            Years
          </label>
          <input type='number' name='year' className='border p-2 ' id='year' {...register("year")} />
        </div>
        <div className='flex justify-between items-center w-full'>
          <button
            className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
    );
};

export default Additem;