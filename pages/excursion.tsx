import type { NextPage } from 'next';
import Head from 'next/head';
import { CardItem } from '../components/CardItem';
import { Landing } from '../components/Landing';
import { Navbar } from '../components/Navbar';
import { BigCard } from '../components/BigCard';
import img1 from '../public/imgs/cardImg1.svg';
import img2 from '../public/imgs/cardImg2.svg';
import img3 from '../public/imgs/cardImg3.svg';
import river from '../public/imgs/river.svg';
import mountains from '../public/imgs/mountains.svg';
import beach from '../public/imgs/beach.svg';
import { AccordionCard } from '../components/AccordionCard';
import { Footer } from '../components/Footer';
import { ToTop } from '../components/ToTop';
import { useInView } from 'react-intersection-observer';
import { Alert, AlertTitle } from '@mui/material';
import { useState } from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import LandscapeIcon from '@mui/icons-material/Landscape';

const Destinations: NextPage = () => {
  const pakDesc = "Kenya boasts unparalleled natural beauty, with some of the world's most stunning destinations awaiting exploration. Particularly noteworthy is its northern region and the enchanting landscapes of the Rift Valley and its highlands. Here, visitors are treated to sky-high mountains, lush valleys, majestic rivers, pristine lakes, and incredible wildlife. Kenya's northern areas and regions like Rift Valley and the highlands offer an unforgettable journey into nature's wonders.";

  const [showAlert, setShowAlert] = useState(false);

  const heading = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const cards = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const heading1 = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const heading2 = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const bigCard = useInView({
    threshold: 0,
    triggerOnce: true
  });
  const accordions = useInView({
    threshold: 0,
    triggerOnce: true
  });

  const submitFunc = (e: any) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 10000);
  };

  const mombasaCityTourDescription = (
    <p>
      Discover the culture, origins, and fun of Mombasa. This half-day city tour is part history and part shopping!
      Here you can explore Mombasa’s exotic markets for personal treasures. Then tour the city’s Arabic and Portuguese
      past and witness their present-day influence on this colourful metropolis.<br /><br />
      <strong>TOUR HIGHLIGHTS:</strong><br /><br />
      - Old town of Mombasa with Swahili and Arabic culture<br />
      - Fort Jesus Museum - synonymous with the history of the East African Coast<br />
      - Food and spice market - a glimpse into the lives of the local communities<br />
      - Elephant tusk monument<br />
      - Mama Ngina waterfront<br /><br />
      <strong>PACKAGE INCLUDE:</strong><br /><br />
      - Transport<br />
      - Entrance fee<br />
      - Tour guide<br /><br />
      <strong>PRICES:</strong><br /><br />
      - 1 person: $10<br />
      - 2 people: $70 per person<br />
      - 3 people: $60 per person<br />
    </p>
  );
  const wasiniDolphinTourDescription = (
    <p>
      <strong>PRICE:</strong><br />
      Non residents: $100<br />
      Residents: $70<br /><br />
      <strong>TOUR HIGHLIGHTS:</strong><br /><br />
      The clear blue waters of Kisite Island are a paradise for snorkelling, diving, and dolphin spotting. This will be accompanied by a tour of Wasini Island. Additionally, an optional tour of the Shimoni historical caves, where slaves were detained, shall be available for those interested in history.<br /><br />
      <strong>ACTIVITIES</strong><br /><br />
      - Snorkelling<br />
      - Dolphin Spotting<br />
      - Dhow Ride<br />
      - Marine Sightseeing<br />
      - Lunch (Swahili food)<br />
      - Wasini Island Village Walk<br /><br />
      <strong>WHAT TO TAKE WITH YOU:</strong><br /><br />
      Drinking water, picnic items and packed snacks, camera, hat, sunscreen, sunglasses, and swimming kits.
    </p>
  );
  

  return (
    <div>
      <Head>
        <title>Visit Kenya</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
        <meta name="description" content="Discover the world's most beautiful destinations with our travel app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-gradient-to-t from-blue-300 to-blue-50'>
        <Navbar />
      </div>
      <div className='my-20'>
        <div ref={heading.ref} className={`${heading.inView ? 'translate-y-[0vh] opacity-1' : 'translate-y-[10vh] opacity-0'} transition-all duration-1000 ease-out`}>
          <h4 className='text-xs lg:text-sm font-heading my-5 text-center w-full tracking-[10px] font-semibold'>Private Classic Safaris</h4>
          <h3 className='text-3xl lg:text-4xl my-5 tracking-wide w-full text-center capitalize font-extrabold'>Essential safari questions answered here! </h3>
        </div>
        <div id='tours' ref={cards.ref} className={`flex flex-wrap justify-center transition-all duration-[1500ms] ease-out ${cards.inView ? 'opacity-100' : 'opacity-0'}`}>
          <CardItem icon={<EmojiEmotionsIcon />} modalDesc={pakDesc} title='What Makes a Private Classic Private?' desc='The Private Classic is one of our Classic safaris made into a private trip for just you and your friends. You’ll travel on your own and at your own pace, with your own vehicles, drivers, Safari Director all to yourselves.' img={img1} />
          <CardItem icon={<SelfImprovementIcon />} modalDesc={pakDesc} title='Hundreds of Departures' desc='Choose the Kenka expeditions Classic Safari that most enchants you and pick the date that works best for your group. Then give us a call. If the date is available, it’s yours. If it isn’t, we’ll find a way to make it work for you, one way or another.' img={img2} />
          <CardItem icon={<LandscapeIcon />} modalDesc={pakDesc} title='A Private Safari for Less' desc='Converting a Classic Safari into a Private Classic for you and your group gives you many of the same benefits as a built-from-scratch Custom Safari, but for less. Just having the full attention of a Micato Safari Director is a tremendous value.' img={img3} />
          <CardItem icon={<LandscapeIcon />} modalDesc={pakDesc} title='What Size Group Is The Right Size?' desc='Any size at all. Invite your family, friends, business associates or reserve a Private Classic for simply you and a special someone. It’s entirely up to you. And if the size of your group grows or shrinks before you go, no worries… we’ll make it work.' img={img3} />
          <CardItem icon={<LandscapeIcon />} modalDesc={pakDesc} title='Will You Get Your Dates?  Of Course.' desc='We will do our utmost to honour your first choice of dates. And we deeply dislike saying no. If you request a date for a departure that’s already booked, we will open up a new departure on that date just for your group.' img={img3} />
        </div>
      </div>
      <div className='mt-40 relative'>
        <div ref={heading1.ref} className={`transition-all duration-[1000ms] ease-out ${heading1.inView ? 'translate-y-[0vh] opacity-100' : 'translate-y-[20vh] opacity-0'}`}>
          <h4 className='text-xs lg:text-sm font-heading my-10 text-center w-full tracking-[10px] font-semibold'>TOUR DESTINATIONS</h4>
          <h3 className='text-3xl lg:text-4xl my-10 tracking-wide w-full text-center capitalize font-extrabold'>Top packages to select</h3>
        </div>
        <div className="flex flex-wrap justify-center mt-[150px]">
          <div ref={bigCard.ref} className={`transition-all duration-1000 ${bigCard.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
            <BigCard />
          </div>
          <div id='guide' ref={accordions.ref} className={`flex flex-col transition-all duration-[2000ms] ease-in-out ${accordions.inView ? 'translate-y-[0vh] opacity-100' : 'translate-y-[20vh] opacity-0'}`}>
            <AccordionCard title={'HALF DAY MOMBASA CITY TOUR '} price={'$1875.00'} desc={mombasaCityTourDescription} img={mountains} />
            <AccordionCard title={'WASINI DOLPHIN TOUR'} price={'$3,000'} desc={wasiniDolphinTourDescription} img={beach} />
            
          </div>
          <ToTop />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Destinations;
