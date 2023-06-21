import styled from "styled-components";

export const Container = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Content = styled.div`
  height: 500px;
  width: 50%;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const ContainerPhotoProfile = styled.figure`
  background-color: #2666fa;
  height: 250px;
  width: 250px;
  margin-top: 10px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerButton = styled.div`
  width: 70%;
`;

export const NameUser = styled.label`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
  font-family: "Poppins", sans-serif;
`;

export const PhotoProfile = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50px;
  margin-top: 5px;
`;
