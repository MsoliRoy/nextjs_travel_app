import Rating from '@mui/material/Rating'
import Image from 'next/image'
import React from 'react'
import img from '../public/imgs/bigCardImg.svg'

type Props = {}

export const BigCard = (props: Props) => {
  const message = `This is the first line.
  This is the second line.`;
  return (
    <div className='p-6 pt-[100px] max-w-[500px] m-4 rounded rounded-tr-2xl rounded-bl-2xl relative bg-primary/70 h-fit w-fit'>
        <span className='absolute top-[-120px] left-[calc(50%_-_150px)]' > <Image src={img} height={200} width={300} /></span>
        <div className='flex items-center justify-between text-white font-extrabold'>
        <h2 className='text-2xl w-[50%] capitalize '>Visit the beautiful coastal areas</h2>
        <span className='text-3xl '>From $100</span>
        </div>
        <div className='flex flex-col'>
        <span className='flex items-center text-white font-bold my-4'>
        <Rating className='mr-2' name="full-rating" defaultValue={5} precision={0.5} readOnly />
          5.0
          </span>
        <p className='text-white tracking-wide '>
        Welcome to Kenya's coastal region, where paradise meets culture. Explore stunning beaches, vibrant markets, and rich history. Experience the beauty of land and sea in perfect harmony.
        </p>
        <button className='shadow-lg w-fit border-2 border-white px-6 py-2 mt-6 rounded-2xl bg-secondary hover:bg-secondaryLighter text-white font-medium'><a href="#form">Book Now</a> </button>
        </div>
    </div>
  )
}