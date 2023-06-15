import { Container, ButtonStyled } from "./style";

const Button = ({
  children,
  height = 35,
  style,
  width,
  tintColor,
  color,
  onClick,
}) => {
  return (
    <Container style={style}>
      <ButtonStyled
        style={{
          width: width,
          height: height,
          backgroundColor: tintColor,
          color: color,
        }}
        onClick={onClick}
      >
        {children}
      </ButtonStyled>
    </Container>
  );
};

export default Button;
