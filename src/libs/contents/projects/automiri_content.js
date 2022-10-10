const backgroundImage = 'https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fautomiri%2Fp_automiri_1.png?alt=media&token=8c92f8b3-4866-4c0b-9d53-be3f2debd323'

const AUTOMIRI_CONTENT = {
  backgroundImage: backgroundImage,
  title: '오토미리',
  subtitle: <>광역버스 예약 자동화</>,
  skills: ['NodeJS'],
  sliderImage: [
    backgroundImage,
    'https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fautomiri%2Fp_automiri_2.png?alt=media&token=dcfaa2a5-e488-4bd5-a4a7-955d3ee9be60'
  ],
  mainFeatures: [
    'MiRI 서버 시간을 기준으로 예약 진행',
    'puppeteer 라는 크롤링 라이브러리를 이용하여 예약 ~ 티켓 캡쳐 후 Discord 메신저로 결과 전달',
    '나를 위한 프로그램으로 지속적으로 유지보수 중',
  ],
  overview: [
    "1인 개발",
    "전체 프로젝트 개발 담당",
    "약 3일 소요",
  ],
  url: [],

  feature: <>
    오전 10시가 되면 광역버스 자리 예약 앱 MiRI 에 자동으로 접속하여 선호하는 자리를 찾아 예약해주는 매크로 서비스 입니다.
  </>,
  motive: <>
    &nbsp;&nbsp;경기도에는 광역 버스 예약 제도가 있습니다. 자리를 미리 예약해두면 서서 버스를 탈 필요가 없어집니다.
    하지만 매일매일 10시에 버스를 예약해야하는 번거로움이 있고, 깜빡하고 늦게 예약을 하려고 시도하면 자리가 없는 경우도 자주 있습니다.
    매일 반복되는 예약 작업이 번거롭다고 생각되어, 자동으로 예약해주는 프로그램을 만들었습니다.
  </>,
  feel: <>
    &nbsp;&nbsp;Puppeteer 라는 구글에서 개발한 헤드리스 크롬 노드 API를 이용하여 개발한 프로그램 입니다.
    자동화를 매우 좋아하는 저로써, 매일매일 10시에 버스를 예약하는 일은 번거롭게 느껴졌습니다. 또한 10시에는 오전 스크럼이 있어 제때 예약을 진행하기도 어려웠습니다.
    매일 자동으로 버스 자리를 예약하고, 예약 결과를 디스코드 메신저로 알려주니 제 손으로 삶의 질을 개선 했다고 느껴 뿌듯했습니다.
  </>
}

export default AUTOMIRI_CONTENT;