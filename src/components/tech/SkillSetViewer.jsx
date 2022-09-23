import {
  SkillExplain, SkillLearnAt,
  SkillSetButtonContainer,
  SkillSetContainer,
  SkillSetContent,
  SkillSetTitle
} from "../../styles/components/tech/SkillSetViewer.css";
import SkillIcon from "./SkillIcon";

const SkillSetViewer = ({ skillSetName, skillSetIcon, skills, onSkillSelect, selectedSkill, skillContents }) => {
  return (
    <SkillSetContainer>
      <SkillSetTitle>
        <h3>Skillset of</h3>
        <h1><img src={skillSetIcon} alt="set icon" /> {skillSetName}</h1>
      </SkillSetTitle>
      <SkillSetContent>
        <SkillSetButtonContainer style={{ width: skills.length * 120 + (skills.length - 1) * 8 }}>
          {
            skills.map((value) => (
              <SkillIcon
                key={value.name}
                skillName={value.name}
                skillIcon={value.icon}
                onClick={() => onSkillSelect(value.name)}
                selected={selectedSkill === value.name} />
            ))
          }
        </SkillSetButtonContainer>
        <SkillLearnAt>Learning At: {skillContents[selectedSkill].date}</SkillLearnAt>
        <SkillExplain>
          {skillContents[selectedSkill].content}
        </SkillExplain>
      </SkillSetContent>
    </SkillSetContainer>
  )
}

export default SkillSetViewer;