import { TechPage } from "../../styles/pages/subpages/Tech.css";
import { SubpageTitle } from "../../styles/pages/subpages/SubpageCommon.css";
import SkillSetViewer from "../../components/tech/SkillSetViewer";

const Tech = () => {
  return (
    <TechPage>
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
        ]}/>
    </TechPage>
  )
}

export default Tech;