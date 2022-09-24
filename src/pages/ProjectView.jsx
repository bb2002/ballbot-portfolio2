import { useNavigate, useParams } from "react-router-dom";
import { Header, ProjectViewContainer, ProjectViewPage } from "../styles/pages/ProjectView.css";

const ProjectView = () => {
  //const { projectName } = useParams();
  const navigate = useNavigate();

  const onBackClicked = () => {
    navigate(-1)
  }

  return (
    <ProjectViewContainer>
      <ProjectViewPage>
        <Header>
          <img src={require('../assets/icons/i_arrow_back.png')} alt="Back" onClick={onBackClicked} />
        </Header>
      </ProjectViewPage>
    </ProjectViewContainer>

  )
}

export default ProjectView;