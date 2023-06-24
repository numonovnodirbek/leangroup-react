import "./Footer.scss";
import leanGroupLogo from "../../assets/images/headerLogo.png";
import vk from "../../assets/images/vk.svg";
import fb from "../../assets/images/fb.svg";
import lkn from "../../assets/images/linkedin.svg";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="site-footer__top-list">
            <div className="site-footer__top-img">
              <img
                src={leanGroupLogo}
                style={{
                  width: "116px",
                }}
                alt="site-footer__top-img!"
              />
            </div>
            <div className="site-footer__top-img">
              <img
                src={vk}
                style={{
                  width: "30px",
                }}
                alt="site-footer__top-img!"
              />
            </div>
            <div className="site-footer__top-img">
              <img
                src={fb}
                style={{
                  width: "19px",
                }}
                alt="site-footer__top-img!"
              />
            </div>
            <div className="site-footer__top-img">
              <img
                src={lkn}
                style={{
                  width: "25px",
                }}
                alt="site-footer__top-img!"
              />
            </div>
          </div>
          <div className="site-footer__block">
            <ul className="site-footer__list">
              <li className="site-footer__item">
                <h2>Продукция</h2>
                <p>Ламинатные тубы</p>
                <p>Экструзионные тубы</p>
                <p>Другая упаковка</p>
              </li>
              <li className="site-footer__item">
                <h2>Компания</h2>
                <p>О нас</p>
                <p>Наша команда</p>
                <p>Сертификаты</p>
              </li>
              <li className="site-footer__item">
                <h2>Разделы</h2>
                <p>Контакты</p>
                <p>Новости</p>
                <p>Вакансии</p>
              </li>
            </ul>

            <div className="site-footer__content-block">
              <ul className="site-footer__content-top">
                <li className="site-footer__content-top-item">
                  <h2>Беларусь</h2>
                  <p>+375 (17) 270 53 77</p>
                  <p>+375 (17) 270 53 78</p>
                </li>
                <li className="site-footer__content-top-item">
                  <h2>Европа</h2>
                  <p>+48 73 1111 044</p>
                </li>
              </ul>

              <ul className="site-footer__content-bottom">
                <li className="site-footer__content-bottom-item">
                  <h2>Москва</h2>
                  <p>+7 (495) 280 73 44</p>
                  <p>+7 (495) 280 73 44</p>
                </li>
                <li className="site-footer__content-bottom-item">
                  <h2>Екатеринбург</h2>
                  <p>+7 (343) 346 82 06</p>
                </li>
              </ul>
            </div>
          </div>
          <p className="site-footer__text">
            © 2022 Leangroup. All Rights Reserved. Разработка и продвижение
            сайтов SkyWeb.by
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
