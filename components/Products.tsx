import React from 'react'
import { Item } from "../type"
import Image from 'next/image'
import { GoPlus } from 'react-icons/go'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/shopSlice'
import toast, { Toaster } from 'react-hot-toast'

const Products = ({productData}:any) => {
  const dispatch = useDispatch()

  return (
    <div className='bg-[#fcee0a] w-full py-6 px-4 flex flex-wrap justify-center items-center gap-2 my-8'> 
      {productData.map((item: Item) => (
        <div key={item._id} className='bg-gray-700 border-8 border-black mb-6 group relative'>
          <Link href={{
              pathname: `product/${item._id}`,
              query:{
                _id: item._id,
                title: item.title,
                description: item.description,
                price: item.price,
                oldPrice: item.oldPrice,
                brand: item.brand,
                category: item.category,
                image: item.image,
                isNew: item.isNew,
              }
            }}
            as={`product/${item._id}`}
          >
          <div className='w-[250px] h-[350px] overflow-hidden'>
              <Image
                className='w-full h-full object-cover scale-100 group-hover:scale-105'
                width={500} height={500} 
                src={item.image}
                alt='itemImage' 
              />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          </div>
          </Link>
          <div>
            <div className='absolute bottom-0 left-0 right-0 flex justify-center'>
              <button
                 onClick={() => 
                  dispatch(
                    addToCart({
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
                  ) && toast.success(`${item.title.substring(0,20)} is added to Cart`)
                 } 
                 className='btn btn--secondary flex gap-1 items-center justify-center'>
                <span className='btn__content'><GoPlus /> Add</span>
                <span className="btn__glitch"></span>
              </button>
            </div>
            <p className='absolute bottom-14 left-2 right-2 flex flex-col justify-center text-[#00f0ff] text-lg font-bold py-2'>
              {item.title.substring(0, 25)}
            </p>
            <div className='absolute bottom-[100px] left-2 right-2 flex flex-row items-center gap-2'>
              <p className='text-lg text-[#00f0ff]'>Now ${item.price}</p>
              <p className='text-[#ff0013] line-through'>${item.oldPrice}</p>
            </div>
            <div className='absolute bottom-[77px] left-2 right-2 flex flex-col justify-center text-[#00f0ff] text-sm font-bold py-2'>
              {item.brand}
            </div>
          </div>
        </div>
      ))}
      <Toaster
        reverseOrder={false}
        position='top-center'
        toastOptions={{
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        }} 
      />
    </div>
  )
}

export default Products