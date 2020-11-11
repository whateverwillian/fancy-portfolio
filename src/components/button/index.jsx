import React from 'react'

import { Button } from './styles'

const ButtonComponent = ({ children, isAnimated }) => {
  return (
    <Button isAnimated={isAnimated}>
      {children}
    </Button>
  )
}

export default ButtonComponent

