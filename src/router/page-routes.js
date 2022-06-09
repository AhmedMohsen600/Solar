import React from "react";
import { Routes, Route } from "react-router-dom";
import * as ROUTES from "../constant/routes";
import {
  HomePage,
  AcademyHomePage,
  ContactUs,
  AboutUs,
  Services,
  CourseDetails
} from "../pages";
export default function PageRoutes() {
  return (
    <Routes>
      <Route path={ ROUTES.HOME } element={ <HomePage /> } />
      <Route path={ ROUTES.ACADEMY } element={ <AcademyHomePage /> } />
      <Route path={ ROUTES.CONTACT_US } element={ <ContactUs /> } />
      <Route path={ ROUTES.ABOUT_US } element={ <AboutUs />} />
      <Route path={ ROUTES.SERVICES } element={ <Services /> } />
      <Route path={ ROUTES.COURSE_DETAILS }  element={ <CourseDetails/> }/>
    </Routes>
  );
}
