import React from 'react'
import background from '../assets/images/BackGround.png'
import logo from '../assets/images/Zomato-Logo.png';
import { TiLocation } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import Home from './Home';

const Header = () => {
  return (
    <div>

    <div
      className='header relative w-full bg-center bg-cover bg-no-repeat min-h-[450px]'
      style={{ backgroundImage: `url(${background})` }}
    >
      <nav className='flex items-center justify-between p-4 text-[18px] font-[370] text-white font-sans'>
        <span className='mr-auto'>Get The App</span>
        <div className='right flex items-center gap-9'>
          <span>Investor Relations</span>
          <span>Add restaurant</span>
          <span>Log in</span>
          <span>Sign up</span>
        </div>
      </nav>
      
      <div className='header-class flex items-center justify-center flex-col absolute w-full top-[30%] gap-5'>
        <img src={logo} className='max-w-[300px] text-white' alt='Zomato Logo' />
        <h3 className='text-[36px] font-normal text-white'>
          Discover the best food & drinks in Ahmedabad
        </h3>
        
        <div className='input flex items-center bg-white rounded-md min-w-[50%] h-[55px]'>
          {/* Location dropdown (less space) */}
          <div className='flex items-center flex-4 p-2' style={{flex:2}}>
            <TiLocation className='text-red-400 text-[30px] mr-2 cursor-pointer' />
            <select className='w-full border-none outline-none text-[16px] font-normal text-gray-600'>
              <option value="Chennai">Ahmedabad</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Kolkata">Kolkata</option>
            </select>
          </div>

          {/* Divider */}
          <div className='h-1/2 w-[1px] bg-gray-300'></div>

          {/* Search input (more space) */}
          <div className='flex items-center flex-1 p-2 relative' style={{flex:4}}>
          <CiSearch className=' mr-2 text-gray-500 text-[24px]' />

            <input
              type="text"
              className='w-full border-none outline-none text-gray-600'
              placeholder='Search for restaurant, cuisine or a dish'
            />
          </div>
        </div>

      </div>
      </div>
<Home/>
    </div>
  )
}

export default Header
