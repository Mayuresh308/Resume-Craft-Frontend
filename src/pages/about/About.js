import React from "react";
import Layout from "../../components/layout/Layout";
import "./About.css";

const About = () => {
  return (
    <Layout>
      <div className="about-box">
        {/* <div className='about-img'>
          <img src='https://static.vecteezy.com/system/resources/previews/007/931/696/non_2x/about-us-button-about-us-text-template-for-website-about-us-icon-flat-style-vector.jpg' />
        </div> */}
        <div className="about-info">
          <h1>About Us</h1>
          <h6>
            At Resume Builder, we aim to simplify the process of creating
            professional, polished resumes. Our web application is designed to
            help users craft customized resumes with ease, offering a range of
            templates and design options. Whether you're a seasoned professional
            or just starting out, Resume Builder provides an intuitive platform
            that lets you focus on showcasing your skills and experience while
            we handle the formatting. Our mission is to make resume building as
            straightforward as possible, with tools that allow you to easily
            add, edit, and format sections of your resume. Your data is securely
            stored, and our app is regularly updated to ensure the best possible
            experience.For more <a href="https://github.com/Mayuresh308">Visit</a>
          </h6>
        </div>
      </div>
    </Layout>
  );
};

export default About;
