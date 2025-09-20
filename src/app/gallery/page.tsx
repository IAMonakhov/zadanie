import Content from "@/components/Content";
import BackgroundVideo from "@/components/BackgroundVideo";
import Header from "@/components/Header";
import ObjectsGallery from "@/components/ObjectsGallery";

const GalleryPage = () => {
  return (
    <>
      <Header>Галерея 3D объектов</Header>
      <Content width="90%">
        <BackgroundVideo src="/videos/space-1.mp4" />
        <ObjectsGallery />
      </Content>
    </>
  );
};

export function generateMetadata() {
  return {
    title: "Галерея 3D объектов",
  };
}

export default GalleryPage;
