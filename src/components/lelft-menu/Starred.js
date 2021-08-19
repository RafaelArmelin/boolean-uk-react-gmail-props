function Stared(props) {
  console.log("inside Stared: ", props);
  return (
    <li
      className={`item ${props.currentTab === "starred" ? "active" : ""}`}
      onClick={() => setCurrentTab("starred")}
    >
      <span className="label">Starred</span>
      <span className="count">{props.starredEmails.length}</span>
    </li>
  );
}
export default Stared;
