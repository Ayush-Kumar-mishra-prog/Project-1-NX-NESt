"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";

const PROJECT_SERVER_URL = "http://localhost:8003";

const Slider = ({ images = [] }) => {
  const imageList = Array.isArray(images) ? images : images ? [images] : [];

  const galleryItems = imageList
    .map((image) => {
      const imageSource =
        typeof image === "string"
          ? image
          : image?.src || image?.url || image?.path;
      const src = imageSource?.startsWith("/uploads")
        ? `${PROJECT_SERVER_URL}${imageSource}`
        : imageSource;

      return {
        original: src,
        thumbnail: src,
      };
    })
    .filter((image) => image.original);

  if (!galleryItems.length) {
    return null;
  }

  return (
    <div className="w-full max-w-full lg:max-w-175 mx-auto overflow-hidden rounded-2xl">
      <ImageGallery
        items={galleryItems}
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={true}
        showBullets={false}
        showIndex={false}
        lazyLoad={true}
        additionalClass="image-gallery-wrapper"
      />
    </div>
  );
};

export default Slider;
