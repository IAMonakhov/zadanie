import classes from "./Content.module.scss";

interface IContentProps {
  children: React.ReactNode | string;
  width?: string;
}

const Content: React.FC<IContentProps> = ({ children, width }) => {
  return (
    <div className={classes.layout}>
      <div style={{ width: width }} className={classes.content}>
        {children}
      </div>
    </div>
  );
};

export default Content;
