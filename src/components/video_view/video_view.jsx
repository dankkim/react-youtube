import React from "react";
import styles from "./video_view.module.css";

const videoView = ({ video, video: { snippet } }) => {
  console.log(snippet);
  return (
    <div className={styles.container}>
      <iframe
        src={`https://www.youtube.com/embed/${video.id}`}
        title="YouTube video player"
        frameBorder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h2 className={styles.title}>{snippet.title}</h2>
      <h3 className={styles.channel}>{snippet.channelTitle}</h3>
      <pre className={styles.desc}>{snippet.description}</pre>
    </div>
  );
};

export default videoView;
