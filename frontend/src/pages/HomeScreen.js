import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import "./styles/HomeScreen.css";

const HomeScreen = () => {
  return (
    <Jumbotron className="jumbotron">
      <h1>
        Send the message,<br></br>safe and sound.
      </h1>
      <br></br>
      <p>
        Avoid any third party accessing your information by encoding <br></br>{" "}
        your message in an image.
      </p>
      <br></br>
      <Link to="/encryption">
        <button type="button" class="btn btn-primary btn-lg button1">
          Encryption
        </button>
      </Link>
      <Link to="/decryption">
        <button type="button" class="btn btn-primary btn-lg button2">
          Decryption
        </button>
      </Link>
    </Jumbotron>
  );
};

export default HomeScreen;
