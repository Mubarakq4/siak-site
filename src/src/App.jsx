import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-gray-950 text-white min-h-screen overflow-x-hidden">
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}

export default App;
