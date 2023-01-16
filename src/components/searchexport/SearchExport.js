import "./searchexport.css";
import search from "../../assets/search.svg";
const SearchExport = ({ placeholder }) => {
  return (
    <div className="search-container">
      <div className="search-box">
        <input type="text" className="search-input" placeholder={placeholder} />
        <img src={search} alt="" className="search-icon" />
      </div>

      <div>
        <button className="export-button">Export</button>
      </div>
    </div>
  );
};

export default SearchExport;
