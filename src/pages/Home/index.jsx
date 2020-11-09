import React from 'react'

import Header from '../../components/Header'
import Projects from '../../components/Projects'

import { Container } from './styles'

const Home = () => {
  return (
    <Container>
      <Header />
      <Projects />
    </Container>
  )
}

export default Home