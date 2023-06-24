import vkImg from "../../assets/images/vk.svg";
import fbImg from "../../assets/images/fb.svg";
import linkedinImg from "../../assets/images/linkedin.svg";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__block">
            <div className="hero__content-block">
              <h3 className="hero__content-short-title">
                LEANGROUP - тубы и этикетки
              </h3>
              <h1 className="hero__content-title">Ламинатные тубы</h1>
              <p className="hero__content-text">
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>
              <button className="hero__content-btn">Каталог</button>
            </div>
            <ul className="hero__list">
              <li className="hero__item">
                <div className="hero__item-img">
                  <img src={vkImg} alt="logo!" />
                </div>
              </li>
              <li className="hero__item">
                <div className="hero__item-img">
                  <img src={fbImg} alt="logo!" />
                </div>
              </li>
              <li className="hero__item">
                <div className="hero__item-img">
                  <img src={linkedinImg} alt="logo!" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

