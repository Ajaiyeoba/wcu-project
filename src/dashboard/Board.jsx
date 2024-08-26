import { MenuIcon, Sidebar } from "lucide-react";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/Firebase";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {setDoc, doc, getDoc} from "firebase/firestore";
import Header from "./components/Header";
function Board() {
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
        console.log("user not logged in !")
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  
  return (
    <>
    <Header />
    </>
  );
}

export default Board;
