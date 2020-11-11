import React from 'react'

import Button from '../../components/button'

import { Container, TextContainer, Title, Subtitle } from './styles'

const Header = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Willian Tavares</Title>
        <Subtitle style={{ marginBottom: '5rem' }}>
          Software Engineer
        </Subtitle>
        <Button isAnimated>
          See projects
        </Button>
      </TextContainer>
    </Container>
  )
}

export default Header