import {CommonPage, SubpageTitle} from "../../styles/pages/subpages/SubpageCommon.css";
import {
  ProjectContainer,
  ProjectLineOne, ProjectLineThree, ProjectLineTwo,
} from "../../styles/pages/subpages/Projects.css";
import ProjectTile from "../../components/projects/ProjectTile";
import SPFUNC_CONTENT from "../../libs/contents/projects/spfunc_content";
import UPTOTK_CONTENT from "../../libs/contents/projects/uptotk_content";
import CODEDURI_CONTENT from "../../libs/contents/projects/codeduri_content";
import GAKPOK_CONTENT from "../../libs/contents/projects/gakpok_content";
import IO_CONTENT from "../../libs/contents/projects/io_content";
import AUTOMIRI_CONTENT from "../../libs/contents/projects/automiri_content";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const onProjectClickHandler = (projectName) => {
    navigate(`/${projectName}`)
  }

  return (
    <CommonPage id="projects">
      <SubpageTitle>Projects_</SubpageTitle>

      <ProjectContainer>
        <ProjectLineOne>
          <div id="one-spfunc">
            <ProjectTile
              onClick={() => onProjectClickHandler('spfunc')}
              size="large"
              contents={SPFUNC_CONTENT} />
          </div>
          <div id="one-vertical">
            <div>
              <ProjectTile
                onClick={() => onProjectClickHandler('uptotk')}
                size="small"
                contents={UPTOTK_CONTENT} />
            </div>
            <div>
              <ProjectTile
                onClick={() => onProjectClickHandler('codeduri')}
                size="small"
                contents={CODEDURI_CONTENT} />
            </div>
          </div>
        </ProjectLineOne>

        <ProjectLineTwo>
          <div>
            <ProjectTile
              onClick={() => onProjectClickHandler('gakpok')}
              size="regular"
              contents={GAKPOK_CONTENT} />
          </div>
          <div>
            {/*<ProjectTile*/}
            {/*  onClick={() => onProjectClickHandler('cashnamu')}*/}
            {/*  size="regular"*/}
            {/*  contents={CASHNAMU_CONTENT} />*/}
            <ProjectTile
              onClick={() => onProjectClickHandler('automiri')}
              size="regular"
              contents={AUTOMIRI_CONTENT} />
          </div>
        </ProjectLineTwo>

        <ProjectLineThree>
          <div id="three-container">
            <div>
              <ProjectTile
                onClick={() => onProjectClickHandler('io')}
                size="small"
                contents={IO_CONTENT} />
            </div>
            <div>
              {/*<ProjectTile*/}
              {/*  onClick={() => onProjectClickHandler('automiri')}*/}
              {/*  size="small"*/}
              {/*  contents={AUTOMIRI_CONTENT} />*/}
            </div>
          </div>
          <div id="three-empty"/>
        </ProjectLineThree>
      </ProjectContainer>
    </CommonPage>
  )
}

export default Projects;