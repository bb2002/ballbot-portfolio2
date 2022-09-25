import styled from "styled-components";

export const ProjectViewContainer = styled.div`
  width: 100%;
  min-height: 100%;
  min-width: 326px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  }
`

export const ProjectViewTitle = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 64px;
  
  @media screen and (max-width: 768px) {
    font-size: 2.125rem;
    width: 100%;
    text-align: center;
  }
`

export const Margin = styled.div`
  height: 64px;
`

export const Container = styled.div`
  @media screen and (max-width: 768px) {
    margin: 0 16px 0 16px;
  }
`

export const OverviewBox = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Section = styled.div`
  width: 100%;

  h2 {
    font-size: 1.75rem;
    color: white;
    margin: 0;
  }

  p {
    color: #f1f1f1;
    font-weight: 300;
    margin-bottom: 4px;
    display: flex;
    align-items: center;

    img {
      margin-right: 8px;
      width: 16px;
      height: 16px;
    }
  }

  .custom-hr {
    background-color: #3A3A3A;
    height: 1px;
    margin: 8px 0 16px 0;
  }
`
