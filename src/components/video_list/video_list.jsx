import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = ({ videos, display, onVideoClick }) => {
  return (
    <ul className={styles.videos}>
      {videos.map(video => (
        <VideoItem
          key={video.id}
          video={video}
          display={display}
          onVideoClick={onVideoClick}
        />
      ))}
    </ul>
  );
};

export default VideoList;
