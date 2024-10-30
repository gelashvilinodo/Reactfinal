import { useEffect } from "react";
import { getLanguages } from "../cvReducer";
import { useSelector, useDispatch } from "react-redux";

function Language() {
  const title = "Languages";
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cv.data.languages);

  useEffect(() => {
    dispatch(getLanguages());
  }, [dispatch]);

  return (
    <div className="industry_language_container">
      <h3>{title}</h3>
      <ul>
        {Object.values(data).map((data) => (
          <li key={data.id} className="industry_language_text">
            <span className="material-symbols-outlined industry_circle">
              radio_button_checked
            </span>
            {data.language}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Language;
