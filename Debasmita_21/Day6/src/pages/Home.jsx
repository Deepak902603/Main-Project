import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">WeLcOmE tO HomE pAgE 🚀</h1>
        <p className="home-subtitle">
          Simple • Clean • Scalable State Management
        </p>

        <div className="home-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/task")}
          >
            Get Started
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/learn")} // <-- Added this
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
