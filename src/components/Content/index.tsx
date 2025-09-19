import classes from "./Content.module.scss";

interface IContentProps {
  children: React.ReactNode | string;
}

const Content: React.FC<IContentProps> = ({ children }) => {
  return (
    <div className={classes.layout}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Content;
