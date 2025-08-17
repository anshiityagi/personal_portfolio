import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "SCORIX",
      description: " Your grades, generated and delivered at lightning speed. From crunching marks to dropping PDFs in inboxes, Scorix makes the whole process automated, effortless and error-free.",
      imgUrl: projImg1,
    },
    {
      title: "Porfolio",
      description: "A sleek, interactive webapp that’s basically me in website form. Built to showcase my skills, projects, and personality, it blends clean design with smooth animations so scrolling feels like a conversation, not a résumé.",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I break things, build cooler things, and sometimes accidentally make something useful. These are a few projects I cooked up while experimenting, overthinking, and occasionally screaming at my screen:</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">All</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Python</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">React</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {/* Tab 1 - All Projects */}
                      <Tab.Pane eventKey="first">
                        <Row className="justify-content-center">
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Tab 2 - First Project */}
                      <Tab.Pane eventKey="second">
                        <Row className="justify-content-center">
                          <ProjectCard {...projects[0]} />
                        </Row>
                      </Tab.Pane>

                      {/* Tab 3 - Second Project */}
                      <Tab.Pane eventKey="third">
                        <Row className="justify-content-center">
                          <ProjectCard {...projects[1]} />
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
