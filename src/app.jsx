import React, {useState, useEffect} from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  // [] : 마운트 될 때 한번만 실행
  // [videos] : 해당 데이터가 바뀔 때 실행
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=KR&key=AIzaSyBuJwnYIP2nG7wfg5j2u5Wc8E9qQoIVRGM", requestOptions)
      .then(response => response.json())
      .then(result => {
        setVideos(result.items);
      })
      .catch(error => console.log('error', error));
  }, [])

  // return <VideoList videos={videos}/>;
  return <VideoList videos={videos}/>;
}

export default App;
