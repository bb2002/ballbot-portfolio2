import styled from "styled-components";

export const SkillSetContainer = styled.div`
  width: 1000px;
  border: 1px solid white;
  padding: 24px;
  display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    width: calc(100% - 16px);
    max-width: 768px;
    min-width: 310px;
    margin-left: 8px;
    margin-right: 8px;
  }
`

export const SkillSetTitle = styled.div`
  margin-right: 64px;
  
  h3 {
    color: white;
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-weight: 200;
    font-size: 1.5rem;
    margin: 0;
  }
  
  h1 {
    color: white;
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 3rem;
    font-weight: 300;
    margin: 0;
    
    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 40px;
    margin-right: 0;
  }
`

export const SkillSetContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const SkillSetButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .selected {
    border: 4px solid #1e90ff;
  }

  @media screen and (max-width: 1024px) {
    width: 100% !important;
    flex-wrap: wrap;
    justify-content: flex-start;
    
    div {
      margin-right: 8px;
      margin-bottom: 8px;
    }
  }
`

export const SkillLearnAt = styled.p`
  color: white;
  margin: 16px 0 16px 0;
  font-size: 1.125rem;
  font-weight: 500;
`

export const SkillExplain = styled.p`
  font-size: 1rem;
  color: #e8e8e8;
  font-weight: 300;
  height: 128px;
  overflow: hidden;
`