import "./ButtonHomePage.css";
import flecheBas from "../assets/images/iconContact/fleche-bas.png";

function ButtonHomePage() {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button className="Button" onClick={handleScroll} type="button">
        <img className="img-button" src={flecheBas} alt="fleche" />
      </button>
    </>
  );
}

export default ButtonHomePage;
