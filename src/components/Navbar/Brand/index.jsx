import { Link } from "react-router-dom";
import brandIcon from "../../../assets/icons/brandIcon.png";
import "./style.css";

function Brand() {
  return (
    <Link to="/">
      <div className="brand">
        <img src={brandIcon} alt="brand" />
      </div>
    </Link>
  );
}
export default Brand;
