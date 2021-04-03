import styled from 'styled-components'
import media from 'styled-media-query'

export const Footer = styled.div`
  color: #000;
  /* padding: 0px 120px 60px; */
  position: absolute;
  width: 100%;
  z-index: 1000;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  overflow: auto;
  text-overflow: ellipsis;
  padding: 30px 15px;

  ${media.greaterThan('small')`
    padding: 60px 30px;
    white-space: nowrap;
  overflow: auto;
  text-overflow: ellipsis;
  `}

  ${media.greaterThan('medium')`
    padding: 0px 120px 60px;
  `}

  h1 {
    font-size: 16px;
    padding-right: 10px;

    ${media.greaterThan('medium')`
      font-size: 20px;
      padding-right: 20px;
    `}
  }

  .wrapper {
    display: flex;
    a {
      display: flex;
      justify-self: flex-start;
      align-self: center;
    }
  }

  .wrapper-two {
    display: flex;
    justify-items: end;

    a {
      justify-self: end;
      align-self: center;
      /* display: inline-block;
        &.active {
          border-bottom: 2px solid #000;
        } */
    }

    .social-media {
      display: flex;
      justify-self: end;
      align-self: center;
      img {
        height: 15px;
        padding-right: 15px;
        ${media.greaterThan('medium')`
          height: 20px;
        `}
      }
    }
  }
`
