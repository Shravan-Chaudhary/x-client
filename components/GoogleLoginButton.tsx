"use client";
import { GoogleLogin } from "@react-oauth/google";
import React from "react";

const GoogleLoginButton = () => {
  return (
    <button>
      <GoogleLogin onSuccess={(cred) => {}} />
    </button>
  );
};

export default GoogleLoginButton;
