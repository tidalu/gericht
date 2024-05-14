import React, { useState, useRef } from 'react';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import './Intro.css';
import { meal } from '../../constants';

const Intro = () => {
  const vidRef = useRef(null);
  const [playVideo, setPlayVideo] = useState(false);

  const handleVideo = (e) => {
    setPlayVideo(!playVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        controls={false}
        loop
        muted
        ref={vidRef}
      />
      <div className="app__video-overlay  flex__center" onClick={handleVideo}>
        <div
          className={`app__video-overlay_circle flex__center ${
            playVideo && 'opacity-30'
          }`}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
