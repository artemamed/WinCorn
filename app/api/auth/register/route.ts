import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { SendWelcome } from "@/lib/Emails/SendWelcome";
import { sendFreshUserInfo } from "@/lib/Emails/sendFreshUserInfo";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const data = await request.json();

  try {
    const authenticationResponse = await axios.post(
      `${process.env.ApiEdgePoint}/api/add-client-user`,
      {
        user_id: 280,
        user_from: "web",
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        address: data.address,
        phone: data.phone,
      }
    );

    console.log("function not called");
    console.log(authenticationResponse);

    if (authenticationResponse.data) {
      console.log("success");
      await sendRegistrationEmail(data.email, "user", data);
      await sendRegistrationEmail("sales@artemamed.com", "admin", data);
      await sendRegistrationEmail("sales@artemamed.com", "artema", data);

      console.log("function called");
    }

    return NextResponse.json({ data: authenticationResponse.data, success: true }, { status: authenticationResponse.status });
  } catch (error: unknown) {
    if (error instanceof Error && typeof error === 'object' && 'response' in error && error.response && typeof error.response === 'object' && 'data' in error.response) {
      const errorResponse = error.response as { data: { message?: string }, status?: number };
      const errorMessage = errorResponse.data.message || "Error";

      // Check for the specific error message related to the duplicate email entry
      if (errorMessage.includes("Duplicate entry")) {
        return NextResponse.json(
          {
            success: false,
            message: "User Email Already Exists & Active.",
          },
          { status: 409 } // Conflict status code
        );
      }

      return NextResponse.json(
        {
          success: false,
          message: errorMessage,
        },
        { status: errorResponse.status || 402 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "An error occurred",
        },
        { status: 500 }
      );
    }
  }
}
async function sendRegistrationEmail(to: string, recipientType: "user" | "admin" | "artema", data: { first_name: string; email: string }) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sales@artemamed.com",
        pass: "jjxk ygzq brkg nbxu",
      },
    });

    let subject, text, html;
    if (recipientType === "artema") {
      subject = "New User Registration";
      text = "This is the Copy Of Email sent to Admin about Registration of a New User ";
      html = await sendFreshUserInfo(data.first_name, data.email, recipientType);
    } else if (recipientType === "user") {
      subject = "Registration Successful";
      html = await SendWelcome(data.first_name);
    } else if (recipientType === "admin") {
      subject = "New User Registration";
      html = await sendFreshUserInfo(data.first_name, data.email, recipientType);
    }

    const mailOptions = {
      from: {
        name: "Artema Medical",
        address: "sales@artemamed.com",
      },
      to,
      subject,
      text,
      html,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(`Error sending ${recipientType} registration email:`, error);
  }
}