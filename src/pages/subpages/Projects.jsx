import {CommonPage, SubpageTitle} from "../../styles/pages/subpages/SubpageCommon.css";
import {
  ProjectContainer,
  ProjectLineOne, ProjectLineThree, ProjectLineTwo,
} from "../../styles/pages/subpages/Projects.css";
import ProjectTile from "../../components/projects/ProjectTile";

const Projects = () => {
  return (
    <CommonPage>
      <SubpageTitle>Projects_</SubpageTitle>

      <ProjectContainer>
        <ProjectLineOne>
          <div id="one-spfunc">
            <ProjectTile />
          </div>
          <div id="one-vertical">
            <div>
              <ProjectTile />
            </div>
            <div>
              <ProjectTile />
            </div>
          </div>
        </ProjectLineOne>

        <ProjectLineTwo>
          <div>
            <ProjectTile />
          </div>
          <div>
            <ProjectTile />
          </div>
        </ProjectLineTwo>

        <ProjectLineThree>
          <div id="three-container">
            <div>
              <ProjectTile />
            </div>
            <div>
              <ProjectTile />
            </div>
          </div>
          <div id="three-empty"/>
        </ProjectLineThree>
      </ProjectContainer>
    </CommonPage>
  )
}

export default Projects;