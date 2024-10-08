import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { CardItem } from '../components/CardItem'
import { Landing } from '../components/Landing'
import { Navbar } from '../components/Navbar'
import { BigCard } from '../components/BigCard'
import img1 from '../public/imgs/cardImg1.svg';
import img2 from '../public/imgs/cardImg2.svg';
import img3 from '../public/imgs/cardImg3.svg';
import river from '../public/imgs/river.svg'
import mountains from '../public/imgs/mountains.svg'
import beach from '../public/imgs/beach.svg'
import booking from '../public/imgs/booking.svg'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import LandscapeIcon from '@mui/icons-material/Landscape';
import { AccordionCard } from '../components/AccordionCard'
import { Footer } from '../components/Footer'
import { ToTop } from '../components/ToTop'
import { useInView } from 'react-intersection-observer'
import { Alert, AlertTitle } from '@mui/material'
import { useState } from 'react'

const Home: NextPage = () => {

  const pakDesc = 'Kenya boasts unparalleled natural beauty, with some of the world\'s most stunning destinations awaiting exploration. Particularly noteworthy is its northern region and the enchanting landscapes of the Rift Valley and its highlands. Here, visitors are treated to sky-high mountains, lush valleys, majestic rivers, pristine lakes, and incredible wildlife. Kenya\'s northern areas and regions like Rift Valley and the highlands offer an unforgettable journey into nature\'s wonders.'
  const Map = dynamic(
    ()=> import('../components/Map.jsx') as any, {ssr:false}
  )
  const [showAlert, setShowAlert] = useState(false)

 const heading = useInView({
    threshold:0,
    
    triggerOnce:true
  });
  const cards = useInView({
    threshold:0,
    
    triggerOnce:true,
  })
 const heading1 = useInView({
    threshold:0,
    
    triggerOnce:true
  });
 const heading2 = useInView({
    threshold:0,
    triggerOnce:true
  });
 const bigCard = useInView({
    threshold:0,
    
    triggerOnce:true
  });
 const accordions = useInView({
    threshold:0,
    
    triggerOnce:true
  });
  
  const submitFunc = (e:any) => {
    e.preventDefault()
    setShowAlert(true)
    setTimeout(()=>setShowAlert(false),10000)
  }

  const maasaimaraTourDescription = (
    <p>
  An exquisite tour of the Maasai Mara
    </p>
  );

  const deepblueSwimmingDescription = (
    <p>
  Go swimming in the beautiful deep blue
    </p>
  );

  const lakeNaivashaDescription = (
    <p>
  Flowing from the glaciers of Lake Naivasha
    </p>
  );
  
  return (
    <div>
      <Head>
        <title>Visit Kenya</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/> 
        <meta name="description" content="Discover the world's most beautiful destinations with our travel app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-gradient-to-t from-blue-300 to-blue-50'>
      <Navbar/>
      <Landing/>
      </div>
      <div id='heading' className="bg-[url('../public/imgs/lace.jpg')] bg-contain h-[80px] w-full " ></div>
      <div  className='my-20'>
        <div ref={heading.ref} className={`${heading.inView ? 'translate-y-[0vh] opacity-1' : 'translate-y-[10vh] opacity-0'} transition-all duration-1000 ease-out `}>
        <h4 className='text-xs lg:text-sm font-heading my-5 text-center w-full tracking-[10px] font-semibold'>POPULAR ACTIVITIES</h4>
        <h3 className='text-3xl lg:text-4xl my-5 tracking-wide w-full text-center capitalize font-extrabold'>Most popular activities in Kenya</h3>
        </div>
        <Map/>
        <div id='tours' ref={cards.ref} className={`flex flex-wrap justify-center transition-all duration-[1500ms] ease-out ${cards.inView ? 'opacity-100' : 'opacity-0'} `}>
        <CardItem icon={<EmojiEmotionsIcon />} modalDesc={pakDesc} title='experience' desc='Explore the beauty of Kenya with us today' img={img1} />
        <CardItem icon={<SelfImprovementIcon />} modalDesc={pakDesc} title='relax' desc='Indulge in the relaxing atmosphere' img={img2} />
        <CardItem icon={<LandscapeIcon />} modalDesc={pakDesc} title='embrace' desc='Let the scenery take your breath away' img={img3} />
        </div>
      </div>
      <div className='mt-40 relative'>
        <div ref={heading1.ref} className={`transition-all duration-[1000ms] ease-out ${heading1.inView ? 'translate-y-[0vh] opacity-100' : 'translate-y-[20vh] opacity-0'} `} >
        <h4 className='text-xs lg:text-sm font-heading my-10 text-center w-full tracking-[10px] font-semibold'>TOUR DESTINATIONS</h4>
        <h3 className='text-3xl lg:text-4xl my-10 tracking-wide w-full text-center capitalize font-extrabold'>Top tour destinations in Kenya</h3>
        </div>
        <div className="flex flex-wrap justify-center mt-[150px]">
        <div ref={bigCard.ref} className={`transition-all duration-1000 ${bigCard.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
        <BigCard/>
        </div>
        <div id='guide' ref={accordions.ref} className={`flex flex-col transition-all duration-[2000ms] ease-in-out ${accordions.inView ? 'translate-y-[0vh] opacity-100' : 'translate-y-[20vh] opacity-0'} `}>
        <AccordionCard title={'Maasai Mara'} price={'$120'} desc={maasaimaraTourDescription} img={mountains}   />
        <AccordionCard title={'Nyali Beach'} price={'$150'} desc={deepblueSwimmingDescription} img={beach}   />
        <AccordionCard title={'Lake Naivasha'} price={'$180'} desc={lakeNaivashaDescription} img={river}   />
        </div>
        </div>
        <div className='flex justify-center md:flex-row flex-col mt-20 mb-10 mx-10'>
          <form id='form' onSubmit={(e)=>submitFunc(e)} ref={heading2.ref} className={`flex flex-col items-start min-w-[300px] transition-all duration-[1500ms] ${heading2.inView ? 'opacity-100' : 'opacity-0'}`}>
        <h4 className='text-xs lg:text-sm mt-10 mb-5 font-heading w-full tracking-[10px] font-semibold'>RESERVE NOW</h4>
        <h3 className='text-3xl lg:text-4xl mb-10 tracking-wide w-full capitalize font-extrabold'>Book your tour with us now</h3>
        <p className='max-w-[400px]'>Looking for an experience like never before? Book your tour with us today and let us contact you.</p>
        <input required type="text" placeholder='Name' className='px-4 py-2 transition-all  text-black shadow-md w-full rounded-2xl placeholder:italic focus:outline-none border-2 border-transparent hover:border-primary focus:border-primary bg-stone-100 my-4 mt-10' />
        <input required type="date" placeholder='Preferred date' className='px-4 py-2 transition-all  text-black shadow-md w-full rounded-2xl placeholder:italic focus:outline-none border-2 border-transparent hover:border-primary focus:border-primary bg-stone-100 my-4 ' />
        <input required type="email" placeholder='Email' className='px-4 py-2 transition-all  text-black shadow-md w-full rounded-2xl placeholder:italic focus:outline-none border-2 border-transparent hover:border-primary focus:border-primary bg-stone-100 my-4' />
        <button className='my-4 px-6 py-2 rounded-2xl bg-secondary hover:bg-secondaryLighter text-white font-medium'>Submit</button> 
        <Alert className={`w-full ${showAlert ? 'block' : 'hidden'}`} severity="success">
        <AlertTitle>Success</AlertTitle>
        Your booking has been made - <strong>We will contact you soon.</strong>
        </Alert>
          </form>
          <Image height={1000} src={booking}/>
        </div>
      <ToTop/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
