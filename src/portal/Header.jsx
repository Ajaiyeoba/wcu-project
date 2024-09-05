
import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase/Firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import {
  WindmillContext,
  Input,
  Dropdown,
  DropdownItem,
  Badge,
} from "@windmill/react-ui";
import {
  MenuIcon,
  SearchIcon,
  SunIcon,
  MoonIcon,
  BellIcon,
  UserIcon,
  SettingsIcon,
  ArrowLeftCircleIcon,
} from "lucide-react";
import Sidebar from "../components/Sidebar";



function Header() {

  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("user not logged in");
        toast.error("Uer not loggedin", {
          position: "top-center"
        });
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
      toast.success("Logged out successfully", {
        position: "top-left"
      });
    } catch (error) {
      console.log("Error logging out", error.message);
    }
  }
  const { mode, toggleMode } = useContext(WindmillContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [closeSideBar, setIsCloseSideBar] = useState(false)
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  }

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.log("Error logging out", error.message);
    }
  }
  // Toggle sidebar function
  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }
  // close sidebar function
  function closeBar() {
    setIsCloseSideBar(!closeSideBar);
  }
  return (
    <div className={`flex ${isSidebarOpen ? "ml-64" : "ml-0"}`} >
    
      <aside className={`z-40 absolute top-0 left-0 h-full overflow-y-auto dark:bg-gray-800 transition-transform duration-300 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:inset-0`}>
        <Sidebar userDetails={userDetails}/>
      </aside>
      <div className="flex-1  " >
        <header className="z-40 py-4 bg-black shadow-bottom dark:bg-gray-800 ">
          <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
            <button
              className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
              onClick={toggleSidebar} // Toggle sidebar on button click
              aria-label="Menu"
            >
              <MenuIcon className="w-6 h-6 " />
            </button>

            <div className="flex justify-center flex-1 lg:mr-32">
              {/* <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                <div className="absolute inset-y-0 flex items-center pl-2">
                  <SearchIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                </div>
                <Input
                  className="p-3  text-gray-700"
                  placeholder="Search for projects"
                  aria-label="Search"
                />
              </div> */}

              <h2 className="text-2xl">Welcome 
                <span className="text-custom-sec">{userDetails?.firstname}</span>
              </h2>
            </div>

            <ul className="flex items-center flex-shrink-0 space-x-6">
              {/* <!-- Theme toggler --> */}
              <li className="flex">
                <button
                  className="rounded-md focus:outline-none focus:shadow-outline-purple"
                  onClick={toggleMode}
                  aria-label="Toggle color mode"
                >
                  {mode === "dark" ? (
                    <SunIcon className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <MoonIcon className="w-5 h-5" aria-hidden="true" />
                  )}
                </button>
              </li>
              <li className="relative">
                <button
                  className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                  onClick={handleNotificationsClick}
                  aria-label="Notifications"
                  aria-haspopup="true"
                >
                  <BellIcon className="w-5 h-5" aria-hidden="true" />
                  {/* <!-- Notification badge --> */}
                  <span
                    aria-hidden="true"
                    className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                  ></span>
                </button>
                <Dropdown
                  align="right"
                  isOpen={isNotificationsMenuOpen}
                  onClose={() => setIsNotificationsMenuOpen(false)}
                >
                  <DropdownItem tag="a" href="#" className="justify-between">
                    <span>Messages</span>
                    <Badge type="danger">13</Badge>
                  </DropdownItem>
                  <DropdownItem tag="a" href="#" className="justify-between">
                    <span>Sales</span>
                    <Badge type="danger">2</Badge>
                  </DropdownItem>
                  <DropdownItem onClick={() => alert("Alerts!")}>
                    <span>Alerts</span>
                  </DropdownItem>
                </Dropdown>
              </li>
              <li className="relative">
                <button
                  className="rounded-full focus:shadow-outline-purple focus:outline-none"
                  onClick={handleProfileClick}
                  aria-label="Account"
                  aria-haspopup="true"
                >
                  <UserIcon className="align-middle" alt="" aria-hidden="true" />
                </button>
                <Dropdown
                  align="right"
                  isOpen={isProfileMenuOpen}
                  onClose={() => setIsProfileMenuOpen(false)}
                >
                  <DropdownItem tag="a" href="#">
                    <UserIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                    <span>Profile</span>
                  </DropdownItem>
                  <DropdownItem tag="a" href="#">
                    <SettingsIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                    <span>Settings</span>
                  </DropdownItem>
                  <DropdownItem onClick={handleLogout}>
                    <ArrowLeftCircleIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                    <span>Log out</span>
                  </DropdownItem>
                </Dropdown>
              </li>
            </ul>
          </div>
        </header>
        <main className=" pl-4 pt-4">
          <h2 className="text-indigo-600 text-4xl"></h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            quia, quaerat commodi dicta omnis dolore natus reiciendis maiores
            voluptas fugit officiis a sed est illo, recusandae cumque, quidem
            odio optio?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis aut alias
            impedit vitae sapiente nam, praesentium aspernatur nulla dolores similique
            cumque quo dolore voluptatem ad facere corporis dolorem debitis nemo.
          </p>
          <div className=" bg-blue-gray-400 grid-cols-3">
                  <div className="text-red-600 grid-cols-2">Video</div>
                  <div> Home</div>
                  <div>About</div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Header;
