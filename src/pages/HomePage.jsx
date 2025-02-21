import { useEffect, useState } from "react";
import SiderBarPage from "./SiderBarPage";
import { fetchVideos } from "../data/api";
import "./Home.scss";
import { Link } from "react-router-dom";
const HomePage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos("phonk").then((data) => setVideos(data));
  }, []);

  return (
    <main>
      <div className="container">
        <div className="home-section">
          <SiderBarPage />
          <div className="videos">
            {videos.map((video, index) => (
              <div key={index}>
                <Link
                  to={`/video/${video.video.videoId}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img
                    src={video.video.thumbnails[0].url}
                    alt={video.video.title}
                    width="100%"
                  />
                  <h3>{video.video.title}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
