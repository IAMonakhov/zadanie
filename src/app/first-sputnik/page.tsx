import Content from "@/components/Content";
import BackgroundVideo from "@/components/BackgroundVideo";
import Header from "@/components/Header";
import Paragraph from "@/components/Paragraph";
import Link from "@/components/Link";
import Image from "@/components/Image";

const FirstSputnikPage: React.FC = () => {
  return (
    <>
      <Header>Первый спутник</Header>
      <Content>
        <BackgroundVideo src="/videos/space-3.mp4" />
        <Paragraph>
          «Спутник-1» — первый в мире искусственный спутник Земли, советский
          космический аппарат, запущенный на орбиту 4 октября 1957 года (во
          время Международного геофизического года).&nbsp;
          <Link href="/gallery/Спутник-1">3D модель "Спутник-1".</Link>
        </Paragraph>
        <Paragraph>
          Над созданием искусственного спутника Земли, во главе с
          основоположником практической космонавтики С. П. Королёвым, работали
          учёные М. В. Келдыш, М. К. Тихонравов, М. С. Рязанский, О. Г.
          Ивановский, Н. С. Лидоренко, Г. Ю. Максимов, В. И. Лаппо, К. И.
          Грингауз, Б. С. Чекунов, А. В. Бухтияров, Н. А. Бересков и многие
          другие.
        </Paragraph>
        <Paragraph>
          Запуск стал началом новой эры политических, военных, технологических и
          научных разработок. Дата запуска «Спутника-1» является началом
          космической эры человечества, а в России ежегодно отмечается как
          памятный день Космических войск. В честь первого искусственного
          спутника Земли названа равнина на поверхности Плутона.
        </Paragraph>
        <Image src="/images/sputnik-1-2.jpg" caption='"Спутник-1"' />
      </Content>
    </>
  );
};

export function generateMetadata() {
  return {
    title: "Первый спутник",
  };
}

export default FirstSputnikPage;
