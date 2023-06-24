import peopleLogo from "../../assets/images/peopleLogo.svg";
import phoneLogo from "../../assets/images/phoneLogo.svg";
import "./Information.scss";

const Information = () => {
  return (
    <>
      <section className="information">
        <div className="container">
          <div className="information__block">
            <h2 className="information__title">
              Получить подробную <span>информацию</span>
            </h2>
            <p className="information__text">
              Просто заполните форму, наш менеджер свяжется с вами в ближайшее
              время
            </p>
            <form className="information__form">
              <div className="information__input-list">
                <div className="information__form-control">
                  <label>
                    <div className="people__logo">
                      <img src={peopleLogo} alt="people logo!" />
                    </div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      autoComplete="off"
                    />
                  </label>
                </div>
                <div className="information__form-control">
                  <label>
                    <div className="phone__logo">
                      <img src={phoneLogo} alt="phone logo!" />
                    </div>
                    <input
                      type="number"
                      minLength={9}
                      placeholder="+375 (29) 0000000"
                      autoComplete="off"
                    />
                  </label>
                </div>
              </div>
              <textarea
                cols="64"
                rows="3"
                placeholder="Комментарий"
                autoComplete="off"></textarea>
              <div>
              <button className="information__form-btn">
                Получить информацию
              </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;
