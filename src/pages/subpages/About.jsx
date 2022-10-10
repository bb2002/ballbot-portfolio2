import {
  AboutMeCardContainer, AboutMeCardPadding, AboutMeCardWithIcon,
  AboutMeCardWithTitle,
  AboutPage, CleanCodeLi,
  Underline,
  WelcomeMessage
} from "../../styles/pages/subpages/About.css";
import { useState } from "react";
import DarkModal from "../../components/common/DarkModal";

const i_github = require('../../assets/icons/i_github.png');

const About = () => {
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <AboutPage>
      <DarkModal
        title="읽기 쉬운 코드를 쓰는 방법"
        centered={true}
        open={modal2Open}
        onCancel={() => setModal2Open(false)}>
        <ol>
          <CleanCodeLi>Clean Code를 너무 맹신하지 않는게 좋다고 생각합니다.</CleanCodeLi>
          <CleanCodeLi>그 조직과 프로젝트에 어울리는 코드를 작성합니다.</CleanCodeLi>
          <CleanCodeLi>변수, 함수명을 짓기 어렵다면 차라리 긴 이름을 씁니다.</CleanCodeLi>
        </ol>
      </DarkModal>

      <WelcomeMessage>안녕하세요.</WelcomeMessage>
      <WelcomeMessage>
        <Underline style={{ textDecorationColor: '#eb4d4b' }}>주어진 목표</Underline>
        를 모두가&nbsp;
        <Underline style={{ textDecorationColor: '#f0932b', cursor: 'pointer' }} onClick={() => setModal2Open(true)}>읽기 쉬운 코드</Underline>
        로 표현하고자 하는
      </WelcomeMessage>
      <WelcomeMessage>개발자 김수빈 입니다.</WelcomeMessage>

      <AboutMeCardContainer>
        <AboutMeCardWithTitle style={{ backgroundColor: '#EE5253' }}>
          <h2>Birth</h2>
          <p>2002년 06월 06일</p>
        </AboutMeCardWithTitle>
        <AboutMeCardPadding />
        <AboutMeCardWithTitle style={{ backgroundColor: '#e67e22' }}>
          <h2>Education</h2>
          <ul>
            <li>선린인터넷고등학교 졸업</li>
            <li>강원대학교 컴퓨터공학과 재학</li>
          </ul>
        </AboutMeCardWithTitle>
        <AboutMeCardPadding />
        <AboutMeCardWithTitle style={{ backgroundColor: '#10AC84' }}>
          <h2>Contact</h2>
          <ul>
            <li>5252bb@daum.net</li>
            <li>010-4917-4155</li>
          </ul>
        </AboutMeCardWithTitle>
        <AboutMeCardPadding />
        <a href="https://www.github.com/bb2002" target="_blank" rel="noreferrer">
          <AboutMeCardWithIcon style={{ backgroundColor: '#2D3436' }}>
            <img src={i_github} alt="Github" />
            <p>Github</p>
          </AboutMeCardWithIcon>
        </a>

      </AboutMeCardContainer>
    </AboutPage>
  )
}

export default About;