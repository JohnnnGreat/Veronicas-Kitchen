import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "your-email-service-provider", // e.g., 'Gmail', 'Outlook'
      auth: {
        user: "your-email@example.com",
        pass: "your-email-password",
      },
    });

    const mailOptions = {
      from: "your-email@example.com",
      to: "recipient@example.com", // Replace with your email
      subject: "New Message from Website",
      text: `Name: ${name}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Error sending email" });
  }
}
