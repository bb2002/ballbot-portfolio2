import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 1140px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1160px) {
    width: 760px;
  }
`

export const ProjectLineOne = styled.div`
  min-height: 400px;
  display: flex;

  #one-spfunc {
    width: 826px;
    height: 400px;
    margin-right: 8px;
  }
  
  #one-vertical {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 306px;
    height: 400px;
    
    div:nth-child(1) {
      margin-bottom: 8px;
    }
    
    div {
      flex: 1;
      height: 196px
    }
  }
  
  @media screen and (max-width: 1160px) {
    flex-direction: column;

    #one-spfunc {
      width: 760px;
      height: 360px;
      margin-bottom: 8px;
      margin-right: 0;
    }

    #one-vertical {
      width: 760px;
      height: 196px;
      flex-direction: row;

      div:nth-child(1) {
        margin: 0 8px 0 0;
      }
    }
  }

  @media screen and (max-width: 830px) {
    #one-spfunc {
      width: 376px;
      height: 196px;
    }

    #one-vertical {
      width: 376px;
      flex-direction: column;

      div:nth-child(1) {
        margin: 0 0 4px 0;
      }
    }
  }
`

export const ProjectLineTwo = styled.div`
  margin-top: 8px;
  display: flex;
  width: 100%;
  height: 360px;
  
  div:nth-child(1) {
    margin-right: 4px;
  }

  div:nth-child(2) {
    margin-left: 4px;
  }
  
  div {
    flex: 1;
  }

  @media screen and (max-width: 1160px) {
    height: 196px;
  }

  @media screen and (max-width: 830px) {
    height: 400px;
    flex-direction: column;
    width: 376px;
    
    div {
      width: 376px;
      height: 196px;
    }

    div:nth-child(1) {
      margin: -2px 0 8px 0;
    }

    div:nth-child(2) {
      margin: 0;
    }
  }
`

export const ProjectLineThree = styled.div`
  margin-top: 8px;
  display: flex;
  width: 100%;
  height: 180px;
  align-items: center;

  @media screen and (max-width: 830px) {
    width: 376px;
  }
  
  #three-container {
    display: flex;
    margin-right: 8px;
    div {
      height: 180px;
    }
    div:nth-child(1) {
      margin-right: 8px;
    }

    @media screen and (max-width: 830px) {
      margin-right: 0;
    }
  }
  
  #three-empty {
    @media screen and (max-width: 830px) {
      display: none;
    }
  }
  
  div {
    flex: 1;
  }
`