import Header from "../components/common/Header";
import About from "./subpages/About";
import Timeline from "./subpages/Timelline";
import {SubPageMargin} from "../styles/pages/Portfolio.style";

const Portfolio = () => {
  return (
    <div>
      <Header />

      {
        // About 화면 표시
        <About />
      }
      <SubPageMargin />
      {
        // Timeline 화면 표시
        <Timeline />
      }
    </div>
  );
}

export default Portfolio;