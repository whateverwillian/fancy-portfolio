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

import one from '../../assets/nat-1-large.jpg'
import two from '../../assets/nat-2-large.jpg'
import three from '../../assets/nat-3-large.jpg'

const AboutMe = () => {
  return (
    <Container>
      <Section>
        <Title>I'm a developer with fullstack experience</Title>

        <Information>
          <Details>
            <h3>How I think</h3>
            <p>I’m a self-taught professional passionate for learning and always looking for ways to expand my knowledge. I enjoy working as a team and meeting different people and perspectives because nobody makes big changes alone. As the history of mankind shows us, diversity is strength.</p>

            <h3>My experience</h3>
            <p>I have experience with a wide range of technologies, most of them related to JavaScript, more specially ReactJS, React Native and NodeJS.</p>  
            <p>I already worked with SQL, postgres, mongoDB, Redis, integrations with 3rd API’s (stripe, amazon, etc.), AWS (s3, ses, ec2), docker and docker-compose, CI / CD, testing, security, performance, among others.</p>

            <a href="/resume">See resume &rarr;</a>
          </Details>
          <Images>
            <Image image={one} firstImage />
            <Image image={two} secondImage />
            <Image image={three} thirdImage />
          </Images>
        </Information>
      </Section>
    </Container>
  )
}

export default AboutMe