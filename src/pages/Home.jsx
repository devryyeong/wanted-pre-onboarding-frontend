import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <br />
      <Link to="/signup">SignUp</Link>
      <br />
      <hr />
      <Link to="/signin">SignIn</Link>
      <br />
      <hr />
      <Link to="/todo">Todo</Link>
    </div>
  );
}

export default Home;