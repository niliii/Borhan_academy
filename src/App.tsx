import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Layout from './Layout/Layout';
import { ScrollToTop } from 'components/common/ScrollToTop';

// Pages
import Home from './Pages/Home';
import AboutUs from './Pages/About';
import ContactUs from './Pages/Contant';
import Cours from './Pages/Cours';
import EventSchedule from './Pages/EventSchedule';
import AdminPanel from './components/AdminPanel/Panel';
import SignInForm from 'components/auth/SignInForm';

// Auth Pages
import SignIn from 'Pages/AuthPages/SignIn';
import SignUp from 'Pages/AuthPages/SignUp';

// Extra Pages
import UserProfiles from 'Pages/UserProfiles';
import Blank from 'Pages/Blank';
import FormElements from 'Pages/Forms/FormElements';
import BasicTables from 'Pages/Tables/BasicTables';
import Alerts from 'Pages/UiElements/Alerts';
import Avatars from 'Pages/UiElements/Avatars';
import Badges from 'Pages/UiElements/Badges';
import Buttons from 'Pages/UiElements/Buttons';
import Images from 'Pages/UiElements/Images';
import Videos from 'Pages/UiElements/Videos';
import LineChart from 'Pages/Charts/LineChart';
import BarChart from 'Pages/Charts/BarChart';
import NotFound from 'Pages/OtherPage/NotFound';
import { ThemeProvider } from 'context/ThemeContext';
import AppLayout from 'Layout/AppLayout';
import LayoutSwitcher from 'LayoutSwitcher';
import SiteLayout from 'Layout/SiteLayout';




function App() {

  
  return (
    <ThemeProvider>
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Main App Layout */}
          {/* <Route element={<LayoutSwitcher />}> */}
          {/* <Route path="/" element={<AppLayout />} /> */}
          <Route element={<SiteLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
          
            <Route path="/cours" element={<Cours />} />
            <Route path="/event-schedule" element={<EventSchedule />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/blank" element={<Blank />} />
            <Route path="/form-elements" element={<FormElements />} />
            <Route path="/basic-tables" element={<BasicTables />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signinform" element={<SignInForm />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  </ThemeProvider>
    
  );
}


export default App;
