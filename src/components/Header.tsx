import React from 'react'

const Header = () => {
  return (
    <header className=' items-center'>
        <div className=' flex flex-wrap w-full mt-20px justify-between px-4 md:px-8'>
           <div className='flex items-center '>
           <img className='w-4 h-4 m-4 sm:w-3 md:w-6 md:h-6'
             src='/Search.png' alt='search-icon'/>
            <h1 className='w-[65px] h-[30px] text-center text-lg sm:text-lg md:text-2xl md:px-[550px] sm:px-96 font-normal text-[#22202E]'>Avion</h1>
         </div>

         <div className='flex justify-center items-center space-x-6 md:space-x-6 mr-4 md:mr-6'>
            <img className='w-4 h-4 md:w-6 md:h-6'
             src='/Shopping-cart.png' alt='Cart'/>
             <img className='w-4 h-4 md:w-6 md:h-6'
             src='/avatar.png' alt='avatar'/>
             </div>
        </div>

        <div className=' h-[132px] mt-3'>
            <ul className=''>
                <li className='flex justify-center text-center space-x-2 md:space-x-6 text-sm md:text-base font-normal text-[#726E8D]'>
                    <a href="/">Plant pots</a>
                    <a href="/">Ceramics</a>
                    <a href="/">Tables</a>
                    <a href="/">Chairs</a>
                    <a href="/">Crockery</a>
                    <a href="/">Tableware</a>
                    <a href="/">Cutlery</a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header