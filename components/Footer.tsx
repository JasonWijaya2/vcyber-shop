import React from 'react'
import { FaGithubAlt, FaFacebook, FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { SiSteelseries, SiRazer, SiLogitech, SiMsibusiness } from "react-icons/si"

const Footer = () => {
  return (
    <div className='w-full bg-black mb-[-32px]'>
        <div className='text-[#00f0ff] text-3xl flex justify-center'>Follow Us</div>
        <div className='flex flex-row justify-center my-4 gap-[25px] text-[#00f0ff]'>
            <a href="https://github.com/JasonWijaya2" target='_blank'><FaGithubAlt className='w-8 h-8'/></a>
            <a href="https://github.com/JasonWijaya2" target='_blank'><FaFacebook className='w-8 h-8'/></a>
            <a href="https://github.com/JasonWijaya2" target='_blank'><FaInstagram className='w-8 h-8'/></a>
            <a href="https://github.com/JasonWijaya2" target='_blank'><FaXTwitter className='w-8 h-8'/></a>
        </div>
        <div className='text-[#00f0ff] text-3xl flex justify-center'>Check Official Store</div>
        <div className='flex flex-row justify-center my-4 gap-[25px] text-[#00f0ff]'>
            <a href="https://steelseries.com/" target='_blank'><SiSteelseries className='w-8 h-8'/></a>
            <a href="https://www.razer.com/" target='_blank'><SiRazer className='w-8 h-8'/></a>
            <a href="https://www.logitechg.com/" target='_blank'><SiLogitech className='w-8 h-8'/></a>
            <a href="https://www.msi.com/" target='_blank'><SiMsibusiness className='w-8 h-8'/></a>
        </div>
        <div className='flex flex-row justify-center my-8 gap-[25px] text-[#00f0ff] text-lg'>
            <a href="" target='_blank'>Terms of Use & Privacy Policy</a>
            <a href="" target='_blank'>About Us</a>
            <a href="" target='_blank'>Contact</a>
            <a href="" target='_blank'>Blog</a>
        </div>
    </div>
  )
}

export default Footer