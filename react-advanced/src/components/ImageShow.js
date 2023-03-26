import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";

function ImageShow({ image }) {
  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };
  const imageRendered = (
    <img src={image.urls.small} alt={image.alt_description}></img>
  );
  return (
    <div>
      {loading ? <LoadingSpinner /> : imageRendered}
      <img
        style={{ display: "none" }}
        src={image.urls.small}
        alt={image.alt_description}
        onLoad={imageLoaded}
      ></img>
    </div>
  );
}

export default ImageShow;
