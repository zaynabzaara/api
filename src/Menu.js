import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="topnav">
        <div className="topnav-centered">
          <NavLink to="/" className="active">
            Home
          </NavLink>
        </div>

        <div className="topnav-right">
          <NavLink to="/UserList">UserList</NavLink>
        </div>
      </div>
     
    </>
  );
};

export default Menu;