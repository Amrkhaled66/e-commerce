import { useState } from "react";
import AddToFav from "src/components/ui/Buttons/AddToFav";

const ImageThumbnails = ({ images, activeImage, setActiveImage, isMobile }) => {
  return (
    <ul
      className={`flex flex-wrap items-center justify-center gap-x-2 gap-y-5 ${
        isMobile ? "lg:hidden" : "hidden lg:flex"
      }`}
    >
      {images.map((image, index) => (
        <li
          key={index}
          onClick={() => setActiveImage(image)}
          className={
            isMobile
              ? `${activeImage === image ? "bg-black" : "border-black"} h-2 w-2 cursor-pointer rounded-full border`
              : `${activeImage === image ? "border-main-color" : "border-stroke"} flex h-[100px] w-[72px] items-center overflow-hidden rounded-2xl border-2 transition-all duration-300 hover:brightness-110`
          }
        >
          {!isMobile && (
            <button>
              <img className="w-full cursor-pointer object-fill" src={image} alt="Product Thumbnail" />
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default function ProductImg({ images }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="border-stroke relative h-fit w-full overflow-hidden rounded-2xl bg-white px-3 py-5 lg:w-[32%] lg:border">
      <AddToFav />
      <div>
        <img className="w-full" src={activeImage} alt="Active Product Image" />
      </div>
      {/* Desktop Thumbnails */}
      <ImageThumbnails images={images} activeImage={activeImage} setActiveImage={setActiveImage} isMobile={false} />
      {/* Mobile Dots Navigation */}
      <ImageThumbnails images={images} activeImage={activeImage} setActiveImage={setActiveImage} isMobile={true} />
    </div>
  );
}
