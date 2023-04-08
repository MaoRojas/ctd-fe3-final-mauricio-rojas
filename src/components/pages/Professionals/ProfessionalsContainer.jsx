import axios from "axios";
import React, { useContext, useEffect } from "react";
import { DataContext } from "../../../context/DataContext/DataContext";
import Professionals from "./Professionals";

const ProfessionalsContainer = () => {
  const { state, dispatch } = useContext(DataContext);

  useEffect(() => {
    const getProfesionals = axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    getProfesionals
      .then((res) => dispatch({ type: "GET_USERS", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  console.log(state.users);

  return (
    <div style={{ fontSize: "1.5rem", textAlign: "center", margin: "50px" }}>
      <h2>Dental Professionals</h2>
      <br />
      <br />
      <Professionals
        users={state.users}
        dispatch={dispatch}
        favs={state.favs}
      />
    </div>
  );
};

export default ProfessionalsContainer;
