import classes from "./BackgroundVideo.module.scss";

interface IBackgroundVideoProps {
  src: string;
}

const BackgroundVideo: React.FC<IBackgroundVideoProps> = ({ src }) => {
  return (
    <div className={classes.video}>
      <video autoPlay muted loop playsInline preload="auto">
        <source src={src} />
      </video>
    </div>
  );
};

export default BackgroundVideo;
