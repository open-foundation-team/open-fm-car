// Component imports
import { Artwork } from "../Artwork";

// Style imports
import './styles.scss';

// {LibraryItem} component props
interface LibraryItemProps {
  title: string;
  subTitle: string;
  image: string;
  albumClickHandler: () => void;
  artistClickHandler?: () => void;
}


// {LibraryItem} component declaration
export const LibraryItem = ({
  title,
  subTitle,
  image,
  albumClickHandler,
  artistClickHandler
}: LibraryItemProps) => {

  return (
    <div className="libraryitem-styled">
      <Artwork
        image={image}
        size={250}
        handleClick={albumClickHandler}
      />
      <p
        className="title"
        onClick={albumClickHandler}
      >
        {title.length > 17 ? title.substring(0, 15) + '...' : title}
      </p>
      <p
        className="sub-title"
        onClick={artistClickHandler || albumClickHandler}
      >
        {subTitle}
      </p>
    </div>
  );
};