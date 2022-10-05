import { useNavigate, useParams } from "react-router-dom";
import {
  ProjectViewContainer,
  ProjectViewPage,
  Header,
  ProjectViewTitle,
  Margin, OverviewBox, Container, ProjectViewSubtitle, ProjectFeature
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

const URL_ICON = [
  require('../assets/icons/i_url.png'),
  require('../assets/icons/i_github.png'),
  require('../assets/icons/i_youtube.png'),
]

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
          <ProjectViewSubtitle>Serverless 플랫폼 코드 탬플릿</ProjectViewSubtitle>
          <Margin />

          <ProjectViewTitle>✅ 주요 기능</ProjectViewTitle>
          <ul>
            <ProjectFeature>안녕 친구들 해결사가 왔어~!</ProjectFeature>
            <ProjectFeature>디바 온라인!</ProjectFeature>
            <ProjectFeature>망치!!!!! 나가신다!!!!</ProjectFeature>
          </ul>
          
          

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
                project.url.map((value) => (
                  <p><img src={URL_ICON[value.iconIdx]} alt="-> "/> <a href={value.url}>{value.url}</a></p>
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
    return (
      <ProjectViewContainer>
        <ProjectViewPage>
          <Header>
            <img src={require('../assets/icons/i_arrow_back.png')} alt="Back" onClick={onBackClicked} />
          </Header>

          <ProjectViewTitle>Nerf this!</ProjectViewTitle>
          <ProjectViewSection title="오류가 발생한 이유">
            <p>이 프로젝트는 너프 당했거나 제가 만든게 아닙니다...</p>
          </ProjectViewSection>
        </ProjectViewPage>
      </ProjectViewContainer>
    )
  }
}

export default ProjectView;