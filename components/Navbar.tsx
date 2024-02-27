import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { logo } from '../public/assets/images/index'
import { RiArrowDropDownFill } from "react-icons/ri"
import { IoIosCart } from "react-icons/io"
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signOut, useSession } from 'next-auth/react'
import { addUser, removeUser } from '@/redux/shopSlice'
import { AiOutlineUser } from 'react-icons/ai'

const Navbar = () => {
  const { data: session } = useSession()
  const dispatch = useDispatch()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const productData = useSelector((state:any) => state.shop.productData)
  const userInfo = useSelector((state:any) => state.shop.userInfo)

  useEffect (() => {
    if(session) {
        dispatch(addUser({
            name: session.user?.name,
            email: session.user?.email,
            image: session.user?.image,
        }))
    }
    else {
        dispatch(removeUser())
    }
  }, [session, dispatch])

  return (
    <nav className='w-full bg-gradient-to-b from-black/50 text-white text-xl sticky top-0 z-50 mt-[-20px]'>
        <div className='flex flex-wrap mx-auto my-4 h-20 px-4 flex items-center justify-between relative'>
            <div className='px-5 bg-transparent flex items-center m-2 cursor-pointer'>
                <div className='logo mx-4'>
                    V-Cyber
                </div>
            </div>
            <div className='flex justify-center items-center bg-black bg-opacity-50 border-2 border-[#fcee0a] rounded-tl-2xl rounded-br-2xl mr-8'>
                <Link href='/' className='w-24 h-10 flex justify-center items-center hover:bg-[#fcee0a] hover:text-black rounded-tl-xl cursor-pointer'>
                    Home
                </Link>
                <div
                    className='relative group'
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <button className='w-32 h-10 flex justify-center items-center hover:bg-[#fcee0a] hover:text-black'>
                    Category <RiArrowDropDownFill />
                    </button>
                    {isDropdownOpen && (
                    <div className='absolute w-32 bg-black bg-opacity-50 border-2 border-[#fcee0a] shadow-2xl'>
                        <Link 
                          href='/category/headset'
                          className='block flex justify-center items-center hover:text-[#fcee0a] cursor-pointer my-2'
                        >
                        Headset
                        </Link>
                        <Link 
                          href='/category/mouse'
                          className='block flex justify-center items-center hover:text-[#fcee0a] cursor-pointer my-2'
                        >
                        Mouse
                        </Link>
                        <Link 
                          href='/category/keyboard'
                          className='block flex justify-center items-center hover:text-[#fcee0a] cursor-pointer my-2'
                        >
                        Keyboard
                        </Link>
                        <Link 
                          href='/category/chair'
                          className='block flex justify-center items-center hover:text-[#fcee0a] cursor-pointer my-2'
                        >
                        Chair
                        </Link>
                        <Link 
                          href='/category/other'
                          className='block flex justify-center items-center hover:text-[#fcee0a] cursor-pointer my-2'
                        >
                        ...Other
                        </Link>
                    </div>
                    )}
                </div>
                {userInfo ? (
                    <div
                    onClick={() => signOut()}
                    className='w-40 h-10 flex justify-center items-center gap-4 bg-[#00f0ff] text-black cursor-pointer'
                    >
                        <Image
                          width={500}
                          height={500}
                          className='w-10 rounded-full object-cover'
                          src={userInfo.image}
                          alt='userImage'/>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-xs'>Sign Out</p>
                            <h2 className='text-base font-semibold'>
                                {userInfo.name}
                            </h2>
                        </div>
                    </div>
                    ) : (
                    <div
                    onClick={() => signIn()}
                    className='w-40 h-10 flex justify-center items-center gap-4 bg-[#00f0ff] text-black cursor-pointer'
                    >
                        <AiOutlineUser className='text-lg' />
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-xs'>Sign In</p>
                            <h2 className='text-base font-semibold'>
                                Account
                            </h2>
                        </div>
                    </div>
                    )
                }
                <Link href='/cart' className='w-24 h-10 flex justify-center items-center bg-[#fcee0a] text-black rounded-br-xl cursor-pointer gap-2'>
                    Cart <IoIosCart />
                    <span className='absolute w-4 h-4 bg-[#00f0ff] text-black text-sm top-6 right-14 rounded-full flex justify-center items-center'>
                        {productData.length > 0 ? productData.length : 0}
                    </span>
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar