export const BACKEND_SKILL_CONTENT = {
  "NodeJS": {
    date: "2019년 11월",
    content: <>
      &nbsp;&nbsp;게임이나 앱을 만들면 로그인과 같은 기능을 구현해야 했고, 정보를 저장할 공간이 필요했습니다. 따라서 서버 프로그램은 프로젝트에서 반드시 필요했습니다. 예전에는 PHP를 이용해 구현했지만, 너무 오래된 기술이라는 느낌을 받았고, 무엇보다 새로운 기술을 배우고 싶었습니다.
      <br />&nbsp;&nbsp;마침 학교에서 공부한 자바스크립트로 서버도 만들 수 있다고 들어 NodeJS 와 Express 기반의 HTTP 서버를 구현했고, 제가 NodeJS를 접하게 된 계기가 되었습니다.
    </>
  },
  "NestJS": {
    date: "2022년 01월",
    content: <>
      &nbsp;&nbsp;NodeJS와 Express 라이브러리는 작은 규모의 서버 프로그램을 작성하기 훌륭했습니다. 하지만, 프로젝트의 규모가 조금이라도 커지면 코드의 규칙성을 잃기 쉬웠고, 여러 명이 같이 개발하면 중복코드가 많아지는 등 '자유'에서 비롯한 문제가 발생했습니다.
      <br />&nbsp;&nbsp;엄청난 자유도가 양날의 검이 되어 돌아왔다고 느꼈을 때, 코드를 강제할 방법을 찾기 시작했고 NestJS 를 배우게 되었습니다.</>
  },
  "Spring": {
    date: "2022년 10월",
    content: <>
      &nbsp;&nbsp;채용 공고를 둘러보면 자바 공화국답게 스프링을 사용하는 회사는 많지, NodeJS를 주로 사용하는 회사는 상대적으로 적었습니다. 따라서 많은 조직을 경험해 보기 위해서는 최소한 스프링을 다룰 줄 알아야 한다고 느꼈습니다.
      <br />&nbsp;&nbsp;마침 중학교 1학년 때 자바를 공부해본 경험이 있어 언어에 의한 진입장벽도 낮았고, NestJS와 패러다임을 공유하고 있어 두 프레임워크를 비교해보며 공부해보기로 결심했습니다.
    </>
  },
  "MySQL": {
    date: "2015년 10월",
    content: <>
      &nbsp;&nbsp;15살 때 커뮤니티 서비스를 만들면서, 사용자나 글 정보를 저장할 공간이 필요했습니다. PHP 강좌와 함께 소개된 MySQL은 자료 저장에 적합해 보였고, 수년이 지난 지금까지 다양한 서비스를 만들 때 항상 사용되고 있습니다.
      최근에는 회사에서 수십~수백만 명이 이용하는 서비스를 만들면서, 코드 작성만큼이나 자료를 잘 읽고 쓰는 게 중요하다는 걸 느꼈고, 결국 잘 설계된 DB는 서비스의 성능을 좌지우지 한다는 걸 알 수 있었습니다.
    </>
  },
  "Redis": {
    date: "2022년 04월",
    content: <>
      &nbsp;&nbsp;자료의 양이 많아질수록 속도가 느려지고 이를 처리하는 비용이 필연적으로 많이 듭니다. 따라서 한 번만 처리하고 결과를 재활용하는 '캐싱'을 잘 활용하면 적은 비용으로 큰 성능 개선을 유도할 수 있습니다.
      <br />&nbsp;&nbsp;주로 사용자에게 실시간으로 정보를 보여줄 필요가 없거나, 영속적으로 저장하지 않아도 되는 자료를 저장할 때 주로 사용하고 있습니다.
    </>
  },
}