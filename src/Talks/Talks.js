import React from "react";
import tiagodrumond from "./tiagodrumond.png";
import kamilarodrigues from "./kamilarodrigues.jpg";
import diel from "./diel.jpeg";
import tanure from "./albert-tanure.jpg";

import "./Talks.css";

const Talks = () => {
  const talks = [
    {
      person: "Kamila Rodrigues",
      talk: "Cases, situações e desafios da aplicação do Design Sprint 2.0",
      talkDescription: "Vamos conversar sobre o método Design Sprint 2.0, quais as suas vantagens e em quais casos deve ser usado, no fim apresentaremos cases de projetos que foram desenvolvidos usando a metodologia.",
      personDescriptionCall: "Conheça a Kamila",
      personDescription: "Facilitar o desenvolvimento de produtos e serviços mais inovadores tem sido minha missão. Sou designer de produtos, e trabalho no time de transformação digital da ioasys aplicando as metodologias e ferramentas do design no processo de inovação e desenvolvimento de produtos/serviços das empresas. Vamos conversar sobre design thinking!",
      image: kamilarodrigues
    },
    {
      person: "Diel Duarte",
      talk: "Jogos amam State Machines, mas e o seu Front-end?",
      talkDescription: "Vamos conversar sobre State Machines sendo utilizado no front-end, quais as vantagens e desvantagens construindo um jogo como exemplo, reduzindo complexidade, possíveis bugs e conflitos de estados.",
      personDescriptionCall: "Conheça o Diel",
      personDescription: "Compartilhar conhecimento tem sido uma das melhores maneiras de aprender, sou um Front-End engineer que trabalha remoto e adoro viajar pelo mundo. Quer iniciar uma conversa ? me pergunte sobre JS.",
      image: diel
    },
    {
      person: "Tiago Drumond",
      talk: "Como fazer seus logs parecerem mais bonitos",
      talkDescription: "Como implementar Elasticsearch, Logstash, Syslog e Grafana para coletar seus logs e gerar uma interface bonita para os gestores, e quem sabe assim receber uma promoção. :D",
      personDescriptionCall: "Conheça o Tiago",
      personDescription: "Trabalha com TI a mais de 20 anos, e atualmente trabalha na ioasys como gestor de desenvolvimento e arquiteto.",
      image: tiagodrumond
    },
    {
      person: "Hugo Ferreira e Gabriel Oliva",
      talk: "Uma arquitetura para a todos aproximar: abordando Clean Architecture em Mobile",
      talkDescription: "É possível aproximar desenvolvedores de plataformas mobile diferentes e ainda facilitar o intercâmbio deles entre elas? Nós acreditamos que sim e que uma boa arquitetura é fundamental para isto. Vamos ver uma abordagem aplicada de Arquitetura Limpa para Android e iOS onde poderemos entender mais profundamente como podemos tirar vantagem das semelhanças entre Swift e Kotlin, além, é claro, dos benefícios da Arquitetura Limpa.",
      personDescriptionCall: "Conheça o Hugo e Gabriel",
      personDescription: <><strong>Hugo Ferreira</strong>  Bacharel em Sistemas de Informação pela PUC Minas. Desenvolvedor de software desde 2007, se dedica ao desenvolvimento para Android desde 2011. Sua vida de desenvolvedor mudou após experimentar Arquitetura Limpa na vida real e agora se aventura em espalhar a Palavra em favor de bons projetos de software.<br/><strong>Gabriel Oliva</strong> Arquiteto mobile, desenvolvedor iOS e chapter leader do CocoaHeads Belo Horizonte. É um grande entusiasta do mundo Apple e assuntos envolvendo acessibilidade, arquitetura de projetos e engenharia de software. Nas horas vagas gosta de se aventurar como baterista e é apaixonado por café.</>,
      special: true,
      image: <div className="double-take" />
    },
    {
      person: "Albert Tanure",
      talk: "A importância de um API Gateway e API Management como estratégia de entrega de negócios como serviços",
      talkDescription: "Esta talk tem como objetivo demonstrar a importância de utilizar um bom API Gateway e um API Management para disponibilizar o acesso a informações de negócios em uma ponto comum, abstraindo o acesso aos microserviços disponíveis em nossa solução. Será utilizada como base na apresentação o Azure API Management para compor os exemplos e estratégias.",
      personDescriptionCall: "Conheça o Albert Tanure",
      personDescription: "Albert Tanure, ou simplesmente Tanure, é Microsoft MVP, MTAC e Bacharel em Sistemas de Informação. Atualmente atua como Arquiteto de Soluções. Ele tem mais de 15 anos de experiência em desenvolvimento de software e é apaixonado por desenvolvimento móvel e arquitetura de software. Fundador do site Code FC, que tem como objetivo disseminar sua paixão por ajudar as pessoas e capacitá-las com artigos e informações técnicas das palestras que ministra.",
      image: tanure
    }
  ];
  return (
    <section id="palestrantes">
      <div className="container">
        <div className="talks-group">
          <div><center><h2>Veja as talks já confirmadas!</h2></center><br /><br /></div>
          {talks.map((item, index) => {
            const ImageTalk = () => !item.special ? <img src={item.image} alt={item.person + " foto"} className='personPhoto' /> : item.image;
            const DescriptionTalk = () => (
              <div className="talk-text">
                <h1>{item.talk}</h1>
                <h2 className="person-name">{item.person}_</h2>
                <h3>Sobre a talk</h3>
                <p>{item.talkDescription}</p>
                <h3>{item.personDescriptionCall}</h3>
                <p>{item.personDescription}</p>
              </div>
            );

            return index % 2 !== 0 ? (
              <div className="talk-column-a">
                <div className="column-a">
                  <ImageTalk />
                  <div className="photo-talk-a" />
                </div>
                <div className="column-b">
                  <DescriptionTalk />
                </div>
              </div>
            ) : (
              <div className="talk-column-b">
                <div className="column-a">
                  <DescriptionTalk />
                </div>
                <div className="column-b">
                  <ImageTalk />
                  <div className="photo-talk-b" />
                </div>
              </div>
            );
          })}
          <center><h2>Em breve, mais novidades e conteúdos no evento!</h2></center>
        </div>
      </div>
    </section>
  );
};

export default Talks;
