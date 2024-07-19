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

  const safariDescription = (
    <p>
      <strong>From</strong><br />
      $1875.00<br /><br />
      <strong>Duration</strong><br />
      7 days<br /><br />
      <strong>LOW SEASON $1875, HIGH SEASON $2075</strong><br /><br />
      A 6 nights overnights getaway holiday lodge safari is an excellent way to experience one of Africa’s most renowned wildlife reserves within a week time period. The Masai Mara National Reserve, located in southwestern Kenya, is famous for its vast savannahs, abundant wildlife, and the annual wildebeest migration, making it a must-visit destination for safari enthusiasts. Lake Nakuru, Hells gate and Amboseli national parks supplementing the while experience with an unforgettable wildlife interaction along with nice places to stay.<br /><br />
      <strong>Included/Exclude</strong><br /><br />
      Transport to and fro in a tour van with a hatch roof<br />
      Pick up from the airport<br />
      Accommodation as per the itinerary<br />
      All meals (breakfast, lunch, and dinner)<br />
      Entrance fees to all the parks<br />
      Tour guiding services by professional guide/driver<br />
      Game drives<br />
      Statutory taxes<br />
      Personal insurance<br />
      Balloon safaris<br />
      Alcoholic drinks and soft drinks<br />
      Masai village fee<br />
      Tips<br />
      Personal items<br /><br />
      <strong>Tour Plan</strong><br /><br />
      <strong>DAY 1: NAIROBI – MASAI MARA GAME RESERVE.</strong><br />
      Early in the morning meet our Holiday lodge safari driver at your agreed pick-up point and be transferred to our office to start Kenya safari, be introduced to your Kenya safari driver guide, and depart for Masai Mara game reserve with a stopover at The Great Rift Valley viewpoint to witness the escarpment wall and Narok Town for an early lunch. Arrive at Masai Mara late afternoon for check-in, little siesta, and an evening African wildlife adventure safari inside Masai Mara game reserve. Transverse the Kenya game reserve in search of the wild animals till late evening, see the sunset and drive back to the lodge for dinner, bonfire, and overnight.<br /><br />
      <strong>DAY 2: MASAI MARA GAME RESERVE FULL DAY</strong><br />
      Description of activities and itinerary for the full day in Masai Mara.<br /><br />
      <strong>DAY 3: MAASAI MARA GAME RESERVE – NAKURU TOWN.</strong><br />
      Description of activities and itinerary from Masai Mara to Nakuru Town.<br /><br />
      <strong>DAY 4: LAKE NAKURU NATIONAL PARK - LAKE NAIVASHA</strong><br />
      Description of activities and itinerary from Lake Nakuru to Lake Naivasha.<br /><br />
      <strong>DAY 5: LAKE NAIVASHA – AMBOSELI NATIONAL PARK.</strong><br />
      Description of activities and itinerary from Lake Naivasha to Amboseli National Park.<br /><br />
      <strong>DAY 6: AMBOSELI NATIONAL PARK FULL DAY</strong><br />
      Description of activities and itinerary for the full day in Amboseli National Park.<br /><br />
      <strong>DAY 7: AMBOSELI NATIONAL PARK – NAIROBI</strong><br />
      Description of activities and itinerary from Amboseli National Park back to Nairobi.
    </p>
  );
const safariDescriptionNew = (
  <p>
    <strong>From</strong><br />
    $3,000<br /><br />
    <strong>Duration</strong><br />
    5 days<br /><br />
    A night's overnights getaway holiday lodge safari is an excellent way to experience one of Africa’s most renowned wildlife parks. Amboseli National Park is in southern Kenya. It’s known for its large elephant herds and views of immense Mount Kilimanjaro, across the border in Tanzania. Observation Hill offers panoramas of the peak and the park’s plains and swamps. Varied wildlife includes giraffes, zebras, cheetahs, and hundreds of bird species. The western section is dominated by vast Lake Amboseli, which is dry outside the rainy season. Taita Hill Wildlife Sanctuary and Tsavo East National Parks supplement the whole experience with an unforgettable wildlife interaction along with nice places to stay.<br /><br />
    <strong>Included</strong><br /><br />
    - Transport to and fro in a tour van with a hatch roof<br />
    - Pick up from the airport<br />
    - Accommodation as per the itinerary<br />
    - All meals (breakfast, lunch, and dinner)<br />
    - Entrance fees to all the parks<br />
    - Tour guiding services by professional guide/driver<br />
    - Game drives<br /><br />
    <strong>Excluded</strong><br /><br />
    - Statutory taxes<br />
    - Personal insurance<br />
    - Balloon safaris<br />
    - Alcoholic drinks and soft drinks<br />
    - Masai village fee<br />
    - Tips<br />
    - Personal items<br /><br />
    <strong>Tour Plan</strong><br /><br />
    <strong>DAY 1: NAIROBI – Amboseli National Park</strong><br />
    Early in the morning, meet our holiday lodge safari driver at your agreed pick-up point and be transferred to our office to start the safari. Be introduced to your safari driver guide, and depart for Amboseli National Park with a stopover at Emali town for breakfast. Arrive at Amboseli for check-in, a little siesta, and an evening game drive inside Amboseli National Park. Transverse the park in search of the wild animals till late evening, see the sunset and drive back to the lodge for dinner, bonfire, and overnight.<br /><br />
    <strong>DAY 2: Amboseli National Park FULL DAY</strong><br /><br />
    <strong>DAY 3: Amboseli National Park – Taita Hills Wildlife Sanctuary</strong><br /><br />
    <strong>DAY 4: Taita Hills Wildlife Sanctuary - Tsavo East National Park</strong><br /><br />
    <strong>DAY 5: Tsavo East National Park – NAIROBI</strong>
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
            <AccordionCard title={'07 DAYS BEST OF KENYA HOLIDAY LODGE SAFARI – MASAI MARA/LAKE NAKURU/NAIVASHA/AMBOSELI.'} price={'$1875.00'} desc={safariDescription} img={mountains} />
            <AccordionCard title={'05 DAYS BEST OF KENYA HOLIDAY LODGE SAFARI – Amboseli/Taita hill conservancy/Tsavo East National Park'} price={'$3,000'} desc={safariDescriptionNew} img={beach} />
            
          </div>
          <ToTop />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Destinations;
