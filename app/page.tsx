// app/page.js
'use client';
import { useState, useEffect } from 'react';


export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    setTimeout(() => {
      setShowFloating(true);
    }, 800);
  }, []);

  return (
    <div className="min-h-screen bg-black bg-opacity-90 bg-[radial-gradient(ellipse_at_top_right,_rgba(120,40,180,0.3),transparent_70%),radial-gradient(ellipse_at_bottom_left,_rgba(40,180,120,0.3),transparent_70%)] text-white flex items-center justify-center overflow-hidden relative">
      <div 
        className={`
          flex flex-col items-center justify-between
          transition-all duration-1000 transform
          ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
        `}
      >
        <div className="bg-gray-950/40 backdrop-blur-sm p-6 rounded-xl shadow-xl text-center mb-6 max-w-lg">
          <h1 className={`text-3xl font-bold mb-3 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            Olá, eu sou <span className="bg-indigo-600 text-white px-3 py-1 rounded-md">Kevin Cruz</span> 👋
          </h1>
          <p className={`text-xl mb-3 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            Sou um <span className="bg-orange-500 text-white px-3 py-1 rounded-md">Engenheiro em Computação</span>
          </p>
          <p className={`text-lg transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            atualmente em <span className="bg-green-500 text-white px-3 py-1 rounded-md">Aceno tecnologia ↗</span>
          </p>
        </div>

        {/* Navigation icons */}
        <div 
          className={`
            flex justify-center gap-3 transition-all duration-700 delay-500 bg-gray-950/40
            w-fit p-2 rounded-xl
            ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
          <NavIcon icon={<p>Asdasd</p>} />
          <NavIcon icon={<p>Asdasd</p>} />
          <NavIcon icon={<p>Asdasd</p>} />
          <NavIcon icon={<p>Asdasd</p>} />
          {/* <NavIcon icon={<Code size={20} />} />
          <NavIcon icon={<Folder size={20} />} />
          <NavIcon icon={<Award size={20} />} />
          <NavIcon icon={<Mail size={20} />} />
          <NavIcon icon={<Github size={20} />} />
          <NavIcon icon={<Linkedin size={20} />} /> */}
        </div>
      </div>

      {showFloating && (
        <>
          <FloatingElement className="left-1/4 top-1/4" />
          <FloatingElement className="right-1/4 bottom-1/3" />
          <FloatingElement className="left-1/3 bottom-1/4" />
        </>
      )}
    </div>
  );
}

function NavIcon({ icon }) {
  return (
    <div className="bg-gray-950/40 hover:bg-gray-950/80 transition-colors p-3 rounded-md cursor-pointer border border-gray-800">
      {icon}
    </div>
  );
}

function FloatingElement({ className }) {
  return (
    <div 
      className={`absolute opacity-30 w-16 h-16 rotate-12 animate-pulse ${className}`}
      style={{ 
        animation: `float 7s infinite ease-in-out, pulse 3s infinite ease-in-out`,
        animationDelay: `${Math.random() * 5}s`
      }}
    >
      <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-md"></div>
    </div>
  );
}