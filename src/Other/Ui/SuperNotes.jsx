import React from 'react'
import logo from '../Ui/Vector.png'
const SuperNotes = () => {
  return (
    <div>
        <div className='navbar flex justify-between items-center px-[50px]  py-5'>
        <div className='flex items-center'>
  <img src={logo} alt="logo" className="mr-4" /> {/* Adds space between the logo and text */}
  <div>
    <p className='text-[21px] font-bold text-gray-400'>
      Super<span className='font-normal '>notes</span> {/* Adds a small space */}
    </p>
  </div>
</div>

<div className='flex items-center gap-4'>
  <ul className='flex items-center gap-7 list-none text-gray-500 font-[450] text-md'>
    <li className='hover:text-gray-600 cursor-pointer'>What's new</li>
    <li className='hover:text-gray-600 cursor-pointer'>Features</li>
    <li className='hover:text-gray-600 cursor-pointer'>Pricing</li>
    <li className='hover:text-gray-600 cursor-pointer'>Download</li>
    <li className='hover:text-gray-600 cursor-pointer'>Integration</li>
    <li className='hover:text-gray-600 cursor-pointer'>Blog</li>
    <li className='hover:text-gray-600 cursor-pointer'>Community</li>
  </ul>
</div>

                <div className='flex gap-1'>
                    <button className='p-1 rounded-lg text-gray-500 text-lg hover:text-black duration-200'>
                        Login

                    </button>
                    <button className='px-3 py-2 rounded-xl bg-[#ff6682] text-white font-semibold hover:shadow-[0_4px_8px_rgba(255,102,130,0.4)] hover:scale-105 duration-500'>
                        Sign Up
                    </button>

                </div>
        </div>
        <div className='hero section flex items-center justify-center'>
           <div>
           <h1 className='text-[80px] font-semibold font-serif text-[#2b2a2d]'>
                Free your thoughts

            </h1>
                <p className='text-center text-[22px] font-normal'>
                Supernotes is your new home for ideas, records, tasks, and <br />lists. Enjoy efficient note-taking without the hassle.
                </p>
           </div>
           
        </div>
    </div>
  )
}

export default SuperNotes