import { useEffect, useState } from "react";

// Hook to manage cursor position
export const useCursorPosition = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return cursorPosition;
};

// Hook to manage cursor visibility based on window size
export const useCursorVisibility = (minWidth: number) => {
  const [isVisible, setIsVisible] = useState(window.innerWidth >= minWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= minWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [minWidth]);

  return isVisible;
};

// Hook to manage hover effects on specified elements
export const useHoverEffect = (
  selector: string,
  onEnter: () => void,
  onLeave: () => void
) => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selector)) as HTMLElement[];

    elements.forEach((element) => {
      element.addEventListener("mouseenter", onEnter);
      element.addEventListener("mouseleave", onLeave);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", onEnter);
        element.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [selector, onEnter, onLeave]);
};
