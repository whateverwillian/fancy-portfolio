import React from 'react'

import Header from '../../layouts/header'
import AboutMe from '../../layouts/about_me'
import Skills from '../../layouts/skills'

import { Container } from './styles'

const Landing = () => {
  return (
    <Container>
      <Header />
      <AboutMe />
      <Skills />
    </Container>
  )
}

export default Landing