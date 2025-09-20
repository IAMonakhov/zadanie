import classes from "./Paragraph.module.scss";

interface IParagraphProps {
  children: string | React.ReactNode;
}

const Paragraph: React.FC<IParagraphProps> = ({ children }) => {
  return <p className={classes.paragraph}>{children}</p>;
};

export default Paragraph;
