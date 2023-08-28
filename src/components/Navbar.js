import React, { useEffect, useRef, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.jpeg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import styled from "styled-components";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import { NavItem } from "react-bootstrap";
import i18n from "../i18n";
import frFlag from "../Assets/falg-fr.svg";
import arrFlag from "../Assets/flag-tn.svg";
import arFlag from "../Assets/saudi-arabia.svg";
import enFlag from "../Assets/US_icon.svg";
function NavBar() {

 
  useEffect(() => {
    for (
      let index = 0;
      index < document.getElementsByClassName("lang").length;
      index++
    ) {
      const element = document.getElementsByClassName("lang")[index];
      if (element.value === i18n.language) {
        element.setAttribute("selected", "true");
      }
    }
  });
  // state open togel of language selection
  const [isOpen, setIsOpen] = useState(false);
  const refDropLanguage = useRef();

  useEffect(() => {
    if (isOpen) {
      refDropLanguage.current && refDropLanguage.current.focus();
    }
  }, [isOpen]);
  // select language
  const [selectedLanguage, setSelectedLanguage] = useState("Français");
  // function open togel of language selection
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // function handleLanguage
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
    // window.location.reload();
  };
  // switch flag to language
  const getFlag = (language) => {
    switch (language) {
      case "fr":
        return frFlag;
      case "ar":
        return arFlag;
      case "en":
        return enFlag;
      // Add more cases for other languages
      default:
        return frFlag;
    }
  };

  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [showDropDrop, setShowDropDrop] = useState(false);

  const openModal = () => {
    setShow(true);
  };


  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { t} = useTranslation();
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t("NAVBAR.ACCEUIL") }
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t("NAVBAR.APROPOS") }
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
            <Nav.Item>
{/* Language */}
<Nav.Link>
   <DropdownContainer directionglobe={i18n.language === "ar"} dir="auto">
        <DropdownButton
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <FlagIcon src={getFlag(i18n.language)} alt={i18n.language} />
          <span>{t("languageSelector." + i18n.language)}</span>
        </DropdownButton>

        {isOpen ? (
          <DropdownMenu
            ref={refDropLanguage}
            tabIndex={1}
            onBlur={() => setIsOpen(false)}
            isOpen={isOpen}
            directionglobe={true}
          >
            {/* <DropdownItem onClick={() => handleLanguageChange("ar")}>
              <FlagIcon src={arFlag} alt="ar" />
              العربية{" "}
            </DropdownItem> */}
            <DropdownItem onClick={() => handleLanguageChange("fr")}>
              <FlagIcon src={frFlag} alt="fr" />
              Français
            </DropdownItem>

            <DropdownItem onClick={() => handleLanguageChange("en")}>
              <FlagIcon src={enFlag} alt="en" />
              Anglais
            </DropdownItem>
          </DropdownMenu>
        ) : null}
      </DropdownContainer> 
      </Nav.Link>
      {/* Language */}

            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
// Language settings
const DropdownContainer = styled.div`
  /* border:1px solid red; */
  width: auto !important;

  /* padding: 5px; */
  position: relative;
  display: inline-block;

  color: #fff;
  /* left: 16px; */
`;

const DropdownButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  /* &:hover {
    color: #ffd400;
  } */
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  width: auto !important;
  right: 0;
  list-style: none;
  background-color: #25243a;
  /* border: 1px solid #ccc; */
  padding: 0;
  margin: 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  gap: 5px;
`;

const DropdownItem = styled.li`
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  /* justify-content:center; */
  gap: 5px;
  /* &:hover {
    color: #ffd400;
  } */
`;
const FlagIcon = styled.img`
  width: 20px;
  height: 18px;
`;