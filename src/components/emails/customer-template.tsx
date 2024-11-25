import { EmailRequest } from "@/@types/email";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text
} from "@react-email/components";
import * as React from "react";

export const CustomerTemplate = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  message: description
}: EmailRequest) => (
  <Html>
    <Head />
    <Preview>Inscrição realizada com sucesso</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={message}>
          <Img
            src="https://i.ibb.co/zGvrC63/black-logo.png"
            width="200"
            height="100"
            alt="Coderaw"
            style={{ margin: "auto" }}
          />
          <Heading style={global.heading}>
            Cliente cadastrado com sucesso na sua base de dados.
          </Heading>
          <Text style={global.text}>
            {firstName} {lastName} - Contato {phoneNumber} - {email}
          </Text>
          <Text style={{ ...global.text, marginTop: 24 }}>
            {description}
          </Text>
        </Section>
        <Hr style={global.hr} />
        <Text style={footerText}>
          © Coderaw Soluções Tecnológicas LTDA - 2024. Todos os direitos reservados.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default CustomerTemplate;

const paddingX = {
  paddingLeft: "40px",
  paddingRight: "40px",
};

const paddingY = {
  paddingTop: "22px",
  paddingBottom: "22px",
};

const paragraph = {
  margin: "0",
  lineHeight: "2",
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph, fontWeight: "bold" },
  heading: {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: "-1px",
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: "#747474",
    fontWeight: "500",
  },
  button: {
    border: "1px solid #000200",
    fontSize: "16px",
    textDecoration: "none",
    padding: "10px 0px",
    width: "220px",
    display: "block",
    textAlign: "center",
    fontWeight: 500,
    color: "#FFF",
  } as React.CSSProperties,
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "10px auto",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #E5E5E5",
};

const message = {
  padding: "40px 74px",
  textAlign: "center",
} as React.CSSProperties;

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footerText = {
  ...text,
  fontSize: "12px",
  padding: "0 20px",
};
