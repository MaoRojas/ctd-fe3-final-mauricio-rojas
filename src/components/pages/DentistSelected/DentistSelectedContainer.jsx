import { useParams } from "react-router-dom";
import axios from "axios";
import DentistSelected from "./DentistSelected";
import { DataContext } from "../../../context/DataContext/DataContext";
import { useContext, useEffect } from "react";

const DentistSelectedContainer = () => {
  const { dispatch } = useContext(DataContext);
  const { id } = useParams();

  useEffect(() => {
    const getUser = axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    getUser.then((res) => dispatch({ type: "GET_USER", payload: res.data }));
  }, []);

  return (
    <div>
      <DentistSelected />
    </div>
  );
};

export default DentistSelectedContainer;
