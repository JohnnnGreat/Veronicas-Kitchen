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
            to: "VERONICAS KITCHEN <theveronicaskitchen@gmail.com>",
            subject: `New Message From ${req.body.name}`,

            html: ` 
       <!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Inquiry Request</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: 'Poppins', Arial, sans-serif; background-color: #f8f8f8; -webkit-font-smoothing: antialiased;">
  <div style="max-width: 600px; margin: 40px auto; padding: 40px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
    
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 32px; padding-bottom: 32px; border-bottom: 1px solid #eee;">
      <h1 style="margin: 0; color: #1a1a1a; font-size: 28px; font-weight: 600;">New Inquiry Request</h1>
      <p style="margin: 8px 0 0; color: #666; font-size: 16px;">A new customer inquiry has been received</p>
    </div>

    <!-- Customer Details -->
    <div style="margin-bottom: 32px;">
      <h2 style="margin: 0 0 20px; color: #1a1a1a; font-size: 20px; font-weight: 500;">Customer Information</h2>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #f0f0f0;">
          <td style="padding: 12px 0; color: #666; font-size: 14px; width: 140px;">Name</td>
          <td style="padding: 12px 0; color: #1a1a1a; font-size: 14px;">${req.body.name}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f0f0f0;">
          <td style="padding: 12px 0; color: #666; font-size: 14px;">Email</td>
          <td style="padding: 12px 0; color: #1a1a1a; font-size: 14px;">${req.body.email}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f0f0f0;">
          <td style="padding: 12px 0; color: #666; font-size: 14px;">Phone</td>
          <td style="padding: 12px 0; color: #1a1a1a; font-size: 14px;">${req.body.phone}</td>
        </tr>
      </table>
    </div>

    <!-- Order Details -->
    <div style="margin-bottom: 32px;">
      <h2 style="margin: 0 0 20px; color: #1a1a1a; font-size: 20px; font-weight: 500;">Order Details</h2>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #f0f0f0;">
          <td style="padding: 12px 0; color: #666; font-size: 14px; width: 140px;">Date</td>
          <td style="padding: 12px 0; color: #1a1a1a; font-size: 14px;">${req.body.parseDate}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f0f0f0;">
          <td style="padding: 12px 0; color: #666; font-size: 14px;">Number of People</td>
          <td style="padding: 12px 0; color: #1a1a1a; font-size: 14px;">${req.body.numberPeople}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f0f0f0;">
          <td style="padding: 12px 0; color: #666; font-size: 14px;">Delivery Option</td>
          <td style="padding: 12px 0; color: #1a1a1a; font-size: 14px;">${req.body.options}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f0f0f0;">
          <td style="padding: 12px 0; color: #666; font-size: 14px;">Food Items</td>
          <td style="padding: 12px 0; color: #1a1a1a; font-size: 14px;">${req.body.checkedItems}</td>
        </tr>
      </table>
    </div>

    <!-- Additional Message -->
    <div style="margin-bottom: 32px; padding: 24px; background-color: #f8f9fa; border-radius: 8px;">
      <h2 style="margin: 0 0 16px; color: #1a1a1a; font-size: 20px; font-weight: 500;">Additional Message</h2>
      <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.6;">${req.body.message}</p>
    </div>

    <!-- Action Button -->
    <div style="text-align: center;">
      <a href="mailto:${req.body.email}" style="display: inline-block; padding: 12px 32px; background-color: #2563eb; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 500; border-radius: 6px;">Reply to Inquiry</a>
    </div>

    <!-- Footer -->
    <div style="margin-top: 32px; padding-top: 32px; border-top: 1px solid #eee; text-align: center;">
      <p style="margin: 0; color: #666; font-size: 14px;">This is an automated email notification.</p>
    </div>
  </div>
</body>
</html>
      `,
         };

         await transporter.sendMail(mailData);

         return res.status(200).json({ success: true });
      }
   } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, error: "Error sending email" });
   }
   return res.status(400).json({ message: "Bad Request" });
}
