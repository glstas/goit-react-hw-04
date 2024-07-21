import React from "react";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, openModal }) => {
  return (
    <div>
      <ul>
        {images.map(({ id, alt_description, urls }) => (
          <ImageCard
            key={id}
            urls={urls}
            alt_description={alt_description}
            openModal={openModal}
          />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
