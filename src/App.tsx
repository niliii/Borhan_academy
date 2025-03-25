import React  from 'react';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
//  import Home from './pages/Home';
//  import About from './pages/About';
//  import Contact from './pages/Contact';
//  import Header from './components/Header';
//  import Footer from './components/Footer';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
//  import AdminDashboard from './components/AdminPanel/AdminDashboard';

function App() {
  return (

<>
   
 <Router>
   <Header title={'Borhan'} logoUrl={'logo.png'} />
   <Home/>
   <Footer background={'background.jpg'} title={'test'} />
 </Router>


</> 
  );
}

export default App;
