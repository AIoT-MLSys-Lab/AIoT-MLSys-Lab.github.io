import React, { useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';

function CanvasNest() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'dist/canvas-nest.js';
    script.type = 'text/javascript';
    script.async = true;
    script.setAttribute('zIndex', '-99999');
    document.body.appendChild(script);

    return () => {
      // 在组件卸载时移除脚本
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

export default CanvasNest;