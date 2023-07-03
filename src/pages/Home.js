import footer from "./Contact.png";
import HomeBG from "./Home.svg";
import Services from "./Services.svg";
import third from "./3.svg";
import testimonials from "./Testimonials.svg";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="homepage" style={{ backgroundImage: `url(${HomeBG})` }}>
        <div className="MainCircle">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
        </div>
        <div className="ripple-background">
          <div className="circle1 xlarge shade1"></div>
          <div className="circle1 large shade2"></div>
          <div className="circle1 medium shade3"></div>
          <div className="circle1 small shade4"></div>
        </div>
      </div>
      <div
        className="Services"
        style={{ backgroundImage: `url(${Services})` }}
      ></div>
      <div
        className="thirdPage"
        style={{ backgroundImage: `url(${third})` }}
      ></div>
      <div
        className="testimonials"
        style={{ backgroundImage: `url(${testimonials})` }}
      ></div>
      <div
        className="footer"
        style={{ backgroundImage: `url(${footer})` }}
      ></div>
    </div>
  );
}

export default Home;
