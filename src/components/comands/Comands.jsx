import comandsItemImg1 from "../../assets/images/comands__item-img1.png";
import comandsItemImg2 from "../../assets/images/comands__item-img2.png";
import comandsItemImg3 from "../../assets/images/comands__item-img3.png";
import comandsItemImg4 from "../../assets/images/comands__item-img4.png";
import comandsItemImg5 from "../../assets/images/comands__item-img5.png";
import "./Comands.scss";

const Comands = () => {
  return (
    <>
      <section className="comands">
        <div className="container">
          <div className="comands__block">
            <h2 className="comands__title">
              Наша <span>команда</span>
            </h2>
            <ul className="comands__list">
              <li className="comands__item">
                <div className="comands__item-img">
                  <img src={comandsItemImg1} alt="comands__item-img1!" />
                </div>
                <h2 className="comands__item-title">Войнич Дарья</h2>
                <p className="comands__item-text">
                  Заместитель директора по продажам
                </p>
                <p className="comands__item-tel">+375 (17) 270-53-77 (317)</p>
              </li>
              <li className="comands__item">
                <div className="comands__item-img">
                  <img src={comandsItemImg2} alt="comands__item-img2!" />
                </div>
                <h2 className="comands__item-title">Мисько Екатерина</h2>
                <p className="comands__item-text">
                  Начальник отдела сопровождения
                </p>
                <p className="comands__item-tel">+375 (17) 270-53-77 (115)</p>
                <p className="comands__item-tel1"> +375 29 112-73-48</p>
                <p className="comands__item-email">
                  k.melnichenko@leangroup.by
                </p>
              </li>
              <li className="comands__item">
                <div className="comands__item-img">
                  <img src={comandsItemImg3} alt="comands__item-img3!" />
                </div>
                <h2 className="comands__item-title">Дмитроченко Дмитрий</h2>
                <p className="comands__item-text">
                  Начальник отдела допечатной подготовки
                </p>
                <p className="comands__item-tel">+375 (17) 270-53-77 (333)</p>
                <p className="comands__item-tel1"> +375 29 360-32-26</p>
                <p className="comands__item-email">
                  k.melnichenko@leangroup.by
                </p>
              </li>
              <li className="comands__item">
                <div className="comands__item-img">
                  <img src={comandsItemImg4} alt="comands__item-img4!" />
                </div>
                <h2 className="comands__item-title">Антух Евгений</h2>
                <p className="comands__item-text">Начальник отдела снабжения</p>
                <p className="comands__item-tel">+375 (17) 270-53-77 (148)</p>
                <p className="comands__item-tel1">+375 (17) 270-53-77 (148)</p>
                <p className="comands__item-email">j.antuh@leangroup.by</p>
              </li>
              <li className="comands__item">
                <div className="comands__item-img">
                  <img src={comandsItemImg5} alt="comands__item-img5!" />
                </div>
                <h2 className="comands__item-title">Мисник Елена</h2>
                <p className="comands__item-text">
                  Специалист по работе с клиентами
                </p>
                <p className="comands__item-tel">+375 (17) 270-53-77 (322)</p>
                <p className="comands__item-tel1"> +375 29 329-34-03</p>
                <p className="comands__item-email">e.misnik@leangroup.by</p>
              </li>
            </ul>
            <button className="comands__btn">Наша команда</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comands;
