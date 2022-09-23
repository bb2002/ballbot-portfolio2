import styled from "styled-components";

export const SkillIconContainer = styled.div`
  width: 120px;
  height: 120px;
  background-color: #FAFAFA;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  
  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
  
  p {
    font-weight: bold;
    font-size: 1rem;
    color: #333333;
    margin: 8px 0 0 0 ;
  }
`