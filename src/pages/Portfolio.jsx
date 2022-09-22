import Header from "../components/common/Header";
import About from "./subpages/About";
import Timeline from "./subpages/Timelline";
import {SubPageMargin} from "../styles/pages/Portfolio.style";
import Tech from "./subpages/Tech";

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
      <SubPageMargin />
      {
        // Tech 화면 표시
        <Tech />
      }
    </div>
  );
}

export default Portfolio;