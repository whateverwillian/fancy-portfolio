import styled, { css } from 'styled-components'

export const Button = styled.button`
  font-size: 1.6rem;
  text-transform: uppercase;
  color: gray;

  padding: 2rem 4rem;
  border-radius: 10rem;
  
  transition: all .3s;
  backface-visibility: hidden;

  &:hover {
    transform: translateY(-.8rem);
    box-shadow: 0 1.5rem 3rem rgba(0,0,0,.2);
  }

  &:active {
    transform: translateY(-.2rem);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  }

  // reset style
  outline: none;
  border: none;

  ${(props) => props.isAnimated && css`
    animation-name: loadFromBottom;
    animation-duration: .8s;
    animation-delay: 1s;
    animation-fill-mode: backwards;

    @keyframes loadFromBottom {
      0% {
        opacity: 0;
        transform: translateY(8rem);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}

  // anchor element
  // background-color: white;
  // cursor: pointer;
`