import {
  ProjectImage,
  ProjectUnderline,
  TimelineConnect,
  TimelineContainer, TimelineContentIcon, TimelineContentLeft, TimelineContentRight,
  TimelineEdge,
  TimelinePage
} from "../../styles/pages/subpages/Timeline.css";
import {useState} from "react";
import DarkModal from "../../components/common/DarkModal";
import { EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {TIMELINE_PROJECT_IMAGES} from "../../libs/constants";
import { SubpageTitle } from "../../styles/pages/subpages/SubpageCommon.css";

const Timeline = () => {
  const [openedModal, setOpenedModal] = useState(null);

  const onCancel = () => {
    setOpenedModal(null);
  }

  return (
    <TimelinePage id="timeline">
      <DarkModal
        title="프로젝트 미리보기"
        centered={true}
        open={openedModal !== null}
        onCancel={onCancel}>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
        {
          (openedModal !== null) && (
            TIMELINE_PROJECT_IMAGES[openedModal].map((value) => (
              <SwiperSlide>
                <ProjectImage
                  src={value}
                  alt="project img"/>
              </SwiperSlide>
            ))
          )
        }
        </Swiper>
      </DarkModal>

      <SubpageTitle>Timeline_</SubpageTitle>

      <TimelineContainer>
        <TimelineEdge />
        <TimelineConnect />
        <TimelineContentRight>
          <TimelineContentIcon style={{ borderColor: "#FDB81F" }}>
            <img src={require("../../assets/icons/i_linux.png")} alt="Linux" />
          </TimelineContentIcon>
          <div className="tl-title-content">
            <h2>2014</h2>
            <p>
              가상서버 호스팅을 대여하여 24시간 구동되는
              게임 서버를 Linux 기반의 운영체제에서 구동
            </p>
          </div>
        </TimelineContentRight>
        <TimelineConnect />
        <TimelineContentLeft>
          <TimelineContentIcon style={{ borderColor: "#007AFF" }}>
            <img src={require("../../assets/icons/i_php.png")} alt="PHP" />
          </TimelineContentIcon>
          <div className="tl-title-content">
            <h2>2015</h2>
            <p>
              PHP 와 MySQL 을 사용하여 '<ProjectUnderline onClick={() => setOpenedModal('taxpackcmi')}>텍스팩 커뮤니티</ProjectUnderline>'라는
              커뮤니티 서비스를 개발하고 운영
            </p>
          </div>
        </TimelineContentLeft>
        <TimelineConnect />
        <TimelineContentRight>
          <TimelineContentIcon style={{ borderColor: "#3DDB85" }}>
            <img src={require("../../assets/icons/i_android.png")} alt="Android" />
          </TimelineContentIcon>
          <div className="tl-title-content">
            <h2>2018</h2>
            <p>
              휴대폰 화면에 표시된 텍스트를 OCR 을 통해 읽고,
              번역해주는 앱 '<ProjectUnderline onClick={() => setOpenedModal('screentranslate')}>스크린 번역기</ProjectUnderline>'를 개발 및 운영
            </p>
          </div>
        </TimelineContentRight>
        <TimelineConnect />
        <TimelineContentLeft>
          <TimelineContentIcon style={{ borderColor: "#FFFFFF" }}>
            <img src={require("../../assets/icons/i_unrealengine.png")} alt="UE4" />
          </TimelineContentIcon>
          <div className="tl-title-content">
            <h2>2020</h2>
            <p>
              C++ 기반의 언리얼 엔진을 이용하여 3D 게임
              '<ProjectUnderline onClick={() => setOpenedModal('myrunnergame')}>MyRunnerGame</ProjectUnderline>',
              '<ProjectUnderline onClick={() => setOpenedModal('runcat')}>런 켓</ProjectUnderline>' 등을 개발
            </p>
          </div>
        </TimelineContentLeft>
        <TimelineConnect />
        <TimelineContentRight>
          <TimelineContentIcon style={{ borderColor: "#48CEF7" }}>
            <img src={require("../../assets/icons/i_react.png")} alt="React" />
          </TimelineContentIcon>
          <div className="tl-title-content">
            <h2>2021</h2>
            <p>
              React 라이브러리를 이용하여
              '<ProjectUnderline onClick={() => setOpenedModal('codeduri')}>KNU 코딩 플랫폼</ProjectUnderline>',
              '<ProjectUnderline onClick={() => setOpenedModal('io')}>(주)이오</ProjectUnderline>' 웹 사이트를 개발
            </p>
          </div>
        </TimelineContentRight>
        <TimelineConnect />
        <TimelineContentLeft>
          <TimelineContentIcon style={{ borderColor: "#E0234E" }}>
            <img src={require("../../assets/icons/i_nestjs.png")} alt="NestJS" />
          </TimelineContentIcon>
          <div className="tl-title-content">
            <h2>2022</h2>
            <p>
              타임스프레드 백엔드 팀에 합류하여 NestJS
              마이그레이션 프로젝트 수행
            </p>
          </div>
        </TimelineContentLeft>
        <TimelineConnect />
        <TimelineEdge />
      </TimelineContainer>
    </TimelinePage>

  )
}

export default Timeline;