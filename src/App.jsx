import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Doctors from './components/Doctors';
import HowToBook from './components/HowToBook';
import Location from './components/Location';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen relative bg-slate-50 text-slate-800">
      {/* Sticky Top Header */}
      <Header />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Doctors />
        <HowToBook />
        <Location />
      </main>

      {/* Footer & Contact info */}
      <Footer />

      {/* Mobile Floating/Sticky CTA Bottom Bar */}
      <MobileBottomBar />
    </div>
  );
}
