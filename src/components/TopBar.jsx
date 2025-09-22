"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const TopBar = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Day + Date + Month
      const day = now.toLocaleDateString("en-US", { weekday: "short" }); 
      const date = now.getDate(); // 1
      const month = now.toLocaleDateString("en-US", { month: "short" }); 

      // Time
      const time = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }); 

      setDateTime(`${day} ${date} ${month} ${time.replace(" ", "")}`);
    };

    updateDateTime(); // run once immediately
    const interval = setInterval(updateDateTime, 60000); // update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative border-b border-[#FFFFFF0D] py-[10px] text-white bg-stripes">
        <div className="mx-[110px] flex justify-between items-center">
          <h2 className="text-[16px]">{dateTime}</h2>
          <h1 className="text-center font-bold text-[20px] tracking-wide">
            The 49TH STREET
          </h1>
          <div className="flex items-center gap-[3px]">
            <Image
              src="/icons/spotify.svg"
              alt="spotify Icon"
              width={24}
              height={24}
              className="inline-block mr-2"
            />
            <h2 className="text-[16px]">Listen To Our New Music Playlist</h2>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TopBar;



