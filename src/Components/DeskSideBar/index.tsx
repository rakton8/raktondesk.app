import { NavLink } from "react-router-dom";
import { NAV_LINK_ITEMS } from "../../Common/Constants/NavItems";

const DeskSideBar = () => {
  return (
    <div>
      {NAV_LINK_ITEMS.map((item) => (
        <NavLink to={item.path} key={item.name}>
          <div>{item.displayName}</div>
        </NavLink>
      ))}
    </div>
  );
};

export default DeskSideBar;
