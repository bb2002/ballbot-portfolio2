import Header from "../components/common/Header";
import About from "./subpages/About";
import Timeline from "./subpages/Timelline";
import {SubPageMargin} from "../styles/pages/Portfolio.css";
import Tech from "./subpages/Tech";
import Projects from "./subpages/Projects";
import { useEffect } from "react";

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

const Portfolio = () => {
  useEffect(() => {
    const tab = window.location.href.split('#')[1];

    if (tab === 'projects') {
      // 프로젝트에서 뒤로 온 경우, PROJECT 화면으로 이동
      const offset = getOffset(document.getElementById('projects')).top;

      if (offset > 100) {
        document.body.scrollTo(0, offset);
      }
    }
  }, [])

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
      <SubPageMargin />
      {
        // Projects 화면 표시
        <Projects />
      }
      <SubPageMargin />
    </div>
  );
}

export default Portfolio;