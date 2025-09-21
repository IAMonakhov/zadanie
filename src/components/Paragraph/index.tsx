import classes from "./Paragraph.module.scss";

interface IParagraphProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: string | React.ReactNode | any;
}

const Paragraph: React.FC<IParagraphProps> = ({ children }) => {
  return <p className={classes.paragraph}>{children}</p>;
};

export default Paragraph;
