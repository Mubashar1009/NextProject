import Image from "next/image";
import React from "react";
import ProfileImage from "@/assets/images/Ellipse 22.png";
import { Cross, Correct } from "@/assets/svgs/index";

const ProfileDetailData =  [
    {
        image: <Image src={ProfileImage} alt="Profile Image" width={50} height={50} />,
        name: "Huzafa",
        phoneNumber: 4354354252,
        email: "abce@gmail.com",
        status: "Received",
        color : "#148C00"
    },
    {
        image: <Image src={ProfileImage} alt="Profile Image" width={50} height={50} />,
        name: "Huzafa",
        phoneNumber: 4354354252,
        email: "abce@gmail.com",
        status: "Received",
        color: "#148C00"
    },
    {
        image: <Image src={ProfileImage} alt="Profile Image" width={50} height={50} />,
        name: "Huzafa",
        phoneNumber: 4354354252,
        email: "abce@gmail.com",
        status: "Pending",
        color:"#E39A0A"
    },
    {
        image: <Image src={ProfileImage} alt="Profile Image" width={50} height={50} />,
        name: "Huzafa",
        phoneNumber: 4354354252,
        email: "abce@gmail.com",
        status: "Received",
        color:"#148C00"
    },
];

export const ProfitDetail = () => {
  return (
    <div className="bg-white rounded-2xl ">
      {ProfileDetailData.map((detail, index) => (
        <div key={index} className="p-6 flex gap-4 items-center">
          <div>{detail.image}</div>
          <div className="flex flex-col">
            <p className="text-[#282828] text-base font-light">{detail.name}</p>
            <p className="text-[#989898] text-[13px] leading-[16.2px]">{detail.email}</p>
          </div>
          <div className={`w-2.5 h-2.5 rounded-full bg-${detail.color}`}></div>
          <div>
            <div className="text-[#282828] text-base font-normal">+25$</div>
            <div className="text-[#989898] leading-[16.5px] font-light text-[13px] ">{detail.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
};


