import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    emptyCart,
    phoneImg,
    ship1Img,
    ship2Img,
    ship3Img,
    warningImg,
} from "@/public/assets/images"
import { TbReload } from 'react-icons/tb'
import { HiMinusSmall } from 'react-icons/hi2'
import { MdOutlineAdd } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import Image from 'next/image'
import { StoreProduct } from '@/type'
import FormatPrice from './FormatPrice'
import { decreaseQuantity, deleteItem, increaseQuantity, resetCart } from '@/redux/shopSlice'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import { useSession } from 'next-auth/react'

const CartPage = () => {
  const { data: session } = useSession()
  const productData = useSelector((state: any) => state.shop.productData)
  const userInfo = useSelector((state:any) => state.shop.userInfo)
  const dispatch = useDispatch()
  const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`)
  const [warning, setWarning] = useState(false)

  const [totalOldPrice, setTotalOldPrice] = useState(0)
  const [totalSavings, setTotalSavings] = useState(0)
  const [totalAmt, setTotalAmt] = useState(0)

  useEffect (() => {
    setWarning(true)
    let oldPrice = 0
    let savings = 0
    let amt = 0
    productData.map((item:StoreProduct) => {
        oldPrice += item.oldPrice * item.quantity
        savings += item.oldPrice - item.price
        amt += item.price * item.quantity
        return
    })
    setTotalOldPrice(oldPrice)
    setTotalSavings(savings)
    setTotalAmt(amt)
  },[productData])

  const handleCheckout = async() => {
    const stripe = await stripePromise

    const checkoutSession = await axios.post("api/create-checkout-session", {
        items: productData,
        email: session?.user?.email,
    })

    const result: any = await stripe?.redirectToCheckout({
        sessionId: checkoutSession.data.id,
    })
    if(result?.error) alert(result?.error.message)
  }

  return (
    <div className='w-full py-10'>
        <div className='w-full flex gap-10 mt-[110px]'>
            <div className='w-2/3 flex flex-col gap-5'>
                <h1 className='text-2xl font-bold'>
                    Cart{" "}
                    <span className='font-normal'>
                        ({productData.length} items)
                    </span>
                </h1>
                <div>
                    <div className='text-xl font-bold flex items-center gap-2 mb-2'>
                        <Image className='w-10' src={phoneImg} alt='phoneImg' />
                        <p>Pickup and delivery options</p>
                    </div>
                    <div className='w-full grid grid-cols-3 gap-4 text-xs'>
                        <div className='w-full border border-black rounded-md flex-flex-col items-center justify-center gap-1 p-2'>
                            <Image className='w-10' src={ship1Img} alt='shippingImg' />
                            <p className='font-bold'>Shipping</p>
                            <p>All items available</p>
                        </div>
                        <div className='w-full border border-black rounded-md flex-flex-col items-center justify-center gap-1 p-2'>
                            <Image className='w-10' src={ship2Img} alt='shippingImg' />
                            <p className='font-bold'>Pickup</p>
                            <p>All items available</p>
                        </div>
                        <div className='w-full border border-black rounded-md flex-flex-col items-center justify-center gap-1 p-2'>
                            <Image className='w-10' src={ship3Img} alt='shippingImg' />
                            <p className='font-bold'>Delivery</p>
                            <p>All items available</p>
                        </div>
                    </div>
                    <div className='w-full p-5 border-[1px] border-black rounded-md flex flex-col gap-4'>
                        <p className='font-semibold text-sm text-black'>
                            {" "}
                            Sold and shipped by <span className='bg-black p-2 rounded-md text-[#00f0ff]'>VCyber.com</span>
                        </p>
                        <div>
                            {
                                productData.map((item:StoreProduct) => (
                                    <div key={item._id} className='flex items-center justify-between gap-4 border-b-[1px] border-black'>
                                        <div className='w-3/4 flex items-center gap-2'>
                                            <Image className='w-32'
                                              width={500}
                                              height={500}
                                              src={item.image}
                                              alt='productImg' 
                                            />
                                            <div>
                                                <h2 className='text-base text-black font-bold'>{item.title}</h2>
                                                <p className='text-sm text-black'>{item.description}</p>
                                                <p className='text-sm text-black'>price: ${item.price}</p>
                                                <p className='text-sm text-black flex items-center gap-1'>
                                                    <span className='bg-black rounded-full text-[#00f0ff] text-xs w-4 h-4 flex items-center justify-center'>
                                                        <TbReload className='rotate-180' />
                                                    </span>
                                                    Free 30-day returns
                                                </p>
                                                <div className='flex items-center gap-6 py-4'>
                                                    <button 
                                                      onClick={() => dispatch(deleteItem(item._id))}
                                                      className='text-sm underline underline-offset-2 decoration-[1px] text-[#ff0013] hover:no-underline hover:text-black duration-300'>
                                                        Remove
                                                    </button>
                                                    <div className='w-28 h-9 border border-black rounded-full text-base font-semibold text-black flex items-center justify-between px-3 gap-3'>
                                                        <button 
                                                          onClick={() => 
                                                            dispatch(
                                                              decreaseQuantity({
                                                                _id: item._id,
                                                                title: item.title,
                                                                description: item.description,
                                                                price: item.price,
                                                                oldPrice: item.oldPrice,
                                                                brand: item.brand,
                                                                category: item.category,
                                                                image: item.image,
                                                                quantity: 1,
                                                              })
                                                            )
                                                           } 
                                                          className='text-base w-5 h-5 text-black hover:bg-black hover:text-[#00f0ff] rounded-full flex items-center justify-center cursor-pointer duration-200'>
                                                            <HiMinusSmall />
                                                        </button>
                                                        <span>{item.quantity}</span>
                                                        <button
                                                           onClick={() => 
                                                            dispatch(
                                                              increaseQuantity({
                                                                _id: item._id,
                                                                title: item.title,
                                                                description: item.description,
                                                                price: item.price,
                                                                oldPrice: item.oldPrice,
                                                                brand: item.brand,
                                                                category: item.category,
                                                                image: item.image,
                                                                quantity: 1,
                                                              })
                                                            )
                                                           } 
                                                           className='text-base w-5 h-5 text-black hover:bg-black hover:text-[#00f0ff] rounded-full flex items-center justify-center cursor-pointer duration-200'>
                                                            <MdOutlineAdd />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-1/4 text-right flex flex-col items-end gap-1'>
                                            <p className='font-semibold text-xl text-[#00f0ff] bg-black rounded-md p-2'>
                                                <FormatPrice amount={item.price * item.quantity}/>
                                            </p>
                                            <p className='text-sm line-through text-[#ff0013]'>
                                                <FormatPrice amount={item.oldPrice * item.quantity}/>
                                            </p>
                                            <div className='flex items-center text-xs gap-2'>
                                                <p className='bg-black text-[#00f0ff] text-[8px] uppercase px-2 py-[1px]'>You save</p>
                                                <p className='border border-black p-2 font-semibold'>
                                                    <FormatPrice
                                                     amount={
                                                        item.oldPrice * item.quantity - item.price * item.quantity
                                                     }
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <button 
                          onClick={() => dispatch(resetCart())}
                          className='w-44 bg-red-500 text-white h-10 rounded-full text-base font-semibold hover:bg-red-800 duration-300'
                        >
                            Reset Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-1/3 p-4 mt-24 h-[500px] border-[1px] border-black rounded-md flex flex-col justify-center gap-4'>
                <div className='w-full flex flex-col gap-4 border-b-[1px] border-b-black pb-4'>
                    {userInfo ? (
                        <button 
                          onClick={handleCheckout}
                          className='bg-black text-[#00f0ff] w-full h-10 rounded-full font-semibold'>
                            Continue to checkout
                        </button>
                    ) : (
                        <button className='bg-black text-[#00f0ff] w-full h-10 rounded-full font-semibold cursor-not-allowed'>
                            Continue to checkout
                        </button>
                    )}
                    {!userInfo && (
                        <p className='text-sm text-center text-[#ff0013] font-semibold'>
                            Please sign in for checkout
                        </p>
                    )}
                    {
                        warning && (
                        <div className='bg-black text-[#00f0ff] p-2 rounded-lg flex items-center justify-between gap-4'>
                            <Image className='w-8' src={warningImg} alt='warningImg' />
                            <p className='text-sm'>
                                Items in your cart have reduced prices. Check out now for extra savings!
                            </p>
                            <IoMdClose
                            onClick={() => setWarning(false)}
                            className='text-3xl hover:text-red-500 cursor-pointer duration-200' 
                            />
                        </div>
                    )}
                    <p className='text-sm text-center'>
                        For the best shopping experience {" "}
                        <span className='underline underline-offset-2 decoration-[1px]'>
                            sign in
                        </span>
                    </p>
                </div>
                <div className='w-full flex flex-col gap-4 border-b-[1px] border-b-black pb-4'>
                    <div className='flex flex-col gap-1'>
                        <div className='text-sm flex justify-between'>
                            <p className='font-semibold'>
                                Subtotal <span>({productData.length} items)</span>
                            </p>
                            <p className='line-through text-black text-base'>
                                <FormatPrice amount={totalOldPrice} />
                            </p>
                        </div>
                        <div className='text-sm flex justify-between items-center'>
                            <p className='font-semibold'>
                                Savings
                            </p>
                            <p className='text-[#00f0ff] bg-black font-bold py-1 px-[2px] rounded-lg flex'>
                                -<FormatPrice amount={totalSavings} />
                            </p>
                        </div>
                        <div className='text-sm flex justify-between'>
                            <p className='font-semibold'>
                                Total Amount
                            </p>
                            <p className='text-black font-normal text-base'>
                                <FormatPrice amount={totalAmt} />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-4 border-b-[1px] border-b-black pb-4'>
                    <div className='flex flex-col gap-1'>
                        <div className='text-sm flex justify-between'>
                            <p>Shipping</p>
                            <p className='text-black'>Free</p>
                        </div>
                        <div className='text-sm flex justify-between'>
                            <p className='font-semibold'>Taxes</p>
                            <p className='text-black'>Calculated at checkout</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <p>Estimated Total</p>
                    <p className='text-black font-bold text-lg'>
                         <FormatPrice amount={totalAmt} />
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartPage