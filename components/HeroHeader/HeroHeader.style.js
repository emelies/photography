import styled from 'styled-components'
import media from 'styled-media-query'

export const HeroHeader = styled.div`
  color: #fff;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 1000;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  text-shadow: rgb(0 0 0 / 70%) 0px 0px 50px;

  padding: 30px 15px;

  ${media.greaterThan('small')`
    padding: 60px 30px;
  `}

  ${media.greaterThan('medium')`
    padding: 90px 160px; 
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

    .social-media {
      display: flex;
      justify-self: end;
      align-self: center;

      img {
        height: 15px;
        ${media.lessThan('small')`
          opacity: 0;
        `}
        ${media.greaterThan('medium')`
          height: 20px;
        `}
      }
    }

    .about {
      h1 {
        ${media.lessThan('small')`
        opacity: 0;
        display: none;
      `}
        ${media.greaterThan('small')`
        opacity: 1;
        display:flex;
      `}
      }
    }
    .logo {
      position: absolute;

      ${media.lessThan('small')`
        opacity: 0;
      `}
      ${media.greaterThan('small')`
        opacity: 1;
      `}
    }
  }
`
