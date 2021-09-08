import React, { useState, usestate } from "react";
import ImageViewer from "react-simple-image-viewer";

//components
import PhotoCollections from "../../Components/Restaurant/PhotosCollection";

const Photos = () => {
  const [photos, setphotos] = useState([
    "https://b.zmtcdn.com/data/pictures/chains/2/91662/99c6f6c300367f8e3684a2bcc1096e03.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/2/91662/e8dbc0aacca39bcddec86225759d6b6e.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/2/91662/b61595c55432c52fa93f14cc02ec3940.jpg"
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [CurrentImage, setCurrentImage] = useState(0);
  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);
  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={CurrentImage}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}
      <div className="flex flex-wrap gap-2">
      {photos.map((photo) => (
        <PhotoCollections image={photo} openViewer={openViewer} />
      ))}
      </div>
    </>
  );
};

export default Photos;
