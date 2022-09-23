import {SkillViewerMargin} from "../../styles/pages/subpages/Tech.css";
import {CommonPage, SubpageTitle} from "../../styles/pages/subpages/SubpageCommon.css";
import SkillSetViewer from "../../components/tech/SkillSetViewer";
import {useState} from "react";
import {BACKEND_SKILL_CONTENT} from "../../libs/contents/tech/backend_skills";
import {FRONTEND_SKILL_CONTENT} from "../../libs/contents/tech/frontend_skills";
import {DEVOPS_SKILL_CONTENT} from "../../libs/contents/tech/devops_skills";

const Tech = () => {
  const [selectedSkill, setSelectedSkill] = useState(['NodeJS', 'HTML/CSS', "Git"]);

  const onSkillSelectHandler = (idx, value) => {
    const tmp = [...selectedSkill];
    tmp[idx] = value;
    setSelectedSkill(tmp);
  }

  return (
    <CommonPage>
      <SubpageTitle>Tech_</SubpageTitle>

      <SkillSetViewer
        skillSetName="Backend"
        skillSetIcon={require('../../assets/icons/i_data_center.png')}
        skills={[
          { name: 'NodeJS', icon: require('../../assets/icons/i_nodejs.png') },
          { name: 'NestJS', icon: require('../../assets/icons/i_nestjs.png') },
          { name: 'Spring', icon: require('../../assets/icons/i_springboot.png') },
          { name: 'MySQL', icon: require('../../assets/icons/i_mysql.png') },
          { name: 'Redis', icon: require('../../assets/icons/i_redis.png') },
        ]}
        selectedSkill={selectedSkill[0]}
        onSkillSelect={(value) => onSkillSelectHandler(0, value)}
        skillContents={BACKEND_SKILL_CONTENT}/>
      <SkillViewerMargin />

      <SkillSetViewer
        skillSetName="Frontend"
        skillSetIcon={require('../../assets/icons/i_website.png')}
        skills={[
          { name: 'HTML/CSS', icon: require('../../assets/icons/i_htmlcss.png') },
          { name: 'React', icon: require('../../assets/icons/i_react.png') },
          { name: 'React Native', icon: require('../../assets/icons/i_react.png') },
          { name: 'NextJS', icon: require('../../assets/icons/i_nextjs.png') },
        ]}
        selectedSkill={selectedSkill[1]}
        onSkillSelect={(value) => onSkillSelectHandler(1, value)}
        skillContents={FRONTEND_SKILL_CONTENT}
      />
      <SkillViewerMargin />

      <SkillSetViewer
        skillSetName="DevOps"
        skillSetIcon={require('../../assets/icons/i_launcher.png')}
        skills={[
          { name: 'Git', icon: require('../../assets/icons/i_git.png') },
          { name: 'Github Action', icon: require('../../assets/icons/i_github_dark.png') },
          { name: 'Docker', icon: require('../../assets/icons/i_docker.png') },
        ]}
        selectedSkill={selectedSkill[2]}
        onSkillSelect={(value) => onSkillSelectHandler(2, value)}
        skillContents={DEVOPS_SKILL_CONTENT}
      />
    </CommonPage>
  )
}

export default Tech;