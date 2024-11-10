"use client";
import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div>
      <section className="flex justify-between w-[100%] h-screen ">
        <div>
          <h1 className="mt-[316px] ml-[176px] font-bold text-[40px] font-serif text-black leading-[65.8px] tracking-[2.5%]">
            IMPECCABLE
            <br /> CRAFTSMANSHIP AND
            <br />
            FINESSE
          </h1>

          <p className="w-[902px] h-[147px] mt-[28px] ml-[171px] font-medium text-3xl text-customColor">
            An example of intricate workmanship and detail, elegant
            <br />
            necklaces and long and short chains form a part of our desirable
            collection.
          </p>

          <button className="w-[288px] h-[58px] mt-[50px] ml-[176px] font-medium text-3xl text-white bg-customColor leading-[37.5px] p-[10px] rounded-[10px] gap-[10px]">
            Explore Now
          </button>
        </div>

        <div className="md:w-[490px] h-[667px] flex justify-end border-white relative 0 rounded-tr-[50px] mt-[64px] mr-[266px]">
          <Image
            src={"/myimage/girl.jpg"}
            alt="girlpic"
            height={647}
            width={830}
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
