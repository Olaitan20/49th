"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/Rema.png",
    title: "A Bold New Sound for Afrobeats",
    subtitle: "/// MUSIC SPOTLIGHT",
    details: "BY TEAM EDITORIAL • MUSIC • 1 HR AGO",
  },
  {
    image: "/images/wizkid.png",
    title: "The Visual Storytelling Behind ‘Stubborn’",
    subtitle: "/// CREATIVE ARTS",
    details: "BY JANE DOE • ARTS • 2 HRS AGO",
  },
  {
    image: "/images/wizkid.png",
    title: "The Visual Storytelling Behind ‘Stubborn’",
    subtitle: "/// CREATIVE ARTS",
    details: "BY JANE DOE • ARTS • 2 HRS AGO",
  },
];

const news = [
  {
    title: "‘Everybody Loves Jenifa’ Becomes Highest Grossing Nigerian Movie Off All Time",
    author: "ZIA TIFFAH",
    category: "NEWS",
    time: "1 HR AGO",
  },
  {
    title: "Fuel Price Reaches A New All Time High",
    author: "REUBEN ADEWALE",
    category: "NEWS",
    time: "1 HR AGO",
  },
  {
    title: "Here Are 5 Things You Should Know Before Investing In Cryptocurrency",
    author: "FISAYO FOSUDO",
    category: "CREATIVE HUB",
    time: "2 HR AGO",
  },
  {
    title: "Llona Is Breakout Star For The Year",
    author: "CHIBBY",
    category: "MUSIC",
    time: "2 HR AGO",
  },
  {
    title: "Llona Is Breakout Star For The Year",
    author: "CHIBBY",
    category: "MUSIC",
    time: "2 HR AGO",
  },
  {
    title: "Llona Is Breakout Star For The Year",
    author: "CHIBBY",
    category: "MUSIC",
    time: "2 HR AGO",
  },
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextSlide = () => {
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setAnimating(false);
    }, 500);
  };

  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [paused, index]);

  return (
    <div className="mx-[110px] mb-[-15%] mt-6 flex gap-[8px] text-white">
      {/* Left: Slideshow */}
      <div
        className="relative w-[826px] h-[700px] overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            animating ? "opacity-0 translate-x-12" : "opacity-100 translate-x-0"
          }`}
        >
          <img
            src={slides[index].image}
            alt={slides[index].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <p className="text-[12px] font-[400] my-[8px] uppercase tracking-widest text-[#FFFFFF80]">
              {slides[index].subtitle}
            </p>
            <p className="text-[14px] font-[600]">{slides[index].title}</p>
            <p className="text-[12px] mt-[8px] text-[#FFFFFF80]">
              {slides[index].details}
            </p>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 w-full flex justify-center space-x-3">
          {slides.map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden"
            >
              {i === index && (
                <div
                  className="h-2 bg-white rounded-full"
                  style={{
                    width: `${progress}%`,
                    transition: "width 0.1s linear",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right: News List */}
      <div className="flex-1 flex flex-col p-[10px]">
        {news.map((item, i) => (
          <div
            key={i}
            className=" my-[15px] pb-4 cursor-pointer hover:opacity-80 transition"
          >
            <p className="text-[14px]  font-[600] line-clamp-1">{item.title}</p>
            <p className="text-[12px] text-[#FFFFFF80] mt-[8px]">
              {item.author} •  {item.category} •  {item.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

