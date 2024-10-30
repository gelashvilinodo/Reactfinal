import { useEffect } from "react";
import Info from "./Info";
import { getUser } from "../cvReducer";
import { useDispatch } from "react-redux";

function Information(info) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const { number, email, address } = info;

  if (!number && !email && !address) {
    return null;
  }

  return (
    <>
      <Info text={number} icon={"call"} />
      <Info text={email} icon={"email"} />
      <Info text={address} icon={"pin_drop"} />
    </>
  );
}

export default Information;
