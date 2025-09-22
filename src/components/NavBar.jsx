"use client";
import { useState } from "react";
import Image from "next/image";

const navItems = [
  { id: "feed", label: "Feed", icon: "/icons/feed.svg" },
  { id: "orange-mag", label: "Orange Mag", icon: "/icons/orange-mag.svg" },
  { id: "music", label: "Music", icon: "/icons/music.svg" },
  { id: "fashion", label: "Fashion", icon: "/icons/fashion.svg" },
  { id: "sports", label: "Sports", icon: "/icons/sport.svg" },
  { id: "news", label: "News", icon: "/icons/news.svg" },
  { id: "lifestyle", label: "Lifestyle", icon: "/icons/lifestyle.svg" },
  { id: "tech", label: "Tech", icon: "/icons/tech.svg" },
  { id: "creative-hub", label: "Creative Hub", icon: "/icons/creative.svg" },
  { id: "shop", label: "Shop", icon: "/icons/shop.svg" },
];

export default function Navbar() {
  const [active, setActive] = useState("feed");

  return (
    <nav className="mx-[110px] py-[16px]">
      <ul className="flex justify-center space-x-[49.33px]">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className="flex items-center text-[12px] gap-[4px] cursor-pointer transition"
          >
            {/* Icon */}
            <Image
              src={item.icon}
              alt={item.label}
              width={22}
              height={22}
              className={`transition ${
                active === item.id ? "opacity-100" : "opacity-50"
              }`}
            />

            {/* Label */}
            <span
              className={`text-sm transition ${
                active === item.id
                  ? "text-orange-500 font-semibold"
                  : "text-[#ffffff]/70"
              }`}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}


