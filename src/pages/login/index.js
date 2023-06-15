import React, { useState } from "react";

import {
  Container,
  SectionLogin,
  ContentImage,
  ContentLogin,
  TitlePage,
  ContainerImage,
  ImageLogin,
  Subtitle,
  Align,
  ContainerRegister,
  RegisterInformation,
  ContainerWelcome,
  Welcome,
  HelpLogin,
  TextAlign,
  FormCredentials,
  ContainerAddress,
  ContainerPassword,
  LabelAdress,
  ContainerSendLogin,
  Line,
  OrLine,
  LineOr,
  ContainerLoginWithGoogle,
} from "./style";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import iconLogin from "../../assets/loginIcon.webp";
import Button from "../../components/button";
import InputCredentials from "../../components/input";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { NavLink } from "react-router-dom";
import InputPassword from "../../components/inputPassword";

const Login = () => {
  const [password, setPassord] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [message, setMessage] = useState("");
  const [login, setLogin] = useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 5,
    p: 5,
    borderRadius: 1,
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (login === "" || password === "") {
      handleOpen();
      setMessage("Preencha todos os campos!");
    } else {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, login, password)
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("displayName", user.email);
          window.location.assign("/homePage");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            handleOpen();
            setMessage("Senha incorreta!");
          } else if (errorCode === "auth/invalid-email") {
            handleOpen();
            setMessage("Email inválido!");
          } else if (errorCode === "auth/user-not-found") {
            handleOpen();
            setMessage("Usuário não encontrado");
          } else {
            handleOpen();
            setMessage(errorMessage);
          }
        })
        .finally(() => {
          setLogin("");
          setPassord("");
        });
    }
  };

  const handleSubmitGoogle = (event) => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    event.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        //const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        localStorage.setItem("displayName", user.email);
        window.location.assign("/homePage");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(
          `error code: ${errorCode} \n error message: ${errorMessage}`
        );
      });
  };

  return (
    <Container>
      <SectionLogin>
        <ContentImage>
          <Align>
            <TitlePage>Home</TitlePage>
            <ContainerImage>
              <ImageLogin src={iconLogin} />
            </ContainerImage>
            <Subtitle>Bem vindo ao nosso site</Subtitle>
          </Align>
        </ContentImage>
        <ContentLogin>
          <ContainerRegister>
            <RegisterInformation>Não possui registro? </RegisterInformation>
            <Button style={{ marginRight: 20 }} width={100}>
              <NavLink
                to={"/register"}
                style={{ textDecoration: "none", color: "white" }}
              >
                Registro
              </NavLink>
            </Button>
          </ContainerRegister>
          <ContainerWelcome>
            <TextAlign>
              <Welcome>Olá ! Bem vindo de volta</Welcome>
              <HelpLogin>
                Faça o login com seus dados que você inseriu durante o seu
                registro.
              </HelpLogin>
            </TextAlign>
            <FormCredentials onSubmit={handleSubmit}>
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
                  onChange={(event) => setPassord(event.target.value)}
                />
              </ContainerPassword>
              <ContainerSendLogin>
                <Button height={40}>Acessar</Button>
              </ContainerSendLogin>
              <LineOr>
                <Line />
                <OrLine>Ou</OrLine>
                <Line />
              </LineOr>
            </FormCredentials>
            <ContainerLoginWithGoogle>
              <Button
                height={40}
                tintColor={"white"}
                color={"#5c5680"}
                onClick={handleSubmitGoogle}
              >
                Continuar com Google
              </Button>
            </ContainerLoginWithGoogle>
          </ContainerWelcome>
        </ContentLogin>
      </SectionLogin>
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

export default Login;
