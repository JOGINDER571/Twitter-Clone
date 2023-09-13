import React from "react";
import Image from "next/image";
import { FiMessageCircle } from "react-icons/fi";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { CiViewBoard } from "react-icons/ci";
import { FiUpload } from "react-icons/fi";
export default function FeedCard() {
  return (
    <div className="border border-l-0 border-l-0 border-b-0 border-gray-600 p-4 hover:bg-slate-400 transition-all">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-1">
          <Image
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/60051901?v=4"
            alt="user-img"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11 cursor-pointer">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
          repudiandae, atque aliquam qui iure nobis labore quo aspernatur ipsam
          facilis quaerat recusandae dicta maiores corporis dolorum culpa
          possimus ab modi?
          <div className="flex justify-between mt-1">
            <div>
              <FiMessageCircle />
            </div>
            <div>
              <AiOutlineRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <CiViewBoard />
            </div>
            <div>
              <FiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
