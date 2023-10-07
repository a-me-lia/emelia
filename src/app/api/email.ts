"use server"

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function SendEmail(
  email: string,

) {
  try {
    const data = await resend.emails.send({
      from: "lia@emelia.pl",
      to: email,
      subject: "Emelia Paisley's site!",
      html: `Your email: ${email} will now receive site updates to Emelia.pl :w:`
    });
    resend.emails.send({
      from: "postmaster@emelia.pl",
      to: "matthewguo.x86@gmail.com",
      subject: `New subscriber to emelia.pl`,
      html: `
      New subscriber to emelia.pl: ${email}`
    });
    return data;
  } catch (error) {
    return error;
  }
}
