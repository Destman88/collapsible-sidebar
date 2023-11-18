"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  MdContactPage,
  MdMail,
  MdPeople,
  MdSpaceDashboard,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const sidebarItems = [
  {
    name: "Dashboard",
    link: "/",
    icon: <MdSpaceDashboard />,
  },
  {
    name: "About",
    link: "/about",
    icon: <MdPeople />,
  },
  {
    name: "Mails",
    link: "/mails",
    icon: <MdMail />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <MdContactPage />,
  },
];

export default function Sidebar() {
  const [isCollapsedSidebar, setIsCollapsedSidebar] = useState<boolean>(
    localStorage.getItem("isCollapsedSidebar")
      ? JSON.parse(localStorage.getItem("isCollapsedSidebar")!)
      : false
  );

  useEffect(() => {
    localStorage.setItem(
      "isCollapsedSidebar",
      JSON.stringify(isCollapsedSidebar)
    );
  }, [isCollapsedSidebar]);

  const toggleSidebarCollapseHandler = () => {
    setIsCollapsedSidebar((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <button className="btn_sidebar" onClick={toggleSidebarCollapseHandler}>
        <MdOutlineKeyboardArrowLeft />
      </button>
      <aside className="sidebar" data-collapse={isCollapsedSidebar}>
        <div className="sidebar_top">
          <Image
            src="/logo.png"
            width={80}
            height={80}
            className="sidebar_logo"
            alt="logo"
          />
          <p className="pl-2 font-bold text-xl sidebar_logo_name">
            Dmaitland Dev
          </p>
        </div>
        <ul className="sidebar_list">
          {sidebarItems.map((item) => (
            <li className="sidebar_item" key={item.name}>
              <Link href={item.link} className="sidebar_link">
                <div className="sidebar_icon">{item.icon}</div>
                <span className="sidebar_name">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
