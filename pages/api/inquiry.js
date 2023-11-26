import nodemailer from "nodemailer";

export default async function inquiry(req, res) {
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
        from: req.body.email,
        to: "VERONICAS KITCHEN <johnossai20@gmail.com>",
        subject: `New Message From ${req.body.name}`,

        html: `  <style>@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap'); font-family:Poppins, serif</style><div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <div style="max-width: 600px; margin: 0 auto; text-align: center; color: #333;">
      
          <h1 style="color: #e07a5f; font-size: 24px; margin-bottom: 20px;">New Inquiry Request</h1>
          
          <div style="text-align: left; margin-bottom: 10px;">
            <p style="color: #555; font-size: 16px; margin-bottom: 5px;">Details:</p>
      
            <h1 style="color:#a67c5b; font-size: 18px; margin-bottom: 5px;">Name: ${req.body.name}</h1>
            <h1 style="color: #a67c5b; font-size: 18px; margin-bottom: 5px;">Email: ${req.body.email}</h1>
            <h1 style="color: #a67c5b; font-size: 18px; margin-bottom: 5px;">Phone: ${req.body.phone}</h1>
            <h1 style="color: #a67c5b; font-size: 18px; margin-bottom: 5px;">Date: ${req.body.parseDate}</h1>
            <h1 style="color: #a67c5b; font-size: 18px; margin-bottom: 5px;">Number of People: ${req.body.numberPeople}</h1>
            <h1 style="color: #a67c5b; font-size: 18px; margin-bottom: 5px;">Delivery: ${req.body.options}</h1>
            <h1 style="color: #a67c5b; font-size: 18px; margin-bottom: 5px;">Food Item: ${req.body.checkedItems}</h1>
            <h1 style="color: #a67c5b; font-size: 18px; margin-bottom: 5px;">Food Item: ${req.body.message}</h1>
          </div>
      
          <a href="mailto:${req.body.email}" style="display: inline-block; padding: 10px 20px; background-color: #a67c5b; color: #fff; text-decoration: none; border-radius: 5px;">Reply Mail</a>
        </div>
      </div>
      `,
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
