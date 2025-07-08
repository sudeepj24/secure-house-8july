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
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState<number>(0);
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
  const heroSlides = [
    {
      title: '10 Years of - Mastering Seamless Service',
      subtitle: '4.9/5 on Google • 500+ Reviews',
      image: '/images/img_image_201.png',
      button: 'Book Free Consultation',
    },
    {
      title: 'Premium Security Doors for Every Home',
      subtitle: 'Bespoke, bulletproof, and beautiful',
      image: '/images/img_image_204.png',
      button: 'See Our Products',
    },
    {
      title: 'Your Security, Our Priority',
      subtitle: '20+ Years Industry Expertise',
      image: '/images/img_image_211.png',
      button: 'Talk to an Expert',
    },
  ];
  const formRef = useRef<HTMLFormElement | null>(null);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };
  const handleBookConsultation = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleTalkToExpert = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleEnquireNow = (productType: string) => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleGetQuote = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e) e.preventDefault();
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleSeeOurProducts = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="min-h-screen bg-global-6" style={{ overflowX: 'hidden' }}>
      <Header />
      {/* Fixed Book a Site Visit CTA - Figma vertical tab style */}
      <button
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
        }}
        className="font-roboto-serif hover:bg-global-1 focus:outline-none"
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
      </button>
      {/* Hero Section */}
      <section className="relative bg-global-5 flex flex-col justify-center items-center overflow-hidden">
        <div className="w-full flex flex-col justify-center items-center px-4 md:px-8 h-[1000px]">
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
            <h1 className="text-global-12 font-roboto-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-tight md:leading-[71px] text-center uppercase mb-8 md:mb-12">
              {heroSlides[currentSlide].title}
            </h1>
            <div className="flex flex-row items-center justify-center gap-x-4 mb-6 md:mb-8">
              <Image
                src={heroSlides[currentSlide].image}
                alt="Hero Slide Image"
                width={60}
                height={60}
                className="object-contain h-[28px] md:h-[48px] lg:h-[60px] w-auto"
              />
              <span className="text-slider-2 font-roboto-serif text-lg md:text-2xl font-medium leading-7 text-center">
                {heroSlides[currentSlide].subtitle}
              </span>
            </div>
            <div className="flex justify-center mb-10 md:mb-16">
              <Button
                variant="primary"
                size="lg"
                className="px-8 py-4 rounded-xl"
                onClick={
                  currentSlide === 0
                    ? handleBookConsultation
                    : currentSlide === 1
                    ? handleSeeOurProducts
                    : handleTalkToExpert
                }
              >
                {heroSlides[currentSlide].button}
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 w-full flex justify-center z-20">
          <PagerIndicator
            totalPages={heroSlides.length}
            currentPage={currentSlide}
            onPageChange={setCurrentSlide}
          />
        </div>
      </section>
      {/* Premium Security Solutions Section */}
      <section className="w-screen py-20">
        <div className="flex flex-row items-center gap-x-12 max-w-7xl mx-auto">
          <div className="flex-1">
            <Image
              src="/images/img_image_204.png"
              alt="Premium Security Door"
              width={550}
              height={710}
              className="rounded-lg"
            />
          </div>
          <div className="flex-1 flex flex-col gap-y-8">
            <h2 className="text-global-2 font-roboto-serif text-5xl font-medium leading-[65px]">
              Premium Security Solutions
            </h2>
            <p className="text-global-1 font-roboto-serif text-2xl font-normal leading-9">
              Our high-security doors combine cutting-edge technology with superior craftsmanship to provide unparalleled protection for your home or business. Each door is engineered to meet the highest security standards while maintaining aesthetic appeal.
            </p>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-row items-center gap-x-4">
                <Image
                  src="/images/img_carboncheckmarkfilled.svg"
                  alt="Check"
                  width={24}
                  height={24}
                />
                <span className="text-global-1 font-roboto-serif text-2xl font-normal leading-7">
                  Improve your security
                </span>
              </div>
              <div className="flex flex-row items-center gap-x-4">
                <Image
                  src="/images/img_carboncheckmarkfilled.svg"
                  alt="Check"
                  width={24}
                  height={24}
                />
                <span className="text-global-1 font-roboto-serif text-2xl font-normal leading-7">
                  20 Years Industry Expertise
                </span>
              </div>
              <div className="flex flex-row items-center gap-x-4">
                <Image
                  src="/images/img_carboncheckmarkfilled.svg"
                  alt="Check"
                  width={24}
                  height={24}
                />
                <span className="text-global-1 font-roboto-serif text-2xl font-normal leading-7">
                  Motorised locking option
                </span>
              </div>
              <div className="flex flex-row items-center gap-x-4">
                <Image
                  src="/images/img_carboncheckmarkfilled.svg"
                  alt="Check"
                  width={24}
                  height={24}
                />
                <span className="text-global-1 font-roboto-serif text-2xl font-normal leading-7">
                  Bullet proof doors available
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-x-4 mt-8">
              <Button
                variant="primary"
                size="lg"
                className="px-8 py-4 rounded-lg uppercase"
                onClick={handleTalkToExpert}
                
                src="/images/img_arrow_1.svg"
                alt="Arrow"
                width={15}
                height={15}
              
              >
                Talk to an expert
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Our Product Range Section */}
      <section className="bg-global-1 py-20 relative">
        <div className="px-8">
          <h2 className="text-global-9 font-roboto-serif text-5xl font-medium leading-[59px] text-center mb-16">
            Our Product Range
          </h2>
          <div className="flex flex-row gap-x-8 overflow-x-auto max-w-7xl mx-auto">
            {/* Premium Steel Security Doors */}
            <div className="bg-global-9 rounded-3xl p-8 min-w-[445px] flex flex-col items-center">
              <div className="relative mb-6">
                <Image
                  src="/images/img_image_11.png"
                  alt="Premium Steel Security Doors"
                  width={370}
                  height={307}
                  className="rounded-3xl"
                />
                <Image
                  src="/images/img_group_10.svg"
                  alt="Icon"
                  width={30}
                  height={30}
                  className="absolute bottom-4 right-4"
                />
              </div>
              <h3 className="text-global-1 font-roboto-serif text-3xl font-medium leading-9 text-center mb-4">
                Premium Steel Security Doors
              </h3>
              <p className="text-global-1 font-roboto-serif text-2xl font-normal leading-9 text-center mb-6">
                Ultimate home protection with style
              </p>
              <Button
                variant="primary"
                size="md"
                className="px-6 py-3 rounded-lg"
                onClick={() => handleEnquireNow('Premium Steel Security Doors')}
              >
                Enquire Now
              </Button>
            </div>
            {/* Bullet-Proof Security Doors */}
            <div className="bg-global-9 rounded-3xl p-8 min-w-[445px] flex flex-col items-center">
              <div className="relative mb-6 w-[370px] h-[307px] rounded-3xl bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/img_image_204.png)' }}
              >
                <Image
                  src="/images/img_group_11.svg"
                  alt="Icon"
                  width={30}
                  height={30}
                  className="absolute bottom-4 right-4"
                />
              </div>
              <h3 className="text-global-1 font-roboto-serif text-3xl font-medium leading-9 text-center mb-4">
                Bullet-Proof Security Doors
              </h3>
              <p className="text-global-1 font-roboto-serif text-2xl font-normal leading-9 text-center mb-6">
                Unmatched protection for your property
              </p>
              <Button
                variant="primary"
                size="md"
                className="px-6 py-3 rounded-lg"
                onClick={() => handleEnquireNow('Bullet-Proof Security Doors')}
              >
                Enquire Now
              </Button>
            </div>
            {/* Fire-Rated Security Doors */}
            <div className="bg-global-9 rounded-3xl p-8 min-w-[445px] flex flex-col items-center">
              <div className="relative mb-6 w-[370px] h-[307px] rounded-3xl bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/img_image_13.png)' }}
              >
                <Image
                  src="/images/img_group_12.svg"
                  alt="Icon"
                  width={30}
                  height={30}
                  className="absolute bottom-4 right-4"
                />
              </div>
              <h3 className="text-global-1 font-roboto-serif text-3xl font-medium leading-9 text-center mb-4">
                Fire-Rated Security Doors
              </h3>
              <p className="text-global-1 font-roboto-serif text-2xl font-normal leading-9 text-center mb-6">
                Certified fire and security protection
              </p>
              <Button
                variant="primary"
                size="md"
                className="px-6 py-3 rounded-lg"
                onClick={() => handleEnquireNow('Fire-Rated Security Doors')}
              >
                Enquire Now
              </Button>
            </div>
            {/* Soundproof Security Doors */}
            <div className="bg-global-9 rounded-3xl p-8 min-w-[445px] flex flex-col items-center">
              <div className="relative mb-6">
                <Image
                  src="/images/img_image_14.png"
                  alt="Soundproof Security Doors"
                  width={370}
                  height={370}
                  className="rounded-3xl"
                />
                <Image
                  src="/images/img_group_13.svg"
                  alt="Icon"
                  width={30}
                  height={30}
                  className="absolute bottom-4 right-4"
                />
              </div>
              <h3 className="text-global-1 font-roboto-serif text-3xl font-medium leading-9 text-center mb-4">
                Soundproof Security Doors
              </h3>
              <p className="text-global-1 font-roboto-serif text-2xl font-normal leading-9 text-center mb-6">
                Peace and quiet with maximum security
              </p>
              <Button
                variant="primary"
                size="md"
                className="px-6 py-3 rounded-lg"
                onClick={() => handleEnquireNow('Soundproof Security Doors')}
              >
                Enquire Now
              </Button>
            </div>
          </div>
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
            <div className="bg-global-2 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer">
              <Image
                src="/images/img_arrow_4.svg"
                alt="Previous"
                width={25}
                height={3}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Our Security Doors Section */}
      <section className="px-8 py-20">
        <h2 className="text-global-2 font-roboto-serif text-5xl font-semibold leading-[59px] text-center mb-16">
          Why Choose Our Security Doors?
        </h2>
        {/* Bespoke Manufacturer */}
        <div className="bg-global-1 rounded-3xl p-8 mb-12 max-w-7xl mx-auto h-[477px] flex flex-row  gap-x-12">
          <Image
            src="/images/img_image.png"
            alt="Bespoke Manufacturing"
            width={515}
            height={385}
            className="rounded-[30px] object-cover"
            style={{ flexShrink: 0 }}
          />
          <div className="flex flex-col ">
            <h3 className="text-global-5 font-roboto-serif text-4xl font-medium leading-12 text-left mb-4" style={{paddingTop: '60px'}}>
              Bespoke Manufacturer
            </h3>
            <p className="text-global-5 font-roboto-serif text-2xl font-normal leading-8 text-left" style={{paddingTop: '40px',paddingRight: '20px'}}>
              We manufacture all our products in-house to ensure the highest standards of quality at every stage.
            </p>
          </div>
        </div>
        {/* Security by Design */}
        <div className="p-8 mb-12 max-w-7xl mx-auto h-[477px] flex flex-row-reverse items-center gap-x-12">
          <Image
            src="/images/img_image_385x515.png"
            alt="Security Design"
            width={515}
            height={385}
            className="rounded-3xl object-cover"
            style={{ flexShrink: 0 }}
          />
          <div className="flex flex-col items-end flex-1">
            <h3 className="text-global-1 font-roboto-serif text-4xl font-medium leading-12 text-right mb-4" style={{paddingBottom: '30px'}}>
              Security by Design
            </h3>
            <p className="text-global-1 font-roboto-serif text-2xl font-normal leading-7 text-right mb-8" style={{paddingBottom: '40px'}}>
              We deliver security solutions you can trust.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="px-8 py-4 rounded-lg self-end"
              onClick={handleBookConsultation}
            >
              Book a Consultation Call
            </Button>
          </div>
        </div>
        {/* Attention to Details */}
        <div className="bg-global-1 rounded-3xl p-8 max-w-7xl mx-auto">
          <div className="flex flex-row items-center gap-x-12">
            <Image
              src="/images/img_image_1.png"
              alt="Attention to Details"
              width={515}
              height={385}
              className="rounded-3xl"
            />
            <div className="flex flex-col flex-1">
              <h3 className="text-global-5 font-roboto-serif text-4xl font-medium leading-12 text-left mb-4">
                Attention to Details
              </h3>
              <p className="text-global-5 font-roboto-serif text-2xl font-normal leading-8 text-left">
                With elegant finishes and flawless functionality, our products are designed to make an impression and deliver peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Projects Section */}
      <section className="px-8 py-20">
        <h2 className="text-global-2 font-roboto-serif text-5xl font-semibold leading-[59px] text-center mb-16">
          Our Projects
        </h2>
        <div className="max-w-7xl mx-auto">
          {/* First Row */}
          <div className="flex flex-row gap-x-4 mb-4">
            <Image
              src="/images/img_image_211.png"
              alt="Project 1"
              width={306}
              height={420}
              className="rounded-3xl"
            />
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-row gap-x-4">
                <Image
                  src="/images/img_image_180x306.png"
                  alt="Project 2"
                  width={306}
                  height={180}
                  className="rounded-3xl"
                />
                <Image
                  src="/images/img_image_2.png"
                  alt="Project 3"
                  width={306}
                  height={180}
                  className="rounded-3xl"
                />
              </div>
              <Image
                src="/images/img_image_213.png"
                alt="Project 4"
                width={626}
                height={226}
                className="rounded-3xl"
              />
            </div>
            <div className="flex flex-col gap-y-4">
              <Image
                src="/images/img_image_286x240.png"
                alt="Project 5"
                width={240}
                height={286}
                className="rounded-3xl"
              />
              <Image
                src="/images/img_image_120x240.png"
                alt="Project 6"
                width={240}
                height={120}
                className="rounded-3xl"
              />
            </div>
          </div>
          {/* Second Row */}
          <div className="flex flex-row gap-x-4 mb-8">
            <Image
              src="/images/img_image_220x306.png"
              alt="Project 7"
              width={306}
              height={220}
              className="rounded-3xl"
            />
            <Image
              src="/images/img_image_212.png"
              alt="Project 8"
              width={190}
              height={220}
              className="rounded-3xl"
            />
            <Image
              src="/images/img_image_220x239.png"
              alt="Project 9"
              width={239}
              height={220}
              className="rounded-3xl"
            />
            <Image
              src="/images/img_image_220x190.png"
              alt="Project 10"
              width={190}
              height={220}
              className="rounded-3xl"
            />
            <Image
              src="/images/img_image_220x219.png"
              alt="Project 11"
              width={219}
              height={220}
              className="rounded-3xl"
            />
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
        </div>
      </section>
      {/* Statistics Section */}
      <div className="bg-global-1">
      <section className="px-8 py-20" data-component-id="src/app/page.tsx:558:6" data-component-path="src/app/page.tsx" data-component-line="558" data-component-file="page.tsx" data-component-name="section" data-component-content="%7B%22elementName%22%3A%22section%22%2C%22className%22%3A%22px-8%20py-20%22%7D">
        <div className="flex flex-row justify-between items-center max-w-7xl mx-auto bg-[#1A1E53]">
          {/* Happy Clients */}
          <div className="flex flex-col items-center gap-y-6 text-white">
            <div className="flex flex-col items-center gap-y-4">
              <div className="flex flex-row items-center gap-x-2">
            
              </div>
              <div className="relative">
                <Image
                  src="/images/i1.png"
                  alt="People Icon"
                  width={120}
                  height={120}
                  className="text-white"
                />
                <div className="bg-global-7 rounded-t-2xl w-8 h-18 absolute top-1 right-0"></div>
              </div>
            </div>
            <h3 className="font-roboto-serif text-4xl font-semibold leading-12 text-center text-white">
              5000+
            </h3>
            <p className="font-roboto-serif text-2xl font-medium leading-7 text-center text-white">
              Happy Clients
            </p>
          </div>
          {/* Projects Completed */}
          <div className="flex flex-col items-center gap-y-6">
            <Image
              src="/images/pajamas_work.png"
              alt="Work Icon"
              width={120}
              height={120}
            />
            <h3 className="text-global-7 font-roboto-serif text-4xl font-semibold leading-12 text-center">
              8000+
            </h3>
            <p className="text-global-7 font-roboto-serif text-2xl font-medium leading-7 text-center">
              Projects Completed
            </p>
          </div>
          {/* Years Experience */}
          <div className="flex flex-col items-center gap-y-6">
            <Image
              src="/images/eos-icons_project-outlined.png"
              alt="Experience Icon"
              width={120}
              height={120}
            />
            <h3 className="text-global-7 font-roboto-serif text-4xl font-semibold leading-12 text-center">
              20+
            </h3>
            <p className="text-global-7 font-roboto-serif text-2xl font-medium leading-7 text-center">
              Years Experience
            </p>
          </div>
        </div>
      </section>
      </div>
      {/* Client Testimonials Section */}
      <section className="px-8 py-20">
        <h2 className="text-global-2 font-roboto-serif text-5xl font-semibold leading-[59px] text-center mb-2">
          What Our Client Say
        </h2>
        <div className="text-slider-2 font-roboto-serif text-lg md:text-2xl font-medium leading-7 text-center mb-12">
          4.9/5 on Google • 500+ Reviews
        </div>
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
                  src="/images/img_image_199.png"
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
          <h2 className="text-global-2 font-roboto-serif text-5xl font-semibold leading-[53px] mb-4">
            Get In Touch With Us Today
          </h2>
          <p className="text-global-2 font-roboto-serif text-xl font-normal leading-6 max-w-4xl mx-auto">
            Discover how we can enhance your home security and beauty with a personalized consultation.
          </p>
        </div>
        <div className="flex flex-row gap-x-8  mx-auto w-[1200px]">
          {/* Contact Info */}
          <div className="bg-global-1 rounded-lg p-8 shadow-lg w-[486px] h-[794px]" >
            <h3 className="text-global-8 font-roboto-serif text-3xl font-semibold leading-9  mb-6">
              Contact Info
            </h3>
            <p className="text-global-8 font-roboto-serif text-2xl font-normal leading-7 mb-8" style={{paddingBottom: '25px'}}>
              We are here to help—contact us to explore how our premium doors and solutions can enhance your space.
            </p>
            <div className="flex flex-col gap-y-8">
              {/* Location */}
              <div className="flex flex-row items-start gap-x-4" style={{paddingBottom: '15px'}}>
                <div className="bg-global-4 rounded-full w-24 h-24 flex items-center justify-center shadow-md">
                  <Image
                    src="/images/img_mingcutelocationline.svg"
                    alt="Location"
                    width={55}
                    height={55}
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-global-8 font-roboto-serif text-2xl font-medium leading-8 mb-2">
                    Our Location
                  </h4>
                  <div className="text-global-10 font-roboto-serif text-2xl font-normal leading-7">
                    <div>Unit 20 Ribocon</div>
                    <div>Way</div>
                    <div>LU4 9UR</div>
                  </div>
                </div>
              </div>
              {/* Phone */}
              <div className="flex flex-row items-center gap-x-4" style={{paddingBottom: '15px'}}>
                <div className="bg-global-4 rounded-full w-24 h-24 flex items-center justify-center shadow-md">
                  <Image
                    src="/images/img_materialsymbolscalloutline.svg"
                    alt="Phone"
                    width={55}
                    height={55}
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-global-8 font-roboto-serif text-2xl font-medium leading-8 mb-2">
                    Phone Number
                  </h4>
                  <span className="text-global-11 font-roboto-serif text-2xl font-normal leading-7">
                    02078594207
                  </span>
                </div>
              </div>
              {/* Email */}
              <div className="flex flex-row items-center gap-x-4">
                <div className="bg-global-3 rounded-full w-24 h-24 flex items-center justify-center shadow-md">
                  <Image
                    src="/images/img_materialsymbolsmailrounded.svg"
                    alt="Email"
                    width={55}
                    height={55}
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-global-8 font-roboto-serif text-2xl font-medium leading-8 mb-2">
                    Email Address
                  </h4>
                  <span className="text-global-11 font-roboto-serif text-2xl font-normal leading-7">
                    info@secure-house.co.uk
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-global-8 rounded-lg p-8 flex-1 shadow-lg">
            <h3 className="text-global-4 font-roboto-serif text-3xl font-semibold leading-9  mb-6">
              Get In Touch
            </h3>
            <p className="text-global-3 font-roboto-serif text-2xl font-normal leading-7 mb-8">
              We are here to help! If you have any questions how our high-quality doors and customized solutions can enhance your space or meet your project needs, feel free to reach out to us.
            </p>
            <form action="/thank-you-sd" method="POST" className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full bg-[#FCFAFF] border border-[#C3C6D1] rounded-md p-4 text-base placeholder:text-[#A1A5B7]"
              />
              <div className="flex flex-row gap-x-8">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="flex-1 bg-[#FCFAFF] border border-[#C3C6D1] rounded-md p-4 text-base placeholder:text-[#A1A5B7]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="flex-1 bg-[#FCFAFF] border border-[#C3C6D1] rounded-md p-4 text-base placeholder:text-[#A1A5B7]"
                />
              </div>
              <select
                name="interest"
                required
                className="flex-1 w-full bg-[#FCFAFF] border border-[#C3C6D1] rounded-md p-4 text-base text-[#222] mb-2"
              >
                <option value="" disabled selected>I'm Interested In</option>
                <option value="Premium Steel Security Doors">Premium Steel Security Doors</option>
                <option value="Bullet-Proof Security Doors">Bullet-Proof Security Doors</option>
                <option value="Fire-Rated Security Doors">Fire-Rated Security Doors</option>
                <option value="Soundproof Security Doors">Soundproof Security Doors</option>
                <option value="Consultation">Consultation</option>
              </select>
              <div className="w-full max-w-2xl mx-auto ">
                <textarea
                  name="address"
                  className="w-full bg-[#FCFAFF] border border-[#C3C6D1] rounded-md p-4 text-base placeholder:text-[#A1A5B7] mb-8"
                  placeholder="Full Postal Address"
                  rows={4}
                />
                <button
                  className=" bg-[#4C55C8] text-white font-bold rounded-lg py-4 text-lg text-center" style={{width: '296px', height: '64px'}}
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
    </div>
  );
};
export default HomePage;