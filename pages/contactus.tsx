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
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

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
  const facebookUrl = 'https://www.facebook.com/your-page';
  const twitterUrl = 'https://twitter.com/your-page';
  const whatsappUrl = 'https://wa.me/011464906';
  const instagramUrl = 'https://www.instagram.com/your-page';

    // Function to handle the click event and open the URL
    const handleClick = (url: string) => {
      window.open(url, '_blank');
    };

  const contactUsContent = (
    <div>
      <h1>Contact Us</h1>
      <p>
        We're here to help you plan the adventure of a lifetime. Whether you have questions about our tours, need assistance with booking, or just want to learn more about Kenya, don't hesitate to get in touch with us.
      </p>
      <h2>Our Office</h2>
      <p>
        Kenka Expeditions<br />
        Nairobi, Kenya<br />
        <strong>Address:</strong> 123 Safari Lane, Nairobi, Kenya<br />
        <strong>Phone:</strong> +254 011464906<br />
        <strong>Email:</strong> info@kenkaexpeditions.com
      </p>
      <h2>Get in Touch</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label><br />
          <input type="tel" id="phone" name="phone" />
        </div>
        <div>
          <label htmlFor="message">Message:</label><br />
          <textarea id="message" name="message"  required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <h2>Follow Us</h2>
      <p>
        Stay connected with us on social media for the latest updates, travel tips, and special offers.
      </p>
    
      <div className='flex flex-1 items-center justify-end'>
            <FacebookIcon className='text-white p-1 cursor-pointer hover:bg-primary/80 bg-primary rounded-full mx-1' 
             fontSize='medium'
             onClick={() => handleClick(facebookUrl)}
             />
            <TwitterIcon className='text-white p-1 cursor-pointer hover:bg-primary/80 bg-primary rounded-full mx-1' 
             fontSize='medium'
             onClick={() => handleClick(twitterUrl)}
             />
            <WhatsAppIcon className='text-white p-1 cursor-pointer hover:bg-primary/80 bg-primary rounded-full mx-1' 
             fontSize='medium'
             onClick={() => handleClick(whatsappUrl)}
             />
            <InstagramIcon className='text-white p-1 cursor-pointer hover:bg-primary/80 bg-primary rounded-full mx-1' 
            fontSize='medium'
            onClick={() => handleClick(instagramUrl)}
            />

        </div>
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
          <h4 className='text-xs lg:text-sm font-heading my-10 text-center w-full tracking-[10px] font-semibold'>Contact Us</h4>

        </div>
        <div className="flex flex-wrap justify-center mt-[150px]">
  
          <div id='guide' ref={accordions.ref} className={`flex flex-col transition-all duration-[2000ms] ease-in-out ${accordions.inView ? 'translate-y-[0vh] opacity-100' : 'translate-y-[20vh] opacity-0'}`}>
            <AccordionCard title={'Kenka Expeditions '} price={'............'} desc={contactUsContent} img={mountains} />
           
            
          </div>
          <ToTop />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Destinations;
