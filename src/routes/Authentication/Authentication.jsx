import React from "react";
import "./Authentication.scss";
import Signup from "../../Components/Sign-up/Signup";
import SignIn from "../../Components/Sign-In/SignIn";

const Authentication = () => {
  // const logGoogleUser = async () => {
  //   try {
  //     const { user } = await signInWithGooglePopup();
  //     const userDocRef = await UserDocumentFromAuth(user);
  //     console.log("all done", userDocRef);
  //   } catch (e) {
  //     console.log("from popup", e);
  //   }
  // };

  return (
    <div className="box">
      <SignIn />
      <Signup />
    </div>
  );
};

export default Authentication;
