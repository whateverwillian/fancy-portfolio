import React from 'react'

import Header from '../../layouts/header'
import AboutMe from '../../layouts/about_me'

import { Container } from './styles'

const Landing = () => {
  return (
    <Container>
      <Header />
      <AboutMe />
    </Container>
  )
}

export default Landing