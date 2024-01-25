import { Component } from "react";
import "./index.css";

class CreateAccount extends Component {
  state = {
    searchInput: "",
  };

  onChangeSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const { searchInput } = this.state;
    return (
      <div className="main-cont1">
        <div className="inner">
          <form action="">
            <h3>Registration Form</h3>
            <div className="form-group">
              <div className="form-wrapper">
                <label for="">First Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-wrapper">
                <label for="">Last Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-wrapper">
              <label for="">Email</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-wrapper">
              <label for="">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-wrapper">
              <label for="">Confirm Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" /> I caccept the Terms of Use &amp;
                Privacy Policy.
                <span className="checkmark"></span>
              </label>
            </div>
            <button>Register Now</button>
          </form>
          <div>
            <img src="https://media.istockphoto.com/id/1190200183/photo/beautiful-cheerful-couple-bumping-fists-isolated-on-red.jpg?s=612x612&w=0&k=20&c=_TyxkjaJ2eGuUdfscl1_ttCSTUh9q3XAeUahd2xa8yA=" />
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAccount;
