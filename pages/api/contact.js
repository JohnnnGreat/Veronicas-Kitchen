import nodemailer from "nodemailer";

export default async function (req, res) {
  console.log(req.body);
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
      to: "johnossai20@gmail.com",
      subject: `Message From ${req.body.name}`,

      html: `   <div style="font-family: Arial, sans-serif;">
      <div style="background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
          <h1 style="color: #333; margin-bottom: 20px;">New Reservation from ${req.body.name}</h1>
          <p style="color: #666;">Details:</p>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <th style="border: 1px solid #ddd; background-color: #5c5c5c;  text-align: center; padding: 8px;">Name</th>
              <th style="border: 1px solid #ddd; background-color: #5c5c5c;  text-align: center; padding: 8px;">Email</th>
              <th style="border: 1px solid #ddd; background-color: #5c5c5c;  text-align: center; padding: 8px;">Number of People</th>
              <th style="border: 1px solid #ddd; background-color: #5c5c5c;  text-align: center; padding: 8px;">Date of Reservation</th>
            </thead>
            <tbody>
              <tr>
                <td style="border: 1px solid #ddd;  text-align: center; padding: 8px;">${req.body.name}</td>
                <td style="border: 1px solid #ddd;  text-align: center; padding: 8px;">${req.body.email}</td>
                <td style="border: 1px solid #ddd;  text-align: center; padding: 8px;">${req.body.numberPeople}</td>
                <td style="border: 1px solid #ddd;  text-align: center; padding: 8px;">3.50</td>
              </tr>
            </tbody>
          </table>
          <a style="color: $primary-color; text-decoration: none; margin-top: 1rem; border-bottom: 1px solid grey; display: inline-block;" href="mailto:${req.body.email}">Send Mail</a>
        </div>
       
      </div>
    </div>`,
    };
    try {
      const response = await transporter.sendMail(mailData);
    } catch (error) {
      return error;
    }
  }

  return res.status(400).json({ message: "Bad Request" });
}
