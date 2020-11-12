import styled from 'styled-components'

const gif_url = 'https://media.giphy.com/media/xUA7aW1ddSxtVT5zzi/giphy.gif'

export const Container = styled.header`
  height: 95vh;
  position: relative;
  background-image: linear-gradient(to right bottom, rgba(87,84,255,.6), rgba(48,45,255,.6)), url(${gif_url});
  background-position: center;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
`

export const TextContainer = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  text-transform: uppercase;
  text-align: center;
  color: white;
`

export const Title = styled.h1`
  font-size: 6rem;
  font-weight: 400;
  letter-spacing: 2rem;
  animation-name: loadFromLeft;
  animation-duration: 1s;

  @keyframes loadFromLeft {
    0% {
      opacity: 0;
      transform: translateX(-20rem);
    }

    60% {
      opacity: 1;
      transform: translateX(2rem);
    }

    100% {
      transform: translateX(0);
    }
  }
`

export const Subtitle = styled.h1`
  margin-top: 2rem;

  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 2rem;
  animation-name: loadFromRight;
  animation-duration: 1s;


  @keyframes loadFromRight {
    0% {
      opacity: 0;
      transform: translateX(20rem);
    }

    60% {
      opacity: 1;
      transform: translateX(-2rem);
    }

    100% {
      transform: translateX(0);
    }
  }
`