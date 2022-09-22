import styled from "styled-components";

export const TimelinePage = styled.div`
  min-height: calc(100vh - 116px);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1024px) {
    align-items: flex-start;
    width: 400px;
  }
`

export const TimelineTitle = styled.h1`
  color: white;
  font-family: "Helvetica", sans-serif;
  font-weight: 300;
  font-size: 3rem;
  margin-bottom: 64px;
`

export const TimelineEdge = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid #838383;
  border-radius: 50%;

  @media screen and (max-width: 1024px) {
    margin-left: calc(48px - 16px);
  }
`

export const TimelineConnect = styled.div`
  width: 2px;
  height: 120px;
  background-color: #838383;

  @media screen and (max-width: 1024px) {
    margin-left: 48px;
  }
`

export const TimelineContentRight = styled.div`
  display: flex;
  width: 600px;
  height: 96px;
  padding-left: calc(600px - 96px);
  box-sizing: content-box;
  
  .tl-title-content {
    width: 380px;
    margin-left: 16px;
  }

  .tl-title-content > h2 {
    color: white;
    margin: 0;
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 2.125rem;
    font-weight: bold;
  }

  .tl-title-content > p {
    color: #B8B8B8;
    font-weight: 300;
    width: 380px;
    font-size: 1.125rem;
    white-space: pre-wrap;
  }

  @media screen and (max-width: 1024px) {
    padding-left: 0;
    width: auto;
    height: 64px;

    .tl-title-content {
      width: 250px;
    }

    .tl-title-content > h2 {
      font-size: 1.5rem;
    }

    .tl-title-content > p {
      font-size: 1rem;
      width: 250px;
    }
  }
`

export const TimelineContentLeft = styled(TimelineContentRight)`
  flex-direction: row-reverse;
  padding-right: calc(600px - 96px);
  padding-left: 0;

  .tl-title-content {
    margin-left: 0;
    margin-right: 16px;
  }

  .tl-title-content > h2 {
    text-align: right;
  }

  .tl-title-content > p {
    text-align: right;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    padding-left: 0;
    padding-right: 0;

    .tl-title-content {
      margin-left: 16px;
      margin-right: 0;
    }

    .tl-title-content > h2 {
      text-align: left
    }

    .tl-title-content > p {
      text-align: left;
    }
  }
`

export const TimelineContentIcon = styled.div`
  width: 96px;
  height: 96px;
  border: 2px solid red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 56px;
    object-fit: cover;
  }

  @media screen and (max-width: 1024px) {
    width: 64px;
    height: 64px;
    margin-left: 16px;

    img {
      width: 48px;
      object-fit: cover;
    }
  }
`

export const ProjectUnderline = styled.span`
  text-decoration: underline;
  cursor: pointer;
`