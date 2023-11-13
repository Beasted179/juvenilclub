import React from "react";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import ScheduleStandings from "./pages/ScheduleStandings";
import Registrations from "./pages/Registrations";
import Divisions from "./pages/Divisions";
import Media from "./pages/Media";
import AboutContact from "./pages/AboutContact";
import "./App.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import './i18n'; //   Import the i18n.js file
import JuvenLogoImage from "./images/JuvenLogo.webp";
import HamburgerMenu from "./components/HamburgerMenu";
import './styles/hamburgerMenu.css';
const App = () => {
  const { t } = useTranslation();

  return (
    <HashRouter>
      <div className="App"> 
      <HamburgerMenu/>
        <ul className="header">
        <img src={JuvenLogoImage} alt="Logo" className="logo" />
          
          <li><NavLink to="/">{t("Home")}</NavLink></li>
          <li><NavLink to="/schedule-standings">{t("Schedule & Standings")}</NavLink></li>
          <li><NavLink to="/registrations">{t("Registrations")}</NavLink></li>
          <li><NavLink to="/divisions">{t("Divisions")}</NavLink></li>
          <li><NavLink to="/media">{t("Media")}</NavLink></li>
          <li><NavLink to="/about-contact">{t("About & Contact")}</NavLink></li>
        </ul>
        <div className="content"> 
        <LanguageSwitcher/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule-standings" element={<ScheduleStandings />} />
            <Route path="/registrations" element={<Registrations />} />
            <Route path="/divisions" element={<Divisions />} />
            <Route path="/media" element={<Media />} />
            <Route path="/about-contact" element={<AboutContact />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
