import React, { useEffect, useState } from 'react';
import Products from '../components/Products';
import { useRouter } from 'next/router';

const Category = () => {
  const router = useRouter();
  const { category } = router.query;
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await fetch(`/api/productdata?category=${category}`);
        if (response.ok) {
          const data = await response.json();
          setCategoryProducts(data);
        } else {
          console.error('Failed to fetch category products');
        }
      } catch (error) {
        console.error('Error fetching category products:', error);
      }
    };

    if (category) {
      fetchCategoryProducts();
    }
  }, [category]);

  if (!categoryProducts) {
    return <div>Loading...</div>;
  }

  const categoryTitle = typeof category === 'string' ? category.charAt(0).toUpperCase() + category.slice(1) : ''

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='w-80 flex justify-center items-center bg-black text-[#00f0ff] text-3xl font-bold my-6'>{categoryTitle} Products</h1>
      <Products productData={categoryProducts} />
    </div>
  );
};

export default Category;