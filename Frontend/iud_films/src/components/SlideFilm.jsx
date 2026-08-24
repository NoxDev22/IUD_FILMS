export function SlideFilm({ url, name, description }) {
  return (
    <>
      <img src={url} alt="" className="hero_backgroundImg" />
      <div className="hero_backgroundGradient"></div>
      <div className="hero_container">
        <div className="hero_tags">
          <span className="hero_tag hero_blueTag">NEW RELEASE</span>
          <span className="hero_tag hero_darkTag">4K HDR</span>
        </div>
        <div className="hero_texts">
          <h2 className="hero_title">{name}</h2>
          <p className="hero_description">{description}</p>
        </div>
        <div className="hero_buttons">
          <button type="button" className="hero_button hero_redButton">
            <img src="./icons/play.svg" alt="Icono de play" /> WATCH NOW
          </button>
          <button type="button" className="hero_button hero_blackButton">
            <img src="./icons/add.svg" alt="Icono de agregar" />
            MY LIST
          </button>
        </div>
      </div>
    </>
  );
}
