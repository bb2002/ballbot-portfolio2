import {
  TimelineConnect,
  TimelineContainer, TimelineContentIcon, TimelineContentRight,
  TimelineEdge,
  TimelinePage,
  TimelineTitle
} from "../../styles/pages/subpages/Timeline.css";

const Timeline = () => {
  return (
    <TimelinePage>
      <TimelineTitle>Timeline_</TimelineTitle>

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
              게임 서버를 Linux 기반의 운영체제에서 구동.
            </p>
          </div>
        </TimelineContentRight>
        <TimelineConnect />
        <TimelineEdge />
      </TimelineContainer>
    </TimelinePage>

  )
}

export default Timeline;