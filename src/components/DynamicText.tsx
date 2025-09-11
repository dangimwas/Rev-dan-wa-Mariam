import { useState, useEffect } from 'react';

const DynamicText = () => {
  const roles = [
    'Reverend', 
    'Preacher', 
    'Instructor', 
    'Counselor', 
    'Motivator'
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('Reverend');
  const [isDeleting, setIsDeleting] = useState(false);

  const getArticle = (word: string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(word.toLowerCase().charAt(0)) ? 'an' : 'a';
  };

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
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
      <span className="text-white">Hello It's Rev Dan and I am {getArticle(roles[currentRoleIndex])} </span>
      <span className="text-primary dynamic-text">
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    </span>
  );
};

export default DynamicText;