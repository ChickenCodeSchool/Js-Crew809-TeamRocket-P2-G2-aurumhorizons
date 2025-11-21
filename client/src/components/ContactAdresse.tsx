import "./ContactAdresse.css";
/*
type inputProps = {
  label: string;
};*/
function ContactAdresse() {
  return (
    <>
      <form className="ac-form">
        <div className="ac-content">
          <h2>With our services you can</h2>
          <ul>
            <li>Improuve usability of your porduct</li>
            <li>
              Engage users at a higher level and outperform your competition
            </li>
            <li>Reduce the onboarding time and improve sales</li>
            <li>Balance user needs with your business goal</li>
          </ul>
          <div className="ac-location">
            <div className="ac-usa">
              {/* biome-ignore lint/a11y/useAltText: <explanation> */}
              <img src="" />
              <h3>USA</h3>
              <p className="cityloc">
                280 W, 17th street 4th floor, Flat no: 407 New York Ny, 10018
              </p>
            </div>
            <div className="ac-india">
              {/* biome-ignore lint/a11y/useAltText: <explanation> */}
              <img src="" />
              <h3>India</h3>
              <p className="cityloc">
                Plot No 8-2-601/p/15ms Banjara Hilss, Road No 10 Hyderabad,
                500034
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactAdresse;
