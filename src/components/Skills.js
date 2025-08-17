import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import htmlicon from "../assets/img/htmlicon.svg";
import cssicon from "../assets/img/cssicon.svg";
import cicon from "../assets/img/icons8-c++.svg";
import ccicon from "../assets/img/cloudicon.svg";
import pythonicon from "../assets/img/icons8-python.svg";
import reacticon from "../assets/img/icons8-react.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>When DSA made me cry, I turned to frontend. When frontend broke, I ran to the cloud. From debugging DSA code to styling buttons for 4 hours to accidentally spinning up 3 cloud VMs... <br></br>here’s my arsenal of skills i caught while running :</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={htmlicon} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={cssicon} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={reacticon} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={cicon} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={pythonicon} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={ccicon} alt="Image" />
                                <h5>Cloud Computing</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}