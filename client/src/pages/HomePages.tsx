import video from "../assets/images/video2.mp4";
import "./HomePages.css";

function HomePages() {
  return (
    <>
      <div className="background-video">
        <video autoPlay muted loop src={video} />
      </div>
    </>
  );
}

export default HomePages;
