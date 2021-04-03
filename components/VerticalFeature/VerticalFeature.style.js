import styled from 'styled-components'
import media from 'styled-media-query'

export const VerticalFeature = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  margin: 15px;

  ${media.greaterThan('small')`
    margin: 30px;
    grid-gap: 30px;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  `}

  ${media.greaterThan('medium')`
    margin: 120px;
    grid-gap: 60px;
    grid-template-columns: 70% auto;
    grid-template-rows: 1fr;
  `}

  .horizontal {
    position: relative;
    height: 0px;
    padding-bottom: 100%;
    img {
      position: absolute;
      top: 0px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .column {
    ${media.greaterThan('medium')`
    .sticky {
      position: sticky;
      top: 15%;
      }
    `}
    h1 {
      font-family: 'MillionDreams-Regular';
      font-size: 50px;
      letter-spacing: 5.5;
      line-height: 1;
      margin: 0px;
      ${media.lessThan('medium')`
      margin-top: 15px;
      
    `}
    }

    h2 {
      font-size: 20px;
      ${media.lessThan('medium')`
      margin-top: 15px;
    `}
    }
    p {
      ${media.greaterThan('medium')`
        height: 100%;
    `}
    }
  }
`
