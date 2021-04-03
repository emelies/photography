import styled from 'styled-components'
import media from 'styled-media-query'

export const TwinVertical = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 15px;
  margin: 15px;

  ${media.greaterThan('small')`
    margin: 30px;
    grid-gap: 30px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  `}
  ${media.greaterThan('medium')`
    margin: 120px;
    grid-gap: 60px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  `}

  .twin-image {
    position: relative;
    overflow: hidden;
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
  }
`
