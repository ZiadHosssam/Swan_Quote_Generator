import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import QuoteGenerator from './components/QuoteGenerator';
import './App.css';

function App() {
  return (
    <div className="relative h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      {/* Animated Background with Blue Dots */}
      <AnimatedBackground />
      
      {/* Main Content */}
      <main className="relative z-10 h-full">
        <QuoteGenerator />
      </main>
    </div>
  );
}

export default App;
