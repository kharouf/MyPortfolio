import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Home2() {
  const { t } = useTranslation();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t("HOME.myselgf.titel")} <span className="purple"> {t("HOME.myselgf.titel1")} </span>
            </h1>
            <p className="home-about-body">
              {t("HOME.myselgf.desc1")}
              <br />
              
              <i>
                <b className="purple"> {t("HOME.myselgf.desc5")} {" "}🤷‍♂️</b>
              </i>
              <br />
              <br />
              {t("HOME.myselgf.desc3")} &nbsp;
              <i>
                <b className="purple">{t("HOME.myselgf.desc6")}{" "}</b>

              </i>
              <br />
              <br />
              {t("HOME.myselgf.desc4")}
              <i>
                <b className="purple">
                  {" "}
                  {t("HOME.myselgf.desc44")}
                </b>
              </i>

              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row> */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t("HOME.find.titel")}</h1>
            <p>
              {t("HOME.find.desc")} <span className="purple">{t("HOME.find.desc1")} </span> {t("HOME.find.desc2")}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kharouf"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/wala-kharouf-804749150/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/wala.kharouf.1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  < AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
