import { useEffect } from "react";
import { getIndustry } from "../cvReducer";
import { useDispatch, useSelector } from "react-redux";

function Industry() {
  const title = "Industry Knowledge";
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cv.data.industry);

  useEffect(() => {
    dispatch(getIndustry());
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
            {data.industry_knowledge}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Industry;
