import {
  StrikethroughIcon,
  ArrowUpOnSquareStackIcon,
  LifebuoyIcon,
  SquaresPlusIcon,
  SparklesIcon,
  CloudArrowUpIcon,
  BeakerIcon,

} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { CornerRightDownIcon, DollarSignIcon } from "lucide-react";
import React from "react";
import Navbar from "../components/Navbar";
import Campuses from "../pages/Campuses";
import Faq from "../components/Faq";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="text-poppins overflow-hidden bg-custom-pri pt-4">
        <div className="relative mx-auto mt-16 max-w-2xl isolate px-6  lg:px-8  bg-custom-pri">
          <div
            data-aos="fade-up"
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          ></div>
          <div className="mx-auto  py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <div className="  sm:flex sm:justify-center">
                <div className="relative rounded-full border-custom-blue px-3 text-center py-1 text-sm leading-6 text-custom-ter ring-1 ring-white">
                  Are You Ready To Seek Your Fortune?{" "}
                  <a href="#" className="font-semibold text-custom-sec">
                    <span aria-hidden="true" className="absolute inset-0" />
                    ENROLL NOW £29.99
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <h1
                data-aos="fade-down"
                className="text-4xl font-bold tracking-tight text-custom-sec sm:text-6xl"
              >
                WEALTH CREATION UNIVERSITY
              </h1>
              <p
                data-aos="fade-down-left"
                className="mt-6 text-lg leading-8 text-custom-ter"
              >
                The current period of economic stagnation and hyperinflation has
                led to an increase in relative poverty in the world. As jobs per
                capita decline over time, it is imperative to turn towards
                entrepreneurship and independence.
              </p>
              <p
                data-aos="fade-down-left"
                className="mt-6 text-lg leading-8 text-custom-ter"
              >
                Wealth Creations University provides a platform for this. Wealth
                Creations University is an online educational platform that
                teaches people how to make money through over 22 modernistic
                wealth-building methods.
              </p>
              <div
                data-aos="fade-down"
                className="mt-10 flex items-center justify-center gap-x-6"
              >
                <Link
                  to="/signup"
                  className="rounded-md bg-custom-sec text-custom-ter px-3.5 py-2.5 text-sm font-semibold text-custon-ter shadow-sm hover:opacity-75 hover:-translate-y-1 hover:scale-110 duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-ter"
                >
                  Join Now
                </Link>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-custom-sec"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          ></div>
        </div>
     

      <div
        id="about"
        className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      >
        <div
          className="absolute inset-0 -z-10 overflow-hidden"
          data-aos="fade-up"
        >
          <svg
            aria-hidden="true"
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-indigo-600 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
           
            <rect
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p
                  data-aos="fade-down-left"
                  className=" text- text-2xl font-semibold leading-7 text-custom-sec"
                >
                  About Us
                </p>
                <h1
                  data-aos="fade-down-left"
                  className="mt-2 text-3xl font-bold tracking-tight text-custom-ter sm:text-4xl"
                >
                  What is WCU?
                </h1>
                <p
                  data-aos="fade-down"
                  className="mt-6 text-xl leading-8 text-custom-sec"
                >
                  WCU is a global education platform where people around the
                  world learn how to make money. Irrespective of background, we
                  believe everyone has the potential to achieve financial
                  freedom. WCU will help you towards achieving that goal.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt=""
              src=""
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div
                data-aos=""
                className="max-w-xl text-base leading-7 text-custom-ter lg:max-w-lg"
              >
                <p data-aos="fade-right">
                  We believe in providing accurate, relevant, and practical
                  knowledge to aid you on your journey. WCU is a world-class
                  academia offering depths of knowledge.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-custom-ter">
                  <li className="flex gap-x-3" data-aos="fade-right">
                    <StrikethroughIcon
                      aria-hidden="true"
                      className="mt-1 h-28 w-28 flex-none text-custom-sec hover:text-custom-ter  hover:rounded-xl hover:transition-all duration-300 ease-linear cursor-pointer hover:rotate-180 "
                    />
                    <span>
                      At WCU, you will be supported on your journey of money
                      making. We utlize a world-class platform to provide you
                      with our teaching material.
                    </span>
                  </li>
                  <li className="flex gap-x-3" data-aos="fade-right">
                    <ArrowUpOnSquareStackIcon
                      aria-hidden="true"
                      className="mt-1 h-28 w-28 flex-none text-custom-sec hover:text-custom-ter hover:rounded-xl hover:transition-all duration-300 ease-linear cursor-pointer hover:rotate-180"
                    />
                    <span>
                      At WCU, we believe that knowledge must be practical. This
                      is because practical action is what leads to wealth
                      accumulation. A universal truth you do not need money to
                      make money. Most of our campuses do not require a single
                      penny to start with. For example, a lots of students can
                      make money in affiliate marketing or copyrighting without
                      spending anything. Our chosen campuses are all designed to
                      keep in mind the average individual's mindset.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Our chosen campuses are all designed to to keep in mid the
                  average individual budget.
                </p>

                <ul role="list" className="mt-8 space-y-8 text-custom-ter">
                  <li className="flex gap-x-3" data-aos="fade-right">
                    <LifebuoyIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none   text-custom-sec hover:text-custom-ter  hover:rounded-xl hover:transition-all duration-300 ease-linear cursor-pointer hover:rotate-180"
                    />
                    <span>
                      Step by Step Tutorials on how to make money in over 14
                      methods that can lead to over 5 figure earnings per month.
                    </span>
                  </li>
                  <li className="flex gap-x-3" data-aos="fade-right">
                    <ArrowUpOnSquareStackIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none  text-custom-sec hover:text-custom-ter  hover:rounded-xl hover:transition-all duration-300 ease-linear cursor-pointer hover:rotate-180"
                    />
                    <span>
                      A world-class network of established professionals and
                      like-minded peers who can support one another.
                    </span>
                  </li>
                  <li className="flex gap-x-3" data-aos="fade-right">
                    <SquaresPlusIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none  text-custom-sec hover:text-custom-ter  hover:rounded-xl hover:transition-all duration-300 ease-linear cursor-pointer hover:rotate-180"
                    />
                    <span>
                      1 to 1 guidance available at any time during your journey.
                    </span>
                  </li>
                  <li className="flex gap-x-3" data-aos="fade-right">
                    <CloudArrowUpIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none  text-custom-sec hover:text-custom-ter  hover:rounded-xl hover:transition-all duration-300 ease-linear cursor-pointer hover:rotate-180"
                    />
                    <span>
                      Up-to-date learning materials and practical guidance and
                      demonstrations.
                    </span>
                  </li>
                  <li className="flex gap-x-3" data-aos="fade-right">
                    <SparklesIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none  text-custom-sec hover:text-custom-ter  hover:rounded-xl hover:transition-all duration-300 ease-linear cursor-pointer hover:rotate-180"
                    />
                    <span>
                      Always up-to-date and evolving academia that has the
                      competitive advantage in proving ttrue, accurate and
                      practical information.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> 

      <div id="campuses" className="mx-auto max-w-2xl py-8 sm:py-48 lg:py-36">
        <div className="text-center">
          <h6
            className="text-2xl font-bold tracking-tight text-custom-sec sm:text-6xl"
            data-aos="fade-down"
          >
            CAMPUSES
          </h6>
          <h6 className="text-sm font-bold text-center tracking-tight text-custom-sec">
            Academia Knowledge and Practicality{" "}
          </h6>
          <p
            className="mt-6 text-lg leading-8 text-custom-ter"
            data-aos="fade-right"
          >
            The knowledge inside WCU is practical and esigned to give you the
            skills in money making. We have demonstrations that teach you what
            to do if you are a visual learner. We believe that everyone deserves
            a fair chance, hence have amplified our content for all end users.
          </p>
          <p
            className="mt-6 text-lg leading-8 text-custom-ter"
            data-aos="fade-right"
          >
            It is imperative to have practical knowledge and guidance when
            making money. WCU provides this. If you get stuck, raise your
            question inside WCU.
          </p>
          <div
            className="mt-10 flex items-center justify-center gap-x-6"
            data-aos="fade-down"
          >
            <Link
              to="/signup"
              className="rounded-md bg-custom-sec px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Join Now
            </Link>
            <a
              href="/login"
              className="text-sm font-semibold leading-6 text-custom-ter"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <Campuses />


       <div
        id="axioms"
        className="relative isolate sm:overflow-x-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden"></div>
        <div className="mx-auto grid justify-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 justify-center text-center lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1
                  data-aos="fade-down-left"
                  className="mt-2 text-3xl font-bold tracking-tight text-custom-ter sm:text-4xl"
                >
                  Our Axioms
                </h1>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4 justify-center">
              <div className="max-w-xl text-base leading-7 text-custom-ter lg:max-w-lg">
                <ul role="list" className="mt-8 space-y-8 text-custom-ter">
                  <li className="flex gap-x-3" data-aos="fade-left">
                    <LifebuoyIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none   text-custom-sec hover:text-custom-ter  hover:rounded-xl hover:transition-all duration-300 ease-linear cursor-pointer hover:rotate-180"
                    />
                    <span>
                      Everyone can be rich, you just need to put the effort in.
                    </span>
                  </li>
                  <li className="flex gap-x-3" data-aos="fade-left">
                    <ArrowUpOnSquareStackIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none  text-custom-sec hover:text-custom-ter  hover:rounded-xl hover:transition-all duration-300 ease-linear cursor-pointer hover:rotate-180"
                    />
                    <span>
                      Everyone should become independent and self-sufficient
                    </span>
                  </li>
                  <li className="flex gap-x-3" data-aos="fade-left">
                    <SquaresPlusIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none  text-custom-sec hover:text-custom-ter  hover:rounded-xl hover:transition-all duration-300 ease-linear cursor-pointer hover:rotate-180"
                    />
                    <span>
                      Everyone has the willpower inside them to reach heights
                      beyond expectations
                    </span>
                  </li>
                  <li className="flex gap-x-3" data-aos="fade-left">
                    <CloudArrowUpIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none  text-custom-sec hover:text-custom-ter  hover:rounded-xl hover:transition-all duration-300 ease-linear cursor-pointer hover:rotate-180"
                    />
                    <span>
                      Everyone should look after their parents, spouse and
                      children by making high income.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <BeakerIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none  text-custom-sec hover:text-custom-ter  hover:rounded-xl hover:transition-all duration-300 ease-linear cursor-pointer hover:rotate-180"
                    />
                    <span>
                      Everyone should break free from slave wage labour.
                    </span>
                  </li>
                  <li className="flex gap-x-3" data-aos="fade-left">
                    <SparklesIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none  text-custom-sec hover:text-custom-ter  hover:rounded-xl hover:transition-all duration-300 ease-linear cursor-pointer hover:rotate-180"
                    />
                    <span>
                      Repeat after me. “ I will work hard to ensure that me and
                      my loved ones are financially successful to live a life of
                      fulfillment.”
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <Pricing />
      <div
        id="about"
        className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      >
        <div
          className="absolute inset-0 -z-10 overflow-hidden"
          data-aos="fade-up"
        >
          <svg
            aria-hidden="true"
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-custom-ter">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>
        <div id="graduation" className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1
                  data-aos="fade-down-left"
                  className="mt-2 text-3xl font-bold tracking-tight text-custom-ter sm:text-4xl"
                >
                  GRADUATION
                </h1>
                <p
                  data-aos="fade-down"
                  className="mt-6 text-xl leading-8 text-custom-sec"
                >
                  At WCU, we believe graduation is not necessarily about having
                  a piece of paper that will only guarantee you the wage of the
                  average rent. Rather, graduation means to become competent in
                  your field of business which will allow you to achieve a high
                  income. Hence, you will achieve the greatest graduation award
                  which is the{" "}
                  <span className="font-extrabold"> money-making skills</span>{" "}
                  you gain within our course campuses.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt=""
              src=""
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div
                data-aos=""
                className="max-w-xl text-base leading-7 text-custom-ter lg:max-w-lg"
              >
                <ul role="list" className="mt-8 space-y-8 text-custom-ter">
                  <li className="flex gap-x-3" data-aos="fade-right">
                    <StrikethroughIcon
                      aria-hidden="true"
                      className="mt-1 h-28 w-28 flex-none text-custom-sec hover:text-custom-ter  hover:rounded-xl hover:transition-all duration-300 ease-linear cursor-pointer hover:rotate-180 "
                    />
                    <span>
                      To teach people how to provide Value is at the heart of
                      WCU.
                    </span>
                  </li>
                  <li className="flex gap-x-3" data-aos="fade-right">
                    <ArrowUpOnSquareStackIcon
                      aria-hidden="true"
                      className="mt-1 h-28 w-28 flex-none text-custom-sec hover:text-custom-ter hover:rounded-xl hover:transition-all duration-300 ease-linear cursor-pointer hover:rotate-180"
                    />
                    <span>
                      Our graduates will prosper to great heights of financial
                      success because they only learned true knowledges for
                      freedom and fortune
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  Join The future Alumni for where our students become
                  successful entrepreneurs.
                  <Link
                    to="/signup"
                    data-aos="fade-right"
                    className="rounded-md bg-custom-sec px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Join Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faq />

      
      <Footer />
      <p className="mt-6 text-center pl-10 pr-10 mx-auto text-sm leading-8 text-custom-ter">
          WCU is an online educational community platform. Any members enrolled
          must understand that they are responsible for implementing the
          knowledge taught inside of WCU. WCU does not guarantee any profit
          earnings. WCU is not responsible for any student’s decision and/or
          failure to make money.
        </p>
      </div>
    </>
  );
}
export default Home;
