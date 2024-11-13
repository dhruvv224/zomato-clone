import React from 'react'
import logo from '../assets/images/blackLogo.webp'
import playstore from '../assets/images/Google-Play.png';
import appstore from '../assets/images/App-Store.png'
const Footer = () => {
    const aboutZomato=['Who We Are','Blog','Work With Us','Investor Relation','Report Fruad', 'Press Kit','Contact Us']
    const Zomoverse=['Zomato','Blinkit','Hyperpure', 'Feeding india','ZomaLand','Zomato Live','Weather Union']
   
  return (
    <div className='bg-[#f5f5f5]'>

    <div className='mx-auto max-w-6xl p-4 '>
        <div className='flex justify-between items-center mt-4'>
            <div className='logo max-w-[150px]'>
<img src={logo} className='w-full object-cover'/>

            </div>
            <div className='flex gap-3'>
                <button className='country'>India</button>
                <button className='language'>Hindi</button>


            </div>
        </div>
<div className='grid grid-cols-5 gap-4 mt-[40px]'>
    <div>
        <h5 className='text-[16px] font-[500] mb-2'>ABOUT ZOMATO</h5>
        {
            aboutZomato.map((item,index)=>(
                <>
                <p className='text-[16px] text-[#696969] mb-2'>{item}</p>
                </>
            ))
        }
    </div>
    <div>
    <h5 className='text-[16px] font-[500] mb-2'>ZOMOVERSE    </h5>

    {
            Zomoverse.map((item,index)=>(
                <>
                <p className='text-[16px] text-[#696969] mb-2'>{item}</p>
                </>
            ))
        }
    </div>
    <div>
    <h5 className='text-[16px] font-[500] capitalize mb-2'>FOR RESTAURANT'S    </h5>

<p className='text-[16px] fon text-[#696969]'>Partner With Us</p>
<p className='text-[16px] fon text-[#696969]'>Apps for you</p>

    </div>
    <div>
    <h5 className='text-[16px]  font-[500] mb-2'>LEARN MORE</h5>
    <p className='text-[16px] text-[#696969] mb-2'>Privacy</p>
    <p className='text-[16px] text-[#696969] mb-2'>Security</p>
    <p className='text-[16px] text-[#696969] mb-2'>Terms</p>


    </div>
    <div>
    <h5 className='text-[16px]  font-[500] mb-2'>SOCIAL LINKS</h5>
<div className='download flex flex-col gap-4 max-w-[150px]'>
    <img src={playstore}/>
    <img src={appstore}/>


</div>
    
     </div>

</div>
<hr />
<h1 className='text-[26px] text-[#696969] mt-4'>
Developed by <span className='font-[500]'>Dhruv parmar</span>
</h1>
        </div>
    </div>
  )
}

export default Footer