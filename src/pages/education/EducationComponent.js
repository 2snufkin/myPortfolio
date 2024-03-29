import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import { degrees, certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import Certification from "../../components/certification/Certification";

// The Education Compoenent
class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Certifcations and Courses
                </h3>
                <p
                  className="greeting-text-p subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {degrees.introduction}
                </p>
              </div>
            </div>
          </Fade>
          {/*the bac+4 section*/}
          <Educations theme={this.props.theme} />
          {/*<Certification title="Full Stack" organization='Afpa'  icon="src/assests/images/developerActivity.svg" topics={degrees.degrees.descriptions} />*/}
          {certifications.courses.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
