import React from "react";
import firstImage from "../images/Group-8111.svg.svg";
import secondImage from "../images/Group-8110.svg.svg";
import thirdImage from "../images/Group-8117.svg.svg";
import sixImage from "../images/Group-8116.svg.svg";
import fourImage from "../images/Group-8114.svg.svg";
import fiveImage from "../images/Group-8115.svg.svg";
import BetterIngredientsPage from "./BetterIngredientsPage.jsx";
const EssentialItemsCont = ({ imgUrl, title, paragraph }) => (
  <div className="essential-cont-card-items">
    <img src={imgUrl} alt={title} />
    <div>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  </div>
);

const MainCardContainerOne = ({ imgUrl, title, paragraph }) => {
  return (
    <>
      <div className="card-cont-item1">
        <div className="card-img-cont">
          <img src={imgUrl} alt="Clinically studied Img" />
        </div>
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
    </>
  );
};

const MainCardContainerTwo = ({ imgUrl, title, paragraph }) => (
  <>
    <div className="card-cont-item1">
      <div className="card-img-cont">
        <img src={imgUrl} alt="Clinically studied Img" />
      </div>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  </>
);

function HomePage() {
  return (
    <div className="home-container">
      <img
        src="https://s3-alpha-sig.figma.com/img/8be1/c27b/24873ffb8a3345a8dedea9b0d8f9e7ba?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L0spKcLnDj3-RGpQBgOl4A15XyrTvF-baao9zqhB1Sbc4h8fV0bqAxcS7zgqS2FsjV7o9OxvALHkXRRbgFT3Xp~6PeUjIn~ISRuX16EbEaLdhXEEpKqHxhzNSpqyeJcazv-C-0Fk4L2YhBx966luC0vI7UTh0tfPGFeD0sMakYF2KogtEA3m~mfkw7wOehPZa3kvbcF7t0T~HrGgOXynC6TglKELsRGlVz95fjwecpdCjr99eGIDVFD61c8UYKTCPShu1wAmLXrhq0ps1APbdyq0Vm16-DHw5sjSFHRHiAsWAAmMCJRJFA5-H9-AXr9MVi1H-zb2wDFoRz3KoK0wsQ__"
        alt="website_logo"
        height="30px"
      />
      <div className="main-heading-cont">
        <h1 className="main-heading">Essential Vitamins</h1>
        <div className="essential-cont">
          <div className="essential-cont-item1">
            <p>Online Medical Supplies</p>
            <h3>Get Your Vitamins & Minerals</h3>
            <button>Explore</button>
          </div>
          <div className="essential-cont-item2">
            <div className="essential-leaf-cont">
              <img
                src="https://s3-alpha-sig.figma.com/img/6dd8/7f0a/f73aa0189cad884f47381dd92205b7c0?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V21VVDmU7JxcRB76OOhoAt9ZJzhck8hR9U3L1UvokjwzK916BF2uOVElrkcxN5YP-si~qFGW9mXybipDrvdR9inQNdWLrDUUFadDcDwhwDJ4adJ0UfkwYRnZT-0b2Y9w29vguT4lAW1HMCi344hAaPojIhdUTUnuzzFnqR8X2VtFZXtBgZJYDWU5w5bRDHt1Nlxenbc59CkLE-RpPwl-8Wt6uz8rwl5~X6nDY-R0fyUzHYIp51B4LQF2W32WHBANFHGkAREYP66qtVWdYPpqIVAoba2zRrWozjVW~~unoMkhN0MSl-kap8oS2~IXt2HMzEYndt7tu2DsSbjQue1p9g__"
                alt="essential-image1"
                className="essential-img1"
              />
            </div>
          </div>
          <div className="essential-cont-item3">
            <EssentialItemsCont
              imgUrl="https://s3-alpha-sig.figma.com/img/1d76/fc2a/470ec862c44115964979f90b5cb3a94e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l8br3l5hvS1vnQy3WMDDXmvwBbAoZGBF~14OpoaLciq8S325-GN8~oF56m4ULopQlNJDHShbY78MmUGsjZKiZYOrAbdXVyr3HUSNpFdJtbKkVtYhvAUvHp6ghUpHNKNf2H0EhxgXQAdX5jDhFvmlnt6~wcvCWsUCjPhetY5usDdwSlgaddrZxhaKIuaDy8aQ9FqvG5MWZKQTnkBeWZlih89WfilN3Vkv0Iu6w2x8TmzehqQWS-GJFBXyOBMB1X-NSi2AkO4VTnN6MfPeNS-P8DlWm6JYTg4RHFY2CqAtNMenk5f9jmbl4lN-RE-Zn8XYlohyzBU~XMQB~2rnXotnfw__"
              title="Vitamins"
              paragraph="Increased Vitamins and minerals in your diet"
            />
            <EssentialItemsCont
              imgUrl="https://s3-alpha-sig.figma.com/img/ad6c/6ad1/2116d12f8d75befd05e66d41425cb402?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dWc~OffEuoFYOrTG-j6GYpo7NN-Y4O29eyv2w4PY1~ndA0~r8ZJogsmhFEggIbt7DOo2KwWhgGJdYo2RZL04W151-jnCLmEga1NVbZadhi07US-q8oBLAeJ~QkANDAPnzlpL2f4o89~21nLtKDEZYITd4HvG1YF80DhhYtubj05OA4f6hmeprvUIFnJ~MUPSU6ywuc63KZhOGnePDiNYC6wVcIODrgb73yX8-FwFmjTpn690lIb5n2U~-GfjI6I9rTCh950Vdy-UlQ7qO7hG4meji~V9EAGgSZ5HoUvIxN9zicR~Mi2mncb8ECgPKe10P04yn6HfTmecbXP5Ox9lTA__"
              title="Functional Foods"
              paragraph="Functional Foods From protein powers to baby formula"
            />
            <EssentialItemsCont
              imgUrl="https://s3-alpha-sig.figma.com/img/c0ae/6abf/9917c0af12dcc49a9c0130d3e68e04b1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dx9BsMA39Mxa2Odn8qXpjgqLgJyWy~dNaB6DWyuRYIcHKphjSwmcU7SAkxdZ7PI3POB9Uyzc7nMnVoElXMw8CgPzRcSmULQkpHMiGrYbDG~Q8DlnJE-hE3NelQMqZNZdOpuTPBcD2GN2o45uUYVUedoMKhr7BJjjq4Bn6KTkZ8kgzrpS0AEGU7GL1TEkF3n80lm8y4WXbhcWvQ3t7sDsmGyXpFYztMuybNF4rLHwuGcQ0GYWpRQa9~jb1uyEynJGetiEPYQmrQaagS2tvkDhCD0TZ~0YZqnSdYFqi3IGnBJH3YiIqdWxdwfe6MEQgJ~EpmW6GtjA0PRSMQBujKvDvg__"
              title="Weight Loss"
              paragraph="Weight Loss Find scientifically proven solutions"
            />
          </div>
        </div>
        <div className="dots-cont">
          <div className="dots"></div>
          <div className="dots"></div>
        </div>
        <div className="main-card-container">
          <div className="main-content-items1">
            <div className="main-card-items1">
              <MainCardContainerOne
                imgUrl={firstImage}
                title="clinically studied"
                paragraph="All products that we offer have undergone lab and safety tests"
              />
              <MainCardContainerOne
                imgUrl={secondImage}
                title="Vegetarian Friendly"
                paragraph="We have a wide selection of vegetarian products to meet your needs"
              />
              <MainCardContainerOne
                imgUrl={thirdImage}
                title="Made in India"
                paragraph="Shop local and explore health products made right here in India"
              />
            </div>
          </div>
          <div className="main-card-items2">
            <MainCardContainerTwo
              imgUrl={fourImage}
              title="Free shipping"
              paragraph="We deliver to your door with no shipping costs on your orders"
            />
            <MainCardContainerTwo
              imgUrl={fiveImage}
              title="No Risk"
              paragraph="We ensure that all products are safe and within their use-by date"
            />
            <MainCardContainerTwo
              imgUrl={sixImage}
              title="GMO free"
              paragraph="Natural, no modified products and derivatives for those who need it"
            />
          </div>
        </div>
        {/* <BetterIngredientsPage /> */}
      </div>
    </div>
  );
}

export default HomePage;
