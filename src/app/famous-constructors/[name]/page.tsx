import { notFound } from "next/navigation";

import Content from "@/components/Content";
import BackgroundVideo from "@/components/BackgroundVideo";
import Header from "@/components/Header";
import Paragraph from "@/components/Paragraph";
import Image from "@/components/Image";

import { getDataByName } from "@/data/constructors";

const VALID_CONSTRUCTORS = [
  "Сергей Павлович Королев",
  "Валентин Петрович Глушко",
  "Вернер фон Браун",
];

const ConstructorPage = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const name = await decodeURIComponent((await params).name);

  if (!VALID_CONSTRUCTORS.includes(name)) {
    notFound();
  }

  const data = getDataByName(name);

  return (
    <>
      <BackgroundVideo src="/videos/space-7.mp4" brightness={0.1} />
      <Header>{name}</Header>
      <Content>
        {Object.entries(data.content).map(([key, value]) => (
          <Paragraph key={key}>{value}</Paragraph>
        ))}
        <Image src={`/images/${name}.jpg`} caption={name} />
      </Content>
    </>
  );
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const name = await decodeURIComponent((await params).name);

  return {
    title: `${name} - 3D модель`,
  };
}

export default ConstructorPage;
