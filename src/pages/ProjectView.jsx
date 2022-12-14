import { useNavigate, useParams } from "react-router-dom";
import {
  ProjectViewContainer,
  ProjectViewPage,
  Header,
  ProjectViewTitle,
  Margin, ProjectViewSubtitle, ProjectFeature
} from "../styles/pages/ProjectView.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "../styles/components/common/ProjectViewSwipper.css";

import SPFUNC_CONTENT from "../libs/contents/projects/spfunc_content";
import ProjectViewSection from "../components/projects/ProjectViewSection";
import UPTOTK_CONTENT from "../libs/contents/projects/uptotk_content";
import CODEDURI_CONTENT from "../libs/contents/projects/codeduri_content";
import GAKPOK_CONTENT from "../libs/contents/projects/gakpok_content";
import CASHNAMU_CONTENT from "../libs/contents/projects/cashnamu_content";
import IO_CONTENT from "../libs/contents/projects/io_content";
import AUTOMIRI_CONTENT from "../libs/contents/projects/automiri_content";
import { useEffect } from "react";

const OVERVIEW_ICONS = [
  require('../assets/icons/i_person.png'),
  require('../assets/icons/i_calendar.png'),
  require('../assets/icons/i_clock.png'),
  require('../assets/icons/i_tools.png')
];

const ProjectView = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.querySelector("body").scrollTo(0,0)
  }, [])

  const onBackClicked = () => {
    navigate('/#projects');
  }

  let project = null;
  switch (projectName) {
    case 'spfunc':
      project = SPFUNC_CONTENT;
      break;
    case 'uptotk':
      project = UPTOTK_CONTENT;
      break;
    case 'codeduri':
      project = CODEDURI_CONTENT;
      break;
    case 'gakpok':
      project = GAKPOK_CONTENT;
      break;
    case 'cashnamu':
      project = CASHNAMU_CONTENT;
      break;
    case 'io':
      project = IO_CONTENT;
      break;
    case 'automiri':
      project = AUTOMIRI_CONTENT;
      break;
    default:
      project = null;
  }

  if (project) {
    return (
      <ProjectViewContainer>
        <ProjectViewPage>
          <Header>
            <img src={require('../assets/icons/i_arrow_back.png')} alt="Back" onClick={onBackClicked} />
          </Header>
          <ProjectViewTitle>{project.title}</ProjectViewTitle>
          <ProjectViewSubtitle>{project.subtitle}</ProjectViewSubtitle>
          <Margin />

          <ProjectViewSection title="??? ?????? ??????">
            <ul>
              {
                project.mainFeatures?.map((value) => (
                  <ProjectFeature>{value}</ProjectFeature>
                ))
              }
            </ul>
            <p>{project.feature}</p>
            <br />

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              {
                project.sliderImage.map((value) => (
                  <SwiperSlide>
                    <img src={value} alt="slider" />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </ProjectViewSection>
          <Margin />

          <ProjectViewSection title="???? ???????????? ??????">
            {
              project.overview.map((value, idx) => (
                <p><img src={OVERVIEW_ICONS[idx]} alt="-> "/> {value}</p>
              ))
            }
            <p><img src={OVERVIEW_ICONS[3]} alt="-> " /> ?????? ??????: {project.skills.join(', ')}</p>
          </ProjectViewSection>
          <Margin />

          <ProjectViewSection title="???? ?????? URL">
            {
              project.url?.map((value) => (
                <p>{value.title} &nbsp; <a href={value.url} target="_blank" rel="noreferrer">{value.url}</a></p>
              ))
            }
          </ProjectViewSection>
          <Margin />

          <ProjectViewSection title="?????? ??????">
            <p>{project.motive}</p>
          </ProjectViewSection>
          <Margin />

          {
            project.feel && (
              <>
                <ProjectViewSection title="?????????">
                  <p>{project.feel}</p>
                </ProjectViewSection>
                <Margin />
              </>
            )
          }

        </ProjectViewPage>
      </ProjectViewContainer>
    )
  } else {
    return (
      <ProjectViewContainer>
        <ProjectViewPage>
          <Header>
            <img src={require('../assets/icons/i_arrow_back.png')} alt="Back" onClick={onBackClicked} />
          </Header>

          <ProjectViewTitle>Nerf this!</ProjectViewTitle>
          <ProjectViewSection title="????????? ????????? ??????">
            <p>??? ??????????????? ?????? ???????????? ?????? ????????? ????????????...</p>
          </ProjectViewSection>
        </ProjectViewPage>
      </ProjectViewContainer>
    )
  }
}

export default ProjectView;