"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const headlines = [
  "FAVE REACHES NUMBER 1 ON UGANDA CHARTS",
  "BURNA BOY PULLS 20K AS HE SHUTS DOWN FRANCE",
  "REMA SET TO RELEASE DEBUT ALBUM ‘RAVES AND ROSES’",
  "DAVIDO ANNOUNCES WORLD TOUR 2025",
  "AYRA STARR WINS BEST FEMALE ARTIST IN AFRICA",
];

export default function HeadlineTicker() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const clone = container.innerHTML;
      container.innerHTML += clone; // duplicate content for seamless loop
    }
  }, []);

  return (
    <div className="relative bg-[#F2F2F2] mx-[110px] text-[#000] text-sm  border-gray-200 overflow-hidden">
      <div className="flex items-center py-[15px]">
        {/* "What's Hot?" label */}
        <div className="absolute left-0 top-0 h-full flex items-center gap-[4px] px-[8px] bg-[#f2f2f2] z-10">
            <Image
            src="/icons/frame.svg"
            alt="Fire Icon"
            width={24}
            height={24}
          />
          <p className="uppercase text-[12px] font-[500]">What's Hot?</p>
        </div>

        {/* Marquee */}
        <div
          ref={containerRef}
          className="flex gap-[20px] text-[12px] font-[400] text-[#6B6B6B] animate-marquee whitespace-nowrap pl-[120px]"
        >
          {headlines.map((headline, i) => (
            <p key={i} className="flex  items-center gap-[12px] px-[6px">
              {headline}
              {i !== headlines.length - 1 && (
                <span className="text-[#000]"> •</span>
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}


