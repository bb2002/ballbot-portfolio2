import {
  CareerCompanyContainer,
  CareerContentContainer,
  CareerViewerContainer
} from "../../styles/components/career/CareerViewer.css";


const CareerViewer = ({ work }) => {
  return (
    <CareerViewerContainer>
      <CareerCompanyContainer>
        <p id="date">{work.workDate}</p>
        <h3>{work.company}</h3>
        <p id="position">{work.team}</p>
      </CareerCompanyContainer>
      <CareerContentContainer>
        <h4>{work.work}</h4>

        <p id="work">주요 업무</p>
        <ul>
          {
            work.workItems.map((value) => (
              <li>{value}</li>
            ))
          }
        </ul>
      </CareerContentContainer>
    </CareerViewerContainer>
  )
}

export default CareerViewer;