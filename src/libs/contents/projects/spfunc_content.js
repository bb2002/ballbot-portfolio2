const backgroundImage = 'https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fspfunc%2Fp_spfunc_1.png?alt=media&token=69970ab5-2500-4464-ba50-bcebe200cb87'

const SPFUNC_CONTENT = {
  backgroundImage: backgroundImage,
  title: 'SPECIAL.FUNCTION',
  subtitle: <>준비된 컴퓨팅 리소스에서 코드를 실행하고 용량을<br />관리하는 서버리스 컴퓨팅 서비스 템플릿</>,
  skills: ['NestJS', 'Docker', 'React', 'GithubAction'],
  sliderImage: [
    backgroundImage,
    "https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fspfunc%2Fp_spfunc_2.png?alt=media&token=36874654-1e91-439e-8a8a-d670ca2f1234",
    "https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fspfunc%2Fp_spfunc_3.png?alt=media&token=4e06bad2-5f9a-4951-a91f-5414dd63728b",
    "https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fspfunc%2Fp_spfunc_4.png?alt=media&token=c1259ed6-829d-4cf9-bba4-c8099926e874",
    "https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fspfunc%2Fp_spfunc_5.png?alt=media&token=92ead196-8a81-463e-ad73-564c0a37a1ff",
    "https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fspfunc%2Fp_spfunc_6.png?alt=media&token=efdd1369-a283-42e4-b201-b7633f2c11d7",
  ],
  mainFeatures: [
    '독립된 공간에서 사용자의 코드를 실행',
    '도커 컨테이너를 실행 주기에 따라 자동으로 관리',
    'HTTP 요청으로 코드를 실행시킬 수 있어 서버리스 앱 구현 가능',
    '코드가 오픈되어 있어 상황에 맞게 fork 하여 커스텀 서버 구현 가능',
  ],
  overview: [
    "참가 인원: 2인",
    "담당 작업: 기획, 백엔드 개발",
    "개발 기간: 2022년 08월 ~ 2022년 10월",
  ],
  url: [
    { title: '🚀 배포 주소: ', url: 'https://spfunc.ml' },
    { title: '📝 소스 코드: ', url: 'https://github.com/team-special-week/specialfunc-api' },
    { title: '📺 시연 영상: ', url: 'https://www.youtube.com/watch?v=OSPdSbOL3OA' },
  ],
  feature: <>
    &nbsp;&nbsp;Special Function의 주요 기능은 '독립된 공간에서 사용자의 코드를 실행시키는 것' 입니다. 사용자는 자신의 코드를 ZIP 형태의 압축 파일로 올리고, 서버는 이 코드를 바탕으로
    HTTP 요청을 받을 수 있는 형태의 Docker Image로 빌드 합니다. 빌드가 완료되면 미리 설정된 HTTP Endpoint를 호출하여 함수를 실행하고, 응답 값을 받을 수 있습니다.
  </>,
  motive: <>
    &nbsp;&nbsp;서버를 구축하고 운영하는데 개인, 기업 구분 없이 부담이 커지자 Amazon, Microsoft, Google 등 IT 공룡기업들은 서버 리스 플랫폼을 내놓기 시작했습니다.
    가장 대표적인 AWS Lambda는, 실행할 코드를 올리면 독립된 공간에서 코드를 실행하고, 응답을 클라이언트에 전달하여 별도의 인스턴스 없이 서버를 만들 수 있습니다.
    <br />&nbsp;&nbsp;하지만 클라우드 서비스를 이용하면 해당 클라우드 플랫폼에 완전히 의존적인 서버를 만들어야 하고, 기업의 경우 여러 가지 이유로 클라우드 서비스를 이용할 수 없는 경우 이 장점을 누리지 못하는 문제가 있었습니다.
    <br />&nbsp;&nbsp;이를 해결하기 위해 오픈소스 서버리스 탬플릿을 만들기로 했고, 공개 SW 경진대회에 출품했습니다. 비록 수상으로 이어지지는 못했지만, Sandbox 환경을 자동으로 구축하는 서버를 만들어보며 색다른 개발 경험을 할 수 있었습니다.
  </>,
  feel: <>
    &nbsp;&nbsp;프런트엔드 개발자와 물리적으로 멀리 떨어져 있고, 개발할 수 있는 시간대가 달라 소통에 어려움을 많이 겪었습니다. 어떻게 하면 적은 소통으로 같은 생각(프로젝트에 대한 이해)을 가지게 해야 할지 고민했습니다.
    2021년, KNU 코딩 플랫폼 프로젝트 개발에서 피그마와 Postman으로 프로젝트를 문서로 표현 했던 점이 도움이 되었다고 생각해, 소통의 어려움을 '완벽한 문서화'로 극복해보기로 했습니다.
    <br />&nbsp;&nbsp;Figma로 우리의 프로젝트가 어떤 형태가 될지 최대한 표현하고, Postman을 통해 개발된 API가 어떤 응답을 줄 수 있는지 응답의 경우의 수를 모두 표현해 프런트엔드 개발에 차질이 없도록 노력했습니다.
    그 결과, 예상보다 프로젝트는 속전속결로 개발될 수 있었고, 2개월간 개발 후 베타 테스팅까지 성공적으로 마쳐 여유 있게 대회에 출품할 수 있었습니다.
  </>
}

export default SPFUNC_CONTENT;