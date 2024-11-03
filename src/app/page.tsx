import React from 'react';
import HeroSection from '@/components/herosection'; // Assuming you have a HeroSection component in components directory

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen antialiased">
      {/* No need to render Header here, as it's included in the RootLayout */}
      <HeroSection />
      
    </main>
  );
}
export default HomePage;