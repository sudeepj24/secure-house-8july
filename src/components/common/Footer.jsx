'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-[#434BB1] text-white pt-12 pb-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
        {/* Logo and Social Media */}
        <div className="flex flex-col items-center md:items-start gap-y-6 md:w-1/4">
          <Image
            src="/images/img_footerlogo.png"
            alt="Footer Logo"
            width={334}
            height={144}
            className="h-16 w-auto object-contain"
          />
          <div className="flex flex-row gap-x-4 mt-2">
            <Image src="/images/img_fefacebook.svg" alt="Facebook" width={32} height={32} />
            <Image src="/images/img_riinstagramfill.svg" alt="Instagram" width={32} height={32} />
            <Image src="/images/img_mdiyoutube.svg" alt="YouTube" width={32} height={32} />
            <Image src="/images/img_mdipinterest.svg" alt="Pinterest" width={32} height={32} />
          </div>
        </div>
        {/* Contact Information */}
        <div className="flex flex-col gap-y-4 md:w-1/4 items-center md:items-start">
          <h3 className="font-serif text-lg font-semibold mb-2">Get In Touch</h3>
          <div className="flex items-start gap-x-3">
            <Image src="/images/img_mingcutelocationline_gray_200_03.svg" alt="Location" width={24} height={24} />
            <div className="text-sm leading-tight">
              Unit 20 Ribocon<br />Way<br />LU4 9UR
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <Image src="/images/img_materialsymbolscalloutline_gray_300_04.svg" alt="Phone" width={24} height={24} />
            <span className="text-sm">02078594207</span>
          </div>
          <div className="flex items-center gap-x-3">
            <Image src="/images/img_materialsymbolsmailrounded_gray_300_04.svg" alt="Email" width={24} height={24} />
            <span className="text-sm">info@secure-house.co.uk</span>
          </div>
        </div>
        {/* Links Column 1 */}
        <div className="flex flex-col gap-y-2 md:w-1/6 items-center md:items-start mt-6 md:mt-0">
          <Link href="/guarantee" className="font-serif text-base hover:underline">Guarantee</Link>
          <Link href="/trade" className="font-serif text-base hover:underline">Trade</Link>
        </div>
        {/* Links Column 2 */}
        <div className="flex flex-col gap-y-2 md:w-1/6 items-center md:items-start mt-6 md:mt-0">
          <Link href="/about" className="font-serif text-base hover:underline">About Us</Link>
          <Link href="/terms" className="font-serif text-base hover:underline">Terms & Conditions</Link>
        </div>
      </div>
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} Secure House. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;