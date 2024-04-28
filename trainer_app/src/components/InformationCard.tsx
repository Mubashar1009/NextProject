import React from "react";
import { Package, Person, StopWatch, Trainer } from "@/assets/svgs/index";

const infromationData = [
  {
    amount: 250,
    title: "Total Users",
    icon: <Person />,
  },
  {
    amount: 50,
    title: "Trainers",
    icon: <Trainer />,
  },
  {
    amount: 10,
    title: "Packages Sold",
    icon: <Package />,
  },
  {
    amount: 10,
    title: "Session",
    icon: <StopWatch />,
  }
];

export const InformationCard = () => {
  return (
    <div className="flex gap-[33px]">
      {infromationData.map((detail, index) => (
        <div key={index} className="rounded-2xl bg-white px-9 py-3.5 flex gap-4 justify-center items-center">
          <div>{detail.icon}</div>
          <div className="flex flex-col">
            <h3 className="font-semibold leading-[45px] text-4xl text-black">
              {detail.amount}
            </h3>
            <p className="text-xl text-[#222222]">{detail.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

