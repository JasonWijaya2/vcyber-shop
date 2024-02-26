import React from 'react'
import Carousel from './Carousel'

const Banner = () => {
  const slides = [
    "https://media.steelseriescdn.com/blog/posts/how-to-get-virtual-surround-sound-on-your-arctis-7/gg_arctis7_virtualsurround_cta1_625eb1f4aef5400fbef2749d999c7aee.webp",
    "https://storage-asset.msi.com/id/picture/NB%20ID/BTS%202021/PR%20GS76%20KV%20-%201920%20x%201080.jpg",
    "https://www.soundguys.com/wp-content/uploads/2023/08/Best-Razer-Gaming-Headsets.png",
    "https://i.imgur.com/c3vTP1F.png",
  ]
  return (
    <section id='banner' className='w-full text-white bg-black px-4 py-6 flex gap-4 border-[#00f0ff] border-b-px'>
      <div className='w-full border-4 border-[#00f0ff]'>
        <Carousel slides={slides} />
      </div>
    </section>
  )
}

export default Banner