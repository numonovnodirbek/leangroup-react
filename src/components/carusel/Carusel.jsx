import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import Slider from "react-slick";
import "./Carusel.scss";

const Carusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <>
      <section className="carusel">
        <div className="container">
          <div className="carusel__block">
            <Slider {...settings}>
              <div className="slider__item">
                <img src={img1} alt="Slider img!" />
              </div>
              <div className="slider__item">
                <img src={img2} alt="Slider img!" />
              </div>
              <div className="slider__item">
                <img src={img3} alt="Slider img!" />
              </div>
              <div className="slider__item">
                <img src={img4} alt="Slider img!" />
              </div>
              <div className="slider__item">
                <img src={img5} alt="Slider img!" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carusel;
