import BackgroundVideo from "@/components/BackgroundVideo";
import Content from "@/components/Content";
import Header from "@/components/Header";
import Paragraph from "@/components/Paragraph";
import Image from "@/components/Image";
import Link from "@/components/Link";

const FirstFlightPage: React.FC = () => {
  return (
    <>
      <BackgroundVideo src="/videos/space-6.mp4" brightness={0.2} />
      <Header>Первый полет человека в космос</Header>
      <Content>
        <Paragraph>
          «Восток-1» — советский пилотируемый космический корабль из серии
          «Восток», первый в мире космический аппарат, поднявший на своём борту
          человека на околоземную орбиту.&nbsp;
          <Link href="/gallery/Восток-1">
            3D модель космического корабля "Восток-1"
          </Link>
        </Paragraph>
        <Paragraph>
          На корабле «Восток» 12 апреля 1961 года лётчик-космонавт СССР майор
          ВВС Юрий Алексеевич Гагарин совершил первый в мире пилотируемый полёт
          в космическое пространство. Старт корабля состоялся с советского
          космодрома Байконур в 9 часов 7 минут по московскому времени (06:07:00
          UTC). Корабль выполнил один оборот вокруг Земли и совершил посадку в
          10 часов 53 минуты (07:53:00 UTC) в районе деревни Смеловка
          Саратовской области. Длительность полёта составила 106 минут. Корабль
          стал и первым в мире управляемым космическим аппаратом, позволившим
          совершить полёт в космос.
        </Paragraph>
        <Image src="/images/gagarin.jpg" caption="Гагарин Ю.А." />
      </Content>
    </>
  );
};

export default FirstFlightPage;
