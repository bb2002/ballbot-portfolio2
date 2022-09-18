import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  margin: 40px 0 40px 0;
  display: flex;
  justify-content: center;
  
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const HeaderItem = styled.a`
  color: white;
  width: 200px;
  font-family: 'IBM Plex Sans KR', sans-serif;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.5rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.125rem;
  }
`