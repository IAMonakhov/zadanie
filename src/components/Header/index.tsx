import Link from "../Link";

import classes from "./Header.module.scss";

interface IHeaderProps {
  children: React.ReactNode | string;
}

const Header: React.FC<IHeaderProps> = ({ children }) => {
  return (
    <div className={classes.layout}>
      <div className={classes.sub_layout}>
        <div className={classes.header}>{children}</div>
        <hr />
        <div className={classes.sub_header}>
          <Link href="/">Главная</Link>
          <Link href="#">Первый спутник</Link>
          <Link href="#">Первый полет человека в космос</Link>
          <Link href="/gallery">Галерея 3D объектов</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
