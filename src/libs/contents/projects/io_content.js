import {TIMELINE_PROJECT_IMAGES} from "../timeline/timeline_images";

const backgroundImage = 'https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fio%2Fp_io_1.png?alt=media&token=60179b2e-7bbf-4a67-8850-d5284b2d36e0'

const IO_CONTENT = {
  backgroundImage: backgroundImage,
  title: '(주) 이오',
  subtitle: <>(주)이오 회사 홈페이지 제작</>,
  skills: ['React', 'Firebase'],
  sliderImage: [
    backgroundImage,
    ...TIMELINE_PROJECT_IMAGES.io
  ],
  mainFeatures: [
    'Firebase Hosting 과 Firestore 를 이용한 게시판',
    '공지사항, 채용공고를 등록할 수 있는 관리자 콘솔',
  ],
  overview: [
    "참가 인원: 1인",
    "담당 작업: 디자인 및 개발 전반 담당",
    "개발 기간: 2021년 11월 ~ 2021년 12월",
  ],
  url: [
    { title: '🚀 배포 주소: ', url: 'https://iopeoples.com' },
  ],
  feature: <>
    주식회사 '이오'의 회사 홈페이지 개발 외주를 받고 제작했습니다.
  </>,
  motive: <>
    &nbsp;&nbsp;IT 업체가 아니라 따로 개발자가 없는 회사였습니다. 따라서 별도의 서버를 두기 어려워 파이어베이스에서 제공하는 Hosting 을 이용해 홈페이지를 배포했고, Firestore 데이터베이스를 이용해 게시판을 구현했습니다.
  </>,
  feel: null,
}

export default IO_CONTENT;