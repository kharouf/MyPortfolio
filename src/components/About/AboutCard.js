import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const { t} = useTranslation();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("ABOUTSUS.desc")} <span className="purple">{t("ABOUTSUS.name")} </span>
            {t("ABOUTSUS.from")} <span className="purple"> {t("ABOUTSUS.gabes")}</span>
            <br /> {t("ABOUTSUS.desc1")}
            <br />
            {t("ABOUTSUS.desc3")}
            <br />
            <br />
            {t("ABOUTSUS.desc2")}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("ABOUTSUS.activities.one")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("ABOUTSUS.activities.tow")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("ABOUTSUS.activities.three")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("ABOUTSUS.activities.four")}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "{t("ABOUTSUS.desc4")}"{" "}
          </p>
          {/* <footer className="blockquote-footer">Kharouf</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
