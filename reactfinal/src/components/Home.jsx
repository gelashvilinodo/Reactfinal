import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../cvReducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import User from "./User";
import Information from "./Information";
import Industry from "./Idustry";
import Language from "./Language";
import Experience from "./Experience";
import Education from "./Education";

function Home() {
  let user = useParams();
  const data = useSelector((state) => state.cv.data.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(user));
  }, [dispatch, user]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="left_column">
        <User {...data[0]} />
        <Information {...data[0]} />
        <Industry />
        <Language />
      </div>
      <div className="right_column">
        <Experience />
        <Education />
      </div>
    </>
  );
}

export default Home;
