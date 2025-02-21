import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchVideoDetails } from "../data/api";
import "./VideoPage.scss";

const VideoPage = () => {
  const { videoId } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    const getVideoDetails = async () => {
      const details = await fetchVideoDetails(videoId);
      setVideoDetails(details);
    };

    getVideoDetails();
  }, [videoId]);

  if (!videoDetails)
    return (
      <div className="container">
        <div className="loader-div">
          <div className="loader">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    );

  const videoDetailsIcons = [
    {
      id: 1,
      name: "DISLIKE",
      disLikeIcon: <img src="/public/icons/disLike.svg" alt="dslike" />,
    },
    {
      id: 2,
      name: "SHARE",
      disLikeIcon: <img src="/public/icons/share.svg" alt="share" />,
    },
    {
      id: 3,
      name: "DOWNLOAD",
      disLikeIcon: <img src="/public/icons/download.svg" alt="download" />,
    },
    {
      id: 4,
      name: "CLIP",
      disLikeIcon: <img src="/public/icons/cate.svg" alt="cate" />,
    },
    {
      id: 5,
      name: "SAVE ",
      disLikeIcon: <img src="/public/icons/saved.svg" alt="saved" />,
    },
    {
      id: 6,
      disLikeIcon: <img src="/public/icons/dots.svg" alt="more" />,
    },
  ];
  return (
    <div className="container">
      <div style={{ marginTop: "50px" }} className="video-section">
        <div className="video-container">
          {/* video */}
          <iframe
            width="100%"
            height="515"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* video details */}
        <div className="video-details">
          <h2>{videoDetails.title}</h2>
          <div className="in-details">
            <p> {videoDetails.stats?.views ?? "N/A"} views</p>

            <div className="more-details">
              <div className="like-div">
                <img src="/public/icons/like.svg" alt="like" />
                <p>{videoDetails.stats?.likes ?? "N/A"}</p>
              </div>
              {videoDetailsIcons.map((icon) => {
                return (
                  <div key={icon.id} className="icon-div">
                    {icon.disLikeIcon}
                    <p>{icon.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr />
        {/* done */}
      </div>
    </div>
  );
};

export default VideoPage;
