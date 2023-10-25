// AdminDesktop.js
import React from "react";
import { Resource } from "react-admin";
import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";


export const AdminDesktop = () => {
  return (
    <div>
        <Resource name='Signin' list={Signin} />
       <Resource name='Signup' list={Signup} />
    </div>
  );
};

