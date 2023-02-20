import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5'>
      <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>
       <Link to='/'><h1 className='text-3xl'>Web-Tutorial</h1></Link> 

        
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/dashbord'>Dashboard</Link>
        </li>
        <Link to='/'>       
        </Link>
      </ul>
    </nav>

        </div>
    );
};

export default Navbar;