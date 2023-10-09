import { useEffect, useRef } from "react";

export const Slider = ({
  onChange,
  value = 0,
  max = 0,
}: {
  onChange: (value: number) => void;
  value?: number;
  max?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  let pressed = useRef(false);
  let progress = useRef(0);
  let startMouseMove = useRef(0);

  useEffect(() => {
    const containerWidth = containerRef.current
      ? containerRef.current.getBoundingClientRect().width - 16
      : 1;
    const percentage = (value * 100) / max;
    progress.current = (percentage * containerWidth) / 100;
    buttonRef.current && (buttonRef.current.style.left = progress.current + "px");
    barRef.current && (barRef.current.style.width = progress.current + "px");

    function onChangeProgress() {
      buttonRef.current && (buttonRef.current.style.left = progress.current + "px");
      barRef.current && (barRef.current.style.width = progress.current + "px");
    }

    function mouseDown(e: MouseEvent) {
      e.stopPropagation();
      if (e.target !== buttonRef.current) return;
      startMouseMove.current = e.clientX;
      pressed.current = true;
    }

    function mouseMove(e: MouseEvent) {
      e.stopPropagation();
      if (!pressed.current) return;
      progress.current = e.clientX - startMouseMove.current;
      progress.current >= 0 && progress.current <= containerWidth && onChangeProgress();
    }

    function mouseUp(e: MouseEvent) {
      e.stopPropagation();
      if (!pressed.current) return;
      pressed.current = false;
      const percentage = (progress.current * 100) / containerWidth;
      onChange((percentage * max) / 100);
    }

    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
    return () => {
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, [max, value, onChange]);

  return (
    <div ref={containerRef} className="w-full h-1 bg-gray-200 rounded-3xl relative">
      <div
        ref={buttonRef}
        className="w-4 h-4 rounded-full absolute bg-gray-200 transform -translate-y-[6px] cursor-pointer"></div>
      <div ref={barRef} className="bg-gray-800 w-1/2 h-1 border border-gray-100 rounded"></div>
    </div>
  );
};
