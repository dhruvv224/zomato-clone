import React from 'react'
import iphone from '../assets/images/Iphone.png'
import { TextField } from '@mui/material'
import playstore from '../assets/images/Google-Play.png';
import appstore from '../assets/images/App-Store.png'
import { motion } from 'framer-motion';
const GetApp = () => {
  return (
    <div className='bg-[#fffbf7] mt-7 p-[100px] '>
      <div className='max-w-7xl p-2 '>
        <div className='flex justify-center'>
          <div className='image-container max-w-[400px] '>
            <motion.img initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ amount: 0.2 }} // Trigger animation every time it enters the viewport
      style={{ width: '100%', height: 'auto' }} src={iphone} className=' object-cover w-full' />
          </div>
          <div>
            <h1 className='text-[#1c1c1c] text-[44px] font-medium'>Get the Zomato app
            </h1>
            <p className='text-[16px] text-[#363636] mt-4 font-[300]'>We will send you a link, open it on your phone to download <br />the app</p>
            <div className="flex items-center space-x-4 mt-[30px] gap-[50PX]">
              <label className="flex items-center text-red-500">
                <input type="radio" name="contact" value="email" className=" accent-[#EF4F5F] transform scale-125" />
                <span className="ml-2">Email</span>
              </label>

              <label className="flex items-center text-[#1c1c1c] ">
                <input type="radio" name="contact" value="phone" className=" accent-[#EF4F5F] transform scale-125" />
                <span className="ml-2">Phone</span>
              </label>
            </div>
            <div className="flex items-center gap-4 mt-7">
  <div className="flex-grow">
    <TextField 
      id="outlined-basic" 
      placeholder="Enter your email" 
      label="Email" 
      variant="outlined" 
      className="w-full"
      fullWidth
      // style={{height:'48px'}}
    />
  </div>
  
  <button className="px-6  h-[48px] py-3 bg-red-500 hover:bg-red-600 text-white rounded-md shadow-md transition duration-150 ease-in-out">
    Share App Link
  </button>
</div>
<div className='mt-4'>
<p className='text-[16px] text-[#9c9c9c] font-normal'>
Download app from
<div className='flex  gap-3 mt-4 max-w-[150px]'>
<motion.img src={playstore} initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ amount: 0.2 }} />
<motion.img src={appstore} className=''initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ amount: 0.2 }} />


</div>

</p>
</div>

          </div>


        </div>

      </div>
    </div>
  )
}

export default GetApp