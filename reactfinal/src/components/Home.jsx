import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../cvReducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import User from "./User";

function Home() {
  let user = useParams();
  console.log(user);

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
        <User {...data} />
      </div>
      <div className="right_column"></div>
    </>
  );
}

export default Home;
