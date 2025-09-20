import BackgroundVideo from "@/components/BackgroundVideo";
import Header from "@/components/Header";
import Content from "@/components/Content";
import ConstructorsGallery from "@/components/ConstructorsGallery";

const FamousConstructorsPage = () => {
  return (
    <>
      <BackgroundVideo src="/videos/spaceship.mp4" brightness={0.2} />
      <Header>Известные конструкторы</Header>
      <Content width="90%">
        <ConstructorsGallery />
      </Content>
    </>
  );
};

export function generateMetadata() {
  return {
    title: "Известные конструкторы",
  };
}

export default FamousConstructorsPage;
