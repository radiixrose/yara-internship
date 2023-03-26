import React, { useContext, useEffect, useState } from "react";
import { ContextTest } from "../../contexts/ContextTest";
import ImageShow from "../ImageShow";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./ImageList.css";
import { v1 as uuidv1 } from "uuid";

function ImageList() {
  const { images, term } = useContext(ContextTest);
  const [, setImagesLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (images.length > 0) {
      setImagesLoaded(true);
      setLoading(false);
    }
  }, [images]);

  if (term === "") {
    return <></>;
  }

  if (images.length === 0) {
    return <div>No images found for the given search</div>;
  }

  const renderedImages = images.map((image) => {
    return <ImageShow image={image} key={uuidv1()} />;
  });

  return (
    <div className="image-list">
      {loading ? <LoadingSpinner /> : renderedImages}
    </div>
  );
}

export default ImageList;
