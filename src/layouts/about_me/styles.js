import styled, { css } from 'styled-components'

import { max_width } from '../../constants/variables'

export const Container = styled.section`
  width: 100%;
  margin-top: -20rem;
  padding: 30rem 0 15rem 0;
`

export const Section = styled.section`
  max-width: ${max_width};
  margin: 0 auto;
  text-align: center;
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
    line-height: 2.5rem;
    font-size: 1.6rem;
  
    & + p {
      margin-top: .8rem;
    }
  }
  
  a:link,
  a:visited {
    display: inline-block;
    margin-top: 1.2rem;
    font-size: 1.6rem;
    transition: all .2s;

    text-decoration: none;
    color: rgba(87,84,255);
    padding: 1rem .5rem;
    border-bottom: 1px solid rgba(87,84,255);
  }

  a:hover {
    color: #fff;
    background-color: rgba(87,84,255);
    transform: scale(1.05) translateY(-.2rem);
    box-shadow: 0 1rem 2rem rgba(0,0,0,.3);
  }

  a:active {
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.3);
    transform: translateY(0);
  }
`

export const Images = styled.div`
  width: 100%;
  position: relative;

  &:hover div:not(:hover) {
    transform: scale(.95);
  }
`

export const Image = styled.div`
  height: 40%;
  width: 55%;
  position: absolute;
  background-size: cover;
  background-position: center;
  box-shadow: 0 1.5rem 3rem rgba(0,0,0,.25);
  transition: all .2s;
  outline-offset: 2rem;
  
  &:hover {
    z-index: 2;
    outline: 1rem solid rgba(87,84,255);
    transform: scale(1.1) translateY(-.8rem);
    box-shadow: 0 2rem 4rem rgba(0,0,0,.5);
  }

  ${({ image, firstImage }) => firstImage && css`
    top: 0;
    left: 0;
    background-image: url(${image});
  `}

  ${({ image, secondImage }) => secondImage && css`
    top: 4rem;
    right: 0;
    background-image: url(${image});
  `}

  ${({ image, thirdImage }) => thirdImage && css`
    top: 16rem;
    left: 20%;
    background-image: url(${image});
  `}
`