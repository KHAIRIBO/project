import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="khairibouzakher.eu.auth0.com"
      clientId="bEopAn00PuZBDD4ypGwD22qAV5uhhbtw"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
);
