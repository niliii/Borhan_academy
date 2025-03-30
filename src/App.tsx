import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import AdminPanel from './components/AdminPanel/Panel';
import Cours from './Pages/Cours';
import EventSchedule from './Pages/EventSchedule';
import Layout from './Layout/Layout';

function App() {
  return (
    <Router>
    <Layout>
      <Header title={'Borhan'} logoUrl={'logo.png'} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cours" element={<Cours />} />
        <Route path="/event-schedule" element={<EventSchedule />} />
        {/* <Route path="/admin-panel" element={<AdminPanel />} /> */}
      </Routes>
      <Footer background={'background.jpg'} title={'test'} />
    </Layout>
  </Router>
  );
}

export default App;
