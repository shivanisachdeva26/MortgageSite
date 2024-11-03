// app/start/page.tsx
import React from 'react';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';

const StartPage = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen text-center px-2 ">
      <div className="flex items-center w-full mx-auto justify-between " >
        <h1 className="text-2xl font-bold text-green-700 p-3 text-left">Better Mortgage</h1>
        <div className="flex items-center">
          <FaPhoneAlt className="mr-2  text-green-600 w-50 h-40 justify-center align-middle" />
          <span className='text-lg font-bold justify-center text-center'>Need help? Call (415) 523 8837</span>
        </div>
      </div>
      <div className='w-full '>
        <div className='w-full h-1 bg-slate-300 top-8 justify-center relative'> </div>
        <Image
          src="https://media.better.com/components/preapproval/industry-parity-v2/betty1.jpg" 
          alt="Betsy"
          className="w-16 h-16 rounded-full mx-auto top-0 justify-center mb-10 z-20 relative"
          width={1200} height={800}
        />

        </div>
     
      
      <div className="mt-5">
        
        <h2 className="text-xl font-bold">Hi, I'm Betsy!</h2>
        <p className="text-lg mt-2 font-semibold">What can I help you with?</p>
      </div>

      <div className="mt-6 space-y-4">
        <Link href="/buying-home" className="block hover:bg-green-600 w-full max-w-sm mx-auto border-2 border-green-600 rounded-lg py-3 px-6 text-lg text-green-700">
          <span className="mr-2 hover:bg-green-600">🏠</span> Buying a home
        </Link>
        <Link href="/refinance-mortgage" className="block w-full max-w-sm mx-auto border-2 border-green-600 rounded-lg py-3 px-6 text-lg text-green-700 hover:bg-green-600">
          <span className="mr-2">💰</span> Refinance my mortgage
        </Link>
        <Link href="/cash-out-home" className="block w-full max-w-sm mx-auto border-2 border-green-600 rounded-lg py-3 px-6 text-lg text-green-700 hover:bg-green-600">
          <span className="mr-2">💵</span> Get cash from my home
        </Link>
      </div>
      <div className='flex flex-auto justify-between '>
        <div className='w-28 max-h-30 m-14 mx-32'>
          <h1 className='font-bold text-4xl '>$100B</h1>
          <p>home loans funded entirely online</p>
        </div>
        <div className='w-28 max-h-30 m-14 mx-32'>
          <h1 className='font-bold text-4xl '>400K</h1>
          <p>customers who chose a Better Mortage</p>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
