import Content from "@/components/Content";
import BackgroundVideo from "@/components/BackgroundVideo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header>70 лет начала космической эры человечества*</Header>
      <Content>
        <BackgroundVideo src="videos/space-1.mp4" />
      </Content>
      <Footer>*Юбилей 70 лет будет 4 октября 2027 года</Footer>
    </>
  );
};

export default Home;
