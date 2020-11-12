import React from 'react'

import { Container, Cards, Card } from './styles'

const Skills = () => {
  return (
    <Container>
      <Cards>
        <Card>
          <i className="icon-basic-webpage" />
        </Card>
        <Card>
          <i className="icon-basic-server2" />
        </Card>
        <Card>
          <i className="icon-basic-heart" />
        </Card>
        <Card>
          <i className="icon-basic-cloud" />
        </Card>
      </Cards>
    </Container>
  )
}

export default Skills