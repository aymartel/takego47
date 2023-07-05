import axios from "axios";
import { useState } from "react";
import { useForm } from "utils/utils";

const FormContactIndex = ({ tsendmessage, tname, temailaddress, tphonenumber, twritemessage, tsave, tsending, tsended }) => {


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


  const handleSubmit = async (event) => {
    event.preventDefault();
    setloading(true)
    try {

      await axios.post('/api/send-email', JSON.stringify({ name, email, number, message }), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(function (response) {
          console.log(response);
          setsended(true)
        })

    } catch (error) {
      console.error(error);
      setsended(false)
    }
    reset();
    setloading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="contact-area-form"
      className="contact-area-form text-center wow fadeInRight delay-0-1s"
      name="contact-area-form"
    >
      <h4>{tsendmessage}</h4>
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
      <input
        type="number"
        id="phone"
        name="number"
        className="form-control"
        placeholder={tphonenumber}
        required
        value={number}
        onChange={handleInputChange}
      />
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
      <button type="submit" className="theme-btn">
        {tsave} <i className="fas fa-angle-double-right" />
      </button>
      {loading ? <h5 className="mt-2">{tsending}</h5> : ""}
      {sended ? <h5 className="mt-2">{tsended}</h5> : ""}
    </form>
  );
};
export default FormContactIndex;
