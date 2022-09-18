import {
  AboutMeCardContainer, AboutMeCardPadding, AboutMeCardWithIcon,
  AboutMeCardWithTitle,
  AboutPage,
  Underline,
  WelcomeMessage
} from "../styles/pages/About.css";
import { Modal } from "antd";
import { useState } from "react";

const i_github = require('../assets/icons/i_github.png');

const About = () => {
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <AboutPage>
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>

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
        <AboutMeCardWithTitle style={{ backgroundColor: '#FF9F43' }}>
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
        <AboutMeCardWithIcon style={{ backgroundColor: '#2D3436' }}>
          <img src={i_github} alt="Github" />
          <p>Github</p>
        </AboutMeCardWithIcon>
      </AboutMeCardContainer>
    </AboutPage>
  )
}

export default About;