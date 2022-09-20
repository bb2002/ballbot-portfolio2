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
`

export const TimelineConnect = styled.div`
  width: 2px;
  height: 120px;
  background-color: #838383;
`

export const TimelineContentRight = styled.div`
  display: flex;
  width: 600px;
  height: 96px;
  padding-left: calc(600px - 96px);
  box-sizing: content-box;
  
  .tl-title-content {
    width: 300px;
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
    width: 300px;
    font-size: 1rem;
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
    height: 56px;
    object-fit: cover;
  }
`