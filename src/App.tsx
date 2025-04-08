import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'context/ThemeContext';

import { ScrollToTop } from 'components/common/ScrollToTop';

// Layouts
import SiteLayout from './Layout/SiteLayout';
// import AdminLayout from './Layout/AdminLayout';

// Site Pages
import Home from './Pages/Home';
import AboutUs from './Pages/About';
import ContactUs from './Pages/Contant';
import Cours from './Pages/Cours';
import EventSchedule from './Pages/EventSchedule';

// Auth Pages
import SignIn from 'Pages/AuthPages/SignIn';
import SignUp from 'Pages/AuthPages/SignUp';
import SignInForm from 'components/auth/SignInForm';

// Admin Pages
import AdminPanel from './components/AdminPanel/Panel';
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

// Fallback
import NotFound from 'Pages/OtherPage/NotFound';
import AppHeader from 'Layout/AppHeader';
import AppSidebar from 'Layout/AppSidebar';

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <Routes>

            {/*  صفحات اصلی سایت با هدر و فوتر */}
            <Route element={<SiteLayout />}>
              <Route index path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/cours" element={<Cours />} />
              <Route path="/event-schedule" element={<EventSchedule />} />
            </Route>

            {/*  صفحات پنل ادمین با layout جدا */}
            <Route path="/admin" element={<AppSidebar/>}>
              <Route path="panel" element={<AdminPanel />} />
              <Route path="profile" element={<UserProfiles />} />
              <Route path="blank" element={<Blank />} />
              <Route path="form-elements" element={<FormElements />} />
              <Route path="basic-tables" element={<BasicTables />} />
              <Route path="alerts" element={<Alerts />} />
              <Route path="avatars" element={<Avatars />} />
              <Route path="badge" element={<Badges />} />
              <Route path="buttons" element={<Buttons />} />
              <Route path="images" element={<Images />} />
              <Route path="videos" element={<Videos />} />
              <Route path="line-chart" element={<LineChart />} />
              <Route path="bar-chart" element={<BarChart />} />
            </Route>

            {/* صفحات ورود و ثبت‌نام */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signinform" element={<SignInForm />} />

            {/*  صفحه 404 */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
