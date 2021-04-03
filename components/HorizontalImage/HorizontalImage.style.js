import styled from 'styled-components'
import media from 'styled-media-query'

export const HorizontalImage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 15px;
  margin-top: 0px;

  ${media.greaterThan('small')`
    margin: 30px;
    margin-top: 0px;
  `}
  ${media.greaterThan('medium')`
    margin: 120px;
    margin-top: 60px;
  `}

  .horizontal {
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
