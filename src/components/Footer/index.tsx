import classes from "./Footer.module.scss";

interface IFooterProps {
  children: React.ReactNode | string;
}

const Footer: React.FC<IFooterProps> = ({ children }) => {
  return <div className={classes.footer}>{children}</div>;
};

export default Footer;
