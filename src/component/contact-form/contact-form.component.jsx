import "./contact-form.style.scss";
const ContactForm = () => {
  return (
    <div className="fcf-body">
      <div id="fcf-form">
        <h3 className="fcf-h3">Contact us</h3>

        <form
          id="fcf-form-id"
          className="fcf-form-className"
          method="post"
          action="contact-form-process.php"
        >
          <div className="fcf-form-group">
            <label for="Name" className="fcf-label">
              Your name
            </label>
            <div className="fcf-input-group">
              <input
                type="text"
                id="Name"
                name="Name"
                className="fcf-form-control"
                required
              />
            </div>
          </div>

          <div className="fcf-form-group">
            <label for="Email" className="fcf-label">
              Your email address
            </label>
            <div className="fcf-input-group">
              <input
                type="email"
                id="Email"
                name="Email"
                className="fcf-form-control"
                required
              />
            </div>
          </div>

          <div className="fcf-form-group">
            <label for="Message" className="fcf-label">
              Your message
            </label>
            <div className="fcf-input-group">
              <textarea
                id="Message"
                name="Message"
                className="fcf-form-control"
                rows="6"
                maxlength="3000"
                required
              ></textarea>
            </div>
          </div>

          <div className="fcf-form-group">
            <button
              type="submit"
              id="fcf-button"
              className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block"
            >
              Send Message
            </button>
          </div>

          {/* <div className="fcf-credit" id="fcf-credit">
            Simple HTML email form provided by{" "}
            <a href="https://www.majesticform.com" target="_blank">
              MajesticForm
            </a>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
