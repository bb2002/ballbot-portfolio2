import Header from "../components/common/Header";
import About from "./About";

const Portfolio = () => {
  return (
    <div>
      <Header />

      {
        // About 화면 표시
        <About />
      }
    </div>
  );
}

export default Portfolio;