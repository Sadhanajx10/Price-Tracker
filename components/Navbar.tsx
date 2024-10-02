import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const navIcons = [
  {
    src: '/assets/icons/search.svg', alt: 'search'
  },
  {
    src: '/assets/icons/black-heart.svg', alt: 'heart'
  },
  {
    src: '/assets/icons/user.svg', alt: 'user'
  },
];

const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='nav flex justify-between items-center p-4'> {/* Added padding and flex for better layout */}
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          />
          <p className='nav-logo text-lg font-bold'> {/* Adjusted font size for prominence */}
            <span className='text-primary'>Price</span><span className='text-primary-green'>-Tracker</span>
          </p>
        </Link>
        <div className='flex items-center gap-5'>
          {navIcons.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className='object-contain cursor-pointer hover:opacity-80' // Added hover effect for better UX
            />
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
