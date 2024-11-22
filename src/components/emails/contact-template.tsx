import {
  Body,
  Button,
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

import { EmailRequest } from "@/@types/email";

export const ContactTemplateEmail = ({ 
  firstName,
  lastName,
}: EmailRequest) => (
  <Html>
    <Head />
    <Preview>Equipe comercial da Coderaw.io</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={coverSection}>
          <Section style={imageSection}>
            <Img
              src="https://i.ibb.co/dMnK5xp/white-logo.png"
              width="200"
              height="100"
              alt="Coderaw"
            />
          </Section>
          <Section style={upperSection}>
            <Heading style={h1}>
              Olá {firstName} {lastName}, <br />
              agradecemos o interesse em nossos <br />
              serviços de tecnologia.
            </Heading>
            <Text style={mainText}>
              Em breve, nossa equipe comercial entrará em contato para obter mais informações sobre o seu contato.
              Enquanto isso, aproveite para conhecer nosso portfólio de projetos clicando no botão abaixo.
            </Text>
            <Button style={button} href="https://www.google.com">
              Visualizar nossos projetos
            </Button>
          </Section>
          <Hr />
          <Section style={lowerSection}>
            <Text style={cautionText}>
              A <strong>Coderaw.io</strong> é uma butique de software especializada {" "}
              em soluções web para empresas de pequeno, médio e grande porte.
            </Text>
          </Section>
        </Section>
        <Text style={footerText}>
          © Coderaw Soluções Tecnológicas LTDA - 2024. Todos os direitos reservados.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactTemplateEmail;

const main = {
  backgroundColor: "#fff",
  color: "#212121",
};

const container = {
  padding: "20px",
  margin: "0 auto",
  backgroundColor: "#eee",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "15px",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const imageSection = {
  backgroundColor: "#000200",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 40px",
};

const coverSection = { backgroundColor: "#fff" };

const upperSection = { padding: "25px 35px" };

const lowerSection = { padding: "25px 35px" };

const footerText = {
  ...text,
  fontSize: "12px",
  padding: "0 20px",
};

const mainText = { ...text, marginBottom: "14px" };

const cautionText = { ...text, margin: "0px" };

const button = {
  backgroundColor: "#000200",
  borderRadius: "0.3rem",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
  marginTop: "20px",
  marginBottom: "20px"
};