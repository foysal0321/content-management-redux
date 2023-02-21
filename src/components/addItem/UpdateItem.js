import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import Updateitem from '../../redux/thunk/Updateitem';

const UpdateItem = () => {
    const { register, handleSubmit } = useForm();
    const data = useLoaderData()
    const dispath = useDispatch()
   
    const [user,setuser] = useState(data)
// console.log(user.name);

    const update=(e)=>{

       fetch(`https://content-management-server-eight.vercel.app/items/${data._id}`,{
           method:'PUT',
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify(user)          
       })
       .then(res=>res.json())
       .then(data=>{
         
          // console.log(data);
       })
        //alert('done')
    }

    const handleChange=(e)=>{
        const fild = e.target.name;
        const value = e.target.value;
        const newUser = {...user}
        newUser [fild] = value
       setuser(newUser)
       }

    return (
        <div>
            <h2 className='text-center py-3 text-2xl'>Update Item</h2>
            <div className='flex justify-center items-center h-full '>
      <form   onSubmit={handleSubmit(update(data._id))}
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
      
      >
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='model'>
            Name
          </label>
          <input type='text' id='name' className='border p-2' {...register("name")}
          onChange={handleChange} defaultValue={data.name} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'>
            Image url
          </label>
          <input type='text' name='image' className='border p-2' id='image' {...register("image")} 
          onChange={handleChange} defaultValue={data.image}/>
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='brand'>
            Cetegory
          </label>
          <select name='ceta' id='ceta' {...register("ceta")}
          onChange={handleChange} defaultValue={data.cetagori}>
            <option value='front'>front</option>
            <option value='back'>back</option>
            <option value='database'>database</option>
          </select>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='price'>
            About
          </label>
          <input type='text' name='about' className='border p-2 h-20' id='price' {...register("about")} 
          onChange={handleChange} defaultValue={data.about}/>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='price'>
            Month
          </label>
          <input type='number' name='month' className='border p-2 ' id='month' {...register("month")} 
          onChange={handleChange} defaultValue={data.month}/>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='price'>
            Years
          </label>
          <input type='number' name='year' className='border p-2 ' id='year' {...register("year")} 
          onChange={handleChange} defaultValue={data.years}/>
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

export default UpdateItem;