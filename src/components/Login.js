import React from "react";
import "./Login.css";
import cb1 from "../assests/images/cta-logo-one.svg";
import cb2 from "../assests/images/cta-logo-two.png";

function Login() {
  return (
    <div className="login">
      <div className="content_box">
        <div className="cb1">
          <img src={cb1} />
        </div>
        <div className="button_signup">GET ALL THERE</div>
        <div className="description_login">
          Disney+ Hotstar is an online video streaming platform owned by Novi
          Digital Entertainment Private Limited, a wholly owned subsidiary of
          Star India Private Limited. Disney+ Hotstar currently offers over
          100,000 hours of TV content and movies across 9 languages, and every
          major sport covered live. Highly evolved video streaming technology
          and a high attention to quality of experience across devices and
          platforms, make Disney+ Hotstar the most complete video destination
          for Over The Top (OTT) video consumers.
        </div>
        <div className="cb2">
          <img src={cb2} />
        </div>
      </div>
    </div>
  );
}

export default Login;
