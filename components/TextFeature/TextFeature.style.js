import styled from 'styled-components'
import media from 'styled-media-query'

export const TextFeature = styled.div`
  margin: 15px;
  ${media.greaterThan('small')`
    margin: 30px;
    `}
  ${media.greaterThan('medium')`
    margin: 120px;
    `}
    display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  ${media.greaterThan('small')`
    
    grid-gap: 30px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  `}

  ${media.greaterThan('medium')`
    grid-gap: 60px;
    grid-template-columns: 70% auto;
    grid-template-rows: 1fr;
  `}

  .columns {
    .social-media {
      display: flex;
      justify-self: end;
      align-self: center;

      img {
        height: 15px;
        padding-right: 25px;
        ${media.greaterThan('medium')`
          height: 20px;
        `}
      }
    }
  }
`
