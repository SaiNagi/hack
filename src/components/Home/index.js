import { Component } from "react";
import NavBar from "../NavBar";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import "./index.css";

class Home extends Component {
  state = { isLoggedIn: true };
  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="home-cont">
        <div>
          <NavBar />
        </div>
        <div className="home-cont-2">
          <div className="search-cont">
            <div className="home-input-cont">
              <input type="text" className="home-search" />
              <FaSearch />
            </div>
            <div>
              <MdAccountCircle className="account-icon" />
            </div>
          </div>

          <div className="home-cont-4">
            <h3 className="greetings">Hello, Tharun 👋</h3>

            <div className="home-cont-4-1">
              <h4>Track Subscriptions</h4>
              <div className="home-cont-4-1-iamges">
                <img src="..\Asserts\Logos\Logos\Spotify.png" alt="spotify" />
                <img src="..\Asserts\Logos\Logos\Netflix.png" alt="Netflix" />
                <img src="..\Asserts\Logos\Logos\aha.png" alt="Aha" />
                <img src="..\Asserts\Logos\Logos\Zee5.png" alt="Zee5" />
                <img src="..\Asserts\Logos\Logos\Youtube.png" alt="Youtube" />
              </div>
            </div>

            <div className="home-cont-4-1 home-cont-4-2">
              <div className="flex-cont-1">
                <img src="..\Asserts\Logos\Logos\Spotify.png" alt="spotify" />
                <div>
                  <h5>Spotify Family Premium - 1 month</h5>
                  <p>Expiring in 7 days</p>
                </div>
              </div>
              <FaPlus />
            </div>

            <div className="home-cont-4-1 home-cont-4-2">
              <div className="flex-cont-1">
                <img src="..\Asserts\Logos\Logos\Youtube.png" alt="spotify" />
                <div>
                  <h5>Youtube Family Premium - 1 month</h5>
                  <p>Expiring in 7 days</p>
                </div>
              </div>
              <FaPlus />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
