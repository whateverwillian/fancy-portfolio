import styled, { css } from 'styled-components'

import { max_width } from '../../constants/variables'

export const Container = styled.section`
  width: 100%;
  margin-top: -20rem;
  padding: 30rem 0;
  background-color: #eee;
`

export const Section = styled.section`
  max-width: ${max_width};
  margin: 0 auto;
  text-align: center;

  // aux
  /* background-color: grey; */
`

export const Information = styled.div`
  display: flex;
  margin-top: 10rem;
`

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 900;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1rem;

  background-image: linear-gradient(to right, rgba(150, 0, 196), rgba(87,84,255), rgba(48,45,255));
  background-size: cover;
  color: transparent;
  -webkit-background-clip: text;
`

export const Details = styled.div`
  width: 100%;
  height: 50rem;
  text-align: left;
  padding: 0 6rem 0 3rem;
  
  h3 {
    color: #5c5c5c;  
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  &:not(:last-child) h3 {
    margin-top: 2rem;
  }

  p {
    font-weight: 300;
    font-size: 1.6rem;
  }

  /* background-color: green; */
`

export const Images = styled.div`
  width: 100%;
  height: 50rem;
  position: relative;
`

export const Image = styled.div`
  height: 40%;
  width: 55%;
  position: absolute;
  background-size: cover;
  background-position: center;
  
  ${({ image, firstImage }) => firstImage && css`
    top: -1.5rem;
    left: 0;
    background-image: url(${image});
  `}

  ${({ image, secondImage }) => secondImage && css`
    top: 2rem;
    right: 0;
    background-image: url(${image});
  `}

  ${({ image, thirdImage }) => thirdImage && css`
    top: 10rem;
    left: 20%;
    background-image: url(${image});
  `}
`