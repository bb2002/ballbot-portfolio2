import {
  SkillExplain, SkillLearnAt,
  SkillSetButtonContainer,
  SkillSetContainer,
  SkillSetContent,
  SkillSetTitle
} from "../../styles/components/tech/SkillSetViewer.css";
import SkillIcon from "./SkillIcon";
import { useState } from "react";
import { BACKEND_SKILL_SET } from "../../libs/constants";

const SkillSetViewer = ({ skillSetName, skillSetIcon, skills }) => {
  const [selectedBackendSkill, setSelectedBackendSkill] = useState("NodeJS");

  const onBackendSkillClickHandler = (skillName) => {
    setSelectedBackendSkill(skillName);
  }

  return (
    <SkillSetContainer>
      <SkillSetTitle>
        <h3>Skillset of</h3>
        <h1><img src={skillSetIcon} alt="set icon" /> {skillSetName}</h1>
      </SkillSetTitle>
      <SkillSetContent>
        <SkillSetButtonContainer style={{ width: 648 }}>
          {
            skills.map((value) => (
              <SkillIcon
                skillName={value.name}
                skillIcon={value.icon}
                onClick={() => onBackendSkillClickHandler(value.name)}
                selected={selectedBackendSkill === value.name} />
            ))
          }
        </SkillSetButtonContainer>
        <SkillLearnAt>Learning At: {BACKEND_SKILL_SET[selectedBackendSkill].date}</SkillLearnAt>
        <SkillExplain>
          {BACKEND_SKILL_SET[selectedBackendSkill].content}
        </SkillExplain>
      </SkillSetContent>
    </SkillSetContainer>
  )
}

export default SkillSetViewer;