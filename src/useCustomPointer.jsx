import { useState, useEffect } from "react";

function useCustomPointer(cursor) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", updatePosition);

    return () => {
      document.body.style.cursor = "default";
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      {cursor}
    </div>
  );
}

export default useCustomPointer;
