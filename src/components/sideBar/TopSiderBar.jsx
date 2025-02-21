import { NavLink } from "react-router-dom";

const TopSiderBar = () => {
  return (
    <div className="container">
      <div className="top-sider-bar">
        <NavLink to="/home" activeClassName="active">
          All
        </NavLink>
      </div>
    </div>
  );
};

export default TopSiderBar;
