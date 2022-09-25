import styled from "styled-components";

export const CareerViewerContainer = styled.div`
  max-width: 1100px;
  min-width: 310px;
  width: calc(100% - 64px);
  min-height: 270px;
  border: 1px solid white;
  padding: 24px;
  display: flex;

  
  @media screen and (max-width: 1140px) {
    margin-left: 32px;
    margin-right: 32px;
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`

export const CareerCompanyContainer = styled.div`
  flex: 1;
  
  #date {
    color: #EBEBEB;
    font-weight: lighter;
    font-size: 1rem;
  }
  
  #position {
    font-size: 1rem;
    color: white;
    font-weight: 300;
  }
  
  h3 {
    color: white;
    font-size: 1.5rem;
  }
  
  p, h3 {
    margin-bottom: 4px;
  }
`

export const CareerContentContainer = styled.div`
  flex: 2.5;
  
  h4 {
    margin: 32px 0 8px 0;
    color: white;
    font-weight: 300;
    font-size: 1.125rem;
  }
  
  #work {
    font-weight: bold;
    color: white;
    font-size: 1rem;
    margin: 0 0 8px 0;
  }
  
  ul {
    padding-left: 32px;
  }
  
  li {
    color: white;
    font-size: 1rem;
    margin-bottom: 4px;
  }
`