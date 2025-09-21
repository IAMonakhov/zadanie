import ObjectCard from "../ObjectCard";

import classes from "./ConstructorsGallery.module.scss";

const ConstructorsGallery: React.FC = () => {
  return (
    <div className={classes.gallery}>
      <ObjectCard
        href={`/famous-constructors/${encodeURIComponent(
          "Сергей Павлович Королев"
        )}`}
        imgSrc="images/korolev.jpg"
        header="Сергей Павлович Королев"
      />
      <ObjectCard
        href={`/famous-constructors/${encodeURIComponent(
          "Валентин Петрович Глушко"
        )}`}
        imgSrc="images/glushko.webp"
        header="Валентин Петрович Глушко"
      />
      <ObjectCard
        href={`/famous-constructors/${encodeURIComponent("Вернер фон Браун")}`}
        imgSrc="images/braun.png"
        header="Вернер фон Браун"
      />
    </div>
  );
};

export default ConstructorsGallery;
