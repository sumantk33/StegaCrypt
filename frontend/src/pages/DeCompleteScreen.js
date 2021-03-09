import React from "react";
import Alert from "../components/Alert";

const DeCompleteScreen = () => {
  return (
    <div className="formJumbo">
      <h1 className="display-4">Done!!</h1> <br />
      <h1 class="display-4">Fail!!</h1>
      <div className="holder">
        <Alert
          status="success"
          text="The message was successfully decrypted."
        />
        <Alert
          status="fail"
          text="The process could not be completed. Check the information once again."
        />
        <div class="form-group">
          <label for="EncryptedMessage">Decrypted Message:-</label>
          <textarea class="form-control" id="text1" rows="8"></textarea>
        </div>
      </div>
    </div>
  );
};

export default DeCompleteScreen;
