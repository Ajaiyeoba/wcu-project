import React, { useState } from "react";
import {Link} from 'react-router-dom'
const Accordion = () => {
  return (
    <section id="faq" className="relative z-20 overflow-hidden bg-custom-pri pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto" id="faq">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-4 block text-4xl font-semibold text-custom-sec" data-aos="fade-right">
                FAQ
              </span>
              <p className="mb-2 text-base font-bold text-custom-ter" data-aos="fade-left" >
              Are You Ready To Seek Your Fortune? 
              </p>
            
                <div className="mt-10 flex items-center justify-center gap-x-6" data-aos="fade-down">
                <Link
                  to="/signup"
                  className="rounded-md bg-custom-sec text-custom-ter px-3.5 py-2.5 text-sm font-semibold text-custon-ter shadow-sm hover:opacity-75 hover:-translate-y-1 hover:scale-110 duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom-ter"
                >   ENROLL NOW      £29.99
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2" data-aos="fade-left">
            <AccordionItem
              header="How do I know which campus to start from?"
              text="This will be in accordance with how much time and money you have to dedicate yourself. When you enter, take our onboarding quiz that will put you in the right place."
            />
            <AccordionItem
              header="How long does it take to make money?"
              text="This depends on you. Some students can make money on their 1st day! Some longer. The key is how dedicated and committed you are.
"
            />
            <AccordionItem
              header="Can I cancel my membership anytime?"
              text="Yes. You Can Cancel At Anytime."
            />
                        <AccordionItem
              header="Is WCU available in my country?"
              text="WCU is available in all countries."
            />
                        <AccordionItem
              header="What does it take to succeed inside WCU?"
              text="If you are hardworking and conscientious, you will succeed. However, your success will depend on how hard you work. Some people can make money in a few days, others longer. It all depends on you! But we will assist you to the best of our ability!
"
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
          <AccordionItem
              header="Can I access WCU from my phone?"
              text="Yes."
            />
                        <AccordionItem
              header="Can I join despite not knowing anything or having any skills?"
              text="Absolutely! We will support you in becoming competent in the field of money-making. This is a skill anyone can acquire!."
            />
                        <AccordionItem
              header="Do I have to attend WCU at certain times?"
              text="No. You have access 24/7 at any time of your preference. You are not mandated to attend at a particular time."
            />
                                    <AccordionItem
              header="I am under 18, can I still join? "
              text="We encourage anyone under 18, with the consent of their parent(s) or guardian (s) to join."
            />

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3056D3" stop-opacity="0.36" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div data-aos="fade-right" className="mb-8 w-full rounded-lg bg-custom-pri p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-custom-sec text-custom-ter ">
          <svg
          data-aos="fade-right"
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-custom-ter" data-aos="fade-left">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-custom-sec">
          {text}
        </p>
      </div>
    </div>
  );
};
