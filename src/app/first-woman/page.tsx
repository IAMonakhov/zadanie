import BackgroundVideo from "@/components/BackgroundVideo";
import Content from "@/components/Content";
import Header from "@/components/Header";
import Paragraph from "@/components/Paragraph";
import Image from "@/components/Image";

const FirstWomanPage: React.FC = () => {
  return (
    <>
      <BackgroundVideo src="/videos/space-4.mp4" brightness={0.2} />
      <Header>Первая женщина космонавт</Header>
      <Content>
        <Paragraph>
          Валентина Владимировна Терешкова — лётчик-космонавт СССР, первая в
          мире женщина-космонавт (1963), Герой Советского Союза (1963),
          генерал-лейтенант (2025). Полный кавалер ордена «За заслуги перед
          Отечеством».
        </Paragraph>
        <Paragraph>
          Свой космический полёт 26-летняя Терешкова совершила в воскресенье 16
          июня 1963 года на космическом корабле «Восток-6» в 09:29 утра, он
          продолжался почти трое суток, приземление — в среду, 19 июня в
          Алтайском крае в 06:28. Всего Терешкова совершила 49 витков вокруг
          Земли. 17 июня Терешкова сфотографировала горизонт Земли. Одновременно
          на орбите находился космический корабль «Восток-5», пилотируемый
          космонавтом Валерием Быковским, стартовавшим 14 июня. В день своего
          полёта в космос Терешкова сказала родным, что уезжает на соревнования
          парашютистов, о полёте они узнали из новостей по радио.
        </Paragraph>
        <Image src="/images/tereshkova.jpg" caption="Терешкова В.В." />
      </Content>
    </>
  );
};

export default FirstWomanPage;
