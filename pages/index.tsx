import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Products from "@/components/Products";
import { Product } from "@/type";


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
    await fetch("api/productdata")
    ).json();

  return {
    props: { productData },
  }
}