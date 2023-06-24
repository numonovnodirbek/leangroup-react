import BackToTop from "@uiw/react-back-top";
import backTopLogo from "../../assets/images/backTop.svg";
import "./BackTop.scss";

const BackTop = (props) => {
  return (
    <BackToTop
      content={
        <div className="backTop">
          <img src={backTopLogo} alt="BackTop logo!" />
        </div>
      }
    />
  );
};
export default BackTop;
