import newsItemImg1 from "../../assets/images/news__item-img1.png";
import newsItemImg2 from "../../assets/images/news__item-img2.png";
import newsItemImg3 from "../../assets/images/news__item-img3.png";
import "./News.scss";

const News = () => {
  return (
    <>
      <section className="news">
        <div className="container">
          <div className="news__block">
            <h2 className="news__title" style={{
              marginBottom: '32px'
            }}>Новости</h2>
            <ul className="news__list">
              <li className="news__item">
                <div className="news__item-img">
                  <img src={newsItemImg1} alt="news__item-img1!" />
                </div>
                <p className="news__item-text">28.01.2022</p>
                <h2 className="news__item-title">"ЛеанГрупп" серебряный призер EcoVadis!</h2>
              </li>
              <li className="news__item">
                <div className="news__item-img">
                  <img src={newsItemImg2} alt="news__item-img2!" />
                </div>
                <p className="news__item-text">21.01.2022</p>
                <h2 className="news__item-title">"ЛеанГрупп" серебряный призер EcoVadis!</h2>
              </li>
              <li className="news__item">
                <div className="news__item-img">
                  <img src={newsItemImg3} alt="news__item-img3!" />
                </div>
                <p className="news__item-text">16.12.2021</p>
                <h2 className="news__item-title">Туба, как вид упаковки</h2>
              </li>
            </ul>
            <button className="news__btn">Все новости</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
