import { useNavigate } from "react-router-dom";
import "./BackButton.css";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    // biome-ignore lint/a11y/useButtonType: <explanation>
    <button className="back-btn" onClick={() => navigate("/service")}>
      ← Back
    </button>
  );
};

export default BackButton;
