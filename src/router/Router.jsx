import { BrowserRouter, Route, Routes } from "react-router-dom";
import Count from "../components/count";
import { Home } from "../components/home";

export const Router = () => {
  {
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count-app" element={<Count />} />
        <Route path="/content" element={<Content />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>;
  }
};
