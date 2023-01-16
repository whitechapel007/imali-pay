import "./tables.css";
import avatar from "../../assets/tableAvatar.svg";
import badge from "../../assets/badge.svg";
import { useNavigate, useLocation } from "react-router-dom";
const Tables = ({
  first,
  second,
  third,
  fourth,
  fifth,
  overview,
  data,
  fulfilment,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="table-layout">
      <table>
        <thead className="t-head">
          <tr>
            <td className="check-box">
              <input type="checkbox" /> {first}
            </td>
            <td>{second}</td>
            <td>{third}</td>
            <td>{fourth}</td>
            <td>{fifth}</td>
          </tr>
        </thead>
        <tbody className="t-body">
          {data.map((item, idx) => (
            <>
              <tr
                onClick={
                  location.pathname === "/fulfilment"
                    ? () => navigate("/customer-reconcillation")
                    : () => navigate("/customer-profile")
                }
                key={idx}
              >
                {overview ? (
                  <td className="table-image">
                    <input type="checkbox" />
                    <img src={avatar} alt="" />
                    <span>
                      <h1>Phoenix Baker</h1>
                      <p>+234 803 0000</p>
                    </span>
                  </td>
                ) : (
                  <td className="check-box">
                    {" "}
                    <input type="checkbox" /> #3066{" "}
                  </td>
                )}
                {overview ? (
                  <td>{item.deposit}</td>
                ) : (
                  <td className="table-image">
                    <img src={avatar} alt="" />
                    <span>
                      <h1>Phoenix Baker</h1>
                      <p>+234 803 0000</p>
                    </span>
                  </td>
                )}
                <td>{item.date}</td>
                {overview ? (
                  <td>{item.voucher}</td>
                ) : (
                  <td>
                    {(fulfilment && item.model) || <img src={badge} alt="" />}
                  </td>
                )}

                {overview ? (
                  <td>
                    <img src={item.success} alt="" />
                  </td>
                ) : (
                  <>
                    {(fulfilment && <img src={badge} alt="" />) || (
                      <td className="view">View</td>
                    )}
                  </>
                )}
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
