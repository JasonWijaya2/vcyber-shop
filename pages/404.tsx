import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFoundImg } from '@/public/assets/images'

const Custom404 = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center pb-2'>
        <Image
          src={notFoundImg}
          alt='notFoundImg'
          className='w-full h-full text-red-500 object-cover mt-[-110px]'
        />
        <Link href='/'>
        <button className="btn m-10">
            <span className="btn__content font-bold">Back to home</span>
            <span className="btn__glitch"></span>
        </button>
        </Link>
    </div>
  )
}

export default Custom404