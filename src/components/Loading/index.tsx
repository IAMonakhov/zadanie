import classes from "./Loading.module.scss";

const Loading: React.FC = () => {
  return (
    <div className={classes.layout}>
      <div className={classes.content}>
        <div className={classes.header}>Загрузка</div>
      </div>
    </div>
  );
};

export default Loading;
