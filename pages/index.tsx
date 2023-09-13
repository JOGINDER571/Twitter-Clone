import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { BiHomeCircle } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiMessageAlt } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import {BsBookmark } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiMoney } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";

import React from "react";
import FeedCard from "@/components/feedCard/FeedCard";
interface TwitterSideBarButton {
  title: string;
  icon: React.ReactNode;
}
const sideBarIcon: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiSearch />,
  },
  {
    title: "Notifications",
    icon: <GrNotification />,
  },
  {
    title: "Messages",
    icon: <BiMessageAlt />,
  },
  {
    title: "Bookmark",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <CgProfile />,
  },
  {
    title: "More Options",
    icon: <SlOptions />,
  },
  
];
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12  w-screen px-56 pb-4">
        <div className="col-span-3 pt-1 px-4 ">
          <div className="text-3xl text-white hover:bg-gray-600 rounded-full p-1 cursor-pointer w-fit transition-all">
            <BsTwitter />
          </div>
          <div className="mt-2 text-xl font-semibold ">
            <ul>
              {sideBarIcon.map((item) => (
                <li key={item.title} className="flex items-center gap-2 hover:bg-slate-400 rounded-full py-2 w-fit pl-2 pr-6 cursor-pointer">
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <button className="bg-sky-500 p-3 mt-2 rounded-full w-full hover:bg-blue-500 transition-all">Post</button>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-white">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-4 "></div>
      </div>
    </div>
  );
}
