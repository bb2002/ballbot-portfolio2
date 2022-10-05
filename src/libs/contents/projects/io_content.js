import {TIMELINE_PROJECT_IMAGES} from "../timeline/timeline_images";

const backgroundImage = 'https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fio%2Fp_io_1.png?alt=media&token=f0038b57-17c2-4cee-9e3a-fbbc63178373'

const IO_CONTENT = {
  backgroundImage: backgroundImage,
  title: '(주) 이오',
  subtitle: <>(주)이오 회사 홈페이지 제작</>,
  skills: ['React'],
  sliderImage: [
    backgroundImage,
    ...TIMELINE_PROJECT_IMAGES.io
  ],
  overview: [
    "1인 개발",
    "전체 프로젝트 개발 담당",
    "2022년 8월부터 약 1개월",
  ],
  url: [
    { url: 'https://iopeoples.com', iconIdx: 0 },
  ],

  feature: <>
    &nbsp;&nbsp;주식회사 '이오'의 회사 홈페이지 개발 외주를 받고 제작했습니다.
  </>,
  motive: <>
    &nbsp;&nbsp;IT 업체가 아니라 따로 개발자가 없는 회사였습니다. 따라서 별도의 서버를 두기 어려워 파이어베이스에서 제공하는 Hosting 을 이용해 홈페이지를 배포했고, Firestore 데이터베이스를 이용해 게시판을 구현했습니다.
  </>,
  feel: null,
}

export default IO_CONTENT;