import React, { useState } from "react";
import {
  IdCardIcon, BadgeDollarSignIcon, ShellIcon,
  BellElectricIcon, CircleOffIcon, DollarSignIcon,
  SquarePenIcon, PencilIcon, PenLineIcon, StoreIcon,
  SparkleIcon, VideoIcon, BracesIcon,
  MegaphoneIcon, ScreenShareIcon, ScreenShareOffIcon,
  HeaterIcon, PresentationIcon, LayoutDashboardIcon,
  Users2Icon, LoaderPinwheelIcon,
} from "lucide-react";
import { Link } from 'react-router-dom'
const campuses = [
  {
    id: 1,
    name: "Affiliate Marketing",
    price: "$35",
    icon: <IdCardIcon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 2,
    name: "Ebay Business",
    price: "$35",
    icon: <DollarSignIcon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 3,
    name: "Amazon FBA",
    price: "$35",
    icon: <ShellIcon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 4,
    name: "Amazon Arbotrage",
    price: "$35",
    icon: <BellElectricIcon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 5,
    name: " E-commerce Business (Branded)",
    price: "$35",
    icon: <CircleOffIcon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 6,
    name: "E-commerce Business (Non-Branded) ",
    price: "$35",
    icon: <BadgeDollarSignIcon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 7,
    name: "Content  Creation",
    price: "$35",
    icon: <SquarePenIcon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 8,
    name: "Copyrighting",
    price: "$35",
    icon: <PencilIcon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 9,
    name: "Ghost Writing",
    price: "$35",
    icon: <PenLineIcon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 10,
    name: "Digital Marketing Agency",
    price: "$35",
    icon: <StoreIcon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 11,
    name: "Social Media Marketing Agency",
    price: "$35",
    icon: <SparkleIcon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 12,
    name: "Video Marketing Agency",
    price: "$35",
    icon: <VideoIcon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 13,
    name: "Web Design  Agency",
    price: "$35",
    icon: <BracesIcon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 14,
    name: "Advertising Agency",
    price: "$35",
    icon: <MegaphoneIcon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 15,
    name: "Niche Specialist Consultancy",
    price: "$35",
    icon: <ScreenShareIcon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 16,
    name: "Niche Specialist Coaching",
    price: "$35",
    icon: <ScreenShareOffIcon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 17,
    name: "Fortune Course Creation ",
    price: "$35",
    icon: <HeaterIcon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 18,
    name: "Community Membership Mastery",
    price: "$35",
    icon: <Users2Icon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 19,
    name: "Course Creation Growth Agency (CCGA)",
    price: "$35",
    icon: <PresentationIcon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 20,
    name: "Online Tutoring",
    price: "$35",
    icon: <LayoutDashboardIcon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 21,
    name: "Freelancing",
    price: "$35",
    icon: <LoaderPinwheelIcon />,
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 22,
    name: "Tiktok Business",
    price: "$35",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 23,
    name: "Social Media Leverage",
    price: "$35",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 24,
    name: "AI",
    price: "$35",
  },
  {
    id: 25,
    name: "Niche Specialist Entrepreneurship",
    price: "$35",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 26,
    name: "Marketing Masterclass",
    price: "$35",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
  {
    id: 27,
    name: `Networking Masterclass`,
    price: "$35",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
  },
];

function Campuses() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCampus, setSelectedCampus] = useState(null);

  const openModal = (campus) => {
    setSelectedCampus(campus);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCampus(null);
  };
  return (
    <>
      <p
        className="mt-6 text-poppins text-lg leading-8 text-custom-ter text-center"
        data-aos="fade-down"
      >
        Our campuses are all high cash flow based income models
      </p>

      <div className="  ml-5 mr-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {campuses.map((campus) => (
          <div key={campus.id} className="group relative ">
            <div
              data-aos="zoom-in-up"
              className="mt-4 flex  border-2 rounded-md hover:ring-indigo-600 ring-custom-sec justify-center p-4  hover:shadow-md-custom-sec"
            >
              <div>
                <h3 className="text-base text-custom-ter hover:-translate-y-1 hover:scale-110 duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-ter ">
                  <a href="#" onClick={(e) => { e.preventDefault(); openModal(campus); }} className="text-custom-sec">
                   
                    <span
                      aria-hidden="true"
                      className=" inset-0 text-custom-sec flex"
                    />
                    {campus.icon}
                    {campus.name}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* </div> */}
      {isOpen && selectedCampus && (
        <div data-aos="zoom-out" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <span>{selectedCampus.icon}</span>
            <h2 className="text-2xl font-bold mb-4">{selectedCampus.name}</h2>
            <p className="text-gray-700 mb-2"><strong>Price:</strong> {selectedCampus.price}</p>
            <p className="text-gray-700">{selectedCampus.info}</p>
            <div className="justify-between flex">
              <button data-aos="fade-right" onClick={closeModal} className="mt-4 bg-indigo-900 0 text-custom-ter px-4 py-2 rounded">Close</button>
              <Link
                to="/signup">
                <button data-aos="fade-left" className="bg-custom-sec text-custom-pri mt-4 rounded  px-4 py-2"> Signup</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Campuses;
