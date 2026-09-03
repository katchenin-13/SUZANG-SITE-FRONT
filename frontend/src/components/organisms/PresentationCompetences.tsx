"use client";

import { useEffect, useState } from "react";

export function PresentationCompetences() {
  const competencesLeft = [
    { name: "DATA ANALYST", value: 20 },
    { name: "ACTUARIAT", value: 40 },
    { name: "CONSEIL STRATEGIQUE", value: 56 },
    { name: "EVENEMENTIEL", value: 80 },
    { name: "COMMUNICATION DIGITALE", value: 76 },
  ];

  const competencesRight = [
    { name: "MARKETING POLITIQUE", value: 50 },
    { name: "MARKETING INTELLIGENCE", value: 74 },
    { name: "MEDIAMETRIE", value: 12 },
    { name: "TRANSFORMATION DIGITALE", value: 70 },
    { name: "IMMOBILIER", value: 86 },
  ];

  const ProgressBar = ({ name, value }: { name: string; value: number }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setWidth(value);
      }, 300);
      return () => clearTimeout(timer);
    }, [value]);

    return (
      <div className="flex flex-col gap-2 w-full mb-8">
        <div className="flex justify-between items-end">
          <span className="text-[13px] md:text-[14px] font-medium text-slate-800 uppercase tracking-wide">
            {name}
          </span>
          <span className="text-[12px] font-bold text-slate-800">
            {value}%
          </span>
        </div>
        <div className="w-full h-[12px] bg-slate-100 rounded-sm overflow-hidden">
          <div 
            className="h-full bg-slate-500 rounded-sm transition-all duration-1000 ease-out"
            style={{ width: `${width}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-10 xl:px-[120px] bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[28px] md:text-[36px] font-extrabold uppercase text-slate-600 tracking-wide mb-10">
          NOS DOMAINES DE COMPÉTENCES
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 w-full">
          {/* Left Column */}
          <div className="flex-1 w-full">
            {competencesLeft.map((comp) => (
              <ProgressBar key={comp.name} name={comp.name} value={comp.value} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex-1 w-full">
            {competencesRight.map((comp) => (
              <ProgressBar key={comp.name} name={comp.name} value={comp.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
