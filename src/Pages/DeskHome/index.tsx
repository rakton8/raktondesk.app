import { Outlet } from "react-router-dom";
import DeskSideBar from "../../Components/DeskSideBar";
import styles from "./desk-home.module.scss";

const DeskHome = () => {
  return (
    <div className={styles.deskhome}>
      <div className={styles.deskhome_sidebar}>
        <DeskSideBar />
      </div>
      <div className={styles.deskhome_content}>
        <Outlet />
      </div>
    </div>
  );
};

export default DeskHome;
