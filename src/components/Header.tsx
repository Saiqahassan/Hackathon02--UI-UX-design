import React from 'react'

const Header = () => {
  return (
    <header className='text-center items-center'>
        <div className='flex justify-center mt-20px'>
           <div className='px-[550px]'>
            <h1 className='w-[65px] h-[30px] text-2xl font-normal text-[#22202E]'>Avion</h1>
         </div>

         <div className='flex gap-6'>
         <img className=''
         src='/Shopping-cart.png' alt='Cart'/>
         <img src='/avatar.png' alt='avatar'/>
        </div>

        </div>

        <div className='h-[132px] mt-3'>
            <ul>
                <li className='space-x-10 text-base font-normal text-[#726E8D]'>
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