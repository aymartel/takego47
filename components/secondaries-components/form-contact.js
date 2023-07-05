import axios from "axios";
import { useState } from "react";
import { useRef } from 'react';
import { useForm } from "utils/utils";

const FormContact = () => {
  const MAX_COUNT = 5;
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [fileLimit, setFileLimit] = useState(false);
  const inputFileRef = useRef(null);

  const handleUploadFiles = files => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          alert(`You can only add a maximum of ${MAX_COUNT} files`);
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    })
    if (!limitExceeded) setUploadedFiles(uploaded)

  }

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files)
    handleUploadFiles(chosenFiles);
  }

  const initialForm = {
    name: '',
    email: '',
    message: '',
  }
  const [values, handleInputChange, reset] = useForm(initialForm);
  const { name, email, message } = values;
  const [loading, setloading] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setloading(true)
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      uploadedFiles.forEach((file, index) => {
        formData.append(`documentos[${index}]`, file);
      });

      await axios.post('/api/send-email', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(function (response) {
          formData.set('files', null);
          console.log(response);
        })

    } catch (error) {
      console.error(error);
    }
    setUploadedFiles([]);

    reset();
    inputFileRef.current.value = null;
    setloading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="contactForm"
      className="contactForm z-1 rel"
    >
      <div className="row pt-15">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Michael C. Coleman"
              required
              data-error="Please enter your name"
              value={name}
              onChange={handleInputChange}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="support@gmail.com"
              required
              data-error="Please enter your Email"
              value={email}
              onChange={handleInputChange}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="phone_number">Phone Number</label>
            <input
              type="text"
              id="phone_number"
              name="phone_number"
              className="form-control"
              placeholder="+000 (123) 456 88"
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="select_subject">
              Select Requirments
            </label>
            <select name="select_subject" id="select_subject" defaultValue={'default'}>
              <option value="default" >
                Website customize
              </option>
              <option value="Design">Design</option>
              <option value="Development">Development</option>
              <option value="SEO">SEO</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="atachment">Add Document</label>
            <input id='fileUpload' type='file' className="form-control" multiple
              ref={inputFileRef}
              onChange={handleFileEvent}
              disabled={fileLimit}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="message">Write Message</label>
            <textarea
              name="message"
              id="message"
              className="form-control"
              rows={4}
              placeholder="Write Message"
              required=""
              data-error="Please enter your Message"
              value={message}
              onChange={handleInputChange}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group pt-5 mb-0">
            <button type="submit" className="theme-btn w-100">
              Send Message{" "}
              <i className="fas fa-angle-double-right" />
            </button>
            {loading ? "Loading..." : null}
            <div id="msgSubmit" className="hidden" />
          </div>
        </div>
      </div>
    </form>
  );
};
export default FormContact;
