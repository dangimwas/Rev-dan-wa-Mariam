import { useState, useEffect } from 'react';

const DynamicText = () => {
  const roles = [
    { prefix: "Hello It's Rev Dan I am a ", role: "Reverend" },
    { prefix: "Hello It's Rev Dan I am a ", role: "Preacher" },
    { prefix: "Hello It's Rev Dan I am an ", role: "Instructor" },
    { prefix: "Hello It's Rev Dan I am a ", role: "Counselor" },
    { prefix: "Hello It's Rev Dan I am a ", role: "Motivator" }
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("Hello It's Rev Dan I am a Reverend");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex].prefix + roles[currentRoleIndex].role;
    
    if (!isDeleting && displayText === currentRole) {
      // Stay for 2 seconds before starting to delete
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (displayText === '') {
        // Move to next role and start typing
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setDisplayText('');
      } else {
        // Delete character by character
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 100);
        return () => clearTimeout(timeout);
      }
    } else {
      // Type character by character
      if (displayText !== currentRole) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 150);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <span className="font-bold">
      <span className="text-white">
        {displayText.substring(0, displayText.lastIndexOf(' ') + 1)}
      </span>
      <span className="text-primary dynamic-text">
        {displayText.substring(displayText.lastIndexOf(' ') + 1)}
        <span className="animate-pulse">|</span>
      </span>
    </span>
  );
};

export default DynamicText;