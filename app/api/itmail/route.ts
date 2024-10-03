import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log("Data is Fetched: ", data);

  try {
    console.log("trying to send message");
    await sendMail("it-projects@artemamedical.com", data);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "An error occurred" });
  }
  async function sendMail(
    to: string,
    data: {
      fname: string;
      lname: string;
      email: string;
      city: string;
      country: string;
      phone: string;
      message: string;
    }
  ) {
    try {
      console.log("sendMail");
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "zainrafiq321@gmail.com",
          pass: "cpvh ejzo rpah kukv",
        },
      });
      const subject = "IT Contact Form Message";
      const text = `Name: ${data.fname}\nEmail: ${data.email}\nMessage: ${data.message}`;
      const html = `
    <p> <strong>${data.fname} ${data.lname} has messaged you from IT Services Page</strong> </p>
    <p> The Details are following.... </p>
      <p><strong>First Name:</strong> ${data.fname}</p>
      <p><strong>Last Name:</strong> ${data.lname}</p>
      <p><strong>Email Address:</strong> ${data.email}</p>
      <p><strong>City Name:</strong> ${data.city}</p>
      <p><strong>Country Name:</strong> ${data.country}</p>
      <p><strong>Phone Number:</strong> ${data.phone}</p>
      <p><strong>His Message:</strong> ${data.message}</p>
    `;
      const mailOptions = {
        from: {
          name: "IT Services Of Artema Group",
          address: "sales@artemamedical.com",
        },
        to,
        subject,
        text,
        html,
      };
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending registration email:", error);
      throw error;
    }
  }
}
