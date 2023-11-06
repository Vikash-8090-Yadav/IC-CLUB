import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import JoinClub from "./pages/joinclub";
import Base from "./components/base";
import CreateClub from "./pages/createclub";

import LoggedOut from "./components/LoggedOut";
import { useAuth, AuthProvider } from "./components/Auth";

import CreateProposal from "./pages/createproposal";
import Club from "./pages/club";

const App = () => {
  const { isAuthenticated, identity } = useAuth();
  return (
    <div >  
    {/* <header id="header">
        <section id="status" className="toast hidden">
          <span id="content"></span>
          <button className="close-button" type="button">
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </section>
      </header>
        {isAuthenticated ? */}
          

      
        <Routes>
        <Route element={<Layout />}>
        <Route index element={<Base />} />
         
          <Route path="/joinclub" element={<JoinClub />} /> {/* Assuming JoinClub is the correct component */}
          <Route path="/createclub" element={<CreateClub />} />
          <Route path="/club" element={<Club />} />
          <Route path="/createproposal" element={<CreateProposal />} />

          </Route>  
        </Routes>
  {/* : <LoggedOut />} */}
    </div>
  );
};

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
)
