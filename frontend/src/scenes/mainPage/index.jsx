import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        return navigate("/login");
      }}
    >
      login
    </button>
  );
};

export default MainPage;
