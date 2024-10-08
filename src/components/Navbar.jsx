"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const navigation = [
  { name: "About", href: "#about" },
  // { name: "Product", href: "/" },
  { name: "Campuses", href: "#campuses" },
  { name: "Our Axioms", href: "#axioms" },
  { name: "Graduation", href: "#graduation" },
  { name: "FAQ", href: "#faq" },
  { name: "Founder", href: "/founder" },
  { name: "Contact", href: "#contact" },
];
const handleScroll = (e) => {
  e.preventDefault();
  const sectionId = e.target.getAttribute("href");
  const section = document.querySelector(sectionId);
  section.scrollIntoView({ behaviour: "smooth" });
  setActiveSection(sectionId);
};

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className=" bg-custom-pri top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Wealth Creation University</span>
            <img alt="" src={logo} className="rounded-full w-16 h-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6 text-custom-ter" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleScroll}
              className="text-sm font-semibold leading-6 text-custom-sec hover:text-custom-ter"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/login"
            className="text-sm font-semibold leading-6 text-custom-sec rounded-md"
          >
            Join Now <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-64 overflow-y-auto bg-custom-pri px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Wealth Creation University</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-custom-ter"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                aria-hidden="true"
                className="h-6 w-6 text-custom-ter"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-custom-sec hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-custom-sec hover:bg-gray-50 transition ease-in-out duration-300"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
export default Navbar;
