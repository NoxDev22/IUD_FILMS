import { useState } from "react";

export function AdminAside() {
  const [activeLi, setActiveLi] = useState("panel");
  return (
    <aside className="aside">
      <div className="aside_header">
        <span className="aside_headerCircle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="aside_headerIcon"
          >
            <path
              fill="#f9f5ebb0"
              d="M17 14.4c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1s-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1m0 3.1c-.7 0-2.2.4-2.2 1.1c.5.7 1.3 1.2 2.2 1.2s1.7-.5 2.2-1.2c0-.7-1.5-1.1-2.2-1.1m1-6.4V6.3L10.5 3L3 6.3v4.9c0 4.5 3.2 8.8 7.5 9.8c.6-.1 1.1-.3 1.6-.5C13.2 22 15 23 17 23c3.3 0 6-2.7 6-6c0-3-2.2-5.4-5-5.9M11 17c0 .6.1 1.1.2 1.6c-.2.1-.5.2-.7.3c-3.2-1-5.5-4.2-5.5-7.7V7.6l5.5-2.4L16 7.6v3.5c-2.8.5-5 2.9-5 5.9m6 4c-2.2 0-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4s-1.8 4-4 4"
            />
          </svg>
        </span>
        <span className="aside_headerTexts">
          <h2 className="aside_headerTitle">IUD Manager</h2>
          <p className="aside_headerText">Global Admin</p>
        </span>
      </div>
      <ul className="aside_list">
        <li
          className={`aside_listLi ${activeLi === "panel" ? "activeLi" : ""}`}
          onClick={() => setActiveLi("panel")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="26"
            height="26"
            className="aside_listIcon"
          >
            <path
              fill="#f9f5ebb0"
              d="M3 3h8v10H3zm2 2v6h4V5zm8-2h8v6h-8zm2 2v2h4V5zm-2 6h8v10h-8zm2 2v6h4v-6zM3 15h8v6H3zm2 2v2h4v-2z"
            />
          </svg>
          <p className="aside_listText">Panel</p>
        </li>
        <li
          className={`aside_listLi ${activeLi === "directores" ? "activeLi" : ""}`}
          onClick={() => setActiveLi("directores")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="26"
            height="26"
            className="aside_listIcon"
          >
            <path
              fill="none"
              stroke={` ${activeLi === "directores" ? "#ffb4aa" : "#f9f5ebb0"}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m6 21l12-9M6 12l12 9M5 12h14M6 3v9m12-9v9M6 8h12M6 5h12"
            />
          </svg>
          <p className="aside_listText">Directores</p>
        </li>
        <li
          className={`aside_listLi ${activeLi === "generos" ? "activeLi" : ""}`}
          onClick={() => setActiveLi("generos")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="26"
            height="26"
            className="aside_listIcon"
          >
            <path
              fill="#f9f5ebb0"
              d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9.54 9L6.87 5h2.6l2.67 4zm5 0l-2.67-4h2.6l2.67 4zM4 5h.46l2.67 4H4zm0 14v-8h16V9h-.46l-2.67-4H20v14z"
            />
          </svg>
          <p className="aside_listText">Géneros</p>
        </li>
        <li
          className={`aside_listLi ${activeLi === "productoras" ? "activeLi" : ""}`}
          onClick={() => setActiveLi("productoras")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="26"
            height="26"
            className="aside_listIcon"
          >
            <path
              fill="#f9f5ebb0"
              fillRule="evenodd"
              d="M149.333 234.667V64H64v362.667h204.794a116.6 116.6 0 0 1-12.316-42.668H106.667v-82.483l43.404-23.508l84.596-45.817v69.645l128-70.135v24.777c3.513-.316 7.071-.478 10.666-.478a117.4 117.4 0 0 1 32 4.417v-95.869l-128 70.119v-69.334zm194.075 207.094c-6.806-15.07-11.375-35.242-12.481-57.761h-31.504c3.711 25.948 20.763 47.592 43.985 57.761m19.25-9.21c-5.312-11.952-9.295-28.86-10.369-48.551h42.089c-1.075 19.691-5.057 36.599-10.369 48.551c-3.137 7.057-6.319 11.447-8.775 13.784c-.873.832-1.505 1.275-1.901 1.503c-.395-.228-1.027-.671-1.901-1.503c-2.455-2.337-5.638-6.727-8.774-13.784m0-118.436c-5.312 11.952-9.295 28.861-10.369 48.552h42.089c-1.075-19.691-5.057-36.6-10.369-48.552c-3.137-7.057-6.319-11.447-8.775-13.784c-.873-.831-1.505-1.274-1.901-1.503c-.395.229-1.027.672-1.901 1.503c-2.455 2.337-5.638 6.727-8.774 13.784m40.601 127.646c6.806-15.07 11.374-35.242 12.481-57.761h31.504c-3.712 25.948-20.764 47.592-43.985 57.761m12.481-79.094h31.504c-3.712-25.948-20.764-47.592-43.985-57.762c6.806 15.07 11.374 35.242 12.481 57.762m-116.317 0h31.504c1.106-22.52 5.675-42.692 12.481-57.762c-23.222 10.17-40.274 31.814-43.985 57.762m73.91 106.666c53.02 0 96-42.98 96-96c0-53.019-42.98-96-96-96c-53.019 0-96 42.981-96 96c0 53.02 42.981 96 96 96"
              clipRule="evenodd"
            />
          </svg>
          <p className="aside_listText">Productoras</p>
        </li>
        <li
          className={`aside_listLi ${activeLi === "tipos" ? "activeLi" : ""}`}
          onClick={() => setActiveLi("tipos")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="26"
            height="26"
            className="aside_listIcon"
          >
            <path
              fill="#f9f5ebb0"
              d="M29 30H19a1 1 0 0 1-1-1V19a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1m-9-2h8v-8h-8zM8 30c-3.308 0-6-2.692-6-6s2.692-6 6-6s6 2.692 6 6s-2.692 6-6 6m0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4m14-6H10a1 1 0 0 1-.857-1.515l6.002-10.003C15.338 2.16 15.669 2 16 2s.662.16.855.482l6.002 10.003A1 1 0 0 1 22 14m-10.234-2h8.468L16 4.944z"
            />
          </svg>
          <p className="aside_listText">Tipos</p>
        </li>
        <li
          className={`aside_listLi ${activeLi === "analiticas" ? "activeLi" : ""}`}
          onClick={() => setActiveLi("analiticas")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            width="26"
            height="26"
            className="aside_listIcon"
          >
            <g fill={`${activeLi === "analiticas" ? "#ffb4aa" : "#f9f5ebb0"}`}>
              <path
                fillRule="evenodd"
                d="M33 68a2 2 0 0 0 2-2V38a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2zm-18 0a2 2 0 0 0 2-2V56a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2zm36-18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V52a2 2 0 0 1 2-2zm18 18a2 2 0 0 0 2-2V38a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2z"
                clipRule="evenodd"
              />
              <path d="M17 66h-2zm16-28v28h4V38zm-4 0h4v-4h-4zm0 28V38h-4v28zm4 0h-4v4h4zM15 56v10h4V56zm-4 0h4v-4h-4zm0 10V56H7v10zm4 0h-4v4h4zm40 0V52h-4v14zm-8 4h4v-4h-4zm-4-18v14h4V52zm8-4h-4v4h4zm18-10v28h4V38zm-4 0h4v-4h-4zm0 28V38h-4v28zm4 0h-4v4h4zm-8 0a4 4 0 0 0 4 4v-4zm4-32a4 4 0 0 0-4 4h4zm4 32v4a4 4 0 0 0 4-4zm4-28a4 4 0 0 0-4-4v4zM47 52v-4a4 4 0 0 0-4 4zm0 14h-4a4 4 0 0 0 4 4zm8-14a4 4 0 0 0-4-4v4zm-4 14v4a4 4 0 0 0 4-4zM7 66a4 4 0 0 0 4 4v-4zm4-14a4 4 0 0 0-4 4h4zm4 14v4a4 4 0 0 0 4-4zm4-10a4 4 0 0 0-4-4v4zm6 10a4 4 0 0 0 4 4v-4zm4-32a4 4 0 0 0-4 4h4zm4 32v4a4 4 0 0 0 4-4zm4-28a4 4 0 0 0-4-4v4zm-22.353-9.182a2.5 2.5 0 0 0 3.535 3.535zm14.707-7.636a2.5 2.5 0 0 0-3.536-3.536zm6.934-4.03a2.5 2.5 0 1 0-3.2 3.842zm7.424 12.695a2.5 2.5 0 0 0 3.2-3.841zm7.376-3.84a2.5 2.5 0 1 0 3.2 3.84zm13.825-5.013a2.5 2.5 0 1 0-3.201-3.841zm-46.73 11.36l11.17-11.172l-3.535-3.536l-11.171 11.172zm14.904-11.36l10.625 8.853l3.2-3.841l-10.624-8.854zm21.202 8.853l10.624-8.853l-3.201-3.841l-10.624 8.853z" />
              <path
                fillRule="evenodd"
                d="M35 14a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zM17 32a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2zm28-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm26-15a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2z"
                clipRule="evenodd"
              />
              <path d="M29 14h4v-4h-4zm0 4v-4h-4v4zm4 0h-4v4h4zm0-4v4h4v-4zM11 32h4v-4h-4zm0 4v-4H7v4zm4 0h-4v4h4zm0-4v4h4v-4zm36-7h-4v4h4zm4 8v-4h-4v4zm-8 4h4v-4h-4zm-4-8v4h4v-4zm22-15h4v-4h-4zm0 4v-4h-4v4zm4 0h-4v4h4zm0-4v4h4v-4zm0 8a4 4 0 0 0 4-4h-4zm-8-4a4 4 0 0 0 4 4v-4zm8-4h4a4 4 0 0 0-4-4zm-4-4a4 4 0 0 0-4 4h4zM47 33h-4a4 4 0 0 0 4 4zm4 0v4a4 4 0 0 0 4-4zm-4-8a4 4 0 0 0-4 4h4zm4 4h4a4 4 0 0 0-4-4zM15 40a4 4 0 0 0 4-4h-4zm-8-4a4 4 0 0 0 4 4v-4zm8-4h4a4 4 0 0 0-4-4zm-4-4a4 4 0 0 0-4 4h4zm22-6a4 4 0 0 0 4-4h-4zm-8-4a4 4 0 0 0 4 4v-4zm8-4h4a4 4 0 0 0-4-4zm-4-4a4 4 0 0 0-4 4h4z" />
            </g>
          </svg>
          <p className="aside_listText">Analíticas</p>
        </li>
        <li
          className={`aside_listLi ${activeLi === "configuracion" ? "activeLi" : ""}`}
          onClick={() => setActiveLi("configuracion")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="26"
            height="26"
          >
            <path
              fill="currentColor"
              d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
            />
          </svg>
          <p className="aside_listText">Configuración</p>
        </li>
      </ul>
      <div className="aside_footer">
        <img src="./images/userImg.jpeg" alt="" className="aside_footerImg" />
        <p className="aside_footerText">Admin User</p>
      </div>
    </aside>
  );
}
