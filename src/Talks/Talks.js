import React from "react";
import tiagodrumond from "./tiagodrumond.png";
import kamilarodrigues from "./kamilarodrigues.jpg";
import diel from "./diel.jpeg";
import tanure from "./albert-tanure.jpg";
import prates from "./prates.jpg";
import douglas from "./douglas.png";
import guilherme from "./guilherme.jpeg";
import pam from "./pam.jpeg";
import laryssa from "./laryssa.jpg";

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
      talk: "Desafiando métodos de segurança: utilização de técnicas de reflexão para mostrar que nem tudo é o que parece.",
      talkDescription: "Valores privados, protegidos? Será? Criptografias para proteção? Será? Irei falar de reflexão e de técnicas de criptografia ECB e CBC, e citar algumas falhas de view state.",
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
      image: tanure,
    },
    {
      person: "Gabriel Prates",
      talk: "Server-Side Rendering: Por quê? Como funciona? Precisa mesmo?",
      talkDescription: "Na web, entregar uma experiência legal para o usuário em tempo hábil é um grande desafio! Vamos falar sobre como o SSR se propõem a ajudar e, para isso, precisamos entender: o que é critical path; o que de fato é SSR; como o code splitting pode ajudar; um pouco de como fazer com React; e alguns pontos a se observar durante a implementação; Precisamos entregar conteúdo, não só visual, mas também interativo, de forma rápida. Será que esse trabalho todo vale a pena?",
      personDescriptionCall: "Conheça o Gabriel",
      personDescription: "Gabriel Prates é formado em Gestão de TI e desenvolvedor frontend na Studio Sol, integrante do time Palco MP3. Apaixonado pela web, testes automatizados, Star Wars e jogos da Nintendo.",
      image: prates,
    },
    {
      person: "Douglas Augusto",
      talk: "Previsão do Tempo: Uma análise das principais tendências de Computação em Nuvem",
      talkDescription: "Vamos falar da evolução dos recursos de infraestrutura e entrar em detalhes do atual cenário de recursos nativos de nuvem com containers, orquestradores, service mesh e serverless, um conjunto de ferramentas que possibilita que você desenvolva uma vez e rode a mesma aplicação onde quiser.",
      personDescriptionCall: "Conheça o Douglas",
      personDescription: "Douglas Augusto é apaixonado por Cloud Computing e Machine Learning, atualmente trabalhando como Arquiteto de Nuvem na Avenue Code, uma empresa norte-americana que fornece consultoria de tecnologia para grandes clientes. Em sua carreira, ele já participou de projetos inovadores para clientes como Coca Cola, FCA Group, entre outros. Ele é reconhecido como Google Developer Expert (GDE) para Google Cloud Platform e é mentor nas áreas de Computação em Nuvem e Aprendizado de Máquina no Google Launchpad, o programa de aceleração de Startups do Google. Ele ama comunidades e é o organizador do GDG João Monlevade, da Comunidade de Desenvolvedores do Google Cloud Belo Horizonte e São Paulo.",
      image: douglas,
    },
    {
      person: "Guilherme Silva",
      talk: "A sopa de letras de segurança em desenvolvimento e como descomplicar esse mundo",
      talkDescription: "Não é comum falarmos sobre segurança durante o desenvolvimento de sistemas, afinal o time de segurança está fora do projeto, enviando listas e listas de requisitos complexos e subjetivos. Por isso vamos ver como as 'siglas' SAST, IAST, WAF, DAST, ASP, VS, OWASP, SDL, TM e etc, podem facilitar a inclusão da segurança no processo de desenvolvimento de sistemas.",
      personDescriptionCall: "Conheça o Guilherme",
      personDescription: "Gaúcho que mora em BH e há uns bons anos com Segurança da Informação, nunca desenvolveu uma aplicação inteira e tem a audácia de se dedicar há 3 anos em promover a prática de conceitos de segurança em times de desenvolvimento, para provar que segurança não é feita só pela área de segurança da informação.",
      image: guilherme,
    },
    {
      person: "Pamella Teixeira",
      talk: "Impactos da LGPD no mundo da Tecnologia",
      talkDescription: "Vamos conversar sobre Proteção de dados na Pratica sem jurisdiquês. Como a nova lei de proteção de dados vai impactar no trabalho dos Devs e de que forma podemos amenizar.",
      personDescriptionCall: "Conheça a Pamella",
      personDescription: "Eu tranquilamente viajaria 360 dias do ano e os outros eu dormiria na minha cama, mas não descobri  uma forma de monetizar isso. Então, ao final da minha formação em Direito, resolvi deixar o mundo tradicional jurídico e embarquei em uma aventura no espaço tecnológico. E foi assim que eu me encontrei e me tornei assistente jurídica da maior HR Tech do Brasil que é a Sólides Tecnologia e também sou condutora dos projetos de Proteção de Dados e Segurança da Informação. Além disso, represento a empresa no Pacto Global da ONU ( achou chique né?). Vale lembrar que como uma ótima Sólidiana que sou, minha frase preferida é: Foguete não tem ré!",
      image: pam,
    },
    {
      person: "Laryssa Magalhães",
      talk: "Compilando Web Components com Stencil JS",
      talkDescription: "Nessa talk irei abordar o uso de Stencil JS para a criação de Web Components. Vale a pena? Quais são as vantagens e desvantagens? Mostrarei também um caso real de uso.",
      personDescriptionCall: "Conheça a Laryssa",
      personDescription: "Frontend, mineira, apaixonada por filmes/séries, coorganizadora do FEMUG-MG, fã de Harry Potter, ama doguinhos , apoia a diversidade e inclusão de minorias na tecnologia <3",
      image: laryssa,
    },
  ];
  return (
    <section id="palestrantes">
      <div className="container">
        <div className="talks-group">
          <div><center><h2>Veja as talks confirmadas!</h2></center><br /><br /></div>
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
        </div>
      </div>
    </section>
  );
};

export default Talks;
