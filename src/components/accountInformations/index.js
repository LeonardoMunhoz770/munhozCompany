import { useState } from "react";
import {
  Container,
  Content,
  ContainerPhotoProfile,
  PhotoProfile,
  ContainerButton,
  NameUser,
} from "./style";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import Button from "../button";

import photoProfileUndefined from "../../assets/user.webp";
import { NavLink } from "react-router-dom";

const AccountInformations = () => {
  const auth = getAuth();
  const [data, setData] = useState([]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setData(user);
    } else {
    }
  });

  return (
    <Container>
      <Content>
        <ContainerPhotoProfile>
          <PhotoProfile
            src={data.photoURL === null ? photoProfileUndefined : data.photoURL}
          />
          <NameUser>
            {data.displayName === null ? "Não Definido" : data.displayName}
          </NameUser>
          <ContainerButton>
            <Button tintColor={"#ffff"}>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to={"/configuration"}
              >
                Editar Perfil
              </NavLink>
            </Button>
          </ContainerButton>
        </ContainerPhotoProfile>
      </Content>
    </Container>
  );
};

export default AccountInformations;
