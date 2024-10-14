import React from "react";
import Layout from "../../components/layout/Layout";
import "./Privacy.css";

const Privacy = () => {
  return (
    <Layout title={"Privacy Policy-E Comm"}>
      <div className="policy-box">
        {/* <div className='policy-img'>
        <img src='https://i.pinimg.com/736x/9e/c0/d6/9ec0d689b6ba400248ecd0a8e7740c18.jpg'/>
        </div> */}
        <div className="policy-info">
          <h1>Privacy Policy</h1>
          <p>
            At Resume Builder Web Application, your privacy is important to
            us. We collect personal information, such as your name, email, and
            resume data, to provide and improve our services. Your data is
            securely stored and never shared with third parties, except as
            needed to operate the app or comply with legal obligations. You can
            access, update, or delete your information at any time. We use
            cookies to enhance your experience, and you have control over your
            cookie preferences. For more details, please review our full Privacy
            Policy or  <a href="https://react-portfolio-eight-sigma-33.vercel.app/">Visit</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
