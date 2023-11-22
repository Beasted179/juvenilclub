import React from "react";
import { useTranslation } from "react-i18next";
import homepageSoc from "../images/homepageSoc.png";

import "../styles/home.css";
const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="Home">
      <div className="mainHome">
        <h2>Juvenil Soccer <br />Organization</h2>
        <p className="homeP1">{t("Mission")}</p>
        <div className="subMisssionCards">    
          <div className="subMission">
            <p>{t("Vision1")}</p>
          </div>
          <div className="subMission">
            <p>{t("Vision2")}</p>
          </div>
          <div className="subMission">
            <p>{t("Vision3")}</p>
          </div>
        </div>
      </div>
      <div className="sideBarHome">
        <img src={homepageSoc} alt="a young boy kicking a soccer ball" className="homeImg1" />
      </div>
    </div>
  );
}

export default Home;
