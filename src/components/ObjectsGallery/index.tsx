import ObjectCard from "../ObjectCard";

import classes from "./ObjectsGallery.module.scss";

const ObjectsGallery: React.FC = () => {
  return (
    <div className={classes.gallery}>
      <ObjectCard
        href={`/gallery/${encodeURIComponent("Земля")}`}
        imgSrc="images/earth.jpg"
        header="Земля"
      />
      <ObjectCard
        href={`/gallery/${encodeURIComponent("Марс")}`}
        imgSrc="images/mars.jpg"
        header="Марс"
      />
      <ObjectCard
        href={`/gallery/${encodeURIComponent("Черная дыра")}`}
        imgSrc="images/blackhole.jpg"
        header="Черная дыра"
      />
      <ObjectCard
        href={`/gallery/${encodeURIComponent("МКС")}`}
        imgSrc="images/iss.jpg"
        header="МКС"
      />
      <ObjectCard
        href={`/gallery/${encodeURIComponent("Луна")}`}
        imgSrc="images/moon.jpg"
        header="Луна"
      />
      <ObjectCard
        href={`/gallery/${encodeURIComponent("Спутник-1")}`}
        imgSrc="images/sputnik-1.jpg"
        header="Спутник-1"
      />
      <ObjectCard
        href={`/gallery/${encodeURIComponent("Восток-1")}`}
        imgSrc="images/vostok-1.jpg"
        header="Восток-1"
      />
    </div>
  );
};

export default ObjectsGallery;
