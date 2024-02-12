import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { TwitterSiderbarButton } from "@/lib/types";
import { GoHome, GoSearch } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineMail, MdOutlineBookmarkBorder } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi2";

const sidebarMenuItems: TwitterSiderbarButton[] = [
  {
    id: 1,
    title: "Home",
    icon: <GoHome />,
  },
  {
    id: 2,
    title: "Explore",
    icon: <GoSearch />,
  },
  {
    id: 3,
    title: "Notifications",
    icon: <IoNotificationsOutline />,
  },
  {
    id: 4,
    title: "Messages",
    icon: <MdOutlineMail />,
  },
  {
    id: 5,
    title: "Bookmarks",
    icon: <MdOutlineBookmarkBorder />,
  },
  {
    id: 6,
    title: "Profile",
    icon: <HiOutlineUser />,
  },
];

const Sidebar = () => {
  return (
    <div>
      <div className="ml-4 h-fit w-fit cursor-pointer rounded-full p-3 text-3xl transition-all duration-300 hover:bg-neutral-900">
        <BsTwitterX />
      </div>
      <div className="mt-3 pl-2">
        <ul className="flex flex-col gap-4">
          {sidebarMenuItems.map((item) => (
            <li
              key={item.id}
              className="flex w-fit cursor-pointer items-center gap-3 rounded-full py-2 pl-4 pr-6 transition-all duration-300 hover:bg-neutral-900"
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-xl">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
