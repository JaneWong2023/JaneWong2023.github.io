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
        <div className="div1"> 
            Software Developer 
            <br />&<br />
            Designer 
        </div>

        <div className="div2"> 
            <div className="Hello">
            <div>Hello, I am Jane!👋</div>
            <div>A second year student studying IT in Finland.
            </div> I'm interested in software programming ,as well as UI/UX design. <div/>
            <div>I'm looking to collaborate on SW development program.</div>
            <div>Feel free to contact me!</div>
            </div>
            <div className='Contact-button'>
                    Let's Connect!
            </div>
        </div>

        {/* Gradient Overlay */}
      <div className="bottom-gradient"></div>
      </div>

    </div>

   
  );
};

export default Home;
