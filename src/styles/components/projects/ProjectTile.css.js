import styled from "styled-components";

export const ProjectTileContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
`

export const ProjectTileBackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.3);
`

export const ProjectTileContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ProjectTileTitle = styled.h1`
  color: white;
  margin: 0;

  @media screen and (max-width: 1160px) {
    font-size: 1.25rem !important;
    margin-bottom: 8px;
  }
`

export const ProjectTileSubtitle = styled.p`
  color: #E9E9E9;
  font-weight: 300;
  text-align: center;

  @media screen and (max-width: 1160px) {
    font-size: 1rem !important;
  }
`

export const SkillAvatarContainer = styled.div`
  display: flex;
  flex: none !important;
  justify-content: center;
  width: 100%;
`