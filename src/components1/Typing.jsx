import React, { useEffect, useRef, useState } from "react";

const TypingAnimation = () => {
  const headingText = "India ka apna Tailor!!";
  const currentIndexRef = useRef(0);
  const textRef = useRef("");
  const [text, setText] = useState("");

  useEffect(() => {
    const typeText = () => {
      if (currentIndexRef.current < headingText.length) {
        textRef.current += headingText.charAt(currentIndexRef.current);
        currentIndexRef.current++;
        setText(textRef.current);
        setTimeout(typeText, 300); // Adjust the typing speed by changing the timeout value (milliseconds)
      } else {
        // Animation is complete, reset and start again
        currentIndexRef.current = 0;
        textRef.current = "";
        setText("");
        setTimeout(typeText, 4000); // Add a delay before starting the animation again
      }
    };

    typeText();
  }, []);

  return (
    <h1 className="text-3xl font-extrabold bg-gradient-to-r from-orange-100 via-red-300 to-yellow-300 bg-clip-text text-transparent sm:text-5xl">
      {text}
    </h1>
  );
};

export default TypingAnimation;
