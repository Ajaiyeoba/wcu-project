import { useContext } from "react"
import React, {useState} from 'react'
import Logo from '../../assets/logo.jpg'
 import { BellAlertIcon,
  MagnifyingGlassIcon, Bars3Icon,
  BellIcon, SunIcon, MoonIcon,
  UserIcon, ArrowLeftEndOnRectangleIcon,
   Cog6ToothIcon, UserCircleIcon,
  } from "@heroicons/react/20/solid"
  import SidebarContent from "./SidebarContent"
function Header() {
  // const { mode, toggleMode } = useContext(WindmillContext)
  // const { toggleSidebar } = useContext(SidebarContext)
  
  // const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false)
  // const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
 
  return (
    <div>
          <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          // onClick={toggleSidebar}
          aria-label="Menu"
        >
          <Bars3Icon className="w-6 h-6" aria-hidden="true" />
    </button>

    <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          <li className="flex"> 
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              // onClick={toggleMode}
              aria-label="Toggle color mode"
            >
              {/* {mode === 'dark' ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )} */}

              <SunIcon  className="w-5 h-5" aria-hidden="true"/>
                <MoonIcon className="w-5 h-5" aria-hidden="true"/>
            </button>
          </li>
          <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              // onClick={handleNotificationsClick}
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <BellAlertIcon className="w-5 h-5" aria-hidden="true" />
              {/* <!-- Notification badge --> */}
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button>

            <div
              align="right"
              // isOpen={isNotificationsMenuOpen}
              // onClose={() => setIsNotificationsMenuOpen(false)}
            >
              <div tag="a" href="#" className="justify-between">
                <span>Messages</span>
                <span type="danger">13</span>
              </div>
              <div tag="a" href="#" className="justify-between">
                <span>Sales</span>
                <span type="danger">2</span>
              </div>
              {/* <div onClick={() => alert('Alerts!')}>
                <span>Alerts</span>
              </div> */}
            </div>
          </li>
          <li className="relative">
            <button
              className="rounded-full focus:shadow-outline-purple focus:outline-none"
              // onClick={handleProfileClick}
              aria-label="Account"
              aria-haspopup="true"
            >
              <img
                className="align-middle w-6 h-6"
                src={Logo}
                alt=""
                aria-hidden="true"
              />
            </button>
              </li>
            
             <div
              align="right"
              // isOpen={isProfileMenuOpen}
              onClose={() => setIsProfileMenuOpen(false)}
            >
              <div tag="a" href="#">
                <UserCircleIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Profile</span>
              </div>
              <div tag="a" href="#">
                <Cog6ToothIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Settings</span>
              </div>
              <div onClick={() => alert('Log out!')}>
                <ArrowLeftEndOnRectangleIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Log out</span>
              </div>
            </div>
          </ul>
        
      </div>
    </header>


    <SidebarContent />
    </div>

   
  )
}

export default Header
