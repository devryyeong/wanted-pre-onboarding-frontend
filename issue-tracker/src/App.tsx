import { BrowserRouter as Router, Routes, Route, BrowserRouter, useParams } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import IssueDatail from "./pages/IssueDatail";
import IssueDetailProvider from "./context/detailContext";
import { Global } from "@emotion/react";
import globalStyle from "./globalStyle";

function App() {
  const { id } = useParams();
  return (
    <div className="App">
      <Global styles={globalStyle} />
      <Header />
      <BrowserRouter>
        <IssueDetailProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/issues/:id" element={<IssueDatail />} />
            <Route path="/*" />
          </Routes>
        </IssueDetailProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
