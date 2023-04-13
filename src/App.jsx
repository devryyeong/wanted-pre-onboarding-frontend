import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Auth from "./pages/Auth";
import Todo from "./pages/Todo";
import GLobalStyle from "./utils/globalStyle";

function App() {
  return (
    <>
      <GLobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route
            path="/todo"
            element={
              <Suspense fallback={<div>...Loading...</div>}>
                <Todo />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
