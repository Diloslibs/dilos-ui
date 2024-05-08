import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import Accordion from "@/components/Accordion";
import Dropdown from "@/components/Dropdown";
import Tooltip from "@/components/Tooltip";

const RouteWrapper: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/tooltip" element={<Tooltip />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteWrapper;