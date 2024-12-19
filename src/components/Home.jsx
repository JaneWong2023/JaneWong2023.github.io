import React, { useEffect } from 'react';
import Canvas from './Canvas';
import '../App.css';

const Home = () => {
  return (
    <div>
      {/* background */}
        <Canvas />

      {/* my info */}
      <div className="HelloJaneWong">
        <div className="div1"> Full-stack programmer <br />&<br />Designer </div>
        <div className="div2"> Hello, I am Jane Wong, a Full-stack programmer and also a designer based in Finland.</div>
      </div>
    </div>
  );
};

export default Home;
