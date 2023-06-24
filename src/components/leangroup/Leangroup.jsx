import leangroupImg from "../../assets/images/leangroup__img.png";
import "./Leangroup.scss";
const Leangroup = () => {
  return (
    <>
      <section className="leangroup">
        <div className="container">
          <h1 className="leangroup__title">
            О компании <span>LEANGROUP</span>
          </h1>
          <div className="leangroup__block">
            <div className="leangroup__img">
              <img src={leangroupImg} alt="leangroup img!" />
            </div>
            <div className="leangroup__content-block">
              <p className="leangroup__text">
                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и
                на сегодняшний день является ведущей компанией по производству
                ламинатных и экструзионных туб.
              </p>
              <p className="leangroup__text">
                Имея две технологии – для производства ламинатных и
                экструзионных туб, мы предлагаем вам широкий спектр
                возможностей. Большим преимуществом является собственный
                печатный цех в ламинате и in-line печать в экструзии с
                возможностью различных дополнительных опций декора. Особое
                внимание уделяется работе с поставщиками для контроля и
                поддержания качества производимой нами продукции.
              </p>
              <p className="leangroup__text">
                С января 2018 года компания стала членом Европейской Ассоциации
                производителей туб (ETMA), что подтверждает сильную позицию
                бренда и на рынке Европы.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leangroup;
