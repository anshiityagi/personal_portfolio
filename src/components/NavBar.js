import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import myPhoto from "../assets/img/myphoto2.jpg"; 
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={myPhoto}
              alt="My Profile"
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={() => setShowModal(true)}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/anshi-tyagi-859535276/">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://github.com/anshiityagi">
                  <img src={navIcon2} alt="" />
                </a>
                <a
                  href="mailto:yourgmail@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <a
                href="https://drive.google.com/file/d/1MVIn0pe35HHedSdcFxempsLzEKyO-xrQ/view?usp=sharing"
                download
              >
                <button className="vvd">
                  <span>Download Resume</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Image Modal */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            animation: "fadeIn 0.3s ease",
          }}
        >
          <img
            src={myPhoto}
            alt="My Profile Large"
            style={{
              maxWidth: "50%",
              maxHeight: "80%",
              borderRadius: "50%",
              transition: "transform 0.3s ease",
              animation: "zoomIn 0.3s ease",
            }}
          />
        </div>
      )}
    </>
  );
};
