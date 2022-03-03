import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video, video: { snippet }, display, onVideoClick }) => {
  const displayType = display === "subList" ? styles.subList : styles.mainList;

  return (
    <li className={`${styles.container} ${displayType}`}>
      <div className={styles.video} onClick={() => onVideoClick(video)}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
