import styled from 'styled-components'
import { max_width } from '../../constants/variables'

const gif_url = 'https://media.giphy.com/media/3og0IV7MOCfnm85iRa/giphy.gif'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
  margin-top: -18rem;
  background-image: linear-gradient(to right bottom, rgba(127, 125, 255,.8), rgba(48,45,255,.7)), url(${gif_url});
  background-size: cover;
  background-position: center;
  clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);
`

export const Cards = styled.div`
  width: ${max_width};
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

export const Card = styled.div`
  height: 36rem;
  border-radius: .3rem;
  width: calc((100% - 3 * 6rem) / 4);
  background-color: rgba(255, 255, 255,.7);
  box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
  transition: all .3s;
  text-align: center;
  padding: 4rem 2rem;

  i {
    background-image: linear-gradient(to right, rgba(127, 125, 255), rgba(48,45,255));
    color: transparent;
    font-size: 8rem;

    -webkit-background-clip: text;
  }

  &:hover {
    transform: scale(1.035) translateY(-2rem);
  }

  &:not(:last-child) {
    margin-right: 6rem;
  }
`