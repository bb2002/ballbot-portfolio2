const backgroundImage = 'https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fautomiri%2Fp_automiri_1.png?alt=media&token=2854abfc-2be9-4fef-88d3-11ae97013659'

const AUTOMIRI_CONTENT = {
  backgroundImage: backgroundImage,
  title: '오토미리',
  subtitle: <>광역버스 예약 자동화</>,
  skills: ['NodeJS'],
  sliderImage: [
    backgroundImage,
    'https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fautomiri%2Fp_automiri_2.png?alt=media&token=14ff0aff-7a0d-48e1-9d2c-1a2d9bc77146'
  ],
  overview: [
    "1인 개발",
    "전체 프로젝트 개발 담당",
    "약 3일 소요",
  ],
  url: [],

  feature: <>
    &nbsp;&nbsp;경기도 광역버스 예약 앱 'MiRI'에서, 오전 10시가 되면 자동으로 자리를 예약해주는 프로그램 입니다.
  </>,
  motive: <>
    &nbsp;&nbsp;경기도에는 광역 버스 예약 제도가 있습니다. 자리를 미리 예약해두면 서서 버스를 탈 필요가 없어집니다.
    하지만 매일매일 10시에 버스를 예약해야하는 번거로움이 있고, 깜빡하고 늦게 예약을 하려고 시도하면 자리가 없는 경우도 자주 있습니다.
    매일 반복되는 예약 작업이 번거롭다고 생각되어, 자동으로 예약해주는 프로그램을 만들었습니다.
  </>,
  feel: <>
    &nbsp;&nbsp;Puppeteer라는 구글에서 개발한 헤드리스 크롬 노드 API 를 이용했습니다. 남을 위해 만든 프로그램이 아닌, '나'를 위해 만든 프로그램이라는 점에서
    의미가 있다고 생각하며, 매일매일 번거롭게 예약하는 일이 없도록 하여 제 삶의 질을 개선해준 프로그램이기도 합니다.
  </>
}

export default AUTOMIRI_CONTENT;