import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateTrailPosition = (e: MouseEvent) => {
      setTimeout(() => {
        setTrailPosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
        setIsHoveringButton(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
        setIsHoveringButton(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousemove", updateTrailPosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousemove", updateTrailPosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const shouldShow = isHomePage || isHoveringButton;

  return (
    <>
      <div
        className="cursor-glow-trail"
        style={{
          transform: `translate(${trailPosition.x - 200}px, ${trailPosition.y - 200}px)`,
          opacity: shouldShow ? 1 : 0,
        }}
      />
      <div
        className="cursor-glow"
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
          opacity: shouldShow ? 1 : 0,
        }}
      />
    </>
  );
};
