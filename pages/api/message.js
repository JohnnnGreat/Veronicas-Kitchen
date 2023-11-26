// Message Controller
import nodemailer from "nodemailer";

export default async function message(req, res) {
  try {
    if (req.method === "POST") {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.USER_EMAIL,
          pass: process.env.USER_PASSWORD,
        },
      });
      const mailData = {
        from: `Veronicas Kitchen New Message <${req.body.email}>`,
        to: "VERONICAS KITCHEN <theveronicaskitchen@gmail.com>",
        subject: `Message From ${req.body.name}`,

        html: ` <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Form Email</title>
          
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet">
            <style>
                body {
                    font-family: 'Poppins', sans-serif;
                    background-color: #f9f9f9;
                    margin: 0;
                    padding: 0;
                }
        
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
        
                h1 {
                    color: #333;
                    text-align: center;
                }
        
                p {
                    font-size: 18px;
                    line-height: 1.6;
                    color: #555;
                }
        
                .contact-info {
                    margin-top: 30px;
                }
        
                .contact-info strong {
                    color: #333;
                    display: block;
                    margin-bottom: 10px;
                }
        
                img {
                    max-width: 100%;
                    height: auto;
                    margin-top: 20px;
                    border-radius: 5px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }
            </style>
        </head>
        
        <body>
            <div class="container">
                <h1>Contact Form Submission</h1>
                <p>You've just received a new message from the website contact form:</p>
                <div class="contact-info">
                    <strong>Name:</strong> ${req.body.name}<br>
                    <strong>Email:</strong> ${req.body.email}<br>
                </div>
                <p><strong>Message:</strong> ${req.body.messagev}</p>
                <div><img src="https://www.veronicas-kitchen.com/_next/static/media/preloaderLogo.d3f83a66.svg" alt="Logo"></div>
            </div>
        </body>
        
        </html>`,
      };

      await transporter.sendMail(mailData);

      return res.status(200).json({ success: true });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Error sending email" });
  }
  return res.status(400).json({ message: "Bad Request" });
}
