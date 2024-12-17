import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'

const Cart = () => {
  return (
    <header className=' items-center'>
      <Header/>

    <div className="bg-[#F9F9F9] w-full px-4 sm:px-10 lg:px-30 pt-4 h-auto text-[#2A254B]">
      <h1 className="text-2xl sm:text-3xl text-center lg:text-left">Your Shopping Cart</h1>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-[#F9F9F9] p-6 sm:p-12 border-[1px] border-[#EBE8F4] gap-4">
     <div className="text-sm">
     <h6>Product</h6>

    <div className="flex flex-col sm:flex-row w-full sm:w-[309px] h-auto sm:h-[134px] mt-8 sm:mt-16 text-[#2A254B]">
      <div>
        <img className="w-full sm:w-[140px] h-auto sm:h-[134px]" src="/vase.png" alt="vase" />
      </div>
      <div className="p-4">
        <h4 className="text-lg sm:text-xl font-normal">Graystone vase</h4>
        <p className="text-xs font-normal pt-2">A timeless ceramic vase with a tri color grey glaze.</p>
        <p className="text-xs font-normal pt-2">£85</p>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row w-full sm:w-[309px] h-auto sm:h-[134px] mt-8 sm:mt-16 text-[#2A254B]">
      <div>
        <img className="w-full sm:w-[140px] h-auto sm:h-[134px]" src="/white-vase.png" alt="vase" />
      </div>
      <div className="p-4">
        <h4 className="text-lg sm:text-xl font-normal">Basic white vase</h4>
        <p className="text-xs font-normal pt-2">Beautiful and simple, this is one for the classics.</p>
        <p className="text-xs font-normal pt-2">£85</p>
      </div>
      </div>
    </div>

  <div className="text-sm px-6 sm:px-10 lg:px-32">
    <h6>Quantity</h6>
    <div>
      <img className="mt-10 sm:mt-20" src="/Stepper.png" alt="Stepper" />
      <img className="mt-20 sm:mt-40" src="/Stepper.png" alt="Stepper" />
    </div>
  </div>

  <div className="text-sm px-6 sm:px-10 lg:px-28">
    <h6>Total</h6>
    <div>
      <p className="mt-6 sm:mt-[92px]">£85</p>
      <p className="mt-12 sm:mt-48">£125</p>
    </div>
  </div>
</div>

<div className="flex flex-col sm:flex-row gap-3 text-right text-[#4E4D93] justify-between sm:justify-end mr-4 sm:mr-[280px] items-center pt-3">
  <h1 className="text-base">Subtotal</h1>
  <h2 className="text-lg text-[#2A254B]">£210</h2>
</div>

<div className="text-center sm:text-right text-xs text-[#4E4D93] justify-between sm:justify-end sm:mr-[280px] items-center pt-3">
  <p className="mt-2">Taxes and shipping are calculated at checkout</p>
  <button className="bg-[#2A254B] mb-8 h-12 sm:h-14 mt-6 w-40 sm:w-[172px] lg:w-56 rounded-sm text-white">
    Go to checkout
  </button>
</div>

           
                <Footer/>

    </header>
  )
}

export default Cart;