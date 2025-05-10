import { useState, useEffect } from "react";

function useKeyPress(targetKey) {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = ({ key }) => {
      if (key === targetKey) {
        setIsKeyPressed(true);
      }
    };

    const handleKeyUp = ({ key }) => {
      if (key === targetKey) {
        setIsKeyPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [targetKey]);

  return isKeyPressed;
}

export default useKeyPress;
