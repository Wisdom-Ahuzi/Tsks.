import { React, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import Collects from "./Collects";

const School = ({ logout, handleClose, closeId, extendId, side }) => {
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (!authToken) {
      navigate("/SignIn");
    }
  }, []);

  return (
    <div className="School" id={extendId}>
      <Header logout={logout} handleClose={handleClose} />
      <Sidebar closeId={closeId} side={side} />
      <Collects
        title={"School"}
        General={"SchoolGeneral"}
        Completed={"SchoolCompleted"}
      />
    </div>
  );
};

export default School;
