"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function ImageSwitcher() {
  const [imageUrl, setImageUrl] = useState('https://media.better.com/better-com/homepage/social-proof/still-quote-Arian.webp'); 

  const handleImageChange = (url: string) => {
    setImageUrl(url);
  };

  return (
    <div className="image-switcher-container">
      {/* Display the image */}
      <Image src={imageUrl} alt="Switchable" className="image-switcher-image" width={1200} height={800}/>

      {/* Buttons to switch images */}
      <div className="image-switcher-button-container ">
        <button onClick={() => handleImageChange('https://media.better.com/better-com/homepage/social-proof/still-quote-Arian.webp')} className="image-switcher-button">
          Arian
        </button>
        <button onClick={() => handleImageChange('https://media.better.com/better-com/homepage/social-proof/still-quote-Amanda.webp')} className="image-switcher-button">
          Amanda
        </button>
        <button onClick={() => handleImageChange('https://media.better.com/better-com/homepage/social-proof/still-quote-Paul.webp')} className="image-switcher-button">
          Paul
        </button>
      </div>
    </div>
  );
}
