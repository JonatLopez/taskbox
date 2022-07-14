import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../stories/Header";
import { Authenticator } from "@aws-amplify/ui-react";

export default function AppRouter() {
  return (
    <Router basename="/">
      <Authenticator>
        {
          ({ signOut, user }) => (
            <>
              {console.log(user)}
              <Header user={user} onLogout={signOut} />
              <div className="body">
                <Suspense
                  fallback={
                    <div>
                      <h5>Loading page...</h5>
                    </div>
                  }
                >
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </Suspense>
              </div>
            </>
          )
        }
      </Authenticator>
    </Router>
  );
}
