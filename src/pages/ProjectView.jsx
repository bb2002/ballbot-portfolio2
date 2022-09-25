import { useNavigate, useParams } from "react-router-dom";
import {
  ProjectViewContainer,
  ProjectViewPage,
  Header,
  ProjectViewTitle,
  Margin, OverviewBox, Container
} from "../styles/pages/ProjectView.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "../styles/components/common/ProjectViewSwipper.css";

import SPFUNC_CONTENT from "../libs/contents/projects/spfunc_content";
import ProjectViewSection from "../components/projects/ProjectViewSection";

const OVERVIEW_ICONS = [
  require('../assets/icons/i_person.png'),
  require('../assets/icons/i_calendar.png'),
  require('../assets/icons/i_clock.png'),
  require('../assets/icons/i_tools.png')
];

const URL_ICON = [
  require('../assets/icons/i_url.png'),
  require('../assets/icons/i_github.png'),
]

const ProjectView = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();

  const onBackClicked = () => {
    navigate(-1)
  }

  let project = null;
  switch (projectName) {
    case 'spfunc':
      project = SPFUNC_CONTENT;
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

          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
              project.sliderImage.map((value) => (
                <SwiperSlide>
                  <img src={value} alt="slider" />
                </SwiperSlide>
              ))
            }
          </Swiper>
          <Margin />

          <Container>
            <ProjectViewSection title="🔗 참고 URL">
              {
                project.url.map((value, idx) => (
                  <p><img src={URL_ICON[idx]} alt="-> "/> <a href={value}>{value}</a></p>
                ))
              }
            </ProjectViewSection>
            <Margin />

            <OverviewBox>
              <ProjectViewSection title="개요">
                {
                  project.overview.map((value, idx) => (
                    <p><img src={OVERVIEW_ICONS[idx]} alt="-> "/> {value}</p>
                  ))
                }
                <p><img src={OVERVIEW_ICONS[3]} alt="-> " /> {project.skills.join(',')}</p>
              </ProjectViewSection>
              <div style={{ width: 16, height: 64 }} />
              <ProjectViewSection title="주요 기능">
                <p>{project.feature}</p>
              </ProjectViewSection>
            </OverviewBox>

            <ProjectViewSection title="개발 동기">
              <p>{project.motive}</p>
            </ProjectViewSection>
            <Margin />

            <ProjectViewSection title="느낀점">
              <p>{project.feel}</p>
            </ProjectViewSection>
            <Margin />
          </Container>
        </ProjectViewPage>
      </ProjectViewContainer>
    )
  } else {
    return null;
  }
}

export default ProjectView;