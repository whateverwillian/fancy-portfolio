import React from 'react'

import { 
  Container, 
  Section, 
  Title, 
  Subtitle,
} from './styles'

const Header = () => {
  return (
    <Container>
      <Section>
        <Title>
          I'm Willian, a software
          engineer at Google
        </Title>
        <Subtitle>
          Over six months of experience focusing on web applications, 
          e-commerces, servers & early stage product design
        </Subtitle>
      </Section>
    </Container>
  )
}

export default Header