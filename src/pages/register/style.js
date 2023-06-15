import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  @media (max-width: 700px) {
    position: fixed;
  }
`;

export const SectionRegister = styled.section`
  width: 75%;
  height: 800px;
  box-shadow: 2px 2px 30px gray;
  display: flex;
  flex-direction: row;
  @media (max-width: 1300px) {
    width: 100%;
    margin: 20px 20px;
  }
  @media (max-width: 425px) {
    height: 600px;
  }
`;

export const ContentImage = styled.div`
  width: 50%;
  background-color: #2666fa;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    display: none;
  }
  @media (max-width: 880px) {
    width: 40%;
  }
`;

export const Align = styled.div``;

export const TitlePage = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
  color: white;
  font-size: 20px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  @media (max-width: 950px) {
    text-align: center;
    max-width: 100%;
  }
`;

export const ContainerImage = styled.figure`
  width: 100%;
  height: 500px;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  @media (max-width: 950px) {
    justify-content: center;
  }
`;

export const ImageLogin = styled.img`
  width: 350px;
  height: 300px;
  @media (max-width: 950px) {
    width: 250px;
    height: 200px;
  }
`;

export const ContentRegister = styled.div`
  width: 50%;
  @media (max-width: 880px) {
    width: 60%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const ContainerRegister = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
  @media (max-width: 341px) {
    flex-direction: column;
    padding-bottom: 20px;
  }
`;

export const RegisterInformation = styled.label`
  color: #5c5680;
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
  font-family: "Poppins", sans-serif;
  font-size: 13px;
`;

export const ContainerWelcome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const TextAlign = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 60%;
  padding-bottom: 20px;
  @media (max-width: 700px) {
    text-align: start;
    width: 90%;
  }
`;

export const Welcome = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
  font-family: "Poppins", sans-serif;
  color: black;
  font-size: 25px;
`;

export const HelpRegister = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
  font-family: "Poppins", sans-serif;
  color: #5c5680;
  width: 100%;
`;

export const FormRegister = styled.form`
  height: 260px;
  width: 60%;
  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const ContainerAddress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  padding-bottom: 25px;
`;

export const ContainerPassword = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  padding-bottom: 25px;
`;

export const LabelAdress = styled.label`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
  font-family: "Poppins", sans-serif;
  font-size: 15px;
`;

export const ContainerSendRegister = styled.div`
  width: 100%;
`;

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
