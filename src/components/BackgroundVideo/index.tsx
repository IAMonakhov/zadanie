import classes from "./BackgroundVideo.module.scss";

interface IBackgroundVideoProps {
  src: string;
  brightness?: number;
}

const BackgroundVideo: React.FC<IBackgroundVideoProps> = ({ src, brightness = 0.7 }) => {
  return (
    <div className={classes.video}>
      <video style={{filter: `brightness(${brightness})` }} autoPlay muted loop playsInline preload="auto">
        <source src={src} />
      </video>
    </div>
  );
};

export default BackgroundVideo;
