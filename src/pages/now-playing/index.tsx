// Module imports
import { useState } from "react";

// Component imports
import { Artwork, Icon } from "../../components";

// now-playing page declaration
export default function NowPlaying({

}) {

  const [isPlaying, setPlaying] = useState(false);
  const [isLiked, setLiked] = useState(false);

  return (
    <div className="app-container now-playing">

      {/* Album container */}
      <div className="information-container">

        {/* Artwork section*/}
        <div className="artwork-section">
          <Artwork
            image="/ram-album-cover.jpeg"
          />
        </div>

        {/* Information section */}
        <div className="info-section">
          <p className="album-title">Random Access Memories</p>
          <p className="song-title">Lose Yourself to Dance</p>
          <p className="album-artist">Daft Punk</p>
        </div>

      </div>

      {/* Player controls section */}
      <div className="playerControls-styled">

        {/* Scrubber section */}
        <div className="scrubber-styled">
          <div className="scrubber-progress" style={{ width: '70%' }} />
        </div>

        {/* Buttons section */}
        <div className="buttons-container">

          <Icon name="loop" />

          <Icon name="rewind" />

          {isPlaying ?
            <Icon name="pause" onClick={() => setPlaying(c => !c)} /> :
            <Icon name="play" onClick={() => setPlaying(c => !c)} />
          }

          <Icon name="fast-forward" />

          {isLiked ?
            <Icon name="heart-filled" onClick={() => setLiked(c => !c)} /> :
            <Icon name="heart" onClick={() => setLiked(c => !c)} />
          }

        </div>
      </div>
    </div>
  );
};