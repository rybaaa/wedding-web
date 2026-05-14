import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Place from './components/Place';
import Plan from './components/Plan';
import SecondDay from './components/SecondDay';
import NextDay from './components/NextDay';
import DressCode from './components/DressCode';
import InsteadOfFlowers from './components/InsteadOfFlowers';
import AboutGifts from './components/AboutGifts';
import Questions from './components/Questions';
import Footer from './components/Footer';
import RsvpForm from './components/RsvpForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-custom-bg font-body text-custom-text">
      <Header />
      <Hero />
      <Place />
      <Plan />
      <SecondDay />
      <NextDay />
      <DressCode />
      <InsteadOfFlowers />
      <AboutGifts />
      <RsvpForm></RsvpForm>
      <Questions></Questions>
      <Footer />
    </div>
  );
};

export default App;