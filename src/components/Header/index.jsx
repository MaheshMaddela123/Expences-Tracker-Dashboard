import { FaUserAlt } from "react-icons/fa";
import { MdOutlineToggleOff, MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { VscReport } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";

import { Link } from "react-router";

import "./index.css";

const Header = () => {
  return (
    <>
      <header className="header-container">
        <nav className="navbar">
          <div>
            <FaUserAlt className="icon" />
          </div>
          <ul className="nav-links">
            <li>
              <Link className="link" to="/">
                <MdDashboard className="icon" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="link" to="/transactions">
                <GrTransaction className="icon" /> Transaction
              </Link>
            </li>
            <li>
              <Link className="link" to="/reports">
                <VscReport className="icon" />
                Report
              </Link>
            </li>
            <li>
              <Link className="link" to="/settings">
                <IoSettingsOutline className="icon" />
                settings
              </Link>
            </li>
          </ul>

          <div>
            <MdOutlineToggleOff className="icon" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
