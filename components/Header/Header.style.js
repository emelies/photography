import styled from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.div`
  color: black;
  top: 0px;
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
}


  ${media.greaterThan('small')`
    padding: 60px 30px;
 
    white-space: nowrap;
  overflow: auto;
  text-overflow: ellipsis;
  `}

  ${media.greaterThan('medium')`
  padding: 60px 120px 0px;
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

    .logo-big {
      opacity: 0;
      height: 0px;
      ${media.greaterThan('small')`
        height: 80px;
        opacity: 1;
        padding: 0px 15px;
      `}
      ${media.greaterThan('medium')`
        height: 120px;
        opacity: 1;
        padding: 0px 15px;
      `}
    }

    .logo-small {
      padding-right: 15px;
      height: 70px;
      opacity: 1;
      ${media.greaterThan('small')`
       opacity: 0;
       width: 0px;
       padding: 0px;
      `}
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
        padding-right: 25px;
        ${media.greaterThan('medium')`
          height: 20px;
        `}
      }
    }
`
