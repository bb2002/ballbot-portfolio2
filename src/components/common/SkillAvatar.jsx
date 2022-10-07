import { Avatar, Tooltip } from "antd";

const avatarDefaultStyle = {
  backgroundColor: '#ecf0f1',
  padding: 4,
  marginLeft: 2,
  marginRight: 2,
}

const SkillAvatar = {
  'NestJS': 
    <>
      <Tooltip placement="top" title="NestJS">
        <Avatar src={require('../../assets/icons/i_nestjs.png')} style={{ ...avatarDefaultStyle, border: '2px solid #E0234E'}} />
      </Tooltip>
    </>,
  'React':
    <>
      <Tooltip placement="top" title="React">
        <Avatar src={require('../../assets/icons/i_react.png')} style={{ ...avatarDefaultStyle, border: '2px solid #61DAFB'}} />
      </Tooltip>
    </>,
  'Spring':
    <>
      <Tooltip placement="top" title="Spring Boot">
        <Avatar src={require('../../assets/icons/i_springboot.png')} style={{ ...avatarDefaultStyle, border: '2px solid #6DB33F'}} />
      </Tooltip>
    </>,
  'NodeJS':
    <>
      <Tooltip placement="top" title="NodeJS">
        <Avatar src={require('../../assets/icons/i_nodejs.png')} style={{ ...avatarDefaultStyle, border: '2px solid #313131'}} />
      </Tooltip>
    </>,
  'Docker':
    <>
      <Tooltip placement="top" title="Docker">
        <Avatar src={require('../../assets/icons/i_docker.png')} style={{ ...avatarDefaultStyle, border: '2px solid #0DB1E6'}} />
      </Tooltip>
    </>,
  'NextJS':
    <>
      <Tooltip placement="top" title="NextJS">
        <Avatar src={require('../../assets/icons/i_nextjs.png')} style={{ ...avatarDefaultStyle, border: '2px solid #333333'}} />
      </Tooltip>
    </>,
  'GithubAction':
    <>
      <Tooltip placement="top" title="GithubAction">
        <Avatar src={require('../../assets/icons/i_github_dark.png')} style={{ ...avatarDefaultStyle, border: '2px solid #333333'}} />
      </Tooltip>
    </>,
  'Firebase':
    <>
      <Tooltip placement="top" title="Firebase">
        <Avatar src={require('../../assets/icons/i_firebase.png')} style={{ ...avatarDefaultStyle, border: '2px solid rgb(240,111,16)'}} />
      </Tooltip>
    </>
}

export default SkillAvatar;