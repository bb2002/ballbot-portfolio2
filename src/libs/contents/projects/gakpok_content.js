const backgroundImage = 'https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fgakpok%2Fp_gakpok_1.png?alt=media&token=6bb17d20-6ca7-4825-baa3-7f96be55513a'

const GAKPOK_CONTENT = {
  backgroundImage: backgroundImage,
  title: '각폭 연구소',
  subtitle: <>오버워치의 영웅 '디바'의 플레이 방법을 연구하고<br />공유하는 커뮤니티 서비스</>,
  skills: ['NestJS', 'React'],
  sliderImage: [
    backgroundImage,
    "https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fgakpok%2Fp_gakpok_2.png?alt=media&token=a5097479-be71-46c0-b425-c4b4584f318e",
    "https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fgakpok%2Fp_gakpok_3.png?alt=media&token=62d3e8e5-3386-4902-bbe7-c9db3b45f614",
    "https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fgakpok%2Fp_gakpok_4.png?alt=media&token=7c29dec7-e9bc-4468-b519-83bf17db8a29",
    "https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fgakpok%2Fp_gakpok_5.png?alt=media&token=f16eb75a-b3fe-4e5f-9286-a259dbdbe078",
    "https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fgakpok%2Fp_gakpok_6.png?alt=media&token=ac4b2334-18d9-4899-a77a-3d3cd3b9d82a",
    "https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fgakpok%2Fp_gakpok_7.png?alt=media&token=ee6d7633-35ee-4834-98e4-58e66474a668",
    "https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fgakpok%2Fp_gakpok_8.png?alt=media&token=6272c324-c512-4e5f-977f-836746481972",
  ],
  mainFeatures: [
    '자신의 플레이 방법을 공유할 수 있는 커뮤니티 서비스',
    '블라자드 엔터테이먼트의 베틀넷 계정 시스템과 연동하는 기능',
    '자신의 활약 모습을 동영상 형태로 업로드 할 수 있는 기능',
    '글 읽기, 쓰기에 제제를 가할 수 있는 관리자 기능'
  ],
  overview: [
    "참가 인원: 1인",
    "담당 작업: 기획 및 개발 전반",
    "개발 기간: 2022년 02월 ~ 2022년 04월",
  ],
  url: [
    { title: '🚀 배포 주소: ', url: 'https://gakpok.saintdev.kr' },
  ],
  feature: <>
    &nbsp;&nbsp;각폭 연구소는 오버워치 내 게임 캐릭터 '디바'의 운용 방법을 연구해보고 이를 공유하는 서비스입니다. 유튜브, 블로그, 인 게임 등에서 알게 된 정보를 이곳에 저장하고 찾아보기 쉽게 지도의 마커 형태로 표현할 수 있도록 만든 게 특징입니다.
    <br />&nbsp;&nbsp;그뿐만 아니라, 게임 개발사 '블리자드 엔터테인먼트'의 '베틀넷' 계정과 사용자 정보를 연동하여 소셜 로그인 기능을 구현하여 오버워치 플레이어라면 누구나 자신의 팁을 공유할 수 있는게 특징입니다.
  </>,
  motive: <>
    &nbsp;&nbsp;이 프로젝트를 개발한 2022년에는 '어린 시절 상상만 하고 완성하지 못한 프로젝트 만들기'라는 목표를 세웠고, 이를 실천하기 위해 개발했습니다.
    각폭 연구소는 2017년에 기획 및 개발되었습니다. 하지만 개발자가 등록한 자료만 읽을 수 있고, 업데이트할 수 없는 형태로 설계되어 있어 불편한 점이 많았습니다.
    이번에 새로 만든 각폭 연구소는 웹을 통해 접근할 수 있어 접근성이 향상되었고, 회원제를 추가하여 커뮤니티 성격을 띠도록 노력했습니다.
  </>,
  feel: <>
    &nbsp;&nbsp;각폭 연구소는 개발을 마치고, 유튜버에게 연락하여 콘텐츠 사용 허가도 받아 실제 운영까지 준비했던 프로젝트입니다.
    하지만 현재 운영되고 있지 않은 모습입니다. 그 이유는 오픈 초기에 서버 환경변수 설정이 잘못되어 데이터베이스 자료가 모두 삭제되는 사고가 있었기 때문입니다.
    그뿐만 아니라, 오버워치 2가 출시되면서 `디바`의 운용법이 많이 달라져 더 이상 콘텐츠의 실용성이 떨어졌으며, 콘텐츠 제공을 한 유튜버가 오버워치 2부터는 활동하지 않게 되어 아쉽게도 운영을 포기했습니다.
    <br />&nbsp;&nbsp;비록 운영 단계까지는 가지 못했지만, 2017년에 개발된 각폭 연구소를 2022년에 다시 만들면서, 5년간의 성장을 느낄 수 있었고, 데이터베이스가 삭제되는 사고를 경험하면서 설정 하나하나의 중요성을 알게 되었습니다.
  </>
}

export default GAKPOK_CONTENT;