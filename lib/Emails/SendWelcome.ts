import { render } from "@react-email/render";
import WelcomeEmailTemplate from "./WelcomeEmailTemplate";

export const SendWelcome = (userFirstname: string) => {
  console.log(userFirstname)
  return render(
    WelcomeEmailTemplate({
      userFirstname
    })
  );
};
