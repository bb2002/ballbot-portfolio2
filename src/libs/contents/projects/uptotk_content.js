const  backgroundImage = 'https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fuptotk%2Fp_uptotk_1.png?alt=media&token=b3683d7b-cb8d-4210-b38e-5c9312eb9a8d'

const UPTOTK_CONTENT = {
  backgroundImage: backgroundImage,
  title: '업투티케이',
  subtitle: <>간단한 파일공유 서비스</>,
  skills: ['NestJS', 'React'],
  sliderImage: [
    backgroundImage,
    "https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fuptotk%2Fp_uptotk_2.png?alt=media&token=aef13ab5-1144-45ee-9645-6a7bb4ab1bf2",
    "https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fuptotk%2Fp_uptotk_3.png?alt=media&token=ae85dc90-e213-484f-953b-394806e2312c",
  ],
  mainFeatures: [
    '최대 100MB 의 파일을 공유 할 수 있음',
    '공유된 파일에는 쉬운 단어로 된 UUID 가 발급되어 접근이 용이',
    '비밀번호, 만료기간, 다운로드 횟수 제한을 설정 할 수 있음'
  ],
  overview: [
    "참가 인원: 1인",
    "담당 작업: 기획 및 개발 전반",
    "개발 기간: 2022년 03월 ~ 2022년 04월",
  ],
  url: [
    { title: '🚀 배포 주소: ', url: 'https://upto.tk' },
  ],
  feature: <>
    &nbsp;&nbsp;upto.tk는 별도의 가입 없이, 파일을 빠르게 올리고 누군가와 공유 할 수 있는 '파일 공유 서비스' 입니다. 최대 100MB, 5개까지 업로드가 가능하고, 업로드된 파일은 쉬운 고유주소로 접근할 수 있습니다.
    타 업로드 서비스는 복잡하고 암기하기 어려운 UUID를 통해 파일에 접근하지만, upto.tk는 초등학생 수준의 쉬운 영어단어 조합으로 된 ID를 이용하는 점이 특색입니다.
  </>,
  motive: <>
    &nbsp;&nbsp;이 프로젝트를 개발한 2022년에는 '어린 시절 상상만 하고 완성하지 못한 프로젝트 만들기'라는 목표를 세웠고, 이를 실천하기 위해 개발했습니다.
    파일공유 서비스는 2014년에 기획했지만, 파일 업로드 기능을 구현하지 못해 좌절했던 경험이 있습니다.
    따라서, 과거의 제가 상상했던 서비스를 개발하고 지인이나 특정 몇명에게 파일을 전달할 때 사용하기 위해 개발했습니다.
  </>,
  feel: <>
    &nbsp;&nbsp;파일 공유 서비스는 흔한 서비스지만, 대부분 회원가입을 유도하거나, 광고를 많이 표시하는 등의 불편함이 있었습니다.
    upto.tk는 모든 사람이 가입이나 광고로 인해 불편함을 겪지 않고 빠르게 파일 공유 기능을 수행할 수 있도록 만들어졌습니다.
    비록 적은 업로드 용량이 단점이지만, HTTP 기반이 아닌 TCP 소켓을 통해 파일 업로드 기능을 구현해 이러한 한계점을 개선해보고 싶습니다.
  </>
}

export default UPTOTK_CONTENT;