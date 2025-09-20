import Link from "../Link";

import classes from "./ObjectCard.module.scss";

interface IObjectCardProps {
  href: string;
  imgSrc: string;
  header: string;
}

const ObjectCard: React.FC<IObjectCardProps> = ({ href, imgSrc, header }) => {
  return (
    <Link effects={false} href={href}>
      <div className={classes.item}>
        <div className={classes.image}>
          <img src={imgSrc} />
        </div>
        <div className={classes.sub_header}>{header}</div>
      </div>
    </Link>
  );
};

export default ObjectCard;
