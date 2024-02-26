import React from 'react'
import HeaderText from './HeaderText'

const Header = () => {
  return (
    <div className='mt-[-110px]'>
        <video 
          className="w-full h-auto"
          poster="https://www.cyberpunk.net/build/images/home12/cover-1920-bd460362.jpg" autoPlay loop muted playsInline>
            <source src="https://cdn-l-cyberpunk.cdprojektred.com/video/CP2077_UE_KV_Animation_1920x1080_AV1.mp4" type="video/mp4; codecs=av01.0.05M.08" />
            <source src="https://cdn-l-cyberpunk.cdprojektred.com/video/CP2077_UE_KV_Animation_1920x1080_h264.mp4" type="video/mp4" />
        </video>
        <HeaderText 
            title='Get Ultimate Gaming Gear' 
            description='Famous brand gaming gear is available in this shop' 
            btnText='Shop Now' 
        />
    </div>
  )
}

export default Header