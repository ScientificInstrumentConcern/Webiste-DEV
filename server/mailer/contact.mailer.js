import sgMail from "@sendgrid/mail";

const contactMail = (user) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log(process.env.SENDGRID_API_KEY);

  const msg = {
    from: "prasundas115@gmail.com",
    to: "prasun.4.das@gmail.com",
    subject: "You Have a new Enquiry from SINCON",
    html: `<h2>Someone has placed an enquiry  on your site</h2>
    <p> The enquiry details is as below: </p>
    
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

export default contactMail;
