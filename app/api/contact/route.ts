import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, phone, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    console.log("[Contact API] Sending email to:", process.env.CONTACT_EMAIL);

    const { data, error } = await resend.emails.send({
      from: "Menuiserie Leconte <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "yourmail@domainname.com"],
      replyTo: email,
      subject: `[Contact Site] ${subject}`,
      html: `
        <h2>Nouveau message depuis le site</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Telephone :</strong> ${phone || "Non renseigne"}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <hr />
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("[Resend Error]", JSON.stringify(error));
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("[Contact API] Email sent successfully, id:", data?.id);
    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("[Contact API Error]", err);
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez reessayer." },
      { status: 500 }
    );
  }
}