import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import AboutPage from './components/Pages/AboutPage';
import ServicesPage from './components/Pages/ServicesPage';
import TreeRemoval from './components/Pages/ServicePages/TreeRemoval';
import WorkPage from './components/Pages/WorkPage';
import ContactPage from './components/Pages/ContactPage';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
    <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
          <Route path="tree-removal" element={<TreeRemoval />} />
        <Route path="latest-work" element={<WorkPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    <Footer />
    </React.StrictMode>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
