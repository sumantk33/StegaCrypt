import React from "react";
import Alert from "../components/Alert";
import logo from "../assets/base.jpg";

import "./styles/EnCompleteScreen.css";

const EnCompleteScreen = () => {
  return (
    <div className="formJumbo">
      <h1 className="display-4">Done!!</h1>
      <h1 class="display-4">Fail!!</h1>
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
        <div class="form-group msg">
          <label for="EncryptedMessage">Entered Message:-</label>
          <input type="text" class="form-control" value="{{msg}}" />
        </div>
        <div class="form-group enMessage">
          <label for="Key">Encrypted Message:-</label>
          <input type="text" class="form-control" value="{{key}}" />
        </div>
        <label for="Download image">Download the encoded image:-</label>
        <small id="ImageInfo" class="form-text text-muted">
          Encoded image is displayed below. The image may be distorted due to
          the browser dimensions. Original dimensions will be maintained after
          downloading the image.
        </small>
        <br></br>
        <img src={logo} width="100%" height="50%" />
      </div>
    </div>
  );
};

export default EnCompleteScreen;
