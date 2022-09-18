import styled from "styled-components";

export const AboutPage = styled.div`
  width: 100%;
  min-height: calc(100vh - 116px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    height: calc(100vh - 225px);
  }
`

export const WelcomeMessage = styled.h1`
  color: white;
  text-align: center;
  margin: 8px;
  font-size: 2.25rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`

export const Underline = styled.span`
  text-decoration: underline;
  text-decoration-thickness: 5px;

  @media screen and (max-width: 576px) {
    text-decoration-thickness: 3px;
  }
`

export const AboutMeCardContainer = styled.div`
  margin-top: 64px;
  display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

export const AboutMeCardWithIcon = styled.div`
  width: 150px;
  height: 150px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  p {
    color: white;
    margin: 8px 0 0 0;
    font-weight: lighter;
  }
  
  img {
    width: 80px;
    height: 80px;
  }

  @media screen and (max-width: 1024px) {
    height: 130px;
    width: 275px;
  }
`

export const AboutMeCardWithTitle = styled.div`
  width: 275px;
  height: 150px;
  padding: 16px;
  box-sizing: border-box;
  
  h2 {
    color: white;
    font-weight: 300;
    font-size: 2rem;
    margin: 0;
  }
  
  p {
    color: white;
    margin: 0;
    font-size: 1.5rem;
    font-weight: lighter;
  }
  
  ul {
    padding-left: 24px;
    margin: 0;
  }
  
  li {
    color: white;
    font-weight: lighter;
    line-height: 24px;
  }

  @media screen and (max-width: 1024px) {
    height: 130px;
  }
`

export const AboutMeCardPadding = styled.div`
  width: 8px;
  height: 8px;
`