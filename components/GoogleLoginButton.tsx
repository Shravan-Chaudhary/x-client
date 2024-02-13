"use client";
import { GoogleLogin } from "@react-oauth/google";
import React from "react";

const GoogleLoginButton = () => {
  return (
    <button>
      <GoogleLogin onSuccess={() => {}} />
    </button>
  );
};

export default GoogleLoginButton;
