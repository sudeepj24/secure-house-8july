'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import EditText from '../components/ui/EditText';
import Dropdown from '../components/ui/Dropdown';
import PagerIndicator from '../components/ui/PagerIndicator';
const HomePage: React.FC = () => {
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState<number>(0);
  const [currentProductSlide, setCurrentProductSlide] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    address: ''
  });
  const interestOptions: string[] = [
    'Bespoke Doors',
    'Windows', 
    'Garage Door',
    'Security Shutters',
    'Full Security System',
    'Consultation'
  ];
  const formRef = useRef<HTMLFormElement | null>(null);
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };
  const handleBookConsultation = () => {
    if (formRef.current) {
      const isMobile = window.innerWidth < 768;
      const yOffset = isMobile ? -270 : -150;
      const y = formRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  const handleTalkToExpert = () => {
    if (formRef.current) {
      const isMobile = window.innerWidth < 768;
      const yOffset = isMobile ? -270 : -150;
      const y = formRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  const handleEnquireNow = (productType: string) => {
    if (formRef.current) {
      const isMobile = window.innerWidth < 768;
      const yOffset = isMobile ? -270 : -150;
      const y = formRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  const handleGetQuote = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e) e.preventDefault();
    if (formRef.current) {
      const isMobile = window.innerWidth < 768;
      const yOffset = isMobile ? -270 : -150;
      const y = formRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  const handleSeeOurProducts = () => {
    if (formRef.current) {
      const isMobile = window.innerWidth < 768;
      const yOffset = isMobile ? -270 : -150;
      const y = formRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <div className="min-h-screen bg-global-6 overflow-x-hidden">
      <Header />
      {/* Fixed Book a Site Visit CTA - Desktop only */}
{/*       <button
        onClick={handleBookConsultation}
        style={{
          position: 'fixed',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          zIndex: 1000,
          width: '48px',
          height: '180px',
          background: '#fff',
          color: '#222',
          borderTopLeftRadius: '16px',
          borderBottomLeftRadius: '16px',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          boxShadow: 'none',
          border: 'none',
          cursor: 'pointer',
          outline: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
        }}
        className="font-roboto-serif hover:bg-global-1 focus:outline-none hidden md:flex"
      >
        <span style={{
          transform: 'rotate(-90deg)',
          display: 'block',
          fontWeight: 600,
          fontSize: '16px',
          letterSpacing: '0.02em',
          whiteSpace: 'nowrap',
        }}>
          Book a Site Visit
        </span>
      </button> */}
      {/* Mobile Fixed Bottom Bar */}
      <div
        className="fixed bottom-6 md:bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-3 z-50 md:hidden rounded-t-2xl"
        style={{ height: 'calc(var(--vh, 1vh) * 12)', paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 0.75rem)' }}
      >
        <div className="flex justify-between items-center gap-2">
          <a
            href="tel:02078594207"
            className="flex-1 flex items-center justify-center gap-2 bg-[#4C55C8] text-white font-bold py-3 px-4 rounded-lg text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" fill="white"/></svg>
            Call 
          </a>
          <a
            href="https://wa.me/442078594207"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-4 rounded-lg text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#25D366"/><path d="M23.472 19.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.244 1.262.389 1.694.497.712.181 1.36.156 1.872.095.571-.068 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#fff"/></svg>
            WhatsApp
          </a>
          <button
            onClick={handleBookConsultation}
            className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white font-bold py-3 px-4 rounded-lg text-sm"
          >
            Book Visit
          </button>
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative bg-global-5 flex flex-col justify-center items-center overflow-hidden" style={{height: 'calc(100vh - 80px)'}}>
        <div className="w-full flex flex-col justify-center items-center px-4 md:px-8 h-full">
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
            <h1 className="text-global-12 font-roboto-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-tight md:leading-[71px] text-center uppercase mb-8 md:mb-12">
              10 Years of - Mastering Seamless Service
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-y-2 gap-x-4 mb-6 md:mb-8">
              <span className="text-slider-2 font-roboto-serif text-lg md:text-2xl font-medium leading-7 text-center md:order-2">
                4.9/5 on Google • 500+ Reviews
              </span>
              <Image
                src="/images/img_image_197.png"
                alt="Hero Image"
                width={60}
                height={60}
                className="object-contain h-[28px] md:h-[48px] lg:h-[60px] w-auto md:order-1"
              />
            </div>
            <div className="flex justify-center mb-10 md:mb-16">
              <Button
                variant="primary"
                size="lg"
                className="px-8 py-4 rounded-xl"
                onClick={handleBookConsultation}
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Premium Security Solutions Section */}
      <section className="w-full py-16 px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center gap-y-8 gap-x-8 max-w-7xl mx-auto">
          <div className="flex-1 order-2 md:order-1">
            <Image
              src="/images/img_image_204.png"
              alt="Premium Security Door"
              width={450}
              height={580}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 order-1 md:order-2 flex flex-col gap-y-6">
            <h2 className="text-global-2 font-roboto-serif text-3xl md:text-5xl font-medium leading-8">
              Premium Security Solutions
            </h2>
            <p className="text-global-1 font-roboto-serif text-lg font-normal leading-6">
              Our high-security doors combine cutting-edge technology with superior craftsmanship to provide unparalleled protection for your home or business. Each door is engineered to meet the highest security standards while maintaining aesthetic appeal.
            </p>
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-row items-center gap-x-3">
                <Image
                  src="/images/img_carboncheckmarkfilled.svg"
                  alt="Check"
                  width={20}
                  height={20}
                />
                <span className="text-global-1 font-roboto-serif text-lg font-normal leading-6">
                  Improve your security
                </span>
              </div>
              <div className="flex flex-row items-center gap-x-3">
                <Image
                  src="/images/img_carboncheckmarkfilled.svg"
                  alt="Check"
                  width={20}
                  height={20}
                />
                <span className="text-global-1 font-roboto-serif text-lg font-normal leading-6">
                  20 Years Industry Expertise
                </span>
              </div>
              <div className="flex flex-row items-center gap-x-3">
                <Image
                  src="/images/img_carboncheckmarkfilled.svg"
                  alt="Check"
                  width={20}
                  height={20}
                />
                <span className="text-global-1 font-roboto-serif text-lg font-normal leading-6">
                  Motorised locking option
                </span>
              </div>
              <div className="flex flex-row items-center gap-x-3">
                <Image
                  src="/images/img_carboncheckmarkfilled.svg"
                  alt="Check"
                  width={20}
                  height={20}
                />
                <span className="text-global-1 font-roboto-serif text-lg font-normal leading-6">
                  Bullet proof doors available
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-x-4 mt-6">
              <Button
                variant="primary"
                size="md"
                className="px-6 py-3 rounded-lg uppercase"
                onClick={handleTalkToExpert}
              >
                Talk to an expert
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Our Product Range Section */}
      <section className="bg-global-1 py-20 relative">
        <div className="px-4 md:px-8">
          <h2 className="text-global-9 font-roboto-serif text-[30px] md:text-5xl font-medium leading-[59px] text-center mb-8 md:mb-16">
            Our Product Range
          </h2>
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-4 gap-x-6 max-w-7xl mx-auto">
            {/* Premium Steel Security Doors */}
            <div className="bg-global-9 rounded-3xl p-6 flex flex-col items-center h-[420px]">
              <div className="relative mb-4 w-[280px] h-[200px] rounded-3xl overflow-hidden">
                <Image
                  src="/images/img_image_11.png"
                  alt="Premium Steel Security Doors"
                  width={280}
                  height={200}
                  className="rounded-3xl object-cover w-full h-full"
                />
                <Image
                  src="/images/img_group_10.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                  className="absolute bottom-3 right-3"
                />
              </div>
              <h3 className="text-global-1 font-roboto-serif text-xl font-medium leading-6 text-center mb-3 h-12 flex items-center">
                Premium Steel Security Doors
              </h3>
              <p className="text-global-1 font-roboto-serif text-lg font-normal leading-6 text-center mb-4 flex-1">
                Ultimate home protection with style
              </p>
              <Button
                variant="primary"
                size="sm"
                className="px-4 py-2 rounded-lg text-sm mt-auto"
                onClick={() => handleEnquireNow('Premium Steel Security Doors')}
              >
                Enquire Now
              </Button>
            </div>
            {/* Bullet-Proof Security Doors */}
            <div className="bg-global-9 rounded-3xl p-6 flex flex-col items-center h-[420px]">
              <div className="relative mb-4 w-[280px] h-[200px] rounded-3xl bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: 'url(/images/img_image_204.png)' }}
              >
                <Image
                  src="/images/img_group_11.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                  className="absolute bottom-3 right-3"
                />
              </div>
              <h3 className="text-global-1 font-roboto-serif text-xl font-medium leading-6 text-center mb-3 h-12 flex items-center">
                Bullet-Proof Security Doors
              </h3>
              <p className="text-global-1 font-roboto-serif text-lg font-normal leading-6 text-center mb-4 flex-1">
                Unmatched protection for your property
              </p>
              <Button
                variant="primary"
                size="sm"
                className="px-4 py-2 rounded-lg text-sm mt-auto"
                onClick={() => handleEnquireNow('Bullet-Proof Security Doors')}
              >
                Enquire Now
              </Button>
            </div>
            {/* Fire-Rated Security Doors */}
            <div className="bg-global-9 rounded-3xl p-6 flex flex-col items-center h-[420px]">
              <div className="relative mb-4 w-[280px] h-[200px] rounded-3xl bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: 'url(/images/img_image_13.png)' }}
              >
                <Image
                  src="/images/img_group_12.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                  className="absolute bottom-3 right-3"
                />
              </div>
              <h3 className="text-global-1 font-roboto-serif text-xl font-medium leading-6 text-center mb-3 h-12 flex items-center">
                Fire-Rated Security Doors
              </h3>
              <p className="text-global-1 font-roboto-serif text-lg font-normal leading-6 text-center mb-4 flex-1">
                Certified fire and security protection
              </p>
              <Button
                variant="primary"
                size="sm"
                className="px-4 py-2 rounded-lg text-sm mt-auto"
                onClick={() => handleEnquireNow('Fire-Rated Security Doors')}
              >
                Enquire Now
              </Button>
            </div>
            {/* Soundproof Security Doors */}
            <div className="bg-global-9 rounded-3xl p-6 flex flex-col items-center h-[420px]">
              <div className="relative mb-4 w-[280px] h-[200px] rounded-3xl overflow-hidden">
                <Image
                  src="/images/img_image_14.png"
                  alt="Soundproof Security Doors"
                  width={280}
                  height={200}
                  className="rounded-3xl object-cover w-full h-full"
                />
                <Image
                  src="/images/img_group_13.svg"
                  alt="Icon"
                  width={24}
                  height={24}
                  className="absolute bottom-3 right-3"
                />
              </div>
              <h3 className="text-global-1 font-roboto-serif text-xl font-medium leading-6 text-center mb-3 h-12 flex items-center">
                Soundproof Security Doors
              </h3>
              <p className="text-global-1 font-roboto-serif text-lg font-normal leading-6 text-center mb-4 flex-1">
                Peace and quiet with maximum security
              </p>
              <Button
                variant="primary"
                size="sm"
                className="px-4 py-2 rounded-lg text-sm mt-auto"
                onClick={() => handleEnquireNow('Soundproof Security Doors')}
              >
                Enquire Now
              </Button>
            </div>
          </div>
          
          {/* Mobile Slider */}
          <div className="md:hidden max-w-sm mx-auto">
            <div className="relative overflow-hidden">
              <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentProductSlide * 100}%)` }}>
                {/* Premium Steel Security Doors */}
                <div className="w-full flex-shrink-0">
                  <div className="bg-global-9 rounded-3xl p-6 flex flex-col items-center">
                    <div className="relative mb-4 w-full h-[200px] rounded-3xl overflow-hidden">
                      <Image
                        src="/images/img_image_11.png"
                        alt="Premium Steel Security Doors"
                        width={280}
                        height={200}
                        className="rounded-3xl object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-global-1 font-roboto-serif text-xl font-medium leading-6 text-center mb-3">
                      Premium Steel Security Doors
                    </h3>
                    <p className="text-global-1 font-roboto-serif text-[18px] font-normal leading-6 text-center mb-4">
                      Ultimate home protection with style
                    </p>
                    <Button
                      variant="primary"
                      size="sm"
                      className="px-4 py-2 rounded-lg text-sm"
                      onClick={() => handleEnquireNow('Premium Steel Security Doors')}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
                
                {/* Bullet-Proof Security Doors */}
                <div className="w-full flex-shrink-0">
                  <div className="bg-global-9 rounded-3xl p-6 flex flex-col items-center">
                    <div className="relative mb-4 w-full h-[200px] rounded-3xl bg-cover bg-center overflow-hidden"
                      style={{ backgroundImage: 'url(/images/img_image_204.png)' }}
                    >
                    </div>
                    <h3 className="text-global-1 font-roboto-serif text-xl font-medium leading-6 text-center mb-3">
                      Bullet-Proof Security Doors
                    </h3>
                    <p className="text-global-1 font-roboto-serif text-[18px] font-normal leading-6 text-center mb-4">
                      Unmatched protection for your property
                    </p>
                    <Button
                      variant="primary"
                      size="sm"
                      className="px-4 py-2 rounded-lg text-sm"
                      onClick={() => handleEnquireNow('Bullet-Proof Security Doors')}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
                
                {/* Fire-Rated Security Doors */}
                <div className="w-full flex-shrink-0">
                  <div className="bg-global-9 rounded-3xl p-6 flex flex-col items-center">
                    <div className="relative mb-4 w-full h-[200px] rounded-3xl bg-cover bg-center overflow-hidden"
                      style={{ backgroundImage: 'url(/images/img_image_13.png)' }}
                    >
                    </div>
                    <h3 className="text-global-1 font-roboto-serif text-xl font-medium leading-6 text-center mb-3">
                      Fire-Rated Security Doors
                    </h3>
                    <p className="text-global-1 font-roboto-serif text-[18px] font-normal leading-6 text-center mb-4">
                      Certified fire and security protection
                    </p>
                    <Button
                      variant="primary"
                      size="sm"
                      className="px-4 py-2 rounded-lg text-sm"
                      onClick={() => handleEnquireNow('Fire-Rated Security Doors')}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
                
                {/* Soundproof Security Doors */}
                <div className="w-full flex-shrink-0">
                  <div className="bg-global-9 rounded-3xl p-6 flex flex-col items-center">
                    <div className="relative mb-4 w-full h-[200px] rounded-3xl overflow-hidden">
                      <Image
                        src="/images/img_image_14.png"
                        alt="Soundproof Security Doors"
                        width={280}
                        height={200}
                        className="rounded-3xl object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-global-1 font-roboto-serif text-xl font-medium leading-6 text-center mb-3">
                      Soundproof Security Doors
                    </h3>
                    <p className="text-global-1 font-roboto-serif text-[18px] font-normal leading-6 text-center mb-4">
                      Peace and quiet with maximum security
                    </p>
                    <Button
                      variant="primary"
                      size="sm"
                      className="px-4 py-2 rounded-lg text-sm"
                      onClick={() => handleEnquireNow('Soundproof Security Doors')}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentProductSlide(Math.max(0, currentProductSlide - 1))}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
                disabled={currentProductSlide === 0}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentProductSlide(Math.min(3, currentProductSlide + 1))}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
                disabled={currentProductSlide === 3}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Slider Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProductSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentProductSlide === index ? 'bg-global-2' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
      {/* Why Choose Our Security Doors Section */}
      <section className="px-8 py-20">
        <h2 className="text-global-2 font-roboto-serif text-[30px] md:text-5xl font-semibold leading-[59px] text-center mb-16">
          Why Choose Our Security Doors?
        </h2>
        
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Bespoke Manufacturer */}
          <div className="bg-global-1 rounded-3xl p-6 mb-8 max-w-7xl mx-auto h-[350px] flex flex-row items-center gap-x-8">
            <Image
              src="/images/img_image.png"
              alt="Bespoke Manufacturing"
              width={400}
              height={300}
              className="rounded-3xl object-cover"
              style={{ flexShrink: 0 }}
            />
            <div className="flex flex-col justify-center flex-1">
              <h3 className="text-global-5 font-roboto-serif text-xl font-medium leading-6 text-left mb-4">
                Bespoke Manufacturer
              </h3>
              <p className="text-global-5 font-roboto-serif text-lg font-normal leading-6 text-left">
                We manufacture all our products in-house to ensure the highest standards of quality at every stage.
              </p>
            </div>
          </div>
          {/* Security by Design */}
          <div className="p-6 mb-8 max-w-7xl mx-auto h-[350px] flex flex-row-reverse items-center gap-x-8">
            <Image
              src="/images/img_image_385x515.png"
              alt="Security Design"
              width={400}
              height={300}
              className="rounded-3xl object-cover"
              style={{ flexShrink: 0 }}
            />
            <div className="flex flex-col justify-center items-end flex-1">
              <h3 className="text-global-1 font-roboto-serif text-xl font-medium leading-6 text-right mb-4">
                Security by Design
              </h3>
              <p className="text-global-1 font-roboto-serif text-lg font-normal leading-6 text-right mb-6">
                We deliver security solutions you can trust.
              </p>
              <Button
                variant="primary"
                size="md"
                className="px-6 py-3 rounded-lg"
                onClick={handleBookConsultation}
              >
                Book a Consultation Call
              </Button>
            </div>
          </div>
          {/* Attention to Details */}
          <div className="bg-global-1 rounded-3xl p-6 max-w-7xl mx-auto h-[350px]">
            <div className="flex flex-row items-center gap-x-8 h-full">
              <Image
                src="/images/img_image_1.png"
                alt="Attention to Details"
                width={400}
                height={300}
                className="rounded-3xl object-cover"
                style={{ flexShrink: 0 }}
              />
              <div className="flex flex-col justify-center flex-1">
                <h3 className="text-global-5 font-roboto-serif text-xl font-medium leading-6 text-left mb-4">
                  Attention to Details
                </h3>
                <p className="text-global-5 font-roboto-serif text-lg font-normal leading-6 text-left">
                  With elegant finishes and flawless functionality, our products are designed to make an impression and deliver peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {/* Bespoke Manufacturer - Mobile */}
          <div className="bg-global-1 rounded-3xl p-6">
            <Image
              src="/images/img_image.png"
              alt="Bespoke Manufacturing"
              width={400}
              height={200}
              className="rounded-3xl object-cover w-full mb-4"
            />
            <h3 className="text-global-5 font-roboto-serif text-xl font-medium leading-6 mb-4">
              Bespoke Manufacturer
            </h3>
            <p className="text-global-5 font-roboto-serif text-[18px] font-normal leading-6">
              We manufacture all our products in-house to ensure the highest standards of quality at every stage.
            </p>
          </div>
          
          {/* Security by Design - Mobile */}
          <div className="space-y-4">
            <Image
              src="/images/img_image_385x515.png"
              alt="Security Design"
              width={400}
              height={200}
              className="rounded-3xl object-cover w-full"
            />
            <div className="text-center">
              <h3 className="text-global-1 font-roboto-serif text-xl font-medium leading-6 mb-4">
                Security by Design
              </h3>
              <p className="text-global-1 font-roboto-serif text-[18px] font-normal leading-6">
                We deliver security solutions you can trust.
              </p>
            </div>
          </div>
          
          {/* Attention to Details - Mobile */}
          <div className="bg-global-1 rounded-3xl p-6">
            <Image
              src="/images/img_image_1.png"
              alt="Attention to Details"
              width={400}
              height={200}
              className="rounded-3xl object-cover w-full mb-4"
            />
            <h3 className="text-global-5 font-roboto-serif text-xl font-medium leading-6 mb-4">
              Attention to Details
            </h3>
            <p className="text-global-5 font-roboto-serif text-[18px] font-normal leading-6">
              With elegant finishes and flawless functionality, our products are designed to make an impression and deliver peace of mind.
            </p>
          </div>
        </div>
      </section>
      {/* Our Projects Section */}
      <section className="px-4 md:px-8 py-20">
        <h2 className="text-global-2 font-roboto-serif text-[30px] md:text-5xl font-semibold leading-8 md:leading-[59px] text-center mb-8 md:mb-16">
          Our Projects
        </h2>
        {/* Desktop Layout */}
        <div className="hidden md:block max-w-7xl mx-auto">
          {/* First Row */}
          <div className="flex flex-row gap-x-4 mb-4">
            <div className="w-[306px] h-[420px] rounded-3xl overflow-hidden">
              <Image
                src="/images/img_image_211.webp"
                alt="Project 1"
                width={306}
                height={420}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-row gap-x-4">
                <div className="w-[306px] h-[180px] rounded-3xl overflow-hidden">
                  <Image
                    src="/images/img_image_180x306.webp"
                    alt="Project 2"
                    width={306}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[306px] h-[180px] rounded-3xl overflow-hidden">
                  <Image
                    src="/images/img_image_2.webp"
                    alt="Project 3"
                    width={306}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-[626px] h-[226px] rounded-3xl overflow-hidden">
                <Image
                  src="/images/img_image_213.webp"
                  alt="Project 4"
                  width={626}
                  height={226}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="w-[240px] h-[286px] rounded-3xl overflow-hidden">
                <Image
                  src="/images/img_image_286x240.webp"
                  alt="Project 5"
                  width={240}
                  height={286}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[240px] h-[120px] rounded-3xl overflow-hidden">
                <Image
                  src="/images/img_image_120x240.webp"
                  alt="Project 6"
                  width={240}
                  height={120}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Second Row */}
          <div className="flex flex-row gap-x-4 mb-8">
            <div className="w-[306px] h-[220px] rounded-3xl overflow-hidden">
              <Image
                src="/images/img_image_220x306.webp"
                alt="Project 7"
                width={306}
                height={220}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[190px] h-[220px] rounded-3xl overflow-hidden">
              <Image
                src="/images/img_image_212.webp"
                alt="Project 8"
                width={190}
                height={220}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[239px] h-[220px] rounded-3xl overflow-hidden">
              <Image
                src="/images/img_image_220x239.webp"
                alt="Project 9"
                width={239}
                height={220}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[190px] h-[220px] rounded-3xl overflow-hidden">
              <Image
                src="/images/img_image_220x190.webp"
                alt="Project 10"
                width={190}
                height={220}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[219px] h-[220px] rounded-3xl overflow-hidden">
              <Image
                src="/images/img_image_220x219.webp"
                alt="Project 11"
                width={219}
                height={220}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Image
              src="/images/img_image_211.webp"
              alt="Project 1"
              width={180}
              height={240}
              className="rounded-2xl w-full h-auto object-cover"
            />
            <Image
              src="/images/img_image_180x306.webp"
              alt="Project 2"
              width={180}
              height={240}
              className="rounded-2xl w-full h-auto object-cover"
            />
            <Image
              src="/images/img_image_2.webp"
              alt="Project 3"
              width={180}
              height={240}
              className="rounded-2xl w-full h-auto object-cover"
            />
            <Image
              src="/images/img_image_286x240.webp"
              alt="Project 4"
              width={180}
              height={240}
              className="rounded-2xl w-full h-auto object-cover"
            />
            <Image
              src="/images/img_image_220x306.webp"
              alt="Project 5"
              width={180}
              height={240}
              className="rounded-2xl w-full h-auto object-cover"
            />
            <Image
              src="/images/img_image_212.webp"
              alt="Project 6"
              width={180}
              height={240}
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            variant="primary"
            size="lg"
            className="px-8 py-4 rounded-lg"
            onClick={handleGetQuote}
          >
            Get a Free Quote
          </Button>
        </div>
      </section>
      {/* Statistics Section */}
      <div className="bg-global-1">
      <section className="px-8 py-16">
        <div className="flex flex-row md:justify-between md:items-center flex-col md:flex-row items-center justify-center gap-y-12 md:gap-y-0 max-w-7xl mx-auto bg-[#1A1E53] rounded-2xl p-8">
          {/* Happy Clients */}
          <div className="flex flex-col items-center gap-y-4 text-white">
            <div className="relative">
              <Image
                src="/images/i1.png"
                alt="People Icon"
                width={80}
                height={80}
                className="text-white"
              />
              {/* <div className="bg-global-7 rounded-t-2xl w-6 h-12 absolute top-1 right-0"></div> */}
            </div>
            <h3 className="font-roboto-serif text-2xl font-semibold leading-6 text-center text-white">
              5000+
            </h3>
            <p className="font-roboto-serif text-lg font-medium leading-6 text-center text-white">
              Happy Clients
            </p>
          </div>
          {/* Projects Completed */}
          <div className="flex flex-col items-center gap-y-4">
            <Image
              src="/images/pajamas_work.png"
              alt="Work Icon"
              width={80}
              height={80}
            />
            <h3 className="text-global-7 font-roboto-serif text-2xl font-semibold leading-6 text-center">
              8000+
            </h3>
            <p className="text-global-7 font-roboto-serif text-lg font-medium leading-6 text-center">
              Projects Completed
            </p>
          </div>
          {/* Years Experience */}
          <div className="flex flex-col items-center gap-y-4">
            <Image
              src="/images/eos-icons_project-outlined.png"
              alt="Experience Icon"
              width={80}
              height={80}
            />
            <h3 className="text-global-7 font-roboto-serif text-2xl font-semibold leading-6 text-center">
              20+
            </h3>
            <p className="text-global-7 font-roboto-serif text-lg font-medium leading-6 text-center">
              Years Experience
            </p>
          </div>
        </div>
      </section>
      </div>
      {/* Client Testimonials Section */}
      <section className="px-8 py-12 md:py-20">
        <h2 className="text-global-2 font-roboto-serif text-[30px] md:text-5xl font-semibold leading-[59px] text-center mb-2">
          What Our Client Say
        </h2>
       .
        <div className="flex flex-row gap-x-8 overflow-x-auto max-w-7xl mx-auto mb-8">
          {/* Testimonial 1 */}
          <div className="bg-slider-3 rounded-2xl p-8 min-w-[384px]">
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-row justify-between items-start">
                <Image
                  src="/images/img_group.svg"
                  alt="Quote"
                  width={55}
                  height={54}
                />
                <Image
                  src="/images/img_avatar_image50.png"
                  alt="Client Avatar"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <p className="text-global-4 font-roboto-serif text-lg font-normal leading-6">
                They do not just sell doors — they provide peace of mind. We trust them for all our premium and bulletproof door needs.
              </p>
              <div className="flex flex-row justify-between items-center">
                <Image
                  src="/images/img_image_197.png"
                  alt="Company Logo"
                  width={89}
                  height={40}
                />
                <div className="flex flex-col gap-y-1">
                  <span className="text-global-4 font-roboto-serif text-lg font-medium leading-6">
                    - Neha Shah
                  </span>
                  <div className="flex flex-row gap-x-1">
                    <Image src="/images/img_star.svg" alt="Star" width={20} height={18} />
                    <Image src="/images/img_star.svg" alt="Star" width={20} height={18} />
                    <Image src="/images/img_star.svg" alt="Star" width={20} height={18} />
                    <Image src="/images/img_star.svg" alt="Star" width={20} height={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-slider-3 rounded-2xl p-8 min-w-[384px]">
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-row justify-between items-start">
                <Image
                  src="/images/img_vector_gray_600.svg"
                  alt="Quote"
                  width={36}
                  height={27}
                />
                <Image
                  src="/images/img_avatar_image60.png"
                  alt="Client Avatar"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <p className="text-global-4 font-roboto-serif text-lg font-normal leading-6">
                Their craftsmanship and security are unmatched. The bulletproof doors gave our space the protection it needed.
              </p>
              <div className="flex flex-row justify-between items-center">
                <Image
                  src="/images/img_image_197.png"
                  alt="Company Logo"
                  width={123}
                  height={30}
                />
                <div className="flex flex-col gap-y-1">
                  <span className="text-global-4 font-roboto-serif text-lg font-medium leading-6">
                    - Nakul Rao
                  </span>
                  <div className="flex flex-row gap-x-1">
                    <Image src="/images/img_star.svg" alt="Star" width={20} height={18} />
                    <Image src="/images/img_star.svg" alt="Star" width={20} height={18} />
                    <Image src="/images/img_star.svg" alt="Star" width={20} height={18} />
                    <Image src="/images/img_star.svg" alt="Star" width={20} height={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-slider-3 rounded-2xl p-8 min-w-[384px]">
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-row justify-between items-start">
                <Image
                  src="/images/img_vector_blue_gray_100_02.svg"
                  alt="Quote"
                  width={36}
                  height={27}
                />
                <Image
                  src="/images/img_avatar_image60_50x50.png"
                  alt="Client Avatar"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <p className="text-global-4 font-roboto-serif text-lg font-normal leading-6">
                From design to installation, everything was seamless. A reliable partner for high-quality and secure door solutions.
              </p>
              <div className="flex flex-row justify-between items-center">
                <Image
                  src="/images/img_image_197.png"
                  alt="Company Logo"
                  width={89}
                  height={40}
                />
                <div className="flex flex-col gap-y-1">
                  <span className="text-global-4 font-roboto-serif text-lg font-medium leading-6">
                    - Nitin Dhar
                  </span>
                  <div className="flex flex-row gap-x-1">
                    <Image src="/images/img_star.svg" alt="Star" width={20} height={18} />
                    <Image src="/images/img_star.svg" alt="Star" width={20} height={18} />
                    <Image src="/images/img_star.svg" alt="Star" width={20} height={18} />
                    <Image src="/images/img_star.svg" alt="Star" width={20} height={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <PagerIndicator
            totalPages={5}
            currentPage={currentTestimonialSlide}
            onPageChange={setCurrentTestimonialSlide}
          />
        </div>
      </section>
      {/* Contact Section */}
      <section className="px-8 py-20">
        <div className="text-center mb-8">
          <h2 className="text-global-2 font-roboto-serif text-[30px] md:text-5xl font-semibold leading-[53px] mb-4">
            Get In Touch With Us Today
          </h2>
          <p className="text-global-2 font-roboto-serif text-[18px] md:text-lg font-normal leading-6 max-w-4xl mx-auto">
            Discover how we can enhance your home security and beauty with a personalized consultation.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-y-6 gap-x-6 mx-auto max-w-7xl">
          {/* Contact Info */}
          <div className="bg-global-1 rounded-lg p-6 shadow-lg md:w-[450px] md:h-[600px]">
            <h3 className="text-global-8 font-roboto-serif text-xl font-semibold leading-6 mb-4">
              Contact Info
            </h3>
            <p className="text-global-8 font-roboto-serif text-lg font-normal leading-6 mb-6">
              We are here to help—contact us to explore how our premium doors and solutions can enhance your space.
            </p>
            <div className="flex flex-col gap-y-6">
              {/* Location */}
              <div className="flex flex-row items-start gap-x-3">
                <div className="bg-global-4 rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                  <Image
                    src="/images/img_mingcutelocationline.svg"
                    alt="Location"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-global-8 font-roboto-serif text-xl font-medium leading-6 mb-2">
                    Our Location
                  </h4>
                  <div className="text-global-10 font-roboto-serif text-lg font-normal leading-6">
                    <div>Unit 20 Ribocon</div>
                    <div>Way</div>
                    <div>LU4 9UR</div>
                  </div>
                </div>
              </div>
              {/* Phone */}
              <div className="flex flex-row items-center gap-x-3">
                <div className="bg-global-4 rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                  <Image
                    src="/images/img_materialsymbolscalloutline.svg"
                    alt="Phone"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-global-8 font-roboto-serif text-xl font-medium leading-6 mb-2">
                    Phone Number
                  </h4>
                  <span className="text-global-11 font-roboto-serif text-lg font-normal leading-6">
                    02078594207
                  </span>
                </div>
              </div>
              {/* Email */}
              <div className="flex flex-row items-center gap-x-3">
                <div className="bg-global-3 rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                  <Image
                    src="/images/img_materialsymbolsmailrounded.svg"
                    alt="Email"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-global-8 font-roboto-serif text-xl font-medium leading-6 mb-2">
                    Email Address
                  </h4>
                  <span className="text-global-11 font-roboto-serif text-lg font-normal leading-6">
                    info@secure-house.co.uk
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-global-8 rounded-lg p-6 flex-1 shadow-lg">
            <h3 className="text-global-4 font-roboto-serif text-xl font-semibold leading-6 mb-4">
              Get In Touch
            </h3>
            <p className="text-global-3 font-roboto-serif text-lg font-normal leading-6 mb-6">
              We are here to help! If you have any questions how our high-quality doors and customized solutions can enhance your space or meet your project needs, feel free to reach out to us.
            </p>
            <form ref={formRef} action="/thank-you-sd" method="POST" className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full bg-[#FCFAFF] border border-[#C3C6D1] rounded-md p-3 text-base placeholder:text-[#A1A5B7]"
              />
              <div className="flex flex-col md:flex-row gap-4 md:gap-x-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="flex-1 bg-[#FCFAFF] border border-[#C3C6D1] rounded-md p-3 text-base placeholder:text-[#A1A5B7]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="flex-1 bg-[#FCFAFF] border border-[#C3C6D1] rounded-md p-3 text-base placeholder:text-[#A1A5B7]"
                />
              </div>
              <select
                name="interest"
                required
                className="w-full bg-[#FCFAFF] border border-[#C3C6D1] rounded-md p-3 text-base text-[#222]"
              >
                <option value="" disabled selected>I'm Interested In</option>
                <option value="Premium Steel Security Doors">Premium Steel Security Doors</option>
                <option value="Bullet-Proof Security Doors">Bullet-Proof Security Doors</option>
                <option value="Fire-Rated Security Doors">Fire-Rated Security Doors</option>
                <option value="Soundproof Security Doors">Soundproof Security Doors</option>
                <option value="Consultation">Consultation</option>
              </select>
              <textarea
                name="address"
                className="w-full bg-[#FCFAFF] border border-[#C3C6D1] rounded-md p-3 text-base placeholder:text-[#A1A5B7]"
                placeholder="Full Postal Address"
                rows={3}
              />
              <div className="flex justify-center pt-4">
                <button
                  className="bg-[#4C55C8] text-white font-bold rounded-lg py-3 px-8 text-base"
                  type="submit"
                >
                  Schedule Free Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
      {/* Mobile bottom padding to prevent content being hidden behind fixed bar */}
      <div className="h-20 md:hidden"></div>
    </div>
  );
};
export default HomePage;
