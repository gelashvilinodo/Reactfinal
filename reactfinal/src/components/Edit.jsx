import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUser } from "../cvReducer";

function Edit() {
  let { user } = useParams();
  const data = useSelector((state) => state.cv.data.user);
  const [data2, setData2] = useState({
    id: "",
    name: "",
    surname: "",
    email: "",
    number: "",
    address: "",
    profession: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, user]);

  useEffect(() => {
    if (data) {
      setData2({
        id: data.id || "",
        name: data.name || "",
        surname: data.surname || "",
        email: data.email || "",
        number: data.number || "",
        address: data.address || "",
        profession: data.profession || "",
      });
    }
  }, [data]);

  function handleChange(e) {
    const { name, value } = e.target;
    setData2({ ...data2, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(setUser(data2));
  }

  return (
    <div className="form_container">
      <h1 className="form_title">Edit CV Page For {user}</h1>
      <form onSubmit={handleSubmit} className="form_edit">
        <input type="hidden" name="id" value={data2.id || ""} />
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={data2.name || ""}
          />
        </div>
        <div>
          <label htmlFor="surname">LastName</label>
          <input
            type="text"
            name="surname"
            id="surname"
            onChange={handleChange}
            value={data2.surname || ""}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            value={data2.email || ""}
          />
        </div>
        <div>
          <label htmlFor="number">number</label>
          <input
            type="text"
            name="number"
            id="number"
            onChange={handleChange}
            value={data2.number || ""}
          />
        </div>
        <div>
          <label htmlFor="address">address</label>
          <input
            type="text"
            name="address"
            id="address"
            onChange={handleChange}
            value={data2.address || ""}
          />
        </div>
        <div>
          <label htmlFor="profession">profession</label>
          <input
            type="text"
            name="profession"
            id="profession"
            onChange={handleChange}
            value={data2.profession || ""}
          />
        </div>
        <button type="submit" className="submit_btn">
          SAVE CHANGES
        </button>
      </form>
    </div>
  );
}

export default Edit;
