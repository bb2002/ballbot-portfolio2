import styled from "styled-components";

export const ProjectViewContainer = styled.div`
  width: 100%;
  min-height: 100%;
  min-width: 326px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0 32px 0 32px;
  }
`

export const ProjectViewPage = styled.div`
  width: 100%;
  max-width: 710px;
  min-width: 310px;
`

export const Header = styled.header`
  width: 100%;
  margin: 64px 0 64px 0;

  @media screen and (max-width: 768px) {
    margin-left: 16px;
  }

  img {
    cursor: pointer;
    width: 32px;
    height: 32px;
  }
`

export const ProjectViewTitle = styled.h1`
  color: rgb(240, 240, 240);
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 12px;

  @media screen and (max-width: 768px) {
    font-size: 2.125rem;
    width: 100%;
    text-align: center;
  }
`

export const ProjectViewSubtitle = styled.h3`
  font-size: 16px;
  color: rgb(240, 240, 240);
  font-weight: 300;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const ProjectFeature = styled.li`
  font-size: 16px;
  color: white;
  font-weight: normal;
  line-height: 2rem;
`

export const Margin = styled.div`
  height: 48px;
`

export const Section = styled.div`
  width: 100%;

  h2 {
    font-size: 1.75rem;
    color: white;
    margin: 0 0 8px 0;
  }

  p {
    color: #ececec;
    margin-bottom: 8px;
    display: flex;
    font-size: 16px;
    align-items: center;
    line-height: 1.75rem;

    img {
      margin-right: 8px;
      width: 16px;
      height: 16px;
    }
  }

  a {
    color: #a6a6a6;
    text-decoration: underline;
  }

  .custom-hr {
    background-color: #3A3A3A;
    height: 1px;
    margin: 8px 0 16px 0;
  }
`