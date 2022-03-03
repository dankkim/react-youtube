import React, { useState, useEffect, useCallback } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import VideoView from "./components/video_view/video_view";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  // eslint-disable-next-line
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
    window.scroll(0, 0);
  };

  // [] : 마운트 될 때 한번만 실행
  // [youtube] : 해당 데이터가 바뀔 때 실행
  useEffect(() => {
    youtube.mostPopular().then(videos => {
      setVideos(videos);
    });
  }, [youtube]);

  const search = useCallback(
    query => {
      setSelectedVideo(null);
      youtube.search(query).then(videos => setVideos(videos));
    },
    [youtube]
  );

  return (
    <div className={styles.wrap}>
      <SearchHeader onSearch={search} />
      <div className={styles.content}>
        {selectedVideo && <VideoView video={selectedVideo} />}
        <VideoList
          videos={videos}
          display={selectedVideo ? "subList" : "mainList"}
          onVideoClick={selectVideo}
        />
      </div>
    </div>
  );
}

export default App;
