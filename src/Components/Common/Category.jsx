import React from 'react';
import img1 from '../assets/images/Night-Life.png';
import img2 from '../assets/images/Online-Food.png';
import img3 from '../assets/images/Dine-Out.png';
import { IoIosArrowDropright, IoMdArrowDropright } from "react-icons/io";

const Category = () => {
  const categories = [
    {
      imgSrc: img2,
      title: 'Order Online',
      description: 'Stay home and order to your doorstep',
    },
    {
      imgSrc: img3,
      title: 'Dining',
      description: "View the city's favourite dining venues",
    },
    {
      imgSrc: img1,
      title: 'Live Events',
      description: "Discover India's best events & concerts",
    },
  ];

  return (
    <div className='flex justify-center mt-7'>
      <div className='max-w-7xl p-3'>
        
        {/* Adjust grid to be 1 or 2 columns on smaller screens for wider cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {categories.map((category, index) => (
            <div
              key={index}
              className='bg-white border border-gray-200 rounded-[18px] overflow-hidden shadow-lg hover:scale-105 duration-300  max-w-3xl cursor-pointer w-[330px]'
            >
              <img src={category.imgSrc} alt={category.title} className='w-full h-36 object-cover' />
              <div className='p-5'>
                <h3 className='text-[20px] font-semibold'>{category.title}</h3>
                <p className='text-[16px] text-gray-600'>{category.description}</p>
              </div>
            </div>
          ))}
        </div>
          <div className='mt-[80px] collection'>
            <h1 className='text-[36px] font-normal text-black'>Collections</h1>
            <div className='text-[18px] text-gray-700 flex'>Explore curated lists of top restaurants, cafes, pubs, and bars in Ahmedabad, based on trends
            <p className='text-[18px] text-red-400 ml-7  flex'>
            All collections in Ahmedabad   <IoMdArrowDropright size={25}/></p>
            </div>

          </div>
      </div>
    </div>
  );
};

export default Category;
