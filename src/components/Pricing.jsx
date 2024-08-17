import { CheckIcon } from "@heroicons/react/20/solid";
import {Link} from 'react-router-dom';
const includedFeatures = [
  "Step by Step Guidance",
  "Practical world-class education",
  "1 to 1 support ",
  "High-Income Skills Acquisition",
  "World Class Platform",
];

export default function Pricing() {
  return (
    <div className="bg-custom- py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
         {/* <div className="overflow-auto  max-w-xl sm:text-center overflow-x-hidden" >
          <h2 className="text-2xl font-bold text-center tracking-tight text-custom-sec" data-aos="fade-down-left">
            WCU PREMIUM FINAL PRICE
          </h2>
           <p className="mt-6 text-base leading-8 text-custom-ter" data-aos="fade-right">
            The uniqueness of WCU is that we provide material for everyone to
            have a fair chance. The modern education system puts the average
            person in student debt of £45,000 (2023 UK) But we believe you do
            not need to spend this much money to simply learn how to make money.
            And we do not believe you should put yourself in interest debt just
            to have a better life. Our monthly membership price is £29.99 The
            opportunity cost is close to 0.
          </p>
        </div>  */}
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-indigo-600 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-custom-sec" data-aos="fade-left">
              Take Action, Start Earning Today{" "}
            </h3>
            {/* <p className="mt-6 text-base leading-7 text-custom-ter" data-aos="fade-left">
              And we do not believe you should put yourself in interest debt
              just to have a better life. Our monthly membership price is £29.99
              The opportunity cost is close to 0.
            </p> */}
            {/* <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-custom-sec" data-aos="fade-left">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div> */}
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-custom-ter sm:grid-cols-2 sm:gap-6"
              data-aos="fade-left"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3" data-aos="fade-left">
                  <CheckIcon
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-custom-sec"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-custom-ter py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-custom-pri" data-aos="fade-right">
                  Take Action, Start Earning Today{" "}
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2" data-aos="fade-right">
                  <span className="text-5xl font-bold tracking-tight text-custom-sec">
                    £29.99{" "}
                  </span>
                  <span className="text-2sm font-bold tracking-tight line-through text-gray-600">
                    £50.99{" "}
                  </span>
                </p>
                <Link
                  to="/register"
                  className="mt-10 block w-full rounded-md bg-custom-sec px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:opacity-75  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  data-aos="fade-left"
                >
              Join Now
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-600" data-aos="fade-right">
                Cancel anytime subscription  <br />
                Limited  Spaces Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
