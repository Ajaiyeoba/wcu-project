import {
                StrikethroughIcon,
                ArrowUpOnSquareStackIcon,
                LifebuoyIcon,
                SquaresPlusIcon,
                SparklesIcon,
                CloudArrowUpIcon,
              } from "@heroicons/react/20/solid";
              
              import React from "react";
              import Navbar from "../components/Navbar";
              
              function Home() {
                return (
                  <>
                    <Navbar />
                    <div className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
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
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
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
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                          <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-custom-ter">
                              About Us
                            </p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-custom-ter sm:text-4xl">
                              What is WCU?
                            </h1>
                            <p className="mt-6 text-xl leading-8 text-custom-sec">
                              WCU is a global education platform where people around the world
                              learn how to make money. Irrespective of background, we believe
                              evveryone has the potential to achieve financial freedom. WCU
                              will help you towards achieving that gaol.
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
                          <div className="max-w-xl text-base leading-7 text-custom-ter lg:max-w-lg">
                            <p>
                              We believe in providing accurate, relevant, and practical
                              knowledge to aid you on your journey. WCU is a world-class
                              academia offering depths of knowledge.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-custom-ter">
                              <li className="flex gap-x-3">
                                <StrikethroughIcon
                                  aria-hidden="true"
                                  className="mt-1 h-5 w-5 flex-none text-custom-sec"
                                />
                                <span>
                                  At WCU, you will be supported on your journey of money
                                  making. We utlize a world-class platform to provide you with
                                  our teaching material.
                                </span>
                              </li>
                              <li className="flex gap-x-3">
                                <ArrowUpOnSquareStackIcon
                                  aria-hidden="true"
                                  className="mt-1 h-5 w-5 flex-none text-custom-sec"
                                />
                                <span>
                                  At WCU, we believe that knowledge must be practical. This is
                                  because practical action is what leads to wealth
                                  accumulation. A universal truth you do not need money to
                                  make money. Most of our campuses do not require a single
                                  penny to start with. For example, a lots of students can
                                  make money in affiliate marketing or copyrighting without
                                  spending anything. Our chosen campuses are all designed to
                                  keep in mind the average individual's mindset.
                                </span>
                              </li>
                              {/* <li className="flex gap-x-3">
                                <ServerIcon
                                  aria-hidden="true"
                                  className="mt-1 h-5 w-5 flex-none text-custom-sec"
                                />
                                <span>
                                  <strong className="font-semibold text-custom-ter">
                                    Database backups.
                                  </strong>{" "}
                                  Ac tincidunt sapien vehicula erat auctor pellentesque
                                  rhoncus. Et magna sit morbi lobortis.
                                </span>
                              </li> */}
                            </ul>
                            <p className="mt-8">
                              Our chosen campuses are all designed to to keep in mid the
                              average individual budget.
                            </p>
              
                            <ul role="list" className="mt-8 space-y-8 text-custom-ter">
                              <li className="flex gap-x-3">
                                <LifebuoyIcon
                                  aria-hidden="true"
                                  className="mt-1 h-5 w-5 flex-none text-custom-sec"
                                />
                                <span>
                                  Step by Step Tutorials on how to make money in over 14
                                  methods that can lead to over 5 figure earnings per month.
                                </span>
                              </li>
                              <li className="flex gap-x-3">
                                <ArrowUpOnSquareStackIcon
                                  aria-hidden="true"
                                  className="mt-1 h-5 w-5 flex-none text-custom-sec"
                                />
                                <span>
                                  A world-class network of established professionals and
                                  like-minded peers who can support one another.
                                </span>
                              </li>
                              <li className="flex gap-x-3">
                                <SquaresPlusIcon
                                  aria-hidden="true"
                                  className="mt-1 h-5 w-5 flex-none text-custom-sec"
                                />
                                <span>
                                  1 to 1 guidance available at any time during your journey.
                                </span>
                              </li>
                              <li className="flex gap-x-3">
                                <CloudArrowUpIcon
                                  aria-hidden="true"
                                  className="mt-1 h-5 w-5 flex-none text-custom-sec"
                                />
                                <span>
                                  Up-to-date learning materials and practical guidance and
                                  demonstrations.
                                </span>
                              </li>
                              <li className="flex gap-x-3">
                                <SparklesIcon
                                  aria-hidden="true"
                                  className="mt-1 h-5 w-5 flex-none text-custom-sec"
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
                  </>
              
                );
              }
              
              export default Home;
              