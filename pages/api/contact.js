import nodemailer from "nodemailer";

export default async function contact(req, res) {
  try {
    if (req.method === "POST") {
      const transporter = nodemailer.createTransport({
        service: "gmail",

        auth: {
          user: "johnossai20@gmail.com",
          pass: "kblgyogjwalbiwja",
        },
      });
      const mailData = {
        from: req.body.email,
        to: "JOHN OSSAI <johnossai20@gmail.com>",
        subject: `Message From ${req.body.name}`,

        html: `   <div style="font-family: Poppins, serif">
      <h1 style="font-weight:300; text-align:center;">Veronicas Kitchen</h1>
      <div style="background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
          <h1 style="color: #333; margin-bottom: 20px; font-weight:400;">New Reservation from ${req.body.name}</h1>
          <p style="color: #666;">Details:</p>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <th style="border: 1px solid #ddd; color:#fff; background-color: #5c5c5c;  text-align: center; padding: 8px;">Name</th>
              <th style="border: 1px solid #ddd; color:#fff; background-color: #5c5c5c;  text-align: center; padding: 8px;">Email</th>
              <th style="border: 1px solid #ddd; color:#fff; background-color: #5c5c5c;  text-align: center; padding: 8px;">Number of People</th>
              <th style="border: 1px solid #ddd; color:#fff; background-color: #5c5c5c;  text-align: center; padding: 8px;">Date</th>
              <th style="border: 1px solid #ddd; color:#fff; background-color: #5c5c5c;  text-align: center; padding: 8px;">Time</th>
            </thead>
            <tbody>
              <tr>
                <td style="border: 1px solid #ddd;  text-align: center; padding: 8px;">${req.body.name}</td>
                <td style="border: 1px solid #ddd;  text-align: center; padding: 8px;">${req.body.email}</td>
                <td style="border: 1px solid #ddd;  text-align: center; padding: 8px;">${req.body.numberPeople} People</td>
                <td style="border: 1px solid #ddd;  text-align: center; padding: 8px;">${req.body.date}</td>
                <td style="border: 1px solid #ddd;  text-align: center; padding: 8px;">${req.body.time}</td>
              </tr>
            </tbody>
          </table>
          <a style="color: $primary-color; text-decoration: none; margin-top: 1rem; border-bottom: 1px solid grey; display: inline-block;" href="mailto:${req.body.email}">Send Mail</a>
        </div>
       
      </div>
    </div>`,
      };

      await transporter.sendMail(mailData);

      res.status(200).json({ success: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Error sending email" });
  }
  return res.status(400).json({ message: "Bad Request" });
}
