import { useLocation, useNavigate } from "react-router-dom";
import "./overviewCardBox.css";
const OverViewCardBox = ({
  image,
  text,
  number,
  customer,
  percent,
  defaults,
  icon,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="each-overview">
      <div
        onClick={
          location.pathname === "/" ? () => navigate("/reconcillation") : ""
        }
      >
        {customer ? (
          <h1 className="box-text-main">{text}</h1>
        ) : (
          <img src={image} alt="" className="box-image" />
        )}
      </div>
      <div>
        {customer ? (
          <h1 className="box-number-main">{number}</h1>
        ) : (
          <h3 className="box-text">{text}</h3>
        )}
      </div>
      <div>
        {customer ? (
          <div>
            <span className="customer-span">
              <span>
                <img src={image} alt="" />
                {percent}
              </span>
              <p>vs last month</p>
            </span>
          </div>
        ) : (
          <div className="defaults">
            {<h1 className="box-number">{number}</h1>}
            {defaults && (
              <div>
                {" "}
                <img src={icon} alt="" /> {percent}{" "}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OverViewCardBox;
