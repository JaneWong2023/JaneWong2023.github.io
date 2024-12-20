// src/components/Canvas.js
import React, { useEffect } from 'react';

const Canvas = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/greentfrapp/pocoloco@minigl/minigl.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const gradient = new Gradient();
      gradient.initGradient("#canvas");
    };
    

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <canvas id="canvas"></canvas>;
};

export default Canvas;
