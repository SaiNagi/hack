import "./index.css";

const TabItem = (props) => {
  const { clickTabItem, isActive, tabDetails } = props;
  const { tabId, displayText } = tabDetails;
  const onClickTabItem = () => {
    clickTabItem(tabId);
  };

  const activeTabBtnClassName = isActive ? "active-tab-btn" : "";

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        <img
          src={`../Asserts/Logos/Logos/${displayText}.png`}
          alt={displayText}
        />

        <p>{displayText}</p>
      </button>
    </li>
  );
};

export default TabItem;
