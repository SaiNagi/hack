import { Component } from "react";
import TabItem from "../TabItem";
import "./index.css";

const tabsList = [
  { tabId: "HOME", displayText: "Home" },
  { tabId: "EXPLORE", displayText: "Explore" },
  { tabId: "Groups", displayText: "Group" },
  { tabId: "Wallet", displayText: "Wallet" },
  { tabId: "Profile", displayText: "Profile" },
  { tabId: "Settings", displayText: "Settings" },
];

const tabsList1 = [
  { tabId: "SUPPORT", displayText: "Support" },
  { tabId: "Refer&Earn", displayText: "Refer&Earn" },
  { tabId: "Logout", displayText: "Logout" },
];

class NavBar extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  };

  clickTabItem = (tabValue) => {
    this.setState({ activeTabId: tabValue });
  };

  onChangeSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const { activeTabId } = this.state;
    return (
      <div className="nav-bar">
        <div className="logo-cont">
          <img src="..\Asserts\Logos\Logos\logo.png" alt="logo" />
          <h2>ShareWave</h2>
        </div>

        <div className="nav-tab-item-container">
          <div>
            <ul className="tabs-container">
              {tabsList.map((tabDetails) => (
                <TabItem
                  key={tabDetails.tabId}
                  clickTabItem={this.clickTabItem}
                  tabDetails={tabDetails}
                  isActive={activeTabId === tabDetails.tabId}
                />
              ))}
            </ul>
          </div>

          <div>
            <ul className="tabs-container">
              {tabsList1.map((tabDetails) => (
                <TabItem
                  key={tabDetails.tabId}
                  clickTabItem={this.clickTabItem}
                  tabDetails={tabDetails}
                  isActive={activeTabId === tabDetails.tabId}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
