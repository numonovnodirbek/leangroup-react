import cremImg1 from "../../assets/images/cremImg1.png";
import cremImg2 from "../../assets/images/cremImg2.png";
import cremImg3 from "../../assets/images/cremImg3.png";
import cremImg4 from "../../assets/images/cremImg4.png";
import cremImg5 from "../../assets/images/cremImg5.png";
import "./Patalog.scss";

const Patalog = () => {
  return (
    <>
      <section className="patalog">
        <div className="container">
          <div className="patalog__block">
            <h2 className="patalog__title">
              Наша <span>продукция</span>
            </h2>
            <ul className="patalog__list">
              <li className="patalog__item">Ламинатные тубы</li>
              <li className="patalog__item">Экструзионные тубы</li>
              <li className="patalog__item">Другая упаковка</li>
            </ul>
            <ul className="patalog__content-list">
              <li className="patalog__content-item">
                <img src={cremImg1} alt="cremImg!" />
              </li>
              <li className="patalog__content-item">
                <img src={cremImg2} alt="cremImg!" />
              </li>
              <li className="patalog__content-item">
                <img src={cremImg3} alt="cremImg!" />
              </li>
              <li className="patalog__content-item">
                <img src={cremImg4} alt="cremImg!" />
              </li>
              <li className="patalog__content-item">
                <img src={cremImg5} alt="cremImg!" />
              </li>
            </ul>
            <button className="patalog__btn">Перейти в каталог</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Patalog;
