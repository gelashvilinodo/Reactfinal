import { useEffect } from "react";
import { getEducation } from "../cvReducer";
import { useSelector, useDispatch } from "react-redux";

function Education() {
  const title = "Education";
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cv.data.education);

  useEffect(() => {
    dispatch(getEducation());
  }, [dispatch]);

  return (
    <div className="education_container">
      <h2>{title}</h2>
      {data &&
        data.map((edu) => (
          <div key={edu.id} className="ind_education">
            <h3 className="faculty">{edu.faculty}</h3>
            <h4 className="university">{edu.university}</h4>
            <p className="edu_dates">
              {edu.start_date}-{edu.end_date}, {edu.university_location}
            </p>
          </div>
        ))}
    </div>
  );
}

export default Education;
