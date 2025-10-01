import React from 'react'
import Subscriptions from '../../components/Subscriptions'
import BlogsPreview from '../../components/BlogPreview';
import Footer from '../../components/Footer';
import Hero from './Hero';
import FAQs from './FAQs';
import Navbar from '@/src/components/Navbar';

export default function IPTVSmartersPro() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Subscriptions/>
        <BlogsPreview/>
        <FAQs/>
        <Footer/>
    </div>
  )
}
