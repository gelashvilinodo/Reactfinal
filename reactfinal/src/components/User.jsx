function User({ name, surname, profession }) {
  return (
    <div className="user_container">
      <div className="user_picture_div">
        <img src="" alt="" />
      </div>
      <div className="name_lastname">
        <h4 className="user_name">{name}</h4>
        <h2 className="user_lastname">{surname}</h2>
        <p className="user_proffesion">{profession}</p>
      </div>
    </div>
  );
}

export default User;
