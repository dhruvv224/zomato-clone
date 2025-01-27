import React, { useRef } from 'react'

const VerifyPage = () => {
    const inputRef=useRef([]);
    
    const handleInput=(e,index)=>{
        const value=e.target.value;
        if(value.length===1 && index <inputRef.current.length-1)
        {
            inputRef.current[index+1].focus()
        }
    }
    const handleBackspace=(e,index)=>{
        if(e.key==='Backspace' && index>0 &&e.target.value==='')
        {
            inputRef.current[index-1].focus()
        }
    }
  return (
    <div>VerifyPage
       
         {[...Array(4)].map((_, index) => (
        <input
          key={index}
          type="text"
          ref={(el) => (inputRef.current[index] = el)}
          onChange={(e) => handleInput(e, index)}
          onKeyDown={(e) => handleBackspace(e, index)}
          className="w-12 h-12 text-center text-lg border bg-[#eeeeee] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </div>
  )
}

export default VerifyPage