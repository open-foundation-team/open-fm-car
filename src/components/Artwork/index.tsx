// Module imports
import Image from 'next/image';

// Style imports
import './styles.scss';

// Component interface
interface ArtworkProps {
  image: string;
  album?: string;
  size?: number;
  handleClick?: () => void;
};


// {Artwork} component declaration
export const Artwork = ({
  image = '/ram-album-cover.jpeg',
  album,
  size = 295,
  handleClick
}: ArtworkProps) => {

  return (
    <div className="artwork-styled"
      style={{ width: size, height: size }}
      onClick={handleClick}
    >
      <Image
        src={image}
        alt={`${album || "Album"} art cover`}
        placeholder="blur"
        blurDataURL={image}
        width={size}
        height={size}
      />
    </div>
  );
};