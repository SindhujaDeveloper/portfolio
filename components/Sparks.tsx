"use client";
import React, { useEffect, useState } from "react";

export default function Sparks() {
  const [sparks, setSparks] = useState<{ id: number; style: React.CSSProperties }[]>([]);

  useEffect(() => {
    // Generate 100 sparks with random positions, sizes, and delays
    const newSparks = Array.from({ length: 100 }).map((_, i) => {
      const size = Math.random() * 0.5 + 1; // 1px to 3px
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = Math.random() * 10 + 5; // 5s to 15s
      const delay = Math.random() * 5; // 0s to 5s
      
      // Some sparks will glow with the second color (pinkish), most with the first (orange)
      const isAltGlow = Math.random() > 0.8;
      const glowColor = isAltGlow ? "var(--portfolio-glow2)" : "var(--portfolio-glow1)";
      
      return {
        id: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: `${top}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          boxShadow: `0 0 ${size}px 0.5px rgba(255, 255, 255, 0.3), 0 0 ${size * 1.5}px 1px ${glowColor}`,
          opacity: 0.7
        },
      };
    });
    setSparks(newSparks);
  }, []);

  return (
    <div className="sparks-container">
      {sparks.map((spark) => (
        <div key={spark.id} className="spark" style={spark.style}></div>
      ))}
    </div>
  );
}
