import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import LandingPage from "./Screens/LandingPage/LandingPage";
import Courses from "./Component/Courses/Courses";
import Explore from "./Component/Explore/Explore";
import Dashboard from "./Screens/Dashboard/Dashboard";
import MainLayout from "./Layout/Mainlayout";
import ProtectedRoutes from "./ProtectedRoutes";
import SliderImage from "./Screens/SliderImage";
import SecondaryLayout from "./Layout/SecondaryLayout";
import LandingPage2 from "./Screens/LandingPage/LandingPage2";

const PageRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route
            path={"/dashboard"}
            element={
              <MainLayout>
                <ProtectedRoutes Components={Dashboard} />
              </MainLayout>
            }
          /> */}
          <Route
            element={
              <MainLayout>
                <Dashboard />
              </MainLayout>
            }
            path="/dashboard"
          />

          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<LandingPage2 />} path="/" />

          <Route
            element={
              // <SecondaryLayout>
                <LandingPage />
              // </SecondaryLayout>
            }
            path="/landingpage"
          />
          {/* <Route element={<Courses />} path="/course" /> */}
          {/* <Route element={<SliderImage />} path="/slide" /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PageRoutes;
