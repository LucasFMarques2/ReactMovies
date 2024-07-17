/* eslint-disable react/no-unescaped-entities */
import { Container } from "./styled";
import { Header } from "../../Components/Header";
import { ButtonText } from "../../Components/ButtonText";
import { FaArrowLeft } from "react-icons/fa";
import { StarAviation } from "../../Components/StarAviation";
import { CiClock2 } from "react-icons/ci";
import { Tag } from '../../Components/Tags';


export function MoviePreview() {
  return (
    <Container>
      <Header />
      <main>
        <ButtonText icon={FaArrowLeft} title="Voltar" />
        <div className="text">
          <h1>Interestellar</h1>
          <StarAviation activeStars={4} />
        </div>
        <div className="profile">
          <img src="https://github.com/LucasFMarques2.png" />
          <p>Por Lucas Freitas</p>
          <CiClock2 />
          23/05/22 ás 08:00
        </div>
        <Tag title="Ficção Cientifica"></Tag>
        <Tag title="Drama"></Tag>
        <Tag title="Família"></Tag>
        <p className="text">
          Pragas nas colheitas fizeram a civilização humana regredir para uma
          sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
          NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
          Cooper, acredita que seu quarto está assombrado por um fantasma que
          tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é
          uma inteligência desconhecida que está enviando mensagens codificadas
          através de radiação gravitacional, deixando coordenadas em binário que
          os levam até uma instalação secreta da NASA liderada pelo professor
          John Brand. O cientista revela que um buraco de minhoca foi aberto
          perto de Saturno e que ele leva a planetas que podem oferecer
          condições de sobrevivência para a espécie humana. As "missões Lázaro"
          enviadas anos antes identificaram três planetas potencialmente
          habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann
          – nomeados em homenagem aos astronautas que os pesquisaram. Brand
          recruta Cooper para pilotar a nave espacial Endurance e recuperar os
          dados dos astronautas; se um dos planetas se mostrar habitável, a
          humanidade irá seguir para ele na instalação da NASA, que é na
          realidade uma enorme estação espacial. A partida de Cooper devasta
          Murphy. Além de Cooper, a tripulação da Endurance é formada pela
          bióloga Amelia, filha de Brand; o cientista Romilly, o físico
          planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de
          minhoca e se dirigem a Miller, porém descobrem que o planeta possui
          enorme dilatação gravitacional temporal por estar tão perto de
          Gargântua: cada hora na superfície equivale a sete anos na Terra.
        </p>
      </main>
    </Container>

  );
}
