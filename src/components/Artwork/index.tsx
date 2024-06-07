// Style imports
import './styles.scss';

// Component interface
interface ArtworkProps {
  image: string;
};


// {Artwork} component declaration
export const Artwork = ({
  image = '/ram-album-cover.jpeg'
}: ArtworkProps) => {

  return (
    <div className="artwork-styleds">
      <img src={image} alt="Album art cover" />
    </div>
  );
};