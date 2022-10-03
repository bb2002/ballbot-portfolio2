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
  overview: [
    "1인 개발",
    "기획 및 개발 전반 담당",
    "2022년 03월 ~ 2022년 04월",
  ],
  url: [
    { url: 'https://upto.tk', iconIdx: 0 },
  ],

  feature: <>
    &nbsp;&nbsp;upto.tk는 별도의 가입 없이, 파일을 빠르게 올리고 누군가와 공유 할 수 있는 '파일 공유 서비스' 입니다. 최대 100MB, 5개 까지 업로드가 가능하고, 업로드된 파일은 쉬운 고유주소로 접근 할 수 있습니다.
    타 업로드 서비스는 복잡하고 암기하기 어려운 UUID를 통해 파일에 접근하지만, upto.tk는 초등학생 수준의 쉬운 영단어 조합으로 된 ID를 이용하는 점이 특색입니다.
  </>,
  motive: <>
    &nbsp;&nbsp;2022년 새해 '어린 시절 기획만 하고 완성하지 못한 프로젝트 완성하기'라는 목표를 세우고 실천을 목적으로 개발했습니다.
    파일공유 서비스는 2014년에 기획했지만, 파일 업로드 기능을 구현하지 못하여 좌절했던 경험이 있습니다.
    과거의 제가 상상했던 서비스를 만들어보자는 취지로 구현했고, 지인이나 특정 몇명에게 파일 공유를 할 때 개인용으로 사용하고 있습니다.
  </>,
  feel: <>
    &nbsp;&nbsp;2014년 첫 기획에서는 10GB 의 대용량 파일 지원, 광고 및 저장기간에 대한 제한 없음을 내세웠습니다. 하지만 8년이 지난 지금 이를 운영 할 수 있는 서버를 구하기 어렵고, 재정적 이유, 보안 이유등으로
    100MB 라는 적은 용량만 지원하게 되었습니다. 한편으로는 세상물정을 알고 '낭만'을 위해 만든 서비스에도 현실적 한계를 생각하고 있는 자신이 섭섭하게 느껴지기도 했습니다.
    추후에는 HTTP 기반이 아닌 TCP 소켓을 통해 구현하여 이러한 한계점을 개선해보려고 합니다.
  </>
}

export default UPTOTK_CONTENT;