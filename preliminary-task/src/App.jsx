import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Todo from "./pages/Todo";
import GLobalStyle from "./utils/globalStyle";

function App() {
  return (
    <>
      <GLobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/todo"
          element={
            <Suspense fallback={<div>...Loading...</div>}>
              <Todo />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
