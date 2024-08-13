import React from "react";
import {IdCardIcon, BadgeDollarSignIcon,
  ShellIcon,
  BellElectricIcon, CircleOffIcon,
  DollarSignIcon
}
from 'lucide-react'

const products = [
  {
    id: 1,
    name: "Affiliate Marketing",
    href: "/",
    price: "$35",
    icon: <IdCardIcon />,
  },
  {
    id: 2,
    name: "Ebay Business",
    href: "/",
    price: "$35",
    icon: <DollarSignIcon />,
  },
  {
    id: 3,
    name: "Amazon FBA",
    href: "/",
    price: "$35",
    icon: <ShellIcon />,
  },
  {
    id: 4,
    name: "Amazon Arbotrage",
    href: "/",
    price: "$35",
    icon: <BellElectricIcon />,
  },
  {
    id: 5,
    name: " E-commerce Business (Branded)",
    href: "/",
    price: "$35",
    icon: <BuildingStorefrontIcon />,
  },
  {
    id: 6,
    name: "E-commerce Business (Non-Branded) ",
    href: "/",
    price: "$35",
    icon: <PresentationChartLineIcon />,
  },
  {
    id: 7,
    name: "Content  Creation",
    href: "/",
    price: "$35",
    icon: <CircleOffIcon />,
  },
  {
    id: 8,
    name: "Copyrighting",
    href: "/",
    price: "$35",
  },
  {
    id: 9,
    name: "Ghost Writing",
    href: "/",
    price: "$35",
  },
  {
    id: 10,
    name: "Digital Marketing Agency",
    href: "/",
    price: "$35",
  },
  {
    id: 11,
    name: "Social Media Marketing Agency",
    href: "/",
    price: "$35",
  },
  {
    id: 12,
    name: "Vidoe Marketing Agency",
    href: "/",
    price: "$35",
  },
  {
    id: 13,
    name: "Web Design  Agency",
    href: "/",
    price: "$35",
  },
  {
    id: 14,
    name: "Advertising Agency",
    href: "/",
    price: "$35",
  },
  {
    id: 15,
    name: "Niche Specialist Consultancy",
    href: "/",
    price: "$35",
  },
  {
    id: 16,
    name: "Niche Specialist Coaching",
    href: "/",
    price: "$35",
  },
  {
    id: 17,
    name: "Fortune Course Creation ",
    href: "/",
    price: "$35",
  },
  {
    id: 18,
    name: "Community Membership Mastery",
    href: "/",
    price: "$35",
  },
  {
    id: 19,
    name: "Course Creation Growth Agency (CCGA)",
    href: "/",
    price: "$35",
  },
  {
    id: 20,
    name: "Online Tutoring",
    href: "/",
    price: "$35",
  },
  {
    id: 21,
    name: "Freelancing",
    href: "/",
    price: "$35",
  },
  {
    id: 22,
    name: "Tiktok Business",
    href: "/",
    price: "$35",
  },
  {
    id: 23,
    name: "Social Media Leverage",
    href: "/",
    price: "$35",
  },
  {
    id: 24,
    name: "AI",
    href: "/",
    price: "$35",
  },
  {
    id: 25,
    name: "Niche Specialist Entrepreneurship",
    href: "/",
    price: "$35",
  },
  {
    id: 26,
    name: "Marketing Masterclass",
    href: "/",
    price: "$35",
  },
  {
    id: 27,
    name: "Networking Masterclass",
    href: "/",
    price: "$35",
  },
  // More products...
];

function Campuses() {
  return (
    <>
      <p className="mt-6 text-lg leading-8 text-custom-ter text-center" data-aos="fade-down">
        Our campuses are all high cash flow based income models
      </p>


      <div className="  ml-5 mr-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative ">
            <div data-aos="zoom-in-up" className="mt-4 flex  border-2  rounded-md ring-custom-sec justify-center p-4  hover:shadow-md-custom-sec">
              <div>
                <h3 className="text-base text-custom-ter hover:-translate-y-1 hover:scale-110 duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-ter ">
                  <a href={product.href} className="text-custom-sec">
                    <span
                      aria-hidden="true"
                      className="  text-custom-ter hover:transition ease-in-out duration-300 hover:text-custom-sec hover:rotate-180"
                    >
                      {" "}
                      {product.icon}
                    </span>
                    <span aria-hidden="true" className=" inset-0 text-custom-sec" />
                    {product.name}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </>
  );
}

export default Campuses;
