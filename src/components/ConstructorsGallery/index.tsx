import ObjectCard from "../ObjectCard";

import classes from "./ConstructorsGallery.module.scss";

const ConstructorsGallery: React.FC = () => {
  return (
    <div className={classes.gallery}>
      <ObjectCard
        href={`/famous-constructors/${encodeURIComponent("Земля")}`}
        imgSrc="images/korolev.jpg"
        header="Сергей Павлович Королев"
      />
      <ObjectCard
        href={`/famous-constructors/${encodeURIComponent("Земля")}`}
        imgSrc="images/glushko.webp"
        header="Валентин Петрович Глушко"
      />
    </div>
  );
};

export default ConstructorsGallery;
