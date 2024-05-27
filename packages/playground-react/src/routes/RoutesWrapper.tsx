import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import Dropdown from "@/components/Dropdown";
import Tooltip from "@/components/Tooltip";
import AccordionPage from "@/pages/Containment/AccordionPage";

const RouteWrapper: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/accordion" element={<AccordionPage />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/tooltip" element={<Tooltip />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteWrapper;