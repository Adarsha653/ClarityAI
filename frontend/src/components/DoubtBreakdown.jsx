import React, { useEffect, useState, useMemo } from "react";

export default function DoubtBreakdown({ breakdown }) {
  const [visibleStages, setVisibleStages] = useState([]);

  // Memoize stages so useEffect sees stable reference
  const stages = useMemo(() => {
    if (!breakdown) return [];
    return [
      { label: "1. Fear", bg: "bg-red-500/10", border: "border-red-500/30", textColor: "text-red-400", text: breakdown.fear },
      { label: "2. Assumptions", bg: "bg-orange-500/10", border: "border-orange-500/30", textColor: "text-orange-400", text: breakdown.assumptions },
      { label: "3. Reality Check", bg: "bg-emerald-500/10", border: "border-emerald-500/30", textColor: "text-emerald-400", text: breakdown.reality },
      { label: "4. Action Steps", bg: "bg-blue-500/10", border: "border-blue-500/30", textColor: "text-blue-400", text: breakdown.action },
    ];
  }, [breakdown]);

  // Effect for staggered animation
  useEffect(() => {
    if (stages.length === 0) return;

    stages.forEach((_, i) => {
      setTimeout(() => {
        setVisibleStages((prev) => [...prev, i]);
      }, i * 200);
    });
  }, [stages]); // ✅ dependency is stable now

  if (!breakdown) return null;

  return (
    <div className="mt-10 grid md:grid-cols-2 gap-6">
      {stages.map((stage, index) => (
        <div
          key={index}
          className={`
            p-6 rounded-3xl ${stage.bg} ${stage.border}
            transition-all duration-500 ease-out
            ${visibleStages.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
        >
          <p className={`${stage.textColor} font-medium mb-2`}>{stage.label}</p>
          <p className="text-white leading-relaxed">{stage.text}</p>
        </div>
      ))}
    </div>
  );
}