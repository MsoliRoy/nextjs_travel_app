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

  const aboutUsContent = (
    <div>
      <h1>Welcome to Kenka Expeditions</h1>
      <h2>Discover Kenya's Hidden Treasures with Us</h2>
      <p>
        At Kenka Expeditions, we believe that travel is not just about destinations; it's about the journey, the experiences, and the memories you create along the way. Based in the heart of Kenya, our mission is to offer you unparalleled access to the diverse landscapes, rich cultures, and vibrant wildlife that make this country so unique.
      </p>
      <h2>Who We Are</h2>
      <p>
        Founded by a team of passionate explorers and travel enthusiasts, Kenka Expeditions is your gateway to the wonders of Kenya. Our deep-rooted love for this land drives us to craft unforgettable journeys that showcase the very best of what Kenya has to offer. From the bustling streets of Nairobi to the serene savannas of the Maasai Mara, we curate experiences that cater to all kinds of travelers.
      </p>
      <h2>What We Offer</h2>
      <ul>
        <li>
          <strong>Personalized Tours:</strong> We understand that every traveler is unique. That's why we offer tailor-made itineraries that suit your interests, schedule, and budget. Whether you're seeking adventure, relaxation, or cultural immersion, we have something special for you.
        </li>
        <li>
          <strong>Expert Guides:</strong> Our team of experienced and knowledgeable guides are locals who are passionate about sharing their heritage. They provide insightful commentary, fascinating stories, and a deep understanding of the places you visit.
        </li>
        <li>
          <strong>Sustainable Travel:</strong> At Kenka Expeditions, we are committed to responsible tourism. We strive to minimize our environmental impact and support local communities through our tours. Travel with us and be a part of positive change.
        </li>
        <li>
          <strong>Safety and Comfort:</strong> Your safety and comfort are our top priorities. We ensure all our tours are conducted with the highest standards of safety and reliability. Our modern fleet of vehicles and carefully selected accommodations guarantee a seamless and enjoyable experience.
        </li>
      </ul>
      <h2>Why Choose Us</h2>
      <ul>
        <li>
          <strong>Authentic Experiences:</strong> We go beyond the usual tourist spots to bring you authentic, off-the-beaten-path experiences. Discover hidden gems and interact with locals in ways that enrich your travel experience.
        </li>
        <li>
          <strong>Passion and Expertise:</strong> Our team is made up of avid travelers who understand what makes a trip extraordinary. With years of experience and an unyielding passion for Kenya, we ensure your adventure is nothing short of amazing.
        </li>
        <li>
          <strong>Commitment to Excellence:</strong> From the moment you contact us until you return home, we are dedicated to providing exceptional service. Your satisfaction is our success, and we go the extra mile to exceed your expectations.
        </li>
      </ul>
      <h2>Join Us on an Unforgettable Journey</h2>
      <p>
        Kenya is a land of breathtaking beauty, captivating cultures, and incredible wildlife. With Kenka Expeditions, you'll not only see Kenya, but you'll also experience it in a way that stays with you forever. Whether you're planning your first trip or your tenth, we promise an adventure that will leave you with cherished memories and a longing to return.
      </p>
      <h2>Contact Us</h2>
      <p>
        Ready to embark on your Kenyan adventure? Get in touch with us today to start planning your dream trip. Explore our website for detailed itineraries, travel tips, and more. We can't wait to show you the magic of Kenya with Kenka Expeditions!
      </p>
    </div>
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

      <div className='mt-40 relative'>
        <div ref={heading1.ref} className={`transition-all duration-[1000ms] ease-out ${heading1.inView ? 'translate-y-[0vh] opacity-100' : 'translate-y-[20vh] opacity-0'}`}>
          <h4 className='text-xs lg:text-sm font-heading my-10 text-center w-full tracking-[10px] font-semibold'>About Us</h4>

        </div>
        <div className="flex flex-wrap justify-center mt-[150px]">
  
          <div id='guide' ref={accordions.ref} className={`flex flex-col transition-all duration-[2000ms] ease-in-out ${accordions.inView ? 'translate-y-[0vh] opacity-100' : 'translate-y-[20vh] opacity-0'}`}>
            <AccordionCard title={'Kenka Expeditions '} price={'............'} desc={aboutUsContent} img={mountains} />
           
            
          </div>
          <ToTop />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Destinations;
