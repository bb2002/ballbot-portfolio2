import {TIMELINE_PROJECT_IMAGES} from "../timeline/timeline_images";

const backgroundImage ='https://firebasestorage.googleapis.com/v0/b/ballbot-portfolio2.appspot.com/o/projects%2Fcodeduri%2Fp_codeduri_1.png?alt=media&token=af1949f9-bbeb-4361-9674-53ea47cbb9b2'

const CODEDURI_CONTENT = {
  backgroundImage: backgroundImage,
  title: '코드두리',
  subtitle: <>강원대학교 코딩 교육 플랫폼</>,
  skills: ['React'],
  sliderImage: [
    backgroundImage,
    ...TIMELINE_PROJECT_IMAGES.codeduri
  ],
  overview: [
    "5인 개발",
    "프론트엔드 개발 담당",
    "2021년 4월부터 약 6개월",
  ],
  url: [
    { url: 'https://codeduri.kangwon.ac.kr', iconIdx: 0 },
  ],

  feature: <>
    &nbsp;&nbsp;강원대학교에서 사용하는 코딩 교육 플랫폼입니다. 교수가 대회를 개최하면 학생들은 대회에 참가하여 문제 풀이를 할 수 있습니다.
    답안이 되는 코드를 직접 채점해 볼 수 있는 기능, 웹 에디터, 스코어보드 등이 구현되어 있습니다.
    또한, 강원대학교 학부생만 이용할 수 있도록 k-cloud 계정과 연동하는 기능을 만들었습니다.
  </>,
  motive: <>
    &nbsp;&nbsp;SW 중심 대학 사업단의 코딩 플랫폼 개발 사업에 참여했습니다. 타 코딩 대회 플랫폼을 이용하는데 비용적인 부담이 있고, 코드의 퀄리티(네이밍 컨벤션 등)를 채점하는 기능을
    AI로 만들어 적용하고자 이 프로젝트를 시작했습니다.
  </>,
  feel: <>
    &nbsp;&nbsp;대학에 입학하고 처음으로 팀장을 맡게 된 프로젝트입니다. 신입생이 팀장을 맡게 되어 리드에 어려움이 있지 않을까 걱정했지만, 선후배 간 서로 의견을 존중해나가며 무사히 개발을 마칠 수 있었습니다.
    다만, 팀원 간의 실력 차이를 극복하지 못했다는 점은 아쉬운 점으로 꼽힙니다. 상대적으로 개발을 잘하는 사람은 그만큼 이 프로젝트에 기여를 많이 했지만, 그렇지 못한 사람은 기여가 적어 박탈감을 느끼고 중도 포기를 하는 경우가 있었습니다.
    앞으로 프로젝트의 리드를 맡게 된다면 서로의 강점을 찾아 그 분야에서 프로젝트에 충분히 기여할 수 있는 개발 환경을 만들어야 한다고 느꼈습니다.
  </>
}

export default CODEDURI_CONTENT;