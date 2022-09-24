import {
  ProjectTileBackgroundImage,
  ProjectTileContainer,
  ProjectTileContent, ProjectTileSubtitle, ProjectTileTitle, SkillAvatarContainer
} from "../../styles/components/projects/ProjectTile.css";
import SkillAvatar from "../common/SkillAvatar";

const ProjectTile = ({size, contents, onClick}) => {
  const titleStyle = {
    fontSize: size === 'regular' ? '1.75rem' : size === 'small' ? '1.25rem' : '2.5rem',
  }
  const subtitleStyle = {
    fontSize: size === 'regular' ? '1.125rem' : size === 'small' ? '0.9rem' : '1.5rem',
  }

  return (
    <ProjectTileContainer onClick={onClick}>
      <ProjectTileBackgroundImage src={contents.backgroundImage} />
      <ProjectTileContent>
        <ProjectTileTitle style={titleStyle}>{contents.title}</ProjectTileTitle>
        <ProjectTileSubtitle style={subtitleStyle}>{contents.subtitle}</ProjectTileSubtitle>
        <SkillAvatarContainer style={{ height: 32 }}>
          {
            contents.skills.map((skillName) => SkillAvatar[skillName])
          }
        </SkillAvatarContainer>
      </ProjectTileContent>
    </ProjectTileContainer>
  )
}

export default ProjectTile;