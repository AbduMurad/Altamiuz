// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <div className="contact-us" id="contact-us">
        <h1 className="section__heading">تواصل معنا</h1>
        <form className="form" name="contact-form" acceptCharset="utf-8" action="https://formspree.io/f/moqpnorj" method="post">
            <div className="form-group">
              <label htmlFor="name" className="label">الاسم</label>
              <input type="text" name="name" id="name" placeholder="الاسم واللقب(اختياري)" className="input" required />
            </div>
            <div className="form-group">
            <label htmlFor="email-address" className="label">البريد الالكتروني</label>
            <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" className="input" required />
            </div>
            <div className="form-group">
            <label htmlFor="message" className="label">كيف يمكننا العمل معا؟</label>
            <textarea rows={5} name="message" id="message" className="input" required defaultValue={""} />
            </div>
            <input type="hidden" name="_subject" id="email-subject" defaultValue="Contact Form Submission" />
          <input type="submit" value="إرسال" className="btn form-btn" />
        </form>
    </div>
  )
}

export default ContactUs