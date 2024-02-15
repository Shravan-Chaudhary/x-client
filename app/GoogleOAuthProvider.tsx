import React from "react";
import { GoogleOAuthProvider as OriginalGoogleOAuthProvider } from "@react-oauth/google";

interface GoogleOAuthProviderProps {
  children: React.ReactNode;
  clientId: string;
}

const GoogleOAuthProvider: React.FC<GoogleOAuthProviderProps> = ({
  children,
  clientId,
}) => {
  return (
    <OriginalGoogleOAuthProvider clientId={clientId}>
      {children}
    </OriginalGoogleOAuthProvider>
  );
};

export default GoogleOAuthProvider;
