import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-global-6 flex flex-col justify-between">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-20">
        <div className="bg-global-1 rounded-3xl shadow-lg p-12 max-w-xl w-full text-center">
          <h1 className="text-global-2 font-roboto-serif text-5xl font-bold mb-6">Thank You!</h1>
          <p className="text-global-2 font-roboto-serif text-2xl mb-4">Our team will contact you soon.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYouPage;

export const metadata = {
  title: 'Thank You | Secure House',
  description: 'Thank you for your inquiry. Our team will contact you soon.'
}; 