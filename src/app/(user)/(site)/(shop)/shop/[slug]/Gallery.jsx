"use client";
import Image from "next/image";
import React, { useState } from "react";

function Gallery({ gallery }) {
  const [selected, setSelected] = useState(2);

  return (
    <div>
      <div className="mx-auto relative md:w-[492px] md:h-[360px] w-[296px] h-[232px]">
        <Image
          src={gallery[selected].address}
          fill
          style={{
            objectFit: "contain",
          }}
          alt=""
          className="rounded-btn mx-auto"
        />
      </div>
      <div className="mt-6 flex items-center lg:justify-center gap-4 max-xl:justify-center max-lg:gap-2">
        {gallery.map((src, index) => {
          return (
            <div
              onClick={() => setSelected(index)}
              key={index}
              className={`${
                selected === index ? "p-2 border-primary-500" : ""
              }  rounded-btn border-2 border-color-primary duration-100 lg:w-[148px] lg:h-[124px] flex items-center justify-center w-[96px] h-[64px]`}
            >
              <Image src={src.address} width={148} height={124} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
