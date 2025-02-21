import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdMenu, IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { FaUserSecret } from "react-icons/fa6";

import "./Header.scss";

// import SiderBarPage from "../../pages/SiderBarPage";
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };
  return (
    <header>
      <div className="container">
        <nav>
          <div className="menu">
            <button>
              <IoMdMenu className="menu-toggle" />
            </button>
            <Link to={"/"}>
              <img src="/public/icons/logoBrend.svg" alt="logo-brend" />
            </Link>
          </div>
          <div className="search-father">
            <div className="search">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <CiSearch className="search-icon" onClick={handleSearch} />
            </div>
            <button>
              <FaMicrophone className="microphone-icon" />
            </button>
          </div>
          <div className="end-father">
            <RiVideoAddFill className="video-icon" />
            <IoIosNotifications className="notification" />
            <FaUserSecret className="user-icon" />
          </div>
        </nav>
        {/* <SiderBarPage /> */}
      </div>
    </header>
  );
};

export default Header;
