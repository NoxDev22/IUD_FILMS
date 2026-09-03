// REACT ROUTER
import { Outlet } from "react-router";
// COMPONENTS
import { AdminAside } from "../components/adminFilmAside";
// ICONS
// ICONS
import { Bell } from "../components/icons/bell";

export function Admin() {
  return (
    <main className="adminMain">
      <AdminAside />
      <section>
        <div className="adminSection_header">
          <h3 className="adminSection_headerText">Vista de Administrador</h3>
          <div className="adminSection_headerIcons">
            <Bell />
            <img
              src="./images/userImg.jpeg"
              alt=""
              className="adminSection_headerImgAdmin"
            />
          </div>
        </div>
        <Outlet />
      </section>
    </main>
  );
}
