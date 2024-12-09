import React from "react";
import footImg1 from "../images/footImg1.png";
import footImg2 from "../images/footImg2.png";
import footImg3 from "../images/footImg3.png";
import mapLogo from "../images/mapLogo.png";
function FooterPage() {
  return (
    <div className="main-foot-container">
      <div className="main-foot-cont">
        <div className="foot-card">
          <img src={footImg1} alt="footImg" />
          <div>
            <p>Phone Number</p>
            <p>+947 3118 1843</p>
          </div>
        </div>
        <div className="foot-card">
          <img src={footImg2} alt="footImg" />
          <div>
            <p>Phone Number</p>
            <p>+947 3118 1843</p>
          </div>
        </div>
        <div className="foot-card">
          <img src={footImg3} alt="footImg" />
          <div>
            <p>Phone Number</p>
            <p>+947 3118 1843</p>
          </div>
        </div>
      </div>
      <div className="foot-image-cont">
        <div className="foot-image">
          <img
            src="https://s3-alpha-sig.figma.com/img/8be1/c27b/24873ffb8a3345a8dedea9b0d8f9e7ba?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L0spKcLnDj3-RGpQBgOl4A15XyrTvF-baao9zqhB1Sbc4h8fV0bqAxcS7zgqS2FsjV7o9OxvALHkXRRbgFT3Xp~6PeUjIn~ISRuX16EbEaLdhXEEpKqHxhzNSpqyeJcazv-C-0Fk4L2YhBx966luC0vI7UTh0tfPGFeD0sMakYF2KogtEA3m~mfkw7wOehPZa3kvbcF7t0T~HrGgOXynC6TglKELsRGlVz95fjwecpdCjr99eGIDVFD61c8UYKTCPShu1wAmLXrhq0ps1APbdyq0Vm16-DHw5sjSFHRHiAsWAAmMCJRJFA5-H9-AXr9MVi1H-zb2wDFoRz3KoK0wsQ__"
            alt="website_logo"
          />
        </div>
        <p>
          Your health, physical and emotional well-being is important to us. We
          are always by your side and have made it even easier for you to find
          the necessary vitamins.
        </p>
      </div>
      <div className="foot-location-cont">
        <img
          src={mapLogo}
          height="12x"
          alt="location"
          style={{ marginTop: "5px" }}
        />
        <p>
          Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
        </p>
      </div>
    </div>
  );
}

export default FooterPage;
