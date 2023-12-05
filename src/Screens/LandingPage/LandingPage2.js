import React from 'react';
import bg from '../../Assets/pexels-matilda-wormwood-4098778.jpg';

const LandingPage2 = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-white-950"></div>
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-center text-white">
          <h1 className="font-bold text-3xl mb-4">This Is Awesome</h1>
          <h2>You Are Welcome Here!!!!</h2>
          <span>Let's Start Our Journey</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage2;
