import Hero from '@/components/Hero';
import SportsOffered from '@/components/SportsOffered';
import About from '@/components/About';
import WhatWeDo from '@/components/WhatWeDo';
import Tournaments from '@/components/Tournaments';
import Membership from '@/components/Membership';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SportsOffered />
      <About />
      <WhatWeDo />
      <Tournaments />
      <Membership />
      <Gallery />
      <Testimonials />
      <Partners />
      <Contact />
    </>
  );
}
