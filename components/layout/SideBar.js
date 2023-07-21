import { Fragment, useRef, useState } from "react";
import { sideBarToggle, useForm } from "../../utils/utils";
import emailjs from '@emailjs/browser';

const SideBar = ({ tsendmessage, tname, temailaddress, tphonenumber, twritemessage, tsave, tsending, tsended }) => {
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setloading(true)
    setsended(false)
    emailjs.sendForm('service_p2fa4l6', 'template_byunur9', form.current, 'kryEfXk-3H4o3RxFL')
      .then((result) => {
          console.log(result.text);
          reset();
          setsended(true)
      }, (error) => {
          console.log(error.text);
          reset();
          setsended(false)
      });
      setloading(false);
  };
  
  
  const initialForm = {
    name: '',
    email: '',
    number: '',
    message: '',
  }
  const [values, handleInputChange, reset] = useForm(initialForm);
  const { name, email, number, message } = values;
  const [loading, setloading] = useState(false);
  const [sended, setsended] = useState(false);


  return (
    <Fragment>
      {/*Form Back Drop*/}
      <div className="form-back-drop" onClick={() => sideBarToggle()} />
      {/* Hidden Sidebar */}
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon" onClick={() => sideBarToggle()}>
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>{tsendmessage}</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <input
                  type="text"
                  id="full-name"
                  name="name"
                  className="form-control"
                  placeholder={tname}
                  required
                  value={name}
                  onChange={handleInputChange}
                />

              </div>
              <div className="form-group">
    
                <input
                  type="email"
                  id="blog-email"
                  name="email"
                  className="form-control"
                  placeholder={temailaddress}
                  required
                  value={email}
                  onChange={handleInputChange}
                />

              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="phone"
                  name="number"
                  className="form-control"
                  placeholder={tphonenumber}
                  required
                  value={number}
                  onChange={handleInputChange}
                />

              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows={5}
                  placeholder={twritemessage}
                  required
                  value={message}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  {tsave}
                </button>
                {loading ? <h5 className="mt-2 text-white">{tsending}</h5> : ""}
                {sended ? <h5 className="mt-2 text-white">{tsended}</h5> : ""}
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default SideBar;
