import React, { useState, useEffect } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import VideoView from "./components/video_view/video_view";

function App() {
  const [videos, setVideos] = useState([]);
  // eslint-disable-next-line
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
    window.scroll(0, 0);
  };

  // [] : 마운트 될 때 한번만 실행
  // [videos] : 해당 데이터가 바뀔 때 실행
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=KR&key=AIzaSyBuJwnYIP2nG7wfg5j2u5Wc8E9qQoIVRGM",
      requestOptions
    )
      .then(response => response.json())
      .then(result => {
        setVideos(result.items);
      })
      .catch(error => console.log("error", error));
  }, []);

  const search = query => {
    setSelectedVideo(null);
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyBuJwnYIP2nG7wfg5j2u5Wc8E9qQoIVRGM`,
      requestOptions
    )
      .then(response => response.json())
      .then(result => {
        setVideos(result.items.map(item => ({ ...item, id: item.id.videoId })));
      })
      .catch(error => console.log("error", error));
  };

  // return <VideoList videos={videos}/>;
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
