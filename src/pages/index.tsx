// Hook imports
import { useRouter } from 'next/router';

// Component imports
import { LibraryItem } from '../components';

// {Home} page declaration
export default function Home() {

  const router = useRouter();

  return (
    <div className="app-container">
      <div className="menunavigation-styled">
        Home    Library    Playlists
      </div>
      <div className="menu-library">
        <LibraryItem
          image='/ram-album-cover.jpeg'
          title='Random Access Memories'
          subTitle='By Daft Punk'
          albumClickHandler={() => router.push('/now-playing')}
        />
        <LibraryItem
          image='/ram-album-cover.jpeg'
          title='Random Access Memories'
          subTitle='By Daft Punk'
          albumClickHandler={() => router.push('/now-playing')}
        />
        <LibraryItem
          image='/ram-album-cover.jpeg'
          title='Random Access Memories'
          subTitle='By Daft Punk'
          albumClickHandler={() => router.push('/now-playing')}
        />
      </div>
    </div>
  );
}
