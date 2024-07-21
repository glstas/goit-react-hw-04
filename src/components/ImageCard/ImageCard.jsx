import React from "react";

const ImageCard = ({ alt_description, urls, openModal }) => {
  return (
    <>
      <img
        src={urls.small}
        alt={alt_description}
        onClick={() => openModal(urls.regular, alt_description)}
      />
    </>
  );
};

export default ImageCard;
