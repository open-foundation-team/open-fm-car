// Component imports
import { Artwork } from '../components';

// {Home} page declaration
export default function Home() {
  return (
    <div className="app-container now-playing">
      <Artwork
        image='/ram-album-cover.jpeg'
      />
    </div>
  );
}
