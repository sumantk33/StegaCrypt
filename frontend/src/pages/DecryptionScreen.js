import React, { useState } from "react";
import { Radio, RadioGroup } from "react-radio-group";
import "./styles/DecryptionScreen.css";

const DecryptionScreen = () => {
  const [isCustom, setIsCustom] = useState(false);
  const [key, setKey] = useState("");

  const handle = () => {};

  return (
    <div className="formJumbo">
      <h1 className="display-4">Decryption</h1>
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
          <label>Upload the image:-</label>
          <input
            type="file"
            className="form-control-file"
            id="fileUpload"
            name="file"
            accept="image/*"
            required
          />
          <small className="form-text text-muted">
            Image in which data needs to be encoded.
          </small>
          <br></br>
          <div style={{ textAlign: "center" }}>
            <input
              className="btn btn-primary button"
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

export default DecryptionScreen;
