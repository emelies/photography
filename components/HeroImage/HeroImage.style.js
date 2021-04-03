import styled from 'styled-components'

export const HeroImage = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 100vw;
  min-height: 100vh;
  height: 100vh;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    object-fit: cover;
  }
`
