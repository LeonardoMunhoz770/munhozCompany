import styled from "styled-components";

export const Container = styled.div`
  background-color: #2666fa;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.4s;

  > svg {
    position: fixed;
    color: white;
    width: 40px;
    height: 40px;
    margin-top: 15px;
    margin-left: 15px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;

export const ContentAccount = styled.div`
  margin: 10px 10px;
  height: 30px;
  display: flex;
  align-items: center;
  color: white;
`;

export const ContentLogout = styled.figure`
  margin: 10px 10px;
  bottom: 0px;
  position: fixed;
`;
