import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: calc(100% - 16px);
  padding: 40px 0 16px 0;
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: black;
  z-index: 1;
  
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
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