import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { GoPlus } from 'react-icons/go'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/shopSlice'
import toast, { Toaster } from 'react-hot-toast'

const ProductDetails = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [product, setProduct] = useState<any>({})
  const [isLoading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    setProduct(router.query)
    setLoading(false)
  },[])

  const _id = Number(product._id)

  return (
    <div className='w-full min-h-screen bg-[#fcee0a] mt-[-110px]'>
      <div className='max-w-contentContainer mx-auto flex items-center py-4'>
        <div className='w-2/3 mt-8 h-full flex items-center justify-center overflow-hidden relative'>
          <img src={product.image} alt="productImg" className='w-4/5 transform-origin-top-left duration-500'/>
        </div>
        <div className='w-1/3 mt-8 bg-black h-full flex flex-col gap-2 text-[#00f0ff] p-4'>
          <div className='flex flex-col gap-1'>
            <p className='text-sm underline underline-offset-4'>{product.brand}</p>
            <p className='text-xl font-bold'>{product.title}</p>
            <p className='text-base '>{product.description}</p>
            <div className='flex items-end gap-2'>
              <p className='font-bold text-2xl'>Now ${product.price}</p>
              <p className='text-sm text-[#ff0013] line-through flex items-center gap-1'>${product.oldPrice}</p>
            </div>
            <div className='py-4 flex justify-center'>
              <button
                onClick={() => 
                  dispatch(
                    addToCart({
                      _id: _id,
                      title: product.title,
                      description: product.description,
                      price: product.price,
                      oldPrice: product.oldPrice,
                      brand: product.brand,
                      category: product.category,
                      image: product.image,
                      quantity: 1,
                    })
                  ) && toast.success(`${product.title.substring(0,20)} is added to Cart`)
                 } 
                className='btn flex gap-1 items-center justify-center'>
                <span className='btn__content'><GoPlus />Add To Cart</span>
                <span className="btn__glitch"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
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

export default ProductDetails