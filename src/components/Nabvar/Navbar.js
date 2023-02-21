import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='h-14 bg-slate-800 text-white rounded-full m-2 max-w-7xl mx-auto px-5'>
      <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>
       <Link to='/'><h1 className='text-3xl text-white'>Web-Tutorial</h1></Link> 

        
        <li className='text-white'>
          <Link to='/'>Home</Link>
        </li>

        <Link to='/'>       
        </Link>
      </ul>
    </nav>

        </div>
    );
};

export default Navbar;