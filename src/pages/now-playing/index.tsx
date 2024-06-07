// Component imports
import { Artwork, Icon } from "../../components";

// now-playing page declaration
export default function NowPlaying({

}) {

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

          <Icon name="play" />

          <Icon name="fast-forward" />

          <Icon name="heart" />

        </div>
      </div>
    </div>
  );
};