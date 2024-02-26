import { resetCart } from '@/redux/shopSlice'
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'

const SuccessPage = () => {
  const dispatch = useDispatch()

  return (
    <div className='flex flex-col gap-2 items-center justify-center'>
        <h1 className='text-2xl text-[#00f0ff] bg-black font-semibold p-4 rounded-md m-4'>
            Thank you for shopping in V Cyber
        </h1>
        <Link href='/'>
            <button 
              onClick={() => dispatch(resetCart())}
              className='text-3xl text-black hover:underline underline-offset-4 decoration-[1px] hover:text-[#ff0013] m-4 duration-300'>
                Continue Shopping
            </button>
        </Link>
    </div>
  )
}

export default SuccessPage