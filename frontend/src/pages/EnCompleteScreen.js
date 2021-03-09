import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Alert from "../components/Alert";
import logo from "../assets/base.jpg";

import "./styles/EnCompleteScreen.css";

const EnCompleteScreen = () => {
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");
  const location = useLocation();

  const fetchImage = async (name) => {
    const res = await axios.get(`/getImage/${name}`);
    console.log(res);
  };

  useEffect(() => {
    fetchImage(location.state.name);
    setMessage(location.state.message);
    setText(location.state.encryptedText);
  }, [location]);

  return (
    <div className="formJumbo">
      <h1 className="display-4">Done!!</h1> *
      <h1 className="display-4">Fail!!</h1>
      <div className="holder">
        <Alert
          status="success"
          text="The message was successfully encrypted and encoded in the message. You
          can download the image below"
        />
        <Alert
          status="fail"
          text="The process could not be completed. Please check the information once again and try."
        />
        <div className="form-group msg">
          <label htmlFor="EncryptedMessage">Entered Message:-</label>
          <input type="text" className="form-control" value={message} />
        </div>
        <div className="form-group enMessage">
          <label htmlFor="Key">Encrypted Message:-</label>
          <input type="text" className="form-control" value={text} />
        </div>
        <label htmlFor="Download image">Download the encoded image:-</label>
        <small id="ImageInfo" className="form-text text-muted">
          Encoded image is displayed below. The image may be distorted due to
          the browser dimensions. Original dimensions will be maintained after
          downloading the image.
        </small>
        <br></br>
        <img src={logo} width="100%" height="100%" alt="After Processing" />
        <div className="button_div">
          <a href="" download="encoded_img.png">
            <button type="button" className="btn btn-info button">
              Download
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EnCompleteScreen;
