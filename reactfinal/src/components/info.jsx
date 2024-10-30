function Info({ icon = "", text = "", list = [] }) {
  if (!icon && !text && Object.keys(list).length === 0) {
    return null;
  }

  return (
    <div>
      <ul className="contact_info">
        {<span className="material-symbols-outlined">{icon}</span>}
        {<span>{text}</span>}
        {Object.values(list).map((info) => (
          <li key={info.id} className="contact_list">
            <span className="material-symbols-outlined">{icon}</span>
            <h4>{text}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Info;
