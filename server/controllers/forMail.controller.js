import asyncHandler from "express-async-handler";
import contactMail from "../mailer/contact.mailer.js";
import enquiryMail from "../mailer/enquiry.mailer.js";
import Contact from "../model/contact.model.js";
import Enquiry from "../model/enquiry.model.js";

/**
 * @description api to send email if anyone contact
 * @route POST /contact
 * @public
 *
 */
 export const contactAdmin = asyncHandler(async (req, res) => {
    const { name, email, company, country, city, query } = req.body;
  
    const newContact = {
      name: name,
      email: email,
      conpany: company,
      country: country,
      city: city,
      query: query,
    };
  
    const contact = new Contact(newContact);
    try {
      await contact.save();
        //Send mail
        contactMail(newContact);

      res.status(201).json(contact);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  });




  /**
 * @description api to send email if anyone has any enquiry for instruments
 * @route POST /enquiry
 * @public
 *
 */
 export const enquireAdmin = asyncHandler(async (req, res) => {
    const { name, email, company, country, city, specification, instrumentName } = req.body;
  
    const newEnquiry = {
      name: name,
      email: email,
      company: company,
      country: country,
      city: city,
      specification: specification,
      instrumentName: instrumentName
    };
  
    const enquiry = new Enquiry(newEnquiry);
    try {
      await enquiry.save();
      //send mail
      enquiryMail(newEnquiry);
      res.status(201).json(enquiry);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  });