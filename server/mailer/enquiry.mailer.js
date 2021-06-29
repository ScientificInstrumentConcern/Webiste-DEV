import sgMail from "@sendgrid/mail";

const enquiryMail = (user) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log(process.env.SENDGRID_API_KEY);

  const msg = {
    from: "prasundas115@gmail.com",
    to: "prasun.4.das@gmail.com",
    subject: "Someone wants to contact you from SINCON",
    html: `<h4> The contact details is as below: </h4>
    
    `,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Successfully sent Email");
    })
    .catch((error) => {
      console.error(error);
    });
};

export default enquiryMail;
