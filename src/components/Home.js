import React from "react";
import { Redirect } from "react-router-dom";

 // if the user isn't signed in, redirect them to the login page
function Home({ isSignedIn }) {
  if (!isSignedIn) return <Redirect to="/login" />;

  // otherwise, return the home page
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

export default Home;