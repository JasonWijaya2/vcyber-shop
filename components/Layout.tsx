import { ReactElement } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
    children: ReactElement;
}

const Layout = ({ children }: Props) => {
  return (
    <>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default Layout