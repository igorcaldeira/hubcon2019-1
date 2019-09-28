import React from 'react';
import someone from './kn.jpeg';
import './Talks.css'

const Talks = () => {
  const talks = [
    {
      person : 'Tiago Drummond',
      talk: 'Defesa em profundidade',
      talkDescription: 'Lorem lorem lorem',
      personDescriptionCall: 'Conheça o Tiago',
      personDescription: 'Desenvolvedor Lorem lorem lorem',
      image: someone,
    },
    {
      person : 'Tiago Drummond',
      talk: 'Defesa em profundidade',
      talkDescription: 'Lorem lorem lorem',
      personDescriptionCall: 'Conheça o Tiago',
      personDescription: 'Desenvolvedor Lorem lorem lorem',
      image: someone,
    },
    {
      person : 'Tiago Drummond',
      talk: 'Defesa em profundidade',
      talkDescription: 'Lorem lorem lorem',
      personDescriptionCall: 'Conheça o Tiago',
      personDescription: 'Desenvolvedor Lorem lorem lorem',
      image: someone,
    },
    {
      person : 'Tiago Drummond',
      talk: 'Defesa em profundidade',
      talkDescription: 'Lorem lorem lorem',
      personDescriptionCall: 'Conheça o Tiago',
      personDescription: 'Desenvolvedor Lorem lorem lorem',
      image: someone,
    },
  ]
  return <section id="inicio">
    <div className='container'>
    <div className='talks-group'>
      {
        talks.map((item, index) => {
          const ImageTalk = () => <img src={item.image} alt={item.person + ' foto'} />
          const DescriptionTalk = () => <div className='talk-text'>
            <h1>{item.talk}</h1>
            <h2 className='person-name'>{item.person}_</h2>
            <h3>Sobre a talk</h3>
            <p>{item.talkDescription}</p>
            <h3>{item.personDescriptionCall}</h3>
            <p>{item.personDescription}</p>
          </div>

          return index % 2 !== 0 ? <div className='talk-column'>
            <div className='column-a'>
              <ImageTalk />
            </div>
            <div className='colmun-b'>
              <DescriptionTalk />
            </div>
          </div> :  <div className='talk-column'>
            <div className='column-a'>
              <DescriptionTalk />
            </div>
            <div className='colmun-b'>
               <ImageTalk />
            </div>
          </div>
      })
    }
    </div>
    </div>
  </section>
}

export default Talks;