"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";

const Slider = ({ images = [] }) => {
  const galleryItems = images.map((image) => {
    const src = typeof image === "string" ? image : image?.src || image;
    return {
      original: src,
      thumbnail: src,
    };
  });

  if (!galleryItems.length) {
    return null;
  }

  return (
    <div className="w-full max-w-[900px] mx-auto overflow-hidden rounded-2xl">
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
