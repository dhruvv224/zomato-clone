import React from 'react'
import collection1 from '../assets/images/collection1.webp';
import collection2 from '../assets/images/collection2.webp';
import collection3 from '../assets/images/collection3.webp';
import collection4 from '../assets/images/collection4.webp';
import { IoMdArrowDropright } from "react-icons/io";
import { RiArrowRightSLine,RiArrowDownLine } from "react-icons/ri";
import { GoChevronDown } from "react-icons/go";

import { IoIosArrowDown } from "react-icons/io";

const Collection = () => {

    const collection = [
        {
            imgSrc: collection1,
            title: 'Newly Opened Restaurants',
            count: '12 Places',
        },
        {
            imgSrc: collection2,
            title: 'Top trending spots',
            count: '13 Places',
        },
        {
            imgSrc: collection3,
            title: 'The legends of Ahmedabad',
            count: '15 Places',
        },
        {
            imgSrc: collection4,
            title: 'Best Buffet In Town',
            count: '18 Places',
        }
    ];
    const popularLocalaties = [
        {
            area: 'Navrangpura',
            places: '143 places'
        },
        {
            area: 'Bodakdev',
            places: '122 places'
        },
        {
            area: 'Sindhubhavan',
            places: '120 places'
        },
        {
            area: 'CG road',
            places: '230 places'
        },
        {
            area: 'Thaltej',
            places: '153 places'
        },
        {
            area: 'Prahladnagar',
            places: '113 places'
        },
        {
            area: 'Vastrapur',
            places: '183 places'
        },
        {
            area: 'Isckon',
            places: '118 places'
        },
        {
            text:'See More'
        }
    ]
    return (
        <div className='flex justify-center '>
            
            <div className='max-w-7xl p-3'>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
                    {collection.map((item, index) => (
                        <div
                            className="bg-white border border-gray-200 rounded-[18px] overflow-hidden shadow-lg duration-300 cursor-pointer"
                            key={index}
                        >
                            <div className="relative">
                                <img
                                    src={item.imgSrc}
                                    className="w-full h-[250px] object-cover rounded-md"
                                    alt={`Collection ${index + 1}`}
                                />

                                {/* Bottom overlay for text */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-md">
                                    {/* Overlay div for text */}
                                    <div className="absolute bottom-0 p-4 text-white">
                                        <h4 className="title text-[18px] font-semibold">{item.title}</h4>
                                        <p className="places text-[16px] font-[500] flex">{item.count} <IoMdArrowDropright size={25} /></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='popular'>
                    <h1 className='text-gray-800 text-[36px] '>
                        Popular localities in and around <span>Ahmedabad </span>



                    </h1>
                    <div className=' grid grid-cols-3 gap-4 mt-5'>

                        {
                            popularLocalaties.map((item, index) => (
                                <>

<div className='border rounded-[10px] gap-4 p-[3px] shadow-sm hover:shadow-md duration-100 cursor-pointer mb-1 min-h-[100px]'>
  <div className='p-2 h-full'>
    {item.area && item.places ? (
      <>
        <div className='flex items-center justify-between'>
          <h4 className='text-[20px] font-[400] text-[#1c1c1c]'>{item.area}</h4>
          <span className='text-[#1c1c1c] mt-6'><RiArrowRightSLine /></span>
        </div>
        <p className='text-[16px] font-[350] text-[#363636]'>{item.places}</p>
      </>
    ) : (
      <div className='flex items-center justify-center h-full '>
        <h4 className='text-[18px] font-[400]'>{item.text}</h4>
        <span className='ml-3'><GoChevronDown size={19}/></span>
      </div>
    )}
  </div>
</div>


                                </>
                            ))

                        }
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Collection