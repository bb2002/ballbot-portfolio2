import { CommonPage, SubpageTitle } from "../../styles/pages/subpages/SubpageCommon.css";
import CareerViewer from "../../components/career/CareerViewer";
import { CAREER_TIMESPREAD_CONTENT } from "../../libs/contents/career/timespread_content";

const Career = () => {
  return (
    <CommonPage id="career">
      <SubpageTitle>Career_</SubpageTitle>

      <CareerViewer work={CAREER_TIMESPREAD_CONTENT} />
    </CommonPage>
  )
}

export default Career;