import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ul className="menu list-reset">
        <li>
          <Link to={"/releases"} className="menu__link">
            <span>Releases</span>
          </Link>
        </li>

        <li>
          <Link to={"/catalog"} className="menu__link">
            <span>Catalog</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
