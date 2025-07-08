'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full bg-[#545454] py-4 shadow-md h-[80px !important]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/img_image_16_1.png"
            alt="Secure House Logo"
            width={180}
            height={50}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>
        {/* Navigation - hidden */}
        <nav className="flex items-center gap-10" style={{ display: 'none' }}>
          <Link href="/products" className="text-white font-serif text-base md:text-lg font-semibold uppercase tracking-wider hover:text-blue-300 transition">
            Products
          </Link>
          <Link href="/projects" className="text-white font-serif text-base md:text-lg font-semibold uppercase tracking-wider hover:text-blue-300 transition">
            Our Projects
          </Link>
          <Link href="/about" className="text-white font-serif text-base md:text-lg font-semibold uppercase tracking-wider hover:text-blue-300 transition">
            About Us
          </Link>
        </nav>
        {/* New CTAs - Desktop only */}
        <div className="hidden md:flex items-center gap-4">
          {/* Call Now Button */}
          <a
            href="tel:02078594207"
            className="flex items-center gap-2 bg-white text-[#4C55C8] font-bold px-4 py-2 rounded-lg shadow hover:bg-blue-50 transition"
            style={{ textDecoration: 'none' }}
          >
            {/* Inline SVG for call icon with correct color */}
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" fill="#4C55C8"/></svg>
            <span style={{ fontWeight: 700 }}>Call Now</span>
          </a>
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/442078594207"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white font-bold px-4 py-2 rounded-lg shadow hover:bg-[#1ebe57] transition"
            style={{ textDecoration: 'none' }}
          >
            {/* WhatsApp SVG icon with green circle and white logo */}
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#25D366"/><path d="M23.472 19.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.244 1.262.389 1.694.497.712.181 1.36.156 1.872.095.571-.068 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#fff"/></svg>
            <span style={{ fontWeight: 700 }}>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
