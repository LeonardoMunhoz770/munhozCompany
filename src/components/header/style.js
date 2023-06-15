import styled from "styled-components";

export const Container = styled.div`
  height: 70px;
  display: flex;
  background-color: #2666fa;
  box-shadow: 0 0 10px 3px;
  > svg {
    position: fixed;
    width: 40px;
    height: 40px;
    margin-top: 15px;
    margin-left: 15px;
    cursor: pointer;
  }
`;
