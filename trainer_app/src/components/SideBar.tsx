'use client'
import React, { useState } from "react";
import Link from "next/link";
import {
  Slider,
  Connection,
  Feedback,
  LogoutIcon,
  Menu,
  QuestionMark,
  User,
  Welcome,
  UserSelected,
  FeedbackSelected,
  MenuSelected,
  QuestionMarkSelected,
  SliderSelected,
  RunnerSelected,
  Runner,
  Wallet,
  WalletSelected,
  ConnectionSelected,
} from "@/assets/svgs/index";

const NavIconsData = [
  {
    id: 0,
    icon: Menu,
    link: "/",
    iconSelected: MenuSelected,
  },
  {
    id: 1,
    icon: User,
    link: "/user",
    iconSelected: UserSelected,
  },
  {
    id: 2,
    icon: Runner,
    link: "/runner",
    iconSelected: RunnerSelected,
  },
  {
    id: 3,
    icon: Wallet,
    link: "/wallet",
    iconSelected: WalletSelected,
  },
  {
    id: 4,
    icon: QuestionMark,
    link: "/questionmark",
    iconSelected: QuestionMarkSelected,
  },
  {
    id: 5,
    icon: Feedback,
    link: "/feedback",
    iconSelected: FeedbackSelected,
  },
  {
    id: 6,
    icon: Connection,
    link: "/connection",
    iconSelected: ConnectionSelected,
  },

  {
    id: 7,
    icon: Slider,
    link: "/slider",
    iconSelected: SliderSelected,
  },
];

export const SideBar = () => {
  const [showNavColor, setShowNavColor] = useState(0);
   console.log("Hi");
  const handleNavigation = (id: number) => {
    setShowNavColor(id);
  };

  return (
    <div className="flex flex-col gap-9 justify-center items-center">
      {NavIconsData.map((detail, index) => (
        <Link
          key={detail.id}
          href={detail.link}
          className={`${
            showNavColor === detail.id
              ? "bg-[#C38BFF] w-10 h-10 flex justify-center items-center rounded-xl"
              : ""
          }`}
          onClick={() => handleNavigation(detail.id)}
        >
          {showNavColor === detail?.id ? (
            <detail.iconSelected /> 
         
          ) : (
            <detail.icon />
          )}
        </Link>
      ))}
    </div>
  );
};
