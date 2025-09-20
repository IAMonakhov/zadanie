import Link from "../Link";

import classes from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={classes.layout}>
      <div className={classes.content}>
        <div className={classes.header}>Страница не найдена</div>
        <hr />
        <div className={classes.link}>
          <Link href="/">Главная</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
