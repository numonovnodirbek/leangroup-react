import headerLogo from "../../assets/images/headerLogo.png";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="site-header__block">
            <div className="site-header__img">
              <img src={headerLogo} alt="header logo!" />
            </div>
            <ul className="site-header__list">
              <li className="site-header__item">Продукция</li>
              <li className="site-header__item">Сертификаты</li>
              <li className="site-header__item">Наша команда</li>
              <li className="site-header__item">О нас</li>
              <li className="site-header__item">Новости</li>
              <li className="site-header__item">Вакансии</li>
              <li className="site-header__item">Контакты</li>
            </ul>
            <ul className="language__list">
              <li className="language__item">RU</li>
              <li className="language__item">EN</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
