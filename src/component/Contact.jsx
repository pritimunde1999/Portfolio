import React from 'react'


const Contact = () => {
  return (
    <section className="contact" >
    <h2 className="heading font-bold">Contact <span>Me!</span></h2>

    <form action="https://formspree.io/f/maygrzza" method="POST">
        <div className="input-box">
          <input required type="text" name="fullName" placeholder="Full Name" />
          <input required type="email" name="_replyto" placeholder="Email Address" />
        </div>
        <div className="input-box">
          <input type="tel" name="phoneNumber" placeholder="Mobile Number" />
          <input type="text" name="emailSubject" placeholder="Email Subject" />
        </div>
        <textarea required name="message" id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>

    
</section>
  )
}

export default Contact