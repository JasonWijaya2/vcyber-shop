import Image from "next/image";
import Navbar from "@/components/Navbar";
import localFont from 'next/font/local'
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Products from "@/components/Products";
import { Product } from "@/type";
import Footer from "@/components/Footer";

const myFont = localFont({ src: '../public/assets/BlenderProBook.ttf' })

interface Props {
  productData: Product
}

export default function Home({productData}:Props) {
  return (
    <main className='bg-[#fcee0a] flex flex-col items-center'>
      <Header />
      <Banner />
      <Products productData={productData} />
    </main>
  );
}

export const getServerSideProps = async () => {
  const productData = await (
    await fetch("http://localhost:3000/api/productdata")
    ).json();

  return {
    props: { productData },
  }
}