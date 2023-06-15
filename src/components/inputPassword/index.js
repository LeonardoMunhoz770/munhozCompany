import { Container, Credentials } from "./style";

const InputPassword = ({ placeholder, heigth = 35, value, onChange }) => {
  return (
    <Container>
      <Credentials
        placeholder={placeholder}
        style={{ height: heigth }}
        value={value}
        onChange={onChange}
      ></Credentials>
    </Container>
  );
};

export default InputPassword;
