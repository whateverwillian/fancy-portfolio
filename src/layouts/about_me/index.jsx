import React from 'react'

import { 
  Container, 
  Section, 
  Title,
  Information,
  Details,
  Images,
  Image,
} from './styles'

import Image1 from '../../assets/nat-1-large.jpg'
import Image2 from '../../assets/nat-2-large.jpg'
import Image3 from '../../assets/nat-3-large.jpg'

const AboutMe = () => {
  return (
    <Container>
      <Section>
        <Title>I don't know what to write here</Title>

        <Information>
          <Details>
            <h3>Motivated to produce results</h3>
            <p>Tenho seis meses de experiência desenvolvendo aplicações fullstack nas tecnologias ReactJS, React Native e NodeJS, todas em Typescript. Com foco em backend (node).</p>

            <h3>The most cool guy</h3>
            <p>Também tenho experiência com SQL, postgres, mongoDB, Redis, integrações com 3rd API’s (stripe, amazon, etc), AWS (s3, ses, ec2), docker e docker-compose, CI/CD, testes, SSH, entre outros. Eu compreendo inglês muito bem, mas o escrever/falar está em progresso.</p>
          </Details>
          <Images>
            <Image image={Image1} firstImage={true} />
            <Image image={Image2} secondImage={true} />
            <Image image={Image3} thirdImage={true}/>
          </Images>
        </Information>
      </Section>
    </Container>
  )
}

export default AboutMe