import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
interface WelcomeEmailTemplateProps {
  userFirstname: string;
}

export const WelcomeEmailTemplate = ({
  userFirstname,
}: WelcomeEmailTemplateProps) => (
  <div className="">
    <Html>
      <Head />

      <Body style={main}>
        <Container style={container}>
          <div className="flex justify-center items-center">
          {/* <img height={100} width={200} src="/images/Logo.png" alt="" /> */}
          </div>
          <Text style={paragraph}>Hi {userFirstname},</Text>
          <p style={paragraph}>
            Welcome aboard Wincorn Medical! We&apos;re thrilled to include you in our
            innovative quest to transform the landscape of surgical and medical
            advancements. We appreciate your eagerness to join us, and prepare
            yourself for an era where exceptional healthcare is readily
            accessible to you.
          </p>
          <Section style={btnContainer}>
            <Button
              className="bg-blue-600 border-4 border-blue-600 rounded-md text-white p-4"
              href="https://artemamed.com/"
            >
              Get started
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            The Wincorn Medical Team
          </Text>
          <Hr style={hr} />
          <div className="-mt-4"></div>
          <Text className="" style={footer}>
            7901 4th St. N STE 10963,Saint Petersburg, Florida, 33702
          </Text>
        </Container>
      </Body>
    </Html>
  </div>
);

export default WelcomeEmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
  padding: "20px",
};

const hr = {
  borderColor: "#cccccc",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
