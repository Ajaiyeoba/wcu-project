import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/Firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        firstname,
        lastname
      );
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstname: firstname,
          lastname: lastname,
        });
      }
      console.log("user Signed up sucessfully");
      toast.success("Account created successful", {
        position: "top-center",
      });
      navigate("/login");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <div className="flex items-center min-h-screen p-6 bg-custom-pri dark:bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                aria-hidden="true"
                className="object-cover w-full h-full dark:hidden"
                alt="Wealth Creation University"
                src={Logo}
              />
              <img
                aria-hidden="true"
                className="hidden object-cover w-full h-full dark:block"
                alt="Wealth Creation University"
                src={Logo}
              />
            </div>
            <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">
                <h1 className="mb-4 text-xl font-semibold text-custom-sec dark:text-gray-200">
                  Create account
                </h1>
                <form
                  action="#"
                  method="POST"
                  onSubmit={handleSignup}
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Firstname
                    </label>
                    <div>
                      <input
                        className="mt-1 block w-full rounded-md border-0 py-1.5 text-custom-pri shadow-sm ring-1 ring-inset ring-custom-pri placeholder:text-gray-400 pl-4 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="firstname"
                        name="firstname"
                        type="text"
                        placeholder="Enter your Firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                        autoComplete="firstname"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="lastname"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Lastname
                    </label>
                    <div>
                      <input
                        className="mt-1 block w-full rounded-md border-0 py-1.5 text-custom-pri shadow-sm ring-1 ring-inset ring-custom-pri placeholder:text-gray-400 pl-4 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="lastname"
                        name="lastname"
                        type="text"
                        placeholder="Enter your Lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                        autoComplete="lastname"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="lastname"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div>
                      <input
                        className="mt-1 block w-full rounded-md border-0 py-1.5 text-custom-pri shadow-sm ring-1 ring-inset ring-custom-pri placeholder:text-gray-400 pl-4 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div>
                      <input
                        className="mt-1 block w-full rounded-md border-0 py-1.5 text-custom-pri shadow-sm ring-1 ring-inset ring-custom-pri placeholder:text-gray-400 pl-4 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="password"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                  Already Have an Account?
                  <Link
                    to="/login"
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
