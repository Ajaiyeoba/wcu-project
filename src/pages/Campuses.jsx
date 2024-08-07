import React from "react";
import {
  BanknotesIcon,
  CalendarDaysIcon,
  ShieldExclamationIcon,
  BuildingStorefrontIcon,
  PresentationChartLineIcon
} from "@heroicons/react/20/solid";

const products = [
  {
    id: 1,
    name: "Affiliate Marketing",
    href: "#",
    price: "$35",
    icon: <BanknotesIcon />,
  },
  {
    id: 2,
    name: "Ebay Business",
    href: "#",
    price: "$35",
    icon: <CalendarDaysIcon />,
  },
  {
    id: 3,
    name: "Amazon FBA",
    href: "#",
    price: "$35",
    icon: <ShieldExclamationIcon />,
  },
  {
    id: 4,
    name: "Amazon Arbotrage",
    href: "#",
    price: "$35",
    icon: <ShieldExclamationIcon />,
  },
  {
    id: 5,
    name: " E-commerce Business (Branded)",
    href: "#",
    price: "$35",
    icon: <BuildingStorefrontIcon />,
  },
  {
    id: 6,
    name: "E-commerce Business (Non-Branded) ",
    href: "#",
    price: "$35",
    icon: <PresentationChartLineIcon />
  },
  {
    id: 7,
    name: "Content  Creation",
    href: "#",
    price: "$35",
    icon: <BuildingStorefrontIcon />,
  },
  {
    id: 8,
    name: "Copyrighting",
    href: "#",
    price: "$35",
  },
  {
    id: 9,
    name: "Ghost Writing",
    href: "#",
    price: "$35",
  },
  {
    id: 10,
    name: "Digital Marketing Agency",
    href: "#",
    price: "$35",
  },
  {
    id: 11,
    name: "Social Media Marketing Agency",
    href: "#",
    price: "$35",
  },
  {
    id: 12,
    name: "Vidoe Marketing Agency",
    href: "#",
    price: "$35",
  },
  {
    id: 13,
    name: "Web Design  Agency",
    href: "#",
    price: "$35",
  },
  {
    id: 14,
    name: "Advertising Agency",
    href: "#",
    price: "$35",
  },
  {
    id: 15,
    name: "Niche Specialist Consultancy",
    href: "#",
    price: "$35",
  },
  {
    id: 16,
    name: "Niche Specialist Coaching",
    href: "#",
    price: "$35",
  },
  {
    id: 17,
    name: "Fortune Course Creation ",
    href: "#",
    price: "$35",
  },
  {
    id: 18,
    name: "Community Membership Mastery",
    href: "#",
    price: "$35",
  },
  {
    id: 19,
    name: "Course Creation Growth Agency (CCGA)",
    href: "#",
    price: "$35",
  },
  {
    id: 20,
    name: "Online Tutoring",
    href: "#",
    price: "$35",
  },
  {
    id: 21,
    name: "Freelancing",
    href: "#",
    price: "$35",
  },
  {
    id: 22,
    name: "Tiktok Business",
    href: "#",
    price: "$35",
  },
  {
    id: 23,
    name: "Social Media Leverage",
    href: "#",
    price: "$35",
  },
  {
    id: 24,
    name: "AI",
    href: "#",
    price: "$35",
  },
  {
    id: 25,
    name: "Niche Specialist Entrepreneurship",
    href: "#",
    price: "$35",
  },
  {
    id: 26,
    name: "Marketing Masterclass",
    href: "#",
    price: "$35",
  },
  {
    id: 27,
    name: "Networking Masterclass",
    href: "#",
    price: "$35",
  },
  // More products...
];

function Campuses() {
  return (
    <>
      <div
        id="campuses"
        className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
      >
        <h2 className="text-2xl font-bold text-center tracking-tight text-custom-sec">
          Campuses
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              {/* <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div> */}
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-base text-custom-ter hover:-translate-y-1 hover:scale-110 duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-ter ">
                    <a href={product.href}>
                      <span  className=" w-2 h-2 text-custom-ter hover:transition ease-in-out duration-300 hover:text-custom-sec hover:rotate-180"
                      >
                        {" "}
                        {product.icon}
                      </span>
                      <span aria-hidden="true" className=" inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Campuses;
