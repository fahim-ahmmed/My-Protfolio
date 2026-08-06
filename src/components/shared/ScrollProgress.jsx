"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const current =
        (window.scrollY / totalHeight) * 100;

      setProgress(current);
    };

    window.addEventListener(
      "scroll",
      updateProgress
    );

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress
      );
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[9999] h-1 bg-primary transition-all duration-150"
      style={{
        width: `${progress}%`,
      }}
    />
  );
}