// Module imports
import Image from 'next/image';

// Style imports
import './styles.scss';

// Component interface
interface ArtworkProps {
  image: string;
  album?: string;
};


// {Artwork} component declaration
export const Artwork = ({
  image = '/ram-album-cover.jpeg',
  album
}: ArtworkProps) => {

  return (
    <div className="artwork-styled">
      <Image
        src={image}
        alt={`${album || "Album"} art cover`}
        placeholder="blur"
        blurDataURL={image}
        width={295}
        height={295}
      />
    </div>
  );
};