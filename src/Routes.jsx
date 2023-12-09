import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const LearnHiraganaOne = React.lazy(() => import("pages/LearnHiraganaOne"));
const News = React.lazy(() => import("pages/News"));
const Learnkanji = React.lazy(() => import("pages/Learnkanji"));
const DashboardAdminreadOne = React.lazy(
  () => import("pages/DashboardAdminreadOne"),
);
const LearnHiragana = React.lazy(() => import("pages/LearnHiragana"));
const Blog = React.lazy(() => import("pages/Blog"));
const LearnkanjiOne = React.lazy(() => import("pages/LearnkanjiOne"));
const TestimonialsOne = React.lazy(() => import("pages/TestimonialsOne"));
const JoinFreeSeminar = React.lazy(() => import("pages/JoinFreeSeminar"));
const DashboardAdminread = React.lazy(() => import("pages/DashboardAdminread"));
const DashboardAdminquizeOne = React.lazy(
  () => import("pages/DashboardAdminquizeOne"),
);
const DashboardAdminquize = React.lazy(
  () => import("pages/DashboardAdminquize"),
);
const RegisterOne = React.lazy(() => import("pages/RegisterOne"));
const DashboardAdminOne = React.lazy(() => import("pages/DashboardAdminOne"));
const DashboardAdminlessonhome = React.lazy(
  () => import("pages/DashboardAdminlessonhome"),
);
const DashboardAdminFive = React.lazy(() => import("pages/DashboardAdminFive"));
const DashboardAdminThree = React.lazy(
  () => import("pages/DashboardAdminThree"),
);
const DashboardAdminFour = React.lazy(() => import("pages/DashboardAdminFour"));
const DashboardAdminTwo = React.lazy(() => import("pages/DashboardAdminTwo"));
const DashboardAdmin = React.lazy(() => import("pages/DashboardAdmin"));
const Testimonials = React.lazy(() => import("pages/Testimonials"));
const Register = React.lazy(() => import("pages/Register"));
const Contact = React.lazy(() => import("pages/Contact"));
const ABOUT = React.lazy(() => import("pages/ABOUT"));
const STUDY = React.lazy(() => import("pages/STUDY"));
const HOME1 = React.lazy(() => import("pages/HOME1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home1" element={<HOME1 />} />
          <Route path="/study" element={<STUDY />} />
          <Route path="/about" element={<ABOUT />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/dashboardadmin" element={<DashboardAdmin />} />
          <Route path="/dashboardadmintwo" element={<DashboardAdminTwo />} />
          <Route path="/dashboardadminfour" element={<DashboardAdminFour />} />
          <Route
            path="/dashboardadminthree"
            element={<DashboardAdminThree />}
          />
          <Route path="/dashboardadminfive" element={<DashboardAdminFive />} />
          <Route
            path="/dashboardadminlessonhome"
            element={<DashboardAdminlessonhome />}
          />
          <Route path="/dashboardadminone" element={<DashboardAdminOne />} />
          <Route path="/registerone" element={<RegisterOne />} />
          <Route
            path="/dashboardadminquize"
            element={<DashboardAdminquize />}
          />
          <Route
            path="/dashboardadminquizeone"
            element={<DashboardAdminquizeOne />}
          />
          <Route path="/dashboardadminread" element={<DashboardAdminread />} />
          <Route path="/joinfreeseminar" element={<JoinFreeSeminar />} />
          <Route path="/testimonialsone" element={<TestimonialsOne />} />
          <Route path="/learnkanjione" element={<LearnkanjiOne />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/learnhiragana" element={<LearnHiragana />} />
          <Route
            path="/dashboardadminreadone"
            element={<DashboardAdminreadOne />}
          />
          <Route path="/learnkanji" element={<Learnkanji />} />
          <Route path="/news" element={<News />} />
          <Route path="/learnhiraganaone" element={<LearnHiraganaOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
