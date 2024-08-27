
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase/Firebase";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {setDoc, doc, getDoc} from "firebase/firestore";
import Sidebar from "./components/Sidebar";
import { toast } from "react-toastify";


function Board() {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("user not logged in !")
        toast.error("user not logged in!", {
          position: "top-center",
        })
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
    } catch (error) {
      console.log("Error logging out", error.message);
    }
  }
  return (
    <>
<Sidebar />
    </>
  );
}

export default Board;
