// src/components/Canvas.js
import React, { useEffect } from 'react';

const Canvas = () => {
  useEffect(() => {
    // 动态加载 minigl.js 库
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/greentfrapp/pocoloco@minigl/minigl.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // 确保 minigl.js 加载完成后再运行相关代码
      const gradient = new Gradient();
      gradient.initGradient("#canvas");
    };

    // 清理资源
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <canvas id="canvas"></canvas>;
};

export default Canvas;
