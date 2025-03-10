import  React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';
import "./assets/styles/global.css";
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
