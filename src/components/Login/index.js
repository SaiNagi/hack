import { Component } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

import "./index.css";

class Login extends Component {
  onChangeSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    return (
      <div className="main-cont">
        <h1 className="login-cont-m-headning">Share Right Now!</h1>
        <br />
        <div className="btn-cont">
          <button type="button" className="login-btn">
            <div className="login-cont">
              <FcGoogle className="google-icon" />
              <p className="google-text">Continue with Google</p>
            </div>
          </button>
          <button type="button" className="login-btn">
            <div className="login-cont">
              <FaFacebookSquare className="google-icon icon1" />
              <p className="google-text">Continue with Google</p>
            </div>
          </button>
          <button type="button" className="login-btn">
            <div className="login-cont">
              <FaApple className="google-icon icon2" />
              <p className="google-text">Continue with Google</p>
            </div>
          </button>

          <hr class="hr-line" />

          <button type="button" className="login-btn create-btn">
            Create Account
          </button>
        </div>
        <div className="footer">
          <input type="checkbox" className="check-box" />
          <p className="footer-text">
            By signing up, you agree to the Terms of service and Privacy Policy
            , including Cookie Use
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
