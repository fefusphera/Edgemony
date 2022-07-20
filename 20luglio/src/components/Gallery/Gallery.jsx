import gallery from "../../assets/gallery";
import "./index.css";

const Gallery = () => {
  return (
    <div className="GallerySection">
      <h1>Gallery</h1>
      <div className="MainGallery">
        {gallery.map((gallery) => (
          <img src={gallery.url} alt="image" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
