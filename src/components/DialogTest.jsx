import React from 'react'
import {
  IdCardIcon, BadgeDollarSignIcon, ShellIcon,
  BellElectricIcon, CircleOffIcon, DollarSignIcon,
  SquarePenIcon, PencilIcon, PenLineIcon, StoreIcon,
  SparkleIcon, VideoIcon, BracesIcon,
  MegaphoneIcon, ScreenShareIcon, ScreenShareOffIcon, 
  HeaterIcon, PresentationIcon, LayoutDashboardIcon,
  Users2Icon, LoaderPinwheelIcon,
} from 'lucide-react';
// import {Dialog, DialogPanel} from '@headlessui/react'
import Navbar from '../components/Navbar'

const campuses = [
    {
      id: 1,
      name: "Affiliate Marketing",
      href: "/",
      price: "$35",
      icon: <IdCardIcon />,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 2,
      name: "Ebay Business",
      href: "/",
      price: "$35",
      icon: <DollarSignIcon />,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 3,
      name: "Amazon FBA",
      href: "/",
      price: "$35",
      icon: <ShellIcon />,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 4,
      name: "Amazon Arbotrage",
      href: "/",
      price: "$35",
      icon: <BellElectricIcon />,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 5,
      name: " E-commerce Business (Branded)",
      href: "/",
      price: "$35",
      icon: <CircleOffIcon />,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 6,
      name: "E-commerce Business (Non-Branded) ",
      href: "/",
      price: "$35",
      icon: <BadgeDollarSignIcon />,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 7,
      name: "Content  Creation",
      href: "/",
      price: "$35",
      icon: <SquarePenIcon />,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 8,
      name: "Copyrighting",
      href: "/",
      price: "$35",
      icon: <PencilIcon/>,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 9,
      name: "Ghost Writing",
      href: "/",
      price: "$35",
      icon: <PenLineIcon />,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 10,
      name: "Digital Marketing Agency",
      href: "/",
      price: "$35",
      icon: <StoreIcon/>,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 11,
      name: "Social Media Marketing Agency",
      href: "/",
      price: "$35",
      icon: <SparkleIcon/>,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 12,
      name: "Video Marketing Agency",
      href: "/",
      price: "$35",
      icon: <VideoIcon/>,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 13,
      name: "Web Design  Agency",
      href: "/",
      price: "$35",
      icon: <BracesIcon/>,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 14,
      name: "Advertising Agency",
      href: "/",
      price: "$35",
      icon: <MegaphoneIcon />,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 15,
      name: "Niche Specialist Consultancy",
      href: "/",
      price: "$35",
      icon: <ScreenShareIcon/>,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 16,
      name: "Niche Specialist Coaching",
      href: "/",
      price: "$35",
      icon: <ScreenShareOffIcon/>,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 17,
      name: "Fortune Course Creation ",
      href: "/",
      price: "$35",
      icon: <HeaterIcon/>,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 18,
      name: "Community Membership Mastery",
      href: "/",
      price: "$35",
      icon: <Users2Icon/>,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 19,
      name: "Course Creation Growth Agency (CCGA)",
      href: "/",
      price: "$35",
      icon: <PresentationIcon/>,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 20,
      name: "Online Tutoring",
      href: "/",
      price: "$35",
      icon: <LayoutDashboardIcon/>,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 21,
      name: "Freelancing",
      href: "/",
      price: "$35",
      icon: <LoaderPinwheelIcon />,
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 22,
      name: "Tiktok Business",
      href: "/",
      price: "$35",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 23,
      name: "Social Media Leverage",
      href: "/",
      price: "$35",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
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
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 26,
      name: "Marketing Masterclass",
      href: "/",
      price: "$35",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
    {
      id: 27,
      name: `Networking Masterclass`,
      href: "/",
      price: "$35",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error reprehenderit necessitatibus perferendis, quia adipisci nobis iste! Molestiae iure dolor, in eaque beatae blanditiis adipisci, nihil, aliquid hic iusto nisi sit!",
    },
  ];
function DialogTest() {
  return (
   
    <div>
       <Navbar />
      <div className="text-center justify-between  pt-20 ">
        {campuses.map((campus) => (
            <div key={campus.id}  className='mt-4 flex  border-2  rounded-md ring-custom-sec justify-center p-4  hover:shadow-md-custom-sec  '>
                <h3 className=''>
                    <a href={campus.href}>
                        
                        <p className='text-indigo-800'>{campus.name}</p>
                        
                    </a>
                </h3>
            </div>
        ))};
      </div>

    </div>
  )
}

export default DialogTest
