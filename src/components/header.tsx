
"use client";
import { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-green-900 text-white shadow-md sticky top-0 z-20">
      <div className="max-w-screen-2xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Better
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center space-x-8">
          <div className="relative">
            {/* Buy Link with Dropdown */}
            <button
              onClick={toggleDropdown}
              className="font-medium hover:text-gray-300 focus:outline-none"
            >
              Buy
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-700 border border-gray-200 rounded-md shadow-lg z-10">
                <Link href="/apply-now" className="block px-4 py-2 hover:bg-gray-100">Apply now</Link>
                <Link href="/purchase-rates" className="block px-4 py-2 hover:bg-gray-100">Purchase rates</Link>
                <Link href="/affordability-calculator" className="block px-4 py-2 hover:bg-gray-100">Affordability calculator</Link>
                <Link href="/mortgage-calculator" className="block px-4 py-2 hover:bg-gray-100">Mortgage calculator</Link>
                <Link href="/rent-vs-buy-calculator" className="block px-4 py-2 hover:bg-gray-100">Rent vs buy calculator</Link>
                <Link href="/find-agent" className="block px-4 py-2 hover:bg-gray-100">Find an agent</Link>
                <Link href="/va-loans" className="block px-4 py-2 hover:bg-gray-100">VA loans</Link>
                <Link href="/learning-center" className="block px-4 py-2 hover:bg-gray-100">Learning center</Link>
              </div>
            )}
          </div>

          {/* Other Links */}
          <Link href="/refinance" className="font-medium hover:text-gray-300">Refinance</Link>
          <Link href="/heloc" className="font-medium hover:text-gray-300">HELOC</Link>
          <Link href="/rates" className="font-medium hover:text-gray-300">Rates</Link>
          <Link href="/better-plus" className="font-medium hover:text-gray-300">Better+</Link>
        </nav>

        {/* Right Side - Sign in & Phone */}
        <div className="flex items-center space-x-4">
          {/* Phone Icon */}
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-700 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone"
            >
              <path d="M22 16.92V20a2 2 0 0 1-2 2 19.8 19.8 0 0 1-8.66-3.74A19.8 19.8 0 0 1 3.74 10.66 19.8 19.8 0 0 1 0 2 2 2 0 0 1 2 0h3.08a2 2 0 0 1 2 1.72 12.47 12.47 0 0 0 .68 2.81 2 2 0 0 1-.45 2.11L5.6 8.6a16 16 0 0 0 5.81 5.81l1.94-1.94a2 2 0 0 1 2.11-.45 12.47 12.47 0 0 0 2.81.68 2 2 0 0 1 1.72 2z" />
            </svg>
          </button>
          <Link href="/sign-in" className="font-medium hover:text-gray-300">Sign in</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
