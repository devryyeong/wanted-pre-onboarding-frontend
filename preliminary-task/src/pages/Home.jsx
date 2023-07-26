import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ border: "1px solid", padding: "70px" }}>
      <h1 style={{ fontSize: "25px" }}>Home</h1>
      <div style={{ padding: "20px" }} />
      <Link to="/signup">Sign Up</Link>
      <div style={{ padding: "10px" }} />
      <Link to="/signin">Sign In</Link>
      <div style={{ padding: "10px" }} />
      <Link to="/todo">Todo</Link>
    </div>
  );
}

export default Home;