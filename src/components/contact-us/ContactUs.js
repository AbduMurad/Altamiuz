import React from "react"
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <div className="contact-us" id="contact-us">
      <h1 className="section__heading">تواصل معنا</h1>
      <form
        className="form"
        name="contact-form"
        acceptCharset="utf-8"
        action="https://formspree.io/f/mqkggkzl"
        method="post"
      >
        <div className="form-group">
          <label htmlFor="name" className="label">
            الاسم
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="الاسم واللقب"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email-address" className="label">
            البريد الالكتروني
          </label>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="email@domain.tld"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="label">
            كيف يمكننا العمل معا؟
          </label>
          <textarea
            rows={5}
            name="message"
            id="message"
            className="input"
            required
            defaultValue={""}
          />
        </div>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          defaultValue="Contact Form Submission"
        />
        <input type="submit" value="إرسال" className="btn form-btn" />
      </form>
    </div>
  )
}

export default ContactUs
