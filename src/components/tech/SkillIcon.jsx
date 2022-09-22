import { SkillIconContainer } from "../../styles/components/common/SkillIcon.style";

const SkillIcon = ({ skillName, skillIcon, onClick, selected }) => {
  return (
    <SkillIconContainer onClick={onClick} className={selected ? 'selected' : ''}>
      <img src={skillIcon} alt={skillName} />
      <p>{skillName}</p>
    </SkillIconContainer>
  )
}

export default SkillIcon;