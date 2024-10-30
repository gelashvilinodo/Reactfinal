import { useEffect } from "react";
import { getExperience } from "../cvReducer";
import { useSelector, useDispatch } from "react-redux";

function Experience() {
  const title = "Experience";
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cv.data.experience);

  useEffect(() => {
    dispatch(getExperience());
  }, [dispatch]);

  return (
    <div className="experience_container">
      <h2>{title}</h2>
      <div>
        {data &&
          data.map((exp) => (
            <div key={exp.id} className="ind_exp_cont">
              <h4 className="comp_name">{exp.company}</h4>
              <h5 className="position">{exp.position}</h5>
              <div className="work_date">
                <p>
                  {exp.start_date}-{exp.end_date}
                </p>
              </div>
              <p className="role">{exp.position_requirement}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Experience;
