import { default as Img } from "next/image";

import classes from "./Image.module.scss";

interface IImageProps {
  src: string;
  caption?: string;
  alt?: string;
}

const Image: React.FC<IImageProps> = ({ src, caption, alt = "image" }) => {
  return (
    <div className={classes.image}>
      <Img src={src} alt={alt} width="150" height="100" />
      <div className={classes.caption}>{caption}</div>
    </div>
  );
};

export default Image;
