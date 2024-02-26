// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  _id: number;
  title: string;
  description: string;
  oldPrice: number;
  price: number;
  brand: string;
  image: string;
  isNew: boolean;
  category: string;
}[];
const productData = [
  {
    _id: 101,
    title: "Aerox 5 Wireless",
    description:
      "Engineered with an ultra lightweight 74g design for speed and precision making it perfect for all Battle Royale, FPS, MOBA, and other fast-paced games.",
    oldPrice: 200.0,
    price: 149.99,
    brand: "Steelseries",
    image: "https://media.steelseriescdn.com/thumbs/catalog/items/62406/d447dc561ffd4b45a8162f663464f34b.png.500x400_q100_crop-fit_optimize.webp",
    isNew: true,
    category: "Mouse",
  },

  {
    _id: 102,
    title: "Alias Pro",
    description:
      "Designed for gaming, broadcast, and podcasting with a pro-grade XLR connection. apture a wide vocal range with a capsule up to 3X larger than other mics. XLR amplifier connects to PC via USB and features customizable controls and RGB",
    oldPrice: 400.0,
    price: 349.99,
    brand: "Steelseries",
    image: "https://media.steelseriescdn.com/thumbs/catalog/items/61597/6c6f80894adc420cad51fddbcc58ab01.png.500x400_q100_crop-fit_optimize.png",
    isNew: true,
    category: "Microphone",
  },
  {
    _id: 103,
    title: "Arctis Nova 7P Wireless",
    description:
      "The Nova Acoustic System features High Fidelity Drivers for superior audio quality with immersive 360° Spatial Audio and a first-in-gaming Parametric EQ.",
    oldPrice: 300.0,
    price: 199.99,
    brand: "Steelseries",
    image: "https://media.steelseriescdn.com/thumbs/catalog/items/61559/f36e99e6a723414f9a9c08d8d0d3d730.png.500x400_q100_crop-fit_optimize.webp",
    isNew: true,
    category: "Headset",
  },
  {
    _id: 104,
    title: "Apex 7",
    description: "Mechanical Switch Gaming Keyboard with OLED Smart Display",
    oldPrice: 199.99,
    price: 169.99,
    brand: "Steelseries",
    image: "https://media.steelseriescdn.com/thumbs/catalogue/products/01101-apex-7-red-switch/2ff2d4b8587d4af3aeeae2e5fbb4a698.png.500x400_q100_crop-fit_optimize.webp",
    isNew: true,
    category: "Keyboard",
  },
  {
    _id: 105,
    title: "Arena 9",
    description:
      "True 5.1 surround sound including a 6.5 inch subwoofer for immersive gaming over a single USB connection",
    oldPrice: 799.99,
    price: 599.99,
    brand: "Steelseries",
    image: "https://media.steelseriescdn.com/thumbs/catalog/items/61547/a99efcd10f1f4d27857cbbedab954261.png.500x400_q100_crop-fit_optimize.webp",
    isNew: true,
    category: "Speaker",
  },
  {
    _id: 106,
    title: "Razer BlackShark V2 HyperSpeed",
    description:
      "Wireless Ultra-Lightweight Esports Headset",
    oldPrice: 140.99,
    price: 129.99,
    brand: "Razer",
    image: "https://assets3.razerzone.com/WH5OfIBkme3mAPhLOQHBmCCLj-8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb1%2Fh51%2F9654943088670%2Fblackshark-v2-hyperspeed-black-500x500.png",
    isNew: true,
    category: "Headset",
  },
  {
    _id: 107,
    title: "Razer Viper V3 HyperSpeed",
    description:
      "Wireless Esports Mouse. 82 g Lightweight Design. Razer™ Focus Pro 30K Optical Sensor. Up to 280 hours of Battery Life",
    oldPrice: 140.99,
    price: 129.99,
    brand: "Razer",
    image: "https://assets3.razerzone.com/WZ3oPLIR9PYJCeioFfK4orTsb80=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh0b%2Fh95%2F9657630523422%2Fviper-v3-hyperspeed-black-500x500.png",
    isNew: true,
    category: "Mouse",
  },
  {
    _id: 108,
    title: "Razer Iskur",
    description:
      "Gaming Chair with Built-in Lumbar Support",
    oldPrice: 599.99,
    price: 509.99,
    brand: "Razer",
    image: "https://assets3.razerzone.com/HKi30AaLVS-eMsFc-T2GCjKVCn8=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh93%2Fhee%2F9719861248030%2Fiskur-v2-black-green-2-500x500.png",
    isNew: true,
    category: "Chair",
  },
  {
    _id: 109,
    title: "Razer BlackWidow V4 Pro",
    description:
      "Mechanical Gaming Keyboard with Razer Chroma™ RGB",
    oldPrice: 259.99,
    price: 229.99,
    brand: "Razer",
    image: "https://assets3.razerzone.com/YtWqr12prPepbUlakSh52LMFXmU=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2a%2Fhd3%2F9538807103518%2Fblackwidow-v3-black-5-500x500.png",
    isNew: true,
    category: "Keyboard",
  },
  {
    _id: 110,
    title: "Razer Blade 14",
    description: "AMD Ryzen™ 9 7940HS. Windows 11 Home. 14 inch 240 Hz QHD+. GeForce RTX 4060. 16 GB 5600 MHz RAM, 1 TB SSD",
    oldPrice: 2399.99,
    price: 1999.99,
    brand: "Razer",
    image: "https://assets3.razerzone.com/9V-IMwk9fHvzlFw6ma4kOf1yIHA=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb7%2Fh1b%2F9539342008350%2Fblade14-p9-black-500x500.png",
    isNew: true,
    category: "Laptop",
  },
  {
    _id: 111,
    title: "Astro A50 X",
    description:
      "LIGHTSPEED Wireless Gaming Headset + Base Station",
    oldPrice: 400.0,
    price: 379.99,
    brand: "Logitech",
    image: "https://resource.logitech.com/content/dam/gaming/en/products/astro-a50-x/product-gallery/astro-a50-x-black-gallery-1.png",
    isNew: true,
    category: "Headset",
  },
  {
    _id: 112,
    title: "Pro X",
    description:
      "Less than 63 grams. Advanced low-latency LIGHTSPEED wireless. Sub-micron precision with HERO 25K sensor. Remove all obstacles with our lightest and fastest PRO mouse ever.",
    oldPrice: 159.99,
    price: 129.99,
    brand: "Logitech",
    image: "https://resource.logitech.com/w_350,c_fit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-superlight/pro-x-superlight-gallery-2.png",
    isNew: true,
    category: "Mouse",
  },
  {
    _id: 113,
    title: "Pro X TKL",
    description:
      "A championship-trusted wireless gaming keyboard designed for the highest levels of competitive play. Designed with pros and engineered to win.",
    oldPrice: 259.59,
    price: 199.0,
    brand: "Logitech",
    image: "https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-tkl/gallery-1-pro-x-tkl-black-lightspeed-gaming-keyboard.png.png?v=1",
    isNew: true,
    category: "Keyboard",
  },
  {
    _id: 114,
    title:
      "Herman Miller X Logitech G Embody Gaming Chair",
    description:
      "The Embody Gaming Chair from Herman Miller and Logitech G features science-backed ergonomics that will keep you comfortable and cool.",
    oldPrice: 17000.0,
    price: 16400.0,
    brand: "Logitech",
    image: "https://hkgaming.hermanmiller.com/cdn/shop/products/Embody_Cyan_02_8d515210-7f74-4f9b-917b-fdafe077a251_600x600_crop_center.png?v=1643901366",
    isNew: true,
    category: "Chair",
  },
  {
    _id: 115,
    title:
      "Pro Racing Wheel",
    description:
      "Logitech G PRO Racing Wheel delivers a professional-grade connection to the race with Direct Drive and TRUEFORCE feedback technology. Featuring an extensively tested PRO “thumbsweep” button layout, plus magnetic gear-shift paddles, dual clutch paddles, and easy mounting. For PC, PlayStation or Xbox. Drive to win.",
    oldPrice: 1099.99,
    price: 999.99,
    brand: "Logitech",
    image: "https://resource.logitechg.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/pro-racing/pro-racing-wheel/gallery-xbox/gallery-1-pc-xbox.png?v=1",
    isNew: true,
    category: "Driving Wheel",
  },
  {
    _id: 116,
    title:
      "Clutch GM08 Gaming Mouse",
    description:
      "Enjoy years of gaming with switches rated for over 10 Million clicks and a gold-plated USB connector. Clutch GM08 Gaming Mouse, a state of the art PixArt PAW 3519 optical sensor with a DPI of up to 4200* allows for fast and accurate tracking. The MSI’s exclusive dragon scale side grips bring more faith with unique touches. Special polygonal designed side buttons allow you to flick with speed and ease.",
    oldPrice: 29.0,
    price: 19.0,
    brand: "MSI",
    image: "https://asset-us-store.msi.com/image/cache/catalog/Pd_page/GGD/MOUSE/GM08/GM08-1-1024x1024.png",
    isNew: true,
    category: "Mouse",
  },
  {
    _id: 117,
    title: "DS502 Gaming Headset",
    description:
      "MSI DS502 Gaming Headset is comfortable on your head and ears for extended gaming sessions. Its fully adjustable headband and closed ear cups with plush padding ensure a perfect fit every time. ",
    oldPrice: 49.99,
    price: 44.0,
    brand: "MSI",
    image: "https://asset-us-store.msi.com/image/cache/catalog/Pd_page/GGD/HEADSET/DS502/DS502-1-1024x1024.png",
    isNew: true,
    category: "Headset",
  },
  {
    _id: 118,
    title:
      "Vigor GK30 Combo Gaming Keyboard",
    description:
      "Vigor GK30 Combo Gaming Keyboard, mechanical-like plunger switches with 3-part construction, provides a crisp typing experience with over 12 million life span. Convenient lighting hotkeys allow you to change speed, direction or mode without installing software.",
    oldPrice: 64.0,
    price: 54.0,
    brand: "MSI",
    image: "https://asset-us-store.msi.com/image/cache/catalog/Pd_page/GGD/KEYBOARD/GK30COMBO/GK30COMBO-2-1024x1024.png",
    isNew: true,
    category: "Keyboard",
  },
  {
    _id: 119,
    title:
      "MAG CH130 X Gaming Chair",
    description:
      "The MSI MAG CH130 X Gaming Chair took inspiration from a race car seat, with emphasis on support and comfortability. Body pressure is fully loosened up by the ergonomically streamlined outline, with the backline fully matching the spine and head. The steel material is stable and durable, and the widened and deepened seat provides more complete coverage. You can enjoy the best whether you're in game or at work.",
    oldPrice: 349.0,
    price: 299.0,
    brand: "MSI",
    image: "https://asset-us-store.msi.com/image/cache/catalog/Pd_page/Chairs/CH130/CH130-2-1024x1024.png",
    isNew: true,
    category: "Chair",
  },
  {
    _id: 120,
    title: "Immerse GV60 Streaming Microphone",
    description: "MSI's first streaming microphone, the MSI Immerse GV60 Streaming Microphone, is developed with the same DNA that made previous MSI audio devices great. GV60 sets itself apart from other streaming microphones by incorporating all the core features streamers and content creators want: high-resolution sample rate, versatile pickup patterns, real-time monitoring, and plug & play for ease of use. This sleek matte-finished aluminum microphone instantly turns any setup into a studio for you while delivering uncompromised recording quality with a high resolution sample rate of 24bit/96kHz.",
    oldPrice: 129.0,
    price: 79.0,
    brand: "MSI",
    image: "https://asset-us-store.msi.com/image/cache/catalog/Pd_page/GGD/AUDIO/GV60/GV60-1-1024x1024.png",
    isNew: true,
    category: "Microphone",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(productData);
}
