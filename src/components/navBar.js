
import { Link } from "react-router-dom";

const navBar = () => (
  <div className="header">
    <ul className="language-switcher">
      <li>
        <Link to="/">EN</Link>
      </li>
      |
      <li>
        <Link to="/homeES">ES</Link>
      </li>
    </ul>
  </div>
);

export default navBar;
