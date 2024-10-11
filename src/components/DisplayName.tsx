import React, { useEffect, useState } from 'react';

const DisplayName: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true); 
      const removeVisibilityTimer = setTimeout(() => {
        setVisible(false); 
      }, 500); 

      return () => clearTimeout(removeVisibilityTimer); 
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {visible && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-white transition-transform duration-500 z-20 ${animate ? '-translate-y-full' : ''}`}
        >
          <h1 className="text-4xl font-bold">Stefan Demirel</h1>
        </div>
      )}
    </>
  );
};

export default DisplayName;
