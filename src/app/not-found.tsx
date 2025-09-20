import NotFound from "@/components/NotFound";
import BackgroundVideo from "@/components/BackgroundVideo";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <BackgroundVideo src="/videos/blackhole.mp4" />
      <NotFound />
    </>
  );
};

export default NotFoundPage;
