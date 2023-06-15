import {
  SectionRegister,
  Container,
  ContentImage,
  Align,
  TitlePage,
  ContainerImage,
  ImageLogin,
  ContentRegister,
  ContainerRegister,
  RegisterInformation,
  TextAlign,
  Welcome,
  HelpRegister,
  FormRegister,
  ContainerAddress,
  LabelAdress,
  ContainerPassword,
  ContainerSendRegister,
  RegisterContainer,
} from "./style";

import { NavLink } from "react-router-dom";
import Button from "../../components/button";
import SignUpIcon from "../../assets/signUpIcon.webp";
import InputCredentials from "../../components/input";
import InputPassword from "../../components/inputPassword";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const Register = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 5,
    p: 5,
    borderRadius: 1,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (login === "" || name === "" || password === "") {
      handleOpen();
      setMessage("Preencha todos os campos");
    } else {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, login, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("USER CRIADO. \n", user);
          user.displayName = name;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          handleOpen();
          setMessage(errorMessage);
        })
        .finally(() => {
          setLogin("");
          setName("");
          setPassword("");
        });
    }
  };

  return (
    <Container>
      <SectionRegister>
        <ContentImage>
          <Align>
            <TitlePage>Registro</TitlePage>
            <ContainerImage>
              <ImageLogin src={SignUpIcon} />
            </ContainerImage>
          </Align>
        </ContentImage>
        <ContentRegister>
          <ContainerRegister>
            <RegisterInformation>Já possui registro? </RegisterInformation>
            <Button style={{ marginRight: 20 }} width={100}>
              <NavLink
                to={"/"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </NavLink>
            </Button>
          </ContainerRegister>
          <RegisterContainer>
            <TextAlign>
              <Welcome>Olá, Bem vindo!</Welcome>
              <HelpRegister>
                Preencha os campos para realizar seu resgistro.
              </HelpRegister>
            </TextAlign>
            <FormRegister onSubmit={handleSubmit}>
              <ContainerAddress>
                <LabelAdress>Nome Completo</LabelAdress>
                <InputCredentials
                  placeholder="Nome"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </ContainerAddress>
              <ContainerAddress>
                <LabelAdress>Email</LabelAdress>
                <InputCredentials
                  placeholder="exemplo@gmail.com"
                  value={login}
                  onChange={(event) => setLogin(event.target.value)}
                />
              </ContainerAddress>
              <ContainerPassword>
                <LabelAdress>Senha</LabelAdress>
                <InputPassword
                  placeholder="Senha"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </ContainerPassword>
              <ContainerSendRegister>
                <Button height={40}>Cadastrar</Button>
              </ContainerSendRegister>
            </FormRegister>
          </RegisterContainer>
        </ContentRegister>
      </SectionRegister>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {message}
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
};

export default Register;
