import React from "react";
import { Global } from "@emotion/react";
import { Count } from "./components/count";
import Header from "./components/header";
import GlobalStyle from "./components/globalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { Content } from "./components/content";
import { Setting } from "./components/setting";

function App() {
  return (
    <>
      <BrowserRouter>
        <Global styles={GlobalStyle} />
        <Header title={"Count App"}></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/count-app" element={<Count />} />
          <Route path="/content" element={<Content />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
