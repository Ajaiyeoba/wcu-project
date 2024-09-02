import React, { useState } from "react";
import { Route, Link, NavLink } from "react-router-dom";
import {
  Link2Icon,
  SettingsIcon,
  ArrowDownIcon,
  GalleryVerticalIcon,
} from "lucide-react";
import { Transition } from "@windmill/react-ui";

const routes = [
  {
    path: "/",
    icon: <Link2Icon />,
    title: "Dashboard",
  },
  {
    path: "/",
    icon: <GalleryVerticalIcon />,
    title: "Gallery",
  },
  {
    path: "/",
    icon: <Link2Icon />,
    title: "Amazon Arbitrage ",
    routes: [
      {
        path: "/",
        title: "Intro to Amazon Arbitrage ",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Amazon Arbitrage ",
      },
    ],
  },
  {
    path: "/",
    icon: <Link2Icon />,
    title: "Amazon FBA",
    routes: [
      {
        path: "/",
        title: "Intro to Amazon FBA ",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Amazon FBA ",
      },
    ],
  },
  {
    path: "/",
    icon: <Link2Icon />,
    title: "Ebay ",
    routes: [
      {
        path: "/",
        title: "Intro to Ebay ",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Ebay ",
      },
    ],
  },
  {
    path: "/",
    icon: <Link2Icon />,
    title: "Ghostwriting ",
    routes: [
      {
        path: "/",
        title: "Intro to Ghostwriting ",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Ghostwriting",
      },
    ],
  },
  {
    path: "/",
    icon: <Link2Icon />,
    title: "Content Creation ",
    routes: [
      {
        path: "/",
        title: "Intro to Content Creation ",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Content Creation ",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "Web Design ",
    routes: [
      {
        path: "/",
        title: "Intro to Web Design ",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Web Design",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "Affiliate Marketing ",
    routes: [
      {
        path: "/",
        title: "Intro to Affiliate Marketing ",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Affiliate Marketing ",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "E-commerce Business (Branded)  ",
    routes: [
      {
        path: "/",
        title: "Intro to Ecommerce Business (Branded) ",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for ECBB  ",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "E-commerce Business (Non-Branded) ",
    routes: [
      {
        path: "/",
        title: "Intro to  E-commerce Business (Non-Branded)",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for E-commerce Business (Non-Branded)  ",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "Fortune Course Creation ",
    routes: [
      {
        path: "/",
        title: "Intro to  Fortune Course Creation",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Fortune Course Creation  ",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "Community Membership Mastery ",
    routes: [
      {
        path: "/",
        title: "Intro to  Community Membership Mastery",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Community Membership Mastery  ",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "Course Creation Growth Agency ",
    routes: [
      {
        path: "/",
        title: "Intro to  Course Creation Growth Agency",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Course Creation Growth Agency  ",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "Digital Marketing Agency  ",
    routes: [
      {
        path: "/",
        title: "Intro to  Digital Marketing Agency ",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Digital Marketing Agency   ",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "Social Media Marketing Agency",
    routes: [
      {
        path: "/",
        title: "Intro to  Social Media Marketing Agency",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Social Media Marketing Agency ",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "Video Editing Agency",
    routes: [
      {
        path: "/",
        title: "Intro to  Video Editing Agency",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Video Editing Agency ",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "Advertising Agency ",
    routes: [
      {
        path: "/",
        title: "Intro to  Advertising Agency ",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Advertising Agency  ",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "Niche Specialist Consultancy ",
    routes: [
      {
        path: "/",
        title: "Intro to  Niche Specialist Consultancy ",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Niche Specialist Consultancy  ",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "Niche Specialist Coaching ",
    routes: [
      {
        path: "/",
        title: "Intro to  Niche Specialist Coaching ",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Niche Specialist Coaching  ",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "Online Tutoring ",
    routes: [
      {
        path: "/",
        title: "Intro to  Online Tutoring ",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Online Tutoring  ",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "Freelancing ",
    routes: [
      {
        path: "/",
        title: "Intro to  Freelancing ",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Freelancing  ",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "Tiktok Business ",
    routes: [
      {
        path: "/",
        title: "Intro to  Tiktok Business ",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Tiktok Business  ",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "Social Media Leverage ",
    routes: [
      {
        path: "/",
        title: "Intro to  Social Media Leverage ",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Social Media Leverage  ",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "AI ",
    routes: [
      {
        path: "/",
        title: "Intro to  AI ",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for AI  ",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "Niche Specialist Entrepreneurship ",
    routes: [
      {
        path: "/",
        title: "Intro to  Niche Specialist Entrepreneurship ",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Niche Specialist Entrepreneurship  ",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "Marketing Masterclass ",
    routes: [
      {
        path: "/",
        title: "Intro to  Marketing Masterclass ",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Marketing Masterclass  ",
      },
    ],
  },
  {
    icon: <Link2Icon />,
    title: "Networking Masterclass ",
    routes: [
      {
        path: "/",
        title: "Intro to  Networking Masterclass ",
      },
      {
        path: "/",
        title: "Course Outline",
      },
      {
        path: "/",
        title: "Materials  for Networking Masterclass  ",
      },
    ],
  },
  
];

function SidebarContent({ route }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (path) => {
    setOpenDropdown(openDropdown === path ? null : path);
  };
  return (
    <div className="py-4 overflow-auto  bg-gray-300 text-purple dark:text-gray-400">
      <a
        className="ml-6 text-lg font-bold text-purple-600 dark:text-gray-200"
        href="#"
      >
        WCU
      </a>

      <ul className="mt-6">
        {routes.map((route) => (
          <React.Fragment key={route.title}>
            {route.routes ? (
              <li className="relative px-6 py-3">
                <button
                  className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  onClick={() => handleDropdownClick(route.title)}
                  aria-haspopup="true"
                >
                  <span className="inline-flex items-center">
                    {route.icon && (
                      <span className="w-5 h-5">{route.icon}</span>
                    )}
                    <span className="ml-4">{route.title}</span>
                  </span>
                  <ArrowDownIcon className="w-4 h-4" aria-hidden="true" />
                </button>
                <Transition
                  show={openDropdown === route.title}
                  enter="transition-all ease-in-out duration-300"
                  enterFrom="opacity-25 max-h-0"
                  enterTo="opacity-100 max-h-xl"
                  leave="transition-all ease-in-out duration-300"
                  leaveFrom="opacity-100 max-h-xl"
                  leaveTo="opacity-0 max-h-0"
                >
                  <ul
                    className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
                    aria-label="submenu"
                  >
                    {route.routes.map((subRoute) => (
                      <li
                        className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                        key={subRoute.title}
                      >
                        <Link className="w-full" to={subRoute.path}>
                          {subRoute.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Transition>
              </li>
            ) : (
              <li className="relative px-6 py-3" key={route.title}>
                <NavLink
                  to={route.path}
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-gray-800 dark:text-gray-100"
                >
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                  {route.icon && <span className="w-5 h-5">{route.icon}</span>}
                  <span className="ml-4">{route.title}</span>
                </NavLink>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default SidebarContent;
