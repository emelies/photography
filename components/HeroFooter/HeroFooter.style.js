import styled from 'styled-components'
import media from 'styled-media-query'

export const HeroFooter = styled.div`
  color: #fff;
  position: absolute;
  bottom: 0px;
  width: 100%;
  z-index: 1000;
  justify-content: center;
  align-items: end;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${media.lessThan('medium')`
    padding:30px 10px;
    height: 30%;
  `}

  ${media.greaterThan('medium')`
    padding: 90px 160px; 
  `}

  .dots,
    img {
    display: flex;
    justify-content: center;
  }

  a {
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin: 0px;

    .logo-big {
      opacity: 0;
      height: 0px;
      ${media.greaterThan('small')`
        height: 100px;
        opacity: 1;
      `}
      ${media.greaterThan('medium')`
        height: 180px;
        opacity: 1;
      `}
    }

    .logo-small {
      padding-right: 15px;
      height: 100px;
      opacity: 1;
      ${media.greaterThan('small')`
       opacity: 0;
       width: 0px;
       padding: 0px;
      `}
    }
  }
`
