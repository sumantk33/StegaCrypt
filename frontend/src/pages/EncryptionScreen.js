import React, { useState } from "react";
import axios from "axios";
import { Radio, RadioGroup } from "react-radio-group";

import "./styles/EncryptionScreen.css";

const EncryptionScreen = () => {
  const [isCustom, setIsCustom] = useState(false);
  const [message, setMessage] = useState("");
  const [key, setKey] = useState("");

  const uploadImageHandler = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function (e) {
      var image = new Image();
      image.src = e.target.result;

      image.onload = function () {
        var height = this.height;
        var width = this.width;
        var alert = document.getElementById("alert");
        if ((height * width) / 3 < message.length) {
          alert.style.display = "block";
        } else {
          alert.style.display = "none";
        }
      };
    };
  };

  const handle = async () => {
    console.log(message);
  };

  return (
    <div className="formJumbo">
      <h1 className="display-4">Encryption</h1>
      <div className="holder">
        <div className="keys">
          <label style={{ paddingRight: "1em" }}>Key:- </label>
          <RadioGroup name="fruits" className="radioButtons">
            <div className="radio-button-background">
              <Radio
                value="default"
                className="radio-button"
                onChange={(e) => setIsCustom(false)}
              />
              Default Key
            </div>
            <div className="radio-button-background">
              <Radio
                value="custom"
                className="radio-button"
                onChange={(e) => setIsCustom(true)}
              />
              Custom Key
            </div>
          </RadioGroup>
        </div>
        {isCustom ? (
          <div className="form-group" id="dvtext">
            <input
              type="text"
              className="form-control"
              name="Key"
              aria-describedby="emailHelp"
              placeholder="Enter Key"
              onChange={(e) => setKey(e.target.value)}
            />
            <small id="KeyHelp" className="form-text text-muted">
              Enter personal key for encryption(<b>Caution:</b>
              Key is case-sensitive and needs to be entered in decryption
              phase).
            </small>
          </div>
        ) : (
          <></>
        )}
        <div className="form-group">
          <label>Enter the message:-</label>
          <textarea
            className="form-control"
            id="text1"
            name="content"
            rows="4"
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Upload the image:-</label>
          <input
            type="file"
            className="form-control-file"
            id="fileUpload"
            name="file"
            accept="image/*"
            onChange={uploadImageHandler}
            required
          />
          <small className="form-text text-muted">
            Image in which data needs to be encoded.
          </small>
          <br></br>
          <div
            className="alert alert-danger"
            role="alert"
            id="alert"
            style={{ display: "none" }}
          >
            Text is too lengthy to be encoded. Please choose a higher resolution
            image.
          </div>
          <div style={{ textAlign: "center" }}>
            <input
              className="btn btn-primary"
              type="submit"
              value="Submit"
              onClick={handle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EncryptionScreen;
