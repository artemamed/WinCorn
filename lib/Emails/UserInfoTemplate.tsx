import {
    Body,
    Container,
    Head,
    Html,
    Text,
  } from "@react-email/components";
  import * as React from "react";

  interface UserInfoTemplateProps {
    userFirstname: string;
    userEmail:string;
    recipientType:string;
  }
  export const UserInfoTemplate = ({
    userFirstname,
    userEmail,
    recipientType

  }: UserInfoTemplateProps) => (
    <>
      <Html>
        <Head />
       
        <Body style={main}>
          <Container style={container}>
            <div className="mt-6 text-xl " style={emailStyle}>
            <div className="flex justify-center items-center">
            {/* <img height={100} width={200} src=".../public/images/Logo.png" alt="" /> */}
          </div>
        <h2 className="text-2xl text-center font-semibold">New User Registration</h2>
        <div className="text-xl">
        <p>Hello {recipientType}, </p>
        <p >A new user has registered on Wincorn med website.</p>
        <p className="font-semibold mt-3" >User Details:</p>
        <p className=""><b>Registrant Name: </b> {userFirstname} </p>
        <p > <b>Registrant Email: </b> {userEmail}</p>
        </div></div>
      <div className="-mt-4" >
            <Text  style={footer}>
            371, J Block, EME Society DHA Lahore, Pakistan, 54000
            </Text>
            </div>
          </Container>
        </Body>
      </Html>
    </>
  );
  
  export default UserInfoTemplate;
  const emailStyle = {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      maxWidth: '600px',
      margin: '4 ',
    };
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };
  