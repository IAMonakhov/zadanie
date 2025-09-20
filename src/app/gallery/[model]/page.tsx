import Content from "@/components/Content";
import BackgroundVideo from "@/components/BackgroundVideo";
import Header from "@/components/Header";
import ModelViewer from "@/components/ModelViewer"

const ModelPage = async ({
  params,
}: {
  params: Promise<{ model: string }>;
}) => {
  const model = await decodeURIComponent((await params).model);

  return (
    <>
      <Header>{model}</Header>
      <Content width="90%">
        <BackgroundVideo src="/videos/space-2.mp4" />
        <ModelViewer src={`/models/${model}.glb`} />
      </Content>
    </>
  );
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ model: string }>;
}) {
  const model = await decodeURIComponent((await params).model);
  
  return {
    title: `${model} - 3D модель`,
  };
}

export default ModelPage;
