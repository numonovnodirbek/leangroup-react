import Carusel from "../carusel/Carusel";
import "./Sertifikat.scss";

const Sertifikat = () => {
  return (
    <>
      <section className="sertifikat">
        <div className="container">
          <div className="sertifikat__block">
            <h2 className="sertifikat__title">
              Качество продукции подтверждают <span>сертификаты</span>
            </h2>
            <Carusel />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sertifikat;
