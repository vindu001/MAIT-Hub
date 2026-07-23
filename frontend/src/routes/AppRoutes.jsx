import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Notes from "../pages/Notes";
import PYQs from "../pages/PYQs";
import Practicals from "../pages/Practicals";
import Syllabus from "../pages/Syllabus";
import Fees from "../pages/Fees";
import Contact from "../pages/Contact";
import Login from "../pages/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/pyqs" element={<PYQs />} />
      <Route path="/practicals" element={<Practicals />} />
      <Route path="/syllabus" element={<Syllabus />} />
      <Route path="/fees" element={<Fees />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;