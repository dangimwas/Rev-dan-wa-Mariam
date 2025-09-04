import { useState, useEffect } from 'react';

const DynamicText = () => {
  const roles = ['Reverend', 'Priest', 'Instructor', 'Counselor', 'Motivator'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsVisible(true);
      }, 250);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-primary font-bold">
      <span 
        className={`dynamic-text ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        {roles[currentRoleIndex]}
      </span>
    </span>
  );
};

export default DynamicText;