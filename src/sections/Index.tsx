
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import IPTVPanels from '../components/IPTVPanels';
import Subscriptions from '../components/Subscriptions';
import BlogPreview from '../components/BlogPreview';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import EntertainmentPage from '../components/Entertainment';
import SportsPage from '../components/Sports';
import NewsPage from '../components/News';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <IPTVPanels />
      <Subscriptions />
      <EntertainmentPage/>
      <SportsPage/>
      <NewsPage/>
      
      <BlogPreview />
      <Contact />
      <Footer />

    </div>
  );
};

export default Home;
